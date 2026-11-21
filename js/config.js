// Alle Inhalte an einer Stelle – hier anpassen.
// ACHTUNG: GitHub Pages ist öffentlich. Keine Buchungsnummern, Nachnamen o. Ä. eintragen.
window.ALLYPALLY = {
  name: 'mein Liebeling',
  from: 'Günter',

  intro: 'Du hältst gerade einen kleinen Flight in der Hand. Willst du wissen, wohin er fliegt?',

  headline: 'Wir fliegen ins Ally Pally!',
  subline: 'Drei Abende Darts-WM im Alexandra Palace in London – Viertelfinale, Halbfinale und das große Finale.',
  tripDates: '1. – 4. Jänner 2027 · 3 Nächte in London',
  message: 'Ein Punkt weniger auf deiner Bucket List. Alles Liebe zum Geburtstag!',

  // Countdown bis zur ersten Abendsession
  countdownTo: '2027-01-01T19:00:00Z',
  countdownLabel: 'Noch so lange bis zum ersten Pfeil im Ally Pally:',

  // Zeiten in UTC (= Londoner Zeit im Jänner). Quelle: darts1.de (dort MEZ angegeben)
  sessions: [
    {
      start: '2027-01-01T19:00:00Z',
      round: 'Viertelfinale',
      format: '2 Matches · Best of 9 Sets',
      text: 'Der Auftakt ins neue Jahr: Die letzten Acht kämpfen um den Einzug ins Halbfinale.',
      img: 'stage',
    },
    {
      start: '2027-01-02T19:30:00Z',
      round: 'Halbfinale',
      format: '2 Matches · Best of 11 Sets',
      text: 'Nur noch vier Spieler. Wer holt sich das Ticket fürs Finale?',
      img: 'semis',
    },
    {
      start: '2027-01-03T20:00:00Z',
      round: 'Finale',
      format: '1 Match · Best of 13 Sets',
      text: 'Das Finale um die Sid Waddell Trophy – zum ersten Mal in der Great Hall. Und wir sitzen am Tisch.',
      highlight: true,
      img: 'littler',
    },
  ],
  ticketNote: 'An allen drei Abenden haben wir Tischplätze – mittendrin statt nur dabei.',

  hotel: {
    name: 'Crowne Plaza London Kings Cross',
    address: '1 King\'s Cross Road, London WC1X 9HX',
    room: 'Doppelzimmer mit Frühstück',
    checkIn: 'Fr, 1. Jänner · ab 15 Uhr',
    checkOut: 'Mo, 4. Jänner · bis 11 Uhr',
    website: 'https://www.ihg.com/crowneplaza/hotels/gb/en/london/lonkc/hoteldetail',
    // Fotos von der Hotel-Website (IHG) – nur für den privaten Gebrauch
    photos: [
      { src: 'img/hotel/aussen.webp', caption: 'Unser Hotel am Abend' },
      { src: 'img/hotel/zimmer.webp', caption: 'So ungefähr wohnen wir' },
      { src: 'img/hotel/zimmer-premium.webp', caption: 'Doppelzimmer' },
      { src: 'img/hotel/lobby.webp', caption: 'Lobby' },
      { src: 'img/hotel/restaurant.webp', caption: 'Hier gibt\'s Frühstück' },
      { src: 'img/hotel/fitness.webp', caption: 'Fitnessraum – falls nötig 😉' },
      { src: 'img/hotel/kingscross-luftbild.webp', caption: 'St Pancras und King\'s Cross aus der Luft' },
    ],
    photoCredit: 'Hotelfotos: Crowne Plaza London Kings Cross / IHG Hotels & Resorts',
  },

  // Freie Fotos von Wikimedia Commons (CC BY-SA) – Nachweise erscheinen auf der Seite „Bildnachweise“
  images: {
    littler: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/2025-04-03_Premier_League_Darts_Berlin_2025_by_Sandro_Halank%E2%80%93131.jpg/1280px-2025-04-03_Premier_League_Darts_Berlin_2025_by_Sandro_Halank%E2%80%93131.jpg',
      caption: 'Luke „The Nuke“ Littler – sehen wir ihn im Finale?',
      credit: 'Sandro Halank', license: 'CC BY-SA 4.0', position: 'center 25%',
      url: 'https://commons.wikimedia.org/wiki/File:2025-04-03_Premier_League_Darts_Berlin_2025_by_Sandro_Halank%E2%80%93131.jpg',
    },
    crowd: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Crowd_in_Alexandra_Palace_%284236250773%29.jpg/1280px-Crowd_in_Alexandra_Palace_%284236250773%29.jpg',
      caption: 'Stimmung im Ally Pally – Verkleidung ausdrücklich erwünscht',
      credit: 'sachab', license: 'CC BY 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Crowd_in_Alexandra_Palace_(4236250773).jpg',
    },
    stage: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/PDC_World_Darts_Championship_2016.jpg/1280px-PDC_World_Darts_Championship_2016.jpg',
      caption: 'Die WM-Bühne im Alexandra Palace',
      credit: 'TWsk', license: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:PDC_World_Darts_Championship_2016.jpg',
    },
    semis: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/PDC_Semis_%2824140188636%29.jpg/1280px-PDC_Semis_%2824140188636%29.jpg',
      caption: 'Halbfinal-Abend im Ally Pally',
      credit: 'dom fellowes', license: 'CC BY 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:PDC_Semis_(24140188636).jpg',
    },
    hall: {
      src: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Alexandra_Palace_%2823798491929%29.jpg/1280px-Alexandra_Palace_%2823798491929%29.jpg',
      caption: 'Die Halle vor dem Ansturm',
      credit: 'dom fellowes', license: 'CC BY 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Alexandra_Palace_(23798491929).jpg',
    },
    suljovic: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/World_Darts_Championship_-_Mensur_Suljovic.jpg',
      caption: 'Ein Wiener auf der WM-Bühne: Mensur Suljovic 🇦🇹',
      credit: 'Greg Neate', license: 'CC BY 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:World_Darts_Championship_-_Mensur_Suljovic.jpg',
    },
    allyPally: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Alexandra_Palace%2C_London_N22_-_geograph.org.uk_-_4460654.jpg',
      caption: 'Der Alexandra Palace – das „Ally Pally“',
      credit: 'Christine Matthews', license: 'CC BY-SA 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Alexandra_Palace,_London_N22_-_geograph.org.uk_-_4460654.jpg',
    },
    allyPallyNight: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Alexandra_Palace%2C_Canary_Wharf_view_by_night_-_geograph.org.uk_-_2786443.jpg',
      caption: 'Blick vom Ally Pally über das nächtliche London',
      credit: 'Chris Downer', license: 'CC BY-SA 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Alexandra_Palace,_Canary_Wharf_view_by_night_-_geograph.org.uk_-_2786443.jpg',
    },
    eastCourt: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Alexandra_Palace_East_Court_entrance_-_2022-09-02.jpg/1280px-Alexandra_Palace_East_Court_entrance_-_2022-09-02.jpg',
      caption: 'Eingang East Court',
      credit: 'The wub', license: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:Alexandra_Palace_East_Court_entrance_-_2022-09-02.jpg',
    },
    kingsCross: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/King%27s_Cross_Western_Concourse.jpg/1280px-King%27s_Cross_Western_Concourse.jpg',
      caption: 'King\'s Cross Station – ein paar Minuten vom Hotel',
      credit: 'Colin', license: 'CC BY-SA 3.0',
      url: 'https://commons.wikimedia.org/wiki/File:King%27s_Cross_Western_Concourse.jpg',
    },
    granary: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Granary_Square_fountains%2C_King%27s_Cross_-_geograph.org.uk_-_7736852.jpg/1280px-Granary_Square_fountains%2C_King%27s_Cross_-_geograph.org.uk_-_7736852.jpg',
      caption: 'Granary Square mit den Springbrunnen',
      credit: 'Stephen McKay', license: 'CC BY-SA 2.0',
      url: 'https://commons.wikimedia.org/wiki/File:Granary_Square_fountains,_King%27s_Cross_-_geograph.org.uk_-_7736852.jpg',
    },
    stPancras: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/St_Pancras_London_July_2015-3a.jpg/1280px-St_Pancras_London_July_2015-3a.jpg',
      caption: 'St Pancras gleich nebenan',
      credit: 'Alvesgaspar', license: 'CC BY-SA 4.0',
      url: 'https://commons.wikimedia.org/wiki/File:St_Pancras_London_July_2015-3a.jpg',
    },
  },

  // Orte für den Stadtplan
  places: [
    { id: 'hotel', icon: '🏨', name: 'Unser Hotel', sub: 'Crowne Plaza Kings Cross', lat: 51.52634, lng: -0.11349 },
    { id: 'kx', icon: '🚆', name: 'King\'s Cross Station', sub: 'Züge Richtung Alexandra Palace', lat: 51.53080, lng: -0.12350 },
    { id: 'apstation', icon: '🚉', name: 'Bahnhof Alexandra Palace', sub: 'Von hier ein Stück bergauf', lat: 51.59820, lng: -0.12066 },
    { id: 'ally', icon: '🎯', name: 'Alexandra Palace', sub: 'Darts-WM · Great Hall', lat: 51.59435, lng: -0.13064 },
  ],

  routes: [
    {
      title: 'Mit dem Zug (am schnellsten)',
      steps: [
        'Vom Hotel zu Fuß zur King\'s Cross Station – ca. 10–15 Minuten.',
        'Great-Northern-Zug Richtung Norden bis „Alexandra Palace“ – Fahrzeit rund 10 Minuten. Manche Verbindungen mit Umstieg in Finsbury Park.',
        'Vom Bahnhof durch den Park hinauf zum Palace – ca. 15 Minuten, es geht bergauf.',
      ],
    },
    {
      title: 'Mit U-Bahn und Bus',
      steps: [
        'Piccadilly Line (dunkelblau) ab King\'s Cross St Pancras bis Wood Green – ca. 15 Minuten.',
        'Draußen zur Bushaltestelle und mit dem Bus W3 den Hügel hinauf direkt zum Palace.',
      ],
    },
  ],
  routeNote: 'Bezahlt wird in Bus, U-Bahn und Zug einfach kontaktlos mit Karte oder Handy. Fahrpläne und Spätverbindungen vor Ort in einer App wie TfL Go oder Citymapper prüfen.',

  // London-Wunschliste – sie wählt selbst aus. ids müssen eindeutig bleiben.
  wishlist: [
    { group: 'Die großen Klassiker', items: [
      { id: 'bigben', icon: '🕰️', title: 'Big Ben & Houses of Parliament', text: 'Das Postkartenmotiv schlechthin, am schönsten von der Westminster Bridge aus.' },
      { id: 'abbey', icon: '⛪', title: 'Westminster Abbey', text: 'Krönungskirche der britischen Monarchen.' },
      { id: 'buckingham', icon: '👑', title: 'Buckingham Palace', text: 'Mit etwas Glück die Wachablöse – Termine vorher checken.' },
      { id: 'tower', icon: '🏰', title: 'Tower of London', text: 'Kronjuwelen, Raben und Beefeater.' },
      { id: 'towerbridge', icon: '🌉', title: 'Tower Bridge', text: 'Drüberspazieren oder oben über den Glasboden laufen.' },
      { id: 'eye', icon: '🎡', title: 'London Eye', text: 'Eine Runde im Riesenrad über der Themse.' },
      { id: 'trafalgar', icon: '🦁', title: 'Trafalgar Square', text: 'Nelson-Säule, Löwen und die National Gallery gleich dahinter.' },
      { id: 'piccadilly', icon: '💡', title: 'Piccadilly Circus', text: 'Die berühmten Leuchtreklamen.' },
      { id: 'stpauls', icon: '⛪', title: 'St Paul\'s Cathedral', text: 'Riesige Kuppel – wer mag, steigt bis ganz nach oben.' },
      { id: 'covent', icon: '🎭', title: 'Covent Garden', text: 'Markthalle, Straßenkünstler und kleine Läden.' },
    ]},
    { group: 'Museen (viele gratis)', items: [
      { id: 'britmus', icon: '🏛️', title: 'British Museum', text: 'Rosetta-Stein und ägyptische Mumien, Eintritt frei.' },
      { id: 'natgal', icon: '🖼️', title: 'National Gallery', text: 'Van Gogh, Monet, Turner – direkt am Trafalgar Square.' },
      { id: 'nhm', icon: '🦕', title: 'Natural History Museum', text: 'Allein das Gebäude ist ein Erlebnis.' },
      { id: 'vam', icon: '💎', title: 'Victoria and Albert Museum', text: 'Design, Mode und Kunsthandwerk aus aller Welt.' },
      { id: 'tate', icon: '🎨', title: 'Tate Modern', text: 'Moderne Kunst in einem alten Kraftwerk an der Themse.' },
      { id: 'npg', icon: '🧑‍🎨', title: 'National Portrait Gallery', text: 'Berühmte Briten von Heinrich VIII. bis heute.' },
      { id: 'churchill', icon: '🎖️', title: 'Churchill War Rooms', text: 'Der unterirdische Kommandobunker aus dem Zweiten Weltkrieg.' },
      { id: 'soane', icon: '🗝️', title: 'Sir John Soane\'s Museum', text: 'Eine verwinkelte Wunderkammer – ein echter Geheimtipp.' },
      { id: 'science', icon: '🚀', title: 'Science Museum', text: 'Raumfahrt, Dampfmaschinen und viel zum Ausprobieren.' },
    ]},
    { group: 'Märkte & Viertel', items: [
      { id: 'camden', icon: '🛍️', title: 'Camden Market', text: 'Bunt, laut, alternativ – und Streetfood an jeder Ecke.' },
      { id: 'borough', icon: '🧀', title: 'Borough Market', text: 'Londons berühmtester Lebensmittelmarkt.' },
      { id: 'notting', icon: '🏘️', title: 'Notting Hill & Portobello Road', text: 'Bunte Häuser und Antiquitäten – Samstag ist großer Markttag.' },
      { id: 'shoreditch', icon: '🖌️', title: 'Shoreditch & Brick Lane', text: 'Street Art, Vintage-Läden und Bagels rund um die Uhr.' },
      { id: 'soho', icon: '🌈', title: 'Soho & Carnaby Street', text: 'Kleine Gassen, Cafés und Boutiquen.' },
      { id: 'chinatown', icon: '🏮', title: 'Chinatown', text: 'Rote Laternen und Dim Sum mitten im West End.' },
      { id: 'spitalfields', icon: '🧺', title: 'Old Spitalfields Market', text: 'Überdachte Markthalle mit Mode, Kunst und Essen.' },
      { id: 'greenwich', icon: '🌐', title: 'Greenwich', text: 'Mit einem Fuß auf jeder Seite des Nullmeridians stehen.' },
      { id: 'leadenhall', icon: '🏛️', title: 'Leadenhall Market', text: 'Viktorianische Markthalle – diente als Kulisse in Harry Potter.' },
    ]},
    { group: 'Rund um unser Hotel', items: [
      { id: 'platform', icon: '🧙', title: 'Platform 9¾', text: 'Der Gepäckwagen in der Wand von King\'s Cross – samt Fotospot.' },
      { id: 'coaldrops', icon: '⛲', title: 'Coal Drops Yard & Granary Square', text: 'Alte Lagerhallen voller Lokale und Shops.' },
      { id: 'library', icon: '📚', title: 'British Library', text: 'Magna Carta & Co. in der Ausstellung „Treasures“.' },
      { id: 'canal', icon: '🚤', title: 'Spaziergang am Regent\'s Canal', text: 'Vom Granary Square den Kanal entlang Richtung Camden.' },
      { id: 'stpancras', icon: '🚂', title: 'St Pancras Bahnhofshalle', text: 'Wunderschöne viktorianische Halle – hier fahren die Eurostar-Züge ab.' },
      { id: 'exmouth', icon: '☕', title: 'Exmouth Market', text: 'Kleine Straße mit Cafés und Restaurants, ganz in der Nähe.' },
    ]},
    { group: 'London von oben', items: [
      { id: 'skygarden', icon: '🌿', title: 'Sky Garden', text: 'Dachgarten hoch über der City, gratis – aber vorher online ein Zeitfenster buchen.' },
      { id: 'shard', icon: '🔺', title: 'The Shard', text: 'Höchstes Gebäude Londons mit Aussichtsplattform.' },
      { id: 'primrose', icon: '🌳', title: 'Primrose Hill', text: 'Klassischer Blick über die Skyline aus dem Park.' },
      { id: 'allyday', icon: '🎯', title: 'Ally Pally bei Tageslicht', text: 'Von der Terrasse vor dem Palace liegt einem ganz London zu Füßen.' },
      { id: 'bus', icon: '🚌', title: 'Doppeldecker – oben, ganz vorne', text: 'Die billigste Stadtrundfahrt der Welt.' },
      { id: 'boat', icon: '⛴️', title: 'Mit dem Boot auf der Themse', text: 'Die Thames Clippers fahren wie ein Linienbus den Fluss entlang.' },
    ]},
    { group: 'Essen & Trinken', items: [
      { id: 'tea', icon: '🫖', title: 'Afternoon Tea', text: 'Scones, Clotted Cream und kleine Sandwiches – very British.' },
      { id: 'fishchips', icon: '🐟', title: 'Fish & Chips', text: 'Am besten mit Essig und Erbsenpüree.' },
      { id: 'roast', icon: '🍖', title: 'Sunday Roast im Pub', text: 'Am Sonntag vor dem Finale die perfekte Stärkung.' },
      { id: 'pub', icon: '🍺', title: 'Ein Pint im historischen Pub', text: 'Zum Beispiel Ye Olde Cheshire Cheese in der Fleet Street.' },
      { id: 'curry', icon: '🍛', title: 'Curry in der Brick Lane', text: 'Londons Curry-Meile.' },
      { id: 'dishoom', icon: '🥘', title: 'Dishoom King\'s Cross', text: 'Bombay-Café gleich ums Eck, berühmt für das Bacon Naan.' },
      { id: 'pie', icon: '🥧', title: 'Pie & Mash', text: 'Traditionelles Londoner Arbeiteressen.' },
    ]},
    { group: 'Shopping', items: [
      { id: 'harrods', icon: '🛒', title: 'Harrods', text: 'Allein die Food Halls sind einen Besuch wert.' },
      { id: 'liberty', icon: '🌸', title: 'Liberty', text: 'Kaufhaus im Fachwerkstil mit berühmten Stoffmustern.' },
      { id: 'fortnum', icon: '🍪', title: 'Fortnum & Mason', text: 'Tee, Kekse und Delikatessen in Türkis.' },
      { id: 'hamleys', icon: '🧸', title: 'Hamleys', text: 'Eines der ältesten Spielzeuggeschäfte der Welt.' },
      { id: 'oxford', icon: '🛍️', title: 'Oxford Street & Regent Street', text: 'Die großen Einkaufsstraßen.' },
      { id: 'sales', icon: '🏷️', title: 'Jänner-Schlussverkauf', text: 'Anfang Jänner ist in London traditionell Sale-Zeit.' },
    ]},
    { group: 'Für Fans', items: [
      { id: 'hpstudio', icon: '⚡', title: 'Harry Potter Studio Tour', text: 'Außerhalb Londons in Leavesden – braucht einen halben Tag und lange im Voraus Tickets.' },
      { id: 'sherlock', icon: '🔍', title: 'Sherlock Holmes Museum', text: 'Baker Street 221b.' },
      { id: 'abbeyroad', icon: '🎸', title: 'Abbey Road Zebrastreifen', text: 'Das Beatles-Foto nachstellen.' },
      { id: 'musical', icon: '🎶', title: 'Musical-Matinee im West End', text: 'Abends sind wir beim Darts – aber Nachmittagsvorstellungen gibt es auch.' },
      { id: 'flightclub', icon: '🎯', title: 'Flight Club', text: 'Darts-Bar zum Selberwerfen – zum Aufwärmen fürs Ally Pally.' },
    ]},
    { group: 'Parks & Ruhepausen', items: [
      { id: 'hyde', icon: '🌳', title: 'Hyde Park & Kensington Gardens', text: 'Riesige Parks mitten in der Stadt.' },
      { id: 'stjames', icon: '🦢', title: 'St James\'s Park', text: 'Mit Pelikanen und Blick auf den Buckingham Palace.' },
      { id: 'kew', icon: '🌺', title: 'Kew Gardens', text: 'Botanischer Garten mit riesigen viktorianischen Glashäusern.' },
      { id: 'venice', icon: '🛶', title: 'Little Venice', text: 'Hausboote und Kanäle – ganz ruhig.' },
    ]},
  ],
  wishNote: 'Tagsüber gehört London uns – und du entscheidest! Hak an, was dich reizt. Deine Auswahl bleibt auf deinem Handy gespeichert.',

  allyTips: [
    'Verkleiden ist im Ally Pally Tradition – je verrückter, desto besser.',
    'Ein selbstgebasteltes „180“-Schild gehört einfach dazu.',
    'Früh genug da sein: Den genauen Einlass verraten die Tickets.',
    'Für den Rückweg die letzten Züge und Busse im Blick behalten.',
  ],

  packing: [
    { id: 'pass', text: 'Reisepass – für Großbritannien reicht der Personalausweis nicht' },
    { id: 'eta', text: 'UK-Einreisegenehmigung (ETA) rechtzeitig in der offiziellen UK-ETA-App beantragen' },
    { id: 'apis', text: 'Passdaten bei easyJet unter „Manage Bookings“ eintragen' },
    { id: 'checkin', text: 'Online-Check-in ab 2. Dezember in der easyJet-App – Bordkarten aufs Handy' },
    { id: 'bag', text: 'Koffer max. 23 kg, Handgepäck klein genug für unter den Sitz (45 × 36 × 20 cm)' },
    { id: 'adapter', text: 'Steckdosen-Adapter Typ G' },
    { id: 'card', text: 'Kreditkarte oder Handy zum kontaktlosen Bezahlen – auch für die Öffis' },
    { id: 'warm', text: 'Warme Jacke, Schal und Regenschirm – es ist Jänner in London' },
    { id: 'shoes', text: 'Bequeme Schuhe zum Sightseeing' },
    { id: 'outfit', text: 'Darts-Outfit: Trikot, Verkleidung oder zumindest Union Jack' },
    { id: 'sign', text: 'Bastelmaterial fürs 180-Schild' },
    { id: 'tickets', text: 'Tickets & Buchungsbestätigung am Handy' },
  ],

  // Anreise – Flugdaten aus den easyJet-Bestätigungen (ohne Buchungscodes, Namen, Preise)
  travel: {
    title: 'easyJet · Wien → Gatwick → Innsbruck',
    flights: [
      {
        label: 'Hinflug · Freitag, 1. Jänner 2027 · EZY8884',
        from: { code: 'VIE', city: 'Wien', time: '14:00' },
        to: { code: 'LGW', city: 'London Gatwick', time: '15:20', terminal: 'North Terminal' },
        note: 'Gepäckabgabe 12:00–13:20 · Ortszeiten (London ist 1 Stunde hinter Wien)',
      },
      {
        label: 'Rückflug · Montag, 4. Jänner 2027 · EZY8697',
        from: { code: 'LGW', city: 'London Gatwick', time: '11:30', terminal: 'North Terminal' },
        to: { code: 'INN', city: 'Innsbruck', time: '14:30' },
        note: 'Gepäckabgabe 09:00–10:30 · Ortszeiten',
      },
    ],
    luggage: 'Gepäck: 1 Koffer bis 23 kg (aufgegeben) und jeder 1 kleine Tasche unter dem Vordersitz (max. 45 × 36 × 20 cm).',
    transfers: [
      {
        title: 'Freitag: Von Gatwick ins Hotel',
        steps: [
          'Landung 15:20 im North Terminal. Mit dem kostenlosen Shuttle zum South Terminal – dort ist der Bahnhof.',
          'Thameslink-Zug direkt bis St Pancras International, ohne Umsteigen, ca. 45–50 Minuten.',
          'Von St Pancras ca. 10 Minuten zu Fuß zum Hotel – realistisch sind wir gegen 17 Uhr dort.',
          'Kurz einchecken, frisch machen und gegen 18 Uhr los Richtung Ally Pally – um 19 Uhr startet das Viertelfinale.',
        ],
      },
      {
        title: 'Montag: Vom Hotel nach Gatwick',
        steps: [
          'Früh frühstücken und gegen 8 Uhr auschecken.',
          'Zu Fuß nach St Pancras International und mit dem Thameslink direkt bis Gatwick Airport (ca. 45–50 Min.).',
          'Shuttle zum North Terminal – die Gepäckabgabe schließt um 10:30, Abflug 11:30.',
          'Um 14:30 landen wir in Innsbruck – fast zu Hause.',
        ],
      },
      {
        title: 'Gut zu wissen',
        steps: [
          'In U-Bahn und Bus zahlt man einfach kontaktlos mit Karte oder Handy. Für den Gatwick-Zug gibt es Tickets auch am Automaten oder in der App.',
          'Online-Check-in bei easyJet öffnet 30 Tage vor dem Hinflug – also ab 2. Dezember 2026, für beide Flüge.',
        ],
      },
    ],
  },
};
