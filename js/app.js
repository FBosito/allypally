'use strict';

(() => {
  const cfg = window.ALLYPALLY;
  const $ = (sel) => document.querySelector(sel);
  const get = (path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), cfg);

  // Kleiner DOM-Helfer: h('div', {class: 'x'}, 'Text', child, ...)
  const h = (tag, attrs = {}, ...children) => {
    const node = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (v == null || v === false) return;
      if (k === 'class') node.className = v;
      else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
      else node.setAttribute(k, v === true ? '' : v);
    });
    children.flat().forEach((c) => c != null && c !== false && node.append(c));
    return node;
  };

  // ---------- Texte einsetzen ----------
  document.querySelectorAll('[data-bind]').forEach((el) => {
    el.textContent = get(el.dataset.bind) ?? '';
  });

  const figure = (img) => h('figure', {},
    h('img', { src: img.src, alt: img.caption, loading: 'lazy', decoding: 'async' }),
    img.caption && h('figcaption', {}, img.caption));

  document.querySelectorAll('[data-img]').forEach((el) => {
    const img = cfg.images[el.dataset.img];
    if (!img) return el.remove();
    el.append(h('img', { src: img.src, alt: img.caption, loading: 'lazy', decoding: 'async' }),
      h('figcaption', {}, img.caption));
  });

  // ---------- Kacheln auf der Startseite ----------
  const tiles = [
    { href: '#/spieltage', icon: '🎯', title: 'Die drei Abende', sub: 'Viertelfinale, Halbfinale, Finale' },
    { href: '#/hotel', icon: '🏨', title: 'Unser Hotel', sub: 'Kings Cross · mit Frühstück' },
    { href: '#/karte', icon: '🗺️', title: 'Stadtplan', sub: 'Hotel & Ally Pally' },
    { href: '#/london', icon: '🎡', title: 'London bei Tag', sub: 'Deine Wunschliste' },
    cfg.travel && { href: '#/anreise', icon: '✈️', title: 'Anreise', sub: cfg.travel.title },
    { href: '#/packliste', icon: '🧳', title: 'Packliste', sub: 'Zum Abhaken', wide: !cfg.travel },
  ].filter(Boolean);
  $('#tiles').append(...tiles.map((t) => h('a', { class: `tile${t.wide ? ' wide' : ''}`, href: t.href },
    h('span', { class: 't-icon', 'aria-hidden': 'true' }, t.icon),
    h('span', {}, h('b', {}, t.title), h('br'), h('small', {}, t.sub)))));

  // ---------- Spieltage ----------
  const fmt = (iso, tz, opts) => new Intl.DateTimeFormat('de-AT', { timeZone: tz, ...opts }).format(new Date(iso));
  $('#sessions').append(...cfg.sessions.map((s) => h('article', { class: `card session${s.highlight ? ' highlight' : ''}` },
    s.img && cfg.images[s.img] && h('figure', { class: 's-img' },
      h('img', {
        src: cfg.images[s.img].src, alt: cfg.images[s.img].caption, loading: 'lazy', decoding: 'async',
        style: cfg.images[s.img].position ? `object-position:${cfg.images[s.img].position}` : null,
      }),
      h('figcaption', {}, cfg.images[s.img].caption)),
    s.highlight && h('span', { class: 's-badge', 'aria-hidden': 'true' }, '🏆'),
    h('div', { class: 's-date' }, fmt(s.start, 'Europe/London', { weekday: 'long', day: 'numeric', month: 'long' })),
    h('h3', {}, s.round),
    h('p', { class: 's-format' }, s.format),
    h('p', {}, s.text),
    h('div', { class: 's-times' },
      h('span', {}, `🇬🇧 ${fmt(s.start, 'Europe/London', { hour: '2-digit', minute: '2-digit' })} Uhr London`),
      h('span', {}, `🇦🇹 ${fmt(s.start, 'Europe/Vienna', { hour: '2-digit', minute: '2-digit' })} Uhr bei uns`)))));
  $('#allyTips').append(...cfg.allyTips.map((t) => h('li', {}, t)));

  // ---------- Hotel ----------
  $('#hotelMapsLink').href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${cfg.hotel.name}, ${cfg.hotel.address}`)}`;
  $('#hotelWebLink').href = cfg.hotel.website;
  $('#hotelPhotos').append(...cfg.hotel.photos.map(figure));
  $('#hoodPhotos').append(...['kingsCross', 'granary', 'stPancras'].map((k) => cfg.images[k]).filter(Boolean).map(figure));

  // ---------- Karte (Leaflet wird erst bei Bedarf geladen) ----------
  $('#legend').append(...cfg.places.map((p) => h('button', { type: 'button', 'data-place': p.id },
    h('span', { class: 'l-icon', 'aria-hidden': 'true' }, p.icon),
    h('span', {}, h('b', {}, p.name), h('small', {}, p.sub)))));
  $('#routes').append(...cfg.routes.map((r) => h('div', { class: 'card route' },
    h('h3', {}, r.title), h('ol', {}, r.steps.map((s) => h('li', {}, s))))));

  let map, markers = {};
  const loadLeaflet = () => new Promise((resolve, reject) => {
    if (window.L) return resolve();
    document.head.append(h('link', { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css' }));
    document.head.append(h('script', { src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', onload: resolve, onerror: reject }));
  });

  async function initMap() {
    if (map) { map.invalidateSize(); return; }
    try { await loadLeaflet(); } catch {
      $('#map').textContent = 'Die Karte konnte nicht geladen werden.';
      return;
    }
    map = L.map('map', { zoomControl: true, attributionControl: true });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    cfg.places.forEach((p) => {
      const icon = L.divIcon({
        className: '',
        html: `<div class="map-pin${p.id === 'ally' ? ' ally' : ''}"><span>${p.icon}</span></div>`,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -38],
      });
      markers[p.id] = L.marker([p.lat, p.lng], { icon }).addTo(map)
        .bindPopup(`<b>${p.name}</b><br>${p.sub}`);
    });

    // Schematische Route: Hotel → King's Cross → Bahnhof Alexandra Palace → Palace
    const pts = ['hotel', 'kx', 'apstation', 'ally']
      .map((id) => cfg.places.find((p) => p.id === id)).filter(Boolean).map((p) => [p.lat, p.lng]);
    L.polyline(pts, { color: '#C8102E', weight: 4, dashArray: '8 8', opacity: .85 }).addTo(map);

    map.fitBounds(L.latLngBounds(cfg.places.map((p) => [p.lat, p.lng])), { padding: [40, 40] });
  }

  $('#legend').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-place]');
    if (!btn || !map) return;
    const m = markers[btn.dataset.place];
    map.flyTo(m.getLatLng(), 16, { duration: .8 });
    m.openPopup();
    $('#karte').scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- London-Wunschliste ----------
  const WISH_KEY = 'allypally.london';
  const wished = new Set(JSON.parse(localStorage.getItem(WISH_KEY) || '[]'));
  const wishTotal = cfg.wishlist.reduce((n, g) => n + g.items.length, 0);
  const updateWish = () => {
    $('#wishCount').textContent = wished.size === 0
      ? `${wishTotal} Ideen – noch nichts ausgewählt`
      : `${wished.size} von ${wishTotal} ausgewählt`;
    localStorage.setItem(WISH_KEY, JSON.stringify([...wished]));
  };
  $('#wishlist').append(...cfg.wishlist.map((g) => h('section', { class: 'card wish-group' },
    h('h3', {}, g.group),
    h('ul', { class: 'checklist wish' }, g.items.map((it) => h('li', { 'data-checked': wished.has(it.id) || null },
      h('label', {},
        h('input', {
          type: 'checkbox',
          checked: wished.has(it.id),
          onchange: (e) => {
            e.target.checked ? wished.add(it.id) : wished.delete(it.id);
            e.target.closest('li').toggleAttribute('data-checked', e.target.checked);
            updateWish();
          },
        }),
        h('span', { class: 'w-icon', 'aria-hidden': 'true' }, it.icon),
        h('span', {}, h('b', {}, it.title), h('small', {}, it.text)))))))));
  $('#wishFilter').addEventListener('change', (e) => {
    $('#wishlist').classList.toggle('only-checked', e.target.checked);
  });
  updateWish();

  // ---------- Packliste ----------
  const PACK_KEY = 'allypally.packing';
  const packed = new Set(JSON.parse(localStorage.getItem(PACK_KEY) || '[]'));
  const updateProgress = () => {
    $('#packProgress').style.width = `${(packed.size / cfg.packing.length) * 100}%`;
  };
  $('#packing').append(...cfg.packing.map((p) => h('li', {}, h('label', {},
    h('input', {
      type: 'checkbox',
      checked: packed.has(p.id),
      onchange: (e) => {
        e.target.checked ? packed.add(p.id) : packed.delete(p.id);
        localStorage.setItem(PACK_KEY, JSON.stringify([...packed]));
        updateProgress();
      },
    }),
    h('span', {}, p.text)))));
  updateProgress();

  // ---------- Anreise ----------
  if (cfg.travel) {
    const end = (e) => h('div', { class: 'f-end' },
      h('b', {}, e.code), h('span', { class: 'f-time' }, e.time || '–:–'),
      h('small', {}, e.city), e.terminal && h('small', {}, e.terminal));
    $('#travel').append(...(cfg.travel.flights || []).map((f) => h('div', { class: 'card flight-card' },
      h('div', { class: 's-date' }, f.label),
      h('div', { class: 'f-row' }, end(f.from), h('div', { class: 'f-line', 'aria-hidden': 'true' }, '✈'), end(f.to)),
      f.note && h('p', { class: 'muted' }, f.note),
      f.search && h('a', { class: 'btn btn-small btn-outline', href: f.search, target: '_blank', rel: 'noopener' }, '🔎 Flüge bei Google Flights'))));
    $('#travel').append(...(cfg.travel.transfers || []).map((t) => h('div', { class: 'card route' },
      h('h3', {}, t.title), h('ol', {}, t.steps.map((s) => h('li', {}, s))))));
  }

  // ---------- Bildnachweise ----------
  $('#creditList').append(...Object.values(cfg.images).map((img) => h('li', {},
    `${img.caption} – Foto: ${img.credit}, `,
    h('a', { href: img.url, target: '_blank', rel: 'noopener' }, img.license),
    ', via Wikimedia Commons')));
  if (cfg.hotel.photoCredit) $('#creditList').append(h('li', {}, cfg.hotel.photoCredit));

  // ---------- Dartscheibe zeichnen ----------
  const NUMBERS = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  // Radien relativ zum Doppelring (170 mm = 100)
  const R = { bull: 3.7, outerBull: 9.4, tripleIn: 58.2, tripleOut: 62.9, doubleIn: 95.3, doubleOut: 100 };
  const C = { black: '#1b1b1b', cream: '#f3e4c0', red: '#C8102E', green: '#0a7a3d' };
  const svg = $('#board');
  const NS = 'http://www.w3.org/2000/svg';

  const el = (tag, attrs) => {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => node.setAttribute(k, v));
    svg.appendChild(node);
    return node;
  };
  const polar = (r, deg) => {
    const a = (deg - 90) * Math.PI / 180;
    return [r * Math.cos(a), r * Math.sin(a)];
  };
  const sector = (r1, r2, a1, a2, fill) => {
    const [x1, y1] = polar(r2, a1), [x2, y2] = polar(r2, a2);
    const [x3, y3] = polar(r1, a2), [x4, y4] = polar(r1, a1);
    el('path', {
      d: `M${x1} ${y1} A${r2} ${r2} 0 0 1 ${x2} ${y2} L${x3} ${y3} A${r1} ${r1} 0 0 0 ${x4} ${y4}Z`,
      fill, stroke: '#999', 'stroke-width': '.3',
    });
  };

  el('circle', { r: 114, fill: '#111' });
  NUMBERS.forEach((n, i) => {
    const a1 = i * 18 - 9, a2 = a1 + 18;
    const even = i % 2 === 0;
    const single = even ? C.black : C.cream;
    const ring = even ? C.red : C.green;
    sector(R.outerBull, R.tripleIn, a1, a2, single);
    sector(R.tripleIn, R.tripleOut, a1, a2, ring);
    sector(R.tripleOut, R.doubleIn, a1, a2, single);
    sector(R.doubleIn, R.doubleOut, a1, a2, ring);

    const [tx, ty] = polar(107, i * 18);
    el('text', {
      x: tx, y: ty, fill: '#fff', 'font-size': 9, 'font-weight': 700,
      'text-anchor': 'middle', 'dominant-baseline': 'central',
    }).textContent = n;
  });
  el('circle', { r: R.outerBull, fill: C.green });
  el('circle', { r: R.bull, fill: C.red });

  // ---------- Navigation ----------
  const SEEN_KEY = 'allypally.seen';
  const PAGES = ['intro', 'home', 'spieltage', 'hotel', 'karte', 'london', 'packliste', 'anreise', 'credits'];

  const show = (id) => {
    document.querySelectorAll('.scene').forEach((s) => {
      const on = s.id === id;
      if (on && !s.classList.contains('is-active')) s.scrollTop = 0;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
      s.inert = !on;
    });
    if (id === 'karte') initMap();
  };

  const route = () => {
    const page = location.hash.replace(/^#\/?/, '');
    if (PAGES.includes(page) && (page !== 'anreise' || cfg.travel)) return show(page);
    show(localStorage.getItem(SEEN_KEY) ? 'home' : 'intro');
  };
  window.addEventListener('hashchange', route);

  // ---------- Wurf ----------
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  let busy = false;
  async function throwDart() {
    if (busy) return;
    busy = true;
    const dart = $('#dart');
    const caller = $('#caller');
    dart.classList.remove('fly');
    svg.classList.remove('hit');
    caller.textContent = 'Game on!';
    show('throw');

    await wait(900);
    void dart.getBoundingClientRect(); // Animation neu starten
    dart.classList.add('fly');

    await wait(650);
    svg.classList.add('hit');
    navigator.vibrate?.(80);
    caller.textContent = 'BULLSEYE!';

    await wait(1400);
    localStorage.setItem(SEEN_KEY, '1');
    if (location.hash && location.hash !== '#/') history.replaceState(null, '', '#/');
    show('home');
    confetti();
    busy = false;
  }

  $('#throwBtn').addEventListener('click', throwDart);
  $('#againBtn').addEventListener('click', throwDart);

  // ---------- Countdown ----------
  const target = new Date(cfg.countdownTo).getTime();
  const cd = (k) => document.querySelector(`[data-cd="${k}"]`);
  const pad = (n) => String(n).padStart(2, '0');
  const tick = () => {
    let s = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const d = Math.floor(s / 86400); s %= 86400;
    const hh = Math.floor(s / 3600); s %= 3600;
    const m = Math.floor(s / 60); s %= 60;
    cd('d').textContent = d;
    cd('h').textContent = pad(hh);
    cd('m').textContent = pad(m);
    cd('s').textContent = pad(s);
  };
  tick();
  setInterval(tick, 1000);

  // ---------- Konfetti in Union-Jack-Farben ----------
  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = $('#confetti');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.width = innerWidth * dpr;
    const hgt = canvas.height = innerHeight * dpr;
    const colors = ['#C8102E', '#ffffff', '#012169', '#f5c542'];
    const parts = Array.from({ length: 160 }, () => ({
      x: w / 2, y: hgt * 0.35,
      vx: (Math.random() - 0.5) * 18 * dpr,
      vy: (Math.random() * -16 - 4) * dpr,
      s: (Math.random() * 6 + 4) * dpr,
      r: Math.random() * Math.PI,
      vr: (Math.random() - 0.5) * 0.3,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    const start = performance.now();
    (function frame(now) {
      ctx.clearRect(0, 0, w, hgt);
      parts.forEach((p) => {
        p.vy += 0.35 * dpr;
        p.vx *= 0.99;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 4, p.s, p.s / 2);
        ctx.restore();
      });
      if (now - start < 5000) requestAnimationFrame(frame);
      else ctx.clearRect(0, 0, w, hgt);
    })(start);
  }

  route();
})();
