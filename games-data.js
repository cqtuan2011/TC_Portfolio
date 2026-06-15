// =============================================================
// Games data — 22 real shipped titles.
// Each entry has a `cover` (appicon path) and a `media` array
// of real gameplay screenshots / videos.
// =============================================================

window.GAMES = [
  // ── Chess (freelance) ──────────────────────────────────────
  {
    id: 'chess-engine',
    name: 'Chess Engine',
    tagline: 'Bitboard Chess Engine · Depth 22',
    year: '2025',
    platforms: [],
    genres: ['puzzle'],
    role: 'Solo Dev · Chess Engine · Freelance',
    stack: ['C#', 'Bitboards', 'Negamax', 'Alpha-Beta', 'Bit Manipulation'],
    bullets: [
      'Full-featured chess game — Hint, Undo, Redo and Random Move all built in',
      'Custom chess engine that searches up to depth 22, built on a bitboard board representation for extreme performance',
      'Move generation with bit-shifting; search via DFS with alpha-beta pruning (negamax), move ordering and iterative deepening to reach deep ply counts',
      'Written entirely without AI assistance — implemented from first principles using primary references from chessprogramming.org',
      'Freelance project diving deep into low-level algorithms: bitboard manipulation, alpha-beta search-tree pruning and evaluation tuning',
    ],
    palette: ['#769656', '#eeeed2', '#312e2b'],
    icon: 'chess',
    cover: 'assets/chess_appicon.png',
    media: [
      { type: 'video', src: 'assets/chess-gameplay-video.mp4' },
      { type: 'image', src: 'assets/chess-gameplay-1.png' },
      { type: 'image', src: 'assets/chess-gameplay-2.png' },
      { type: 'image', src: 'assets/chess-gameplay-3.png' },
    ],
  },

  // ── 1 ──────────────────────────────────────────────────────
  {
    id: 'car-sort',
    links: { ios: 'https://apps.apple.com/us/app/car-sort/id6746180309?l=vi', aos: 'https://play.google.com/store/apps/details?id=car.jam.traffic.puzzle.match.parking.escape&hl=en' },
    name: 'Car Sort',
    tagline: 'Match-3 Cars Puzzle',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['match3', 'puzzle', 'casual'],
    role: 'Core Gameplay · Tools · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Editor Tools', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implemented the core match-3 mechanism and state machine',
      'Shipped 15+ distinct gameplay mechanics on top of the base system, extendable future mechanics',
      'Built a powerful portable editor tool for level design and mechanic authoring',
      'Owned monetization integration: IAP, rewarded ads, analytics',
      'LiveOps and meta features implementation: Daily Reward, Piggy Bank, Master Pass, etc',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#ff5b3c', '#ffb23c', '#1a1a1a'],
    icon: 'car',
    cover: 'assets/appicon-carsort.png',
    media: [
      { type: 'image', src: 'assets/carsort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-3.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-4.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-5.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-6.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-7.jpg' },
      { type: 'image', src: 'assets/carsort-gameplay-8.jpg' },
      { type: 'video', src: 'assets/carsort-gameplay-video.mp4' },
    ],
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    id: 'hexa-sort',
    links: { ios: 'https://apps.apple.com/us/app/hexa-stack-color-hexagon-sort/id6654905491?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.hexa.sort&hl=en' },
    name: 'Hexa Sort',
    tagline: 'Color Hexagon Sort',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['merge', 'puzzle', 'casual'],
    role: 'Core Gameplay · Tools · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Editor Tools', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implemented the core sorting algorithm and board logic',
      'Shipped 10+ gameplay mechanics layered on the base loop, easy extendable future mechanics',
      'Integrated IAP, event tracking, Firebase services and the UI system',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#7c4dff', '#00c6a8', '#1a1a1a'],
    icon: 'hex',
    cover: 'assets/appicon-hexasort.png',
    media: [
      { type: 'image', src: 'assets/hexasort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/hexasort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/hexasort-gameplay-3.jpg' },
      { type: 'image', src: 'assets/hexasort-gameplay-4.jpg' },
      { type: 'image', src: 'assets/hexasort-gameplay-5.jpg' },
      { type: 'video', src: 'assets/hexasort-gameplay-video.mp4' },
    ],
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    id: 'bus-jam',
    links: { ios: 'https://apps.apple.com/kh/app/bus-jam-master-traffic-escape/id6738465207' },
    name: 'Bus Jam Master',
    tagline: 'Traffic Escape',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implemented core passenger-to-bus gameplay mechanics',
      'Designed 5+ in-game obstacles with distinct behaviors',
      'Implement liveops event, monetization',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#ffd23f', '#ff6b35', '#004e89'],
    icon: 'bus',
    cover: 'assets/appicon-busjam.png',
    media: [
      { type: 'image', src: 'assets/busjam-gameplay-1.jpg' },
      { type: 'image', src: 'assets/busjam-gameplay-2.jpg' },
      { type: 'image', src: 'assets/busjam-gameplay-3.jpg' },
      { type: 'image', src: 'assets/busjam-gameplay-4.jpg' },
      { type: 'image', src: 'assets/busjam-gameplay-5.jpg' },
      { type: 'image', src: 'assets/busjam-gameplay-6.jpg' },
    ],
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    id: 'save-the-dog',
    links: { ios: 'https://apps.apple.com/us/app/save-the-dog-draw-line-dop/id1662076281?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.save.the.dog&hl=en' },
    name: 'Save the Dog',
    tagline: 'Draw Line DOP',
    year: '2023',
    platforms: ['iOS', 'AOS', 'Facebook'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Editor Tool · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Editor Tools', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Built the core drawing system — line capture, physics and validation',
      'Implement 6+ game mode with different gameplay concepts and mechanism',
      'Authored editor tools for save/load of tilemap data and level scripting',
      'Optimized physics calculation to work well across devices',
    ],
    palette: ['#f26419', '#f6ae2d', '#33658a'],
    icon: 'dog',
    cover: 'assets/appicon-savethedog.png',
    media: [
      { type: 'image', src: 'assets/std-gameplay-1.png' },
      { type: 'image', src: 'assets/std-gameplay-2.png' },
      { type: 'image', src: 'assets/std-gameplay-3.png' },
      { type: 'image', src: 'assets/std-gameplay-4.png' },
      { type: 'image', src: 'assets/std-gameplay-5.png' },
    ],
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    id: 'ball-sort',
    links: { ios: 'https://apps.apple.com/us/app/ball-sort-puzzle-color-sort/id1660716618?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.ball.sort.puzzle' },
    name: 'Ball Sort',
    tagline: 'Color Ball Sort',
    year: '2023',
    platforms: ['iOS', 'AOS', 'Facebook'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Editor Tool · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Editor Tools', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implemented the tube-filling sort logic and smooth ball-transfer animations',
      'Shipped multiple tube-count configurations and difficulty tiers',
      'Integrated hint system, undo mechanic, and rewarded-ad flow',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#e63946', '#457b9d', '#f1faee'],
    icon: 'drop',
    cover: 'assets/appicon-ballsort.png',
    media: [
      { type: 'image', src: 'assets/ballsort-gameplay-1.png' },
      { type: 'image', src: 'assets/ballsort-gameplay-2.png' },
      { type: 'image', src: 'assets/ballsort-gameplay-3.png' },
      { type: 'image', src: 'assets/ballsort-gameplay-4.png' },
      { type: 'image', src: 'assets/ballsort-gameplay-5.png' },
      { type: 'image', src: 'assets/ballsort-gameplay-6.png' },
    ],
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    id: 'block-cat-sort',
    links: { ios: 'https://apps.apple.com/us/app/meow-block-cat-sort-puzzle/id6754963808', aos: 'https://play.google.com/store/apps/details?id=lg.cat.block.jam.slide.box.puzzle' },
    name: 'Block Cat Sort',
    tagline: 'Sliding Block Cat Puzzle',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#f4a261', '#e76f51', '#264653'],
    icon: 'paw',
    cover: 'assets/appicon-blockcatsort.png',
    media: [
      { type: 'image', src: 'assets/blockcatsort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/blockcatsort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/blockcatsort-gameplay-3.jpg' },
      { type: 'image', src: 'assets/blockcatsort-gameplay-4.jpg' },
      { type: 'image', src: 'assets/blockcatsort-gameplay-5.jpg' },
    ],
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    id: 'brainrot-merge',
    links: { ios: 'https://apps.apple.com/us/app/brainrot-merge-drop-fun-puzzle/id6746438761?l=vi' },
    name: 'Brainrot Merge',
    tagline: 'Viral Meme Merge Puzzle',
    year: '2025',
    platforms: ['iOS', 'AOS'],
    genres: ['merge', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable', 'PlayFab'],
    bullets: [
      'Implemented the drop-and-merge chain logic with evolution visuals',
      'Tuned and optimized 2D physics parameters for satisfying drop-feel across devices',
      'Built the high-score leaderboard and social-share screenshot flow',
    ],
    palette: ['#6a0572', '#ab83a1', '#ffd6ff'],
    icon: 'cube',
    cover: 'assets/appicon-brainrotmerge.png',
    media: [
      { type: 'image', src: 'assets/brainrotmerge-gameplay-1.png' },
      { type: 'image', src: 'assets/brainrotmerge-gameplay-2.png' },
      { type: 'image', src: 'assets/brainrotmerge-gameplay-3.png' },
    ],
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    id: 'toy-block-sort',
    links: { ios: 'https://apps.apple.com/us/app/block-sort-color-match-puzzle/id6757590824?l=vi', aos: 'https://play.google.com/store/apps/details?id=lg.color.block.sort.jam.wood.brick.puzzle&hl=en' },
    name: 'Toy Block Sort',
    tagline: 'Stack & Sort Blocks',
    year: '2023',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#06d6a0', '#ffd166', '#118ab2'],
    icon: 'block',
    cover: 'assets/appicon-toyblocksort.png',
    media: [
      { type: 'image', src: 'assets/toyblocksort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/toyblocksort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/toyblocksort-gameplay-3.jpg' },
      { type: 'image', src: 'assets/toyblocksort-gameplay-4.jpg' },
      { type: 'image', src: 'assets/toyblocksort-gameplay-5.jpg' },
    ],
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    id: 'color-water-sort',
    links: { ios: 'https://apps.apple.com/us/app/color-sort-water/id6761710087?l=vi' },
    name: 'Color Water Sort',
    tagline: 'Liquid Sort Puzzle',
    year: '2023',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#00b4d8', '#90e0ef', '#03045e'],
    icon: 'drop',
    cover: 'assets/appicon-watersort.png',
    media: [
      { type: 'image', src: 'assets/watersort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/watersort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/watersort-gameplay-3.jpg' },
    ],
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    id: 'farm-jam-sheep-sort',
    links: { ios: 'https://apps.apple.com/us/app/farm-jam-sheep-sort/id6476591574?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.farmjam.sheepsort&hl=vi' },
    name: 'Farm Jam: Sheep Sort',
    tagline: 'Fluffy Flock Sorting',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implement pathfinding algorithm',
      'Implement gameplay obstacles, mechanics, stickman moving animation',
      'Built the character spawn and queue system for smooth scene transitions',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#a8dadc', '#457b9d', '#f1faee'],
    icon: 'crowd',
    cover: 'assets/appicon-sheepsort.png',
    media: [
      { type: 'image', src: 'assets/sheepsort-gameplay-1.jpg' },
      { type: 'image', src: 'assets/sheepsort-gameplay-2.jpg' },
      { type: 'image', src: 'assets/sheepsort-gameplay-3.jpg' },
      { type: 'image', src: 'assets/sheepsort-gameplay-4.jpg' },
      { type: 'image', src: 'assets/sheepsort-gameplay-5.jpg' },
      { type: 'image', src: 'assets/sheepsort-gameplay-6.jpg' },
    ],
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    id: 'match-cat',
    links: { ios: 'https://apps.apple.com/kz/app/match-cat-escape-car-jam/id6760378052', aos: 'https://play.google.com/store/apps/details?id=lg.car.sort.match.parking.jam.escape.cat' },
    name: 'Match Cat',
    tagline: 'Triple-Cat Match',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['match3', 'puzzle', 'casual'],
    role: 'Core Gameplay · Editor Tool · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Editor Tools', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implemented the core match-3 mechanism and state machine',
      'Shipped 18+ distinct gameplay mechanics on top of the base system, extendable future mechanics',
      'Built a powerful portable editor tool for level design and mechanic authoring',
      'Owned monetization integration: IAP, rewarded ads, analytics',
      'LiveOps and meta features implementation: Daily Reward, Piggy Bank, Master Pass, etc',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#ffb5a7', '#fcd5ce', '#c9184a'],
    icon: 'paw',
    cover: 'assets/appicon-matchcat.png',
    media: [
      { type: 'image', src: 'assets/matchcat-gameplay-1.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-2.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-3.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-4.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-5.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-6.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-7.jpg' },
      { type: 'image', src: 'assets/matchcat-gameplay-8.jpg' },
    ],
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    id: 'nut-sort',
    links: { ios: 'https://apps.apple.com/us/app/wood-nuts-bolts-colors-sort/id6474301683?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.screw.nuts.sort&hl=en' },
    name: 'Nut Sort',
    tagline: 'Screw & Bolt Puzzle',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#b5838d', '#6d6875', '#e5989b'],
    icon: 'build',
    cover: 'assets/appicon-nutsort.png',
    media: [
      { type: 'image', src: 'assets/nutsort-gameplay-1.png' },
      { type: 'image', src: 'assets/nutsort-gameplay-2.png' },
      { type: 'image', src: 'assets/nutsort-gameplay-3.png' },
      { type: 'image', src: 'assets/nutsort-gameplay-4.png' },
    ],
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    id: 'pin-jam',
    links: { ios: 'https://apps.apple.com/us/app/screw-pin-jam-puzzle-nuts-bolt/id6612013452?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.unscrew.pin.jam&hl=vi' },
    name: 'Pin Jam',
    tagline: 'Pull-the-Pin Escape',
    year: '2023',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#ef476f', '#ffd166', '#06d6a0'],
    icon: 'pin',
    cover: 'assets/appicon-pinjam.png',
    media: [
      { type: 'image', src: 'assets/pinjam-gameplay-1.jpg' },
      { type: 'image', src: 'assets/pinjam-gameplay-2.jpg' },
      { type: 'image', src: 'assets/pinjam-gameplay-3.jpg' },
      { type: 'image', src: 'assets/pinjam-gameplay-4.jpg' },
      { type: 'image', src: 'assets/pinjam-gameplay-5.jpg' },
      { type: 'image', src: 'assets/pinjam-gameplay-6.jpg' },
    ],
  },

  // ── 14 ─────────────────────────────────────────────────────
  {
    id: 'seat-jam',
    links: { aos: 'https://play.google.com/store/apps/details?id=leogame.seatjam.car' },
    name: 'Seat Jam',
    tagline: 'Crowd Seat Sorting',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable'],
    bullets: [
      'Implement pathfinding algorithm',
      'Implement gameplay obstacles, mechanics, stickman moving animation',
      'Built the character spawn and queue system for smooth scene transitions',
      'Built Playable Ads with Luna Platform to support monetization',
    ],
    palette: ['#2b2d42', '#8d99ae', '#ef233c'],
    icon: 'crowd',
    cover: 'assets/appicon-seatjam.png',
    media: [
      { type: 'image', src: 'assets/seatjam-gameplay-1.png' },
      { type: 'image', src: 'assets/seatjam-gameplay-2.png' },
      { type: 'image', src: 'assets/seatjam-gameplay-3.png' },
      { type: 'image', src: 'assets/seatjam-gameplay-4.png' },
    ],
  },

  // ── 15 ─────────────────────────────────────────────────────
  {
    id: 'snack-match',
    links: { ios: 'https://apps.apple.com/us/app/snack-match-color-supermarket/id6740663107?l=vi', aos: 'https://play.google.com/store/apps/details?id=coffee.sort.game.pack.color.sorting' },
    name: 'Snack Match',
    tagline: 'Triple-Tile Food Match',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['match3', 'puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#f94144', '#f3722c', '#f9c74f'],
    icon: 'stack',
    cover: 'assets/appicon-snackmatch.png',
    media: [
      { type: 'image', src: 'assets/snackmatch-gameplay-1.jpg' },
      { type: 'image', src: 'assets/snackmatch-gameplay-2.jpg' },
      { type: 'image', src: 'assets/snackmatch-gameplay-3.jpg' },
      { type: 'image', src: 'assets/snackmatch-gameplay-4.jpg' },
    ],
  },

  // ── 16 ─────────────────────────────────────────────────────
  {
    id: 'tile-match',
    links: { ios: 'https://apps.apple.com/us/app/zen-match-makeover-tile-club/id6450911652?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.tilematch.tripletile&hl=vi' },
    name: 'Tile Match',
    tagline: 'Triple-Tile Puzzle',
    year: '2023',
    platforms: ['iOS', 'AOS'],
    genres: ['match3', 'puzzle', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implemented tile-selection logic with layered stacking and occlusion, tile stack shifting and merge animation logic',
      'Built the hint and shuffle systems using greedy-search solver',
      'Implemented meta and liveOps events, monetization',
    ],
    palette: ['#3a86ff', '#ffbe0b', '#fb5607'],
    icon: 'tri',
    cover: 'assets/appicon-tilematch.png',
    media: [
      { type: 'image', src: 'assets/tilematch-gameplay-1.jpg' },
      { type: 'image', src: 'assets/tilematch-gameplay-2.jpg' },
      { type: 'image', src: 'assets/tilematch-gameplay-3.jpg' },
      { type: 'image', src: 'assets/tilematch-gameplay-4.jpg' },
      { type: 'image', src: 'assets/tilematch-gameplay-5.jpg' },
      { type: 'image', src: 'assets/tilematch-gameplay-6.jpg' },
    ],
  },

  // ── 17 ─────────────────────────────────────────────────────
  {
    id: 'watermelon',
    links: { ios: 'https://apps.apple.com/us/app/game-d%C6%B0a-h%E1%BA%A5u-gh%C3%A9p-tr%C3%A1i-c%C3%A2y/id6471638938?l=vi' },
    name: 'Watermelon',
    tagline: 'Fruit Drop Merge',
    year: '2024',
    platforms: ['iOS', 'AOS', 'Facebook'],
    genres: ['merge', 'casual'],
    role: 'Core Gameplay · Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust', 'Luna Playable', 'PlayFab'],
    bullets: [
      'Implemented the drop-and-merge chain logic with evolution visuals',
      'Tuned and optimized 2D physics parameters for satisfying drop-feel across devices',
      'Built the high-score leaderboard and social-share screenshot flow',
    ],
    palette: ['#52b788', '#95d5b2', '#d8f3dc'],
    icon: 'drop',
    cover: 'assets/appicon-watermelon.png',
    media: [
      { type: 'image', src: 'assets/watermelon-gameplay-1.jpg' },
      { type: 'image', src: 'assets/watermelon-gameplay-2.jpg' },
      { type: 'image', src: 'assets/watermelon-gameplay-3.jpg' },
      { type: 'image', src: 'assets/watermelon-gameplay-4.jpg' },
    ],
  },

  // ── 18 ─────────────────────────────────────────────────────

  // ── 19 ─────────────────────────────────────────────────────
  {
    id: 'woody-jam-3d',
    links: { ios: 'https://apps.apple.com/us/app/woody-jam-color-block-puzzle/id6744888905?l=vi', aos: 'https://play.google.com/store/apps/details?id=wood.color.slide.block.puzzle.escape&hl=en' },
    name: 'Woody Jam 3D',
    tagline: '3D Plank Unblock Puzzle',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#c77dff', '#7b2d8b', '#e0aaff'],
    icon: 'cube',
    cover: 'assets/appicon-woody3d.png',
    media: [
      { type: 'image', src: 'assets/woody3d-gameplay-1.jpg' },
      { type: 'image', src: 'assets/woody3d-gameplay-2.jpg' },
      { type: 'image', src: 'assets/woody3d-gameplay-3.jpg' },
      { type: 'image', src: 'assets/woody3d-gameplay-4.jpg' },
      { type: 'image', src: 'assets/woody3d-gameplay-5.jpg' },
      { type: 'image', src: 'assets/woody3d-gameplay-6.jpg' },
      { type: 'video', src: 'assets/woody3d-gameplay-video.mp4' },
    ],
  },

  // ── 20 ─────────────────────────────────────────────────────
  {
    id: 'wool-2d',
    links: { ios: 'https://apps.apple.com/us/app/wool-out-color-yarn-puzzle/id6747382365?l=vi', aos: 'https://play.google.com/store/apps/details?id=wool.sort.out.thread.knit.painting' },
    name: 'Wool 2D',
    tagline: 'Yarn Tangle Puzzle',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#e63946', '#a8dadc', '#1d3557'],
    icon: 'lane',
    cover: 'assets/appicon-wool2d.png',
    media: [
      { type: 'image', src: 'assets/wool2d-gameplay-1.jpg' },
      { type: 'image', src: 'assets/wool2d-gameplay-2.jpg' },
      { type: 'image', src: 'assets/wool2d-gameplay-3.jpg' },
      { type: 'image', src: 'assets/wool2d-gameplay-4.jpg' },
      { type: 'image', src: 'assets/wool2d-gameplay-5.jpg' },
      { type: 'image', src: 'assets/wool2d-gameplay-6.jpg' },
    ],
  },

  // ── 21 ─────────────────────────────────────────────────────
  {
    id: 'fruit-shooter',
    name: 'Fruit Shooter',
    tagline: 'Aim & Blast Fruits',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['casual', 'puzzle'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#f77f00', '#fcbf49', '#d62828'],
    icon: 'drop',
    cover: 'assets/appicon-fruitshooter.png',
    media: [
      { type: 'image', src: 'assets/fruitshooter-gameplay-1.jpg' },
      { type: 'image', src: 'assets/fruitshooter-gameplay-2.jpg' },
      { type: 'image', src: 'assets/fruitshooter-gameplay-3.jpg' },
      { type: 'image', src: 'assets/fruitshooter-gameplay-4.jpg' },
      { type: 'image', src: 'assets/fruitshooter-gameplay-5.jpg' },
    ],
  },

  // ── 22 ─────────────────────────────────────────────────────
  {
    id: 'screw-puzzle',
    links: { ios: 'https://apps.apple.com/us/app/gi%E1%BA%A3i-%C4%91%E1%BB%91-th%C3%A1o-g%E1%BB%97-%C4%91inh-v%C3%A0-%E1%BB%91c-v%C3%ADt/id6498714673?l=vi', aos: 'https://play.google.com/store/apps/details?id=leogame.screw.puzzle&hl=en' },
    name: 'Screw Puzzle',
    tagline: 'Unscrew & Sort Bolts',
    year: '2024',
    platforms: ['iOS', 'AOS'],
    genres: ['puzzle', 'casual'],
    role: 'Live Ops · Monetization · Meta',
    stack: ['Unity', 'C#', 'Firebase', 'Applovin', 'Adjust'],
    bullets: [
      'Implemented the screw-removal mechanic with layered board logic',
      'Built a constraint solver to validate puzzle solvability at generation time',
      'Designed haptic and audio feedback pipeline for satisfying unscrewing feel',
      'Implement meta layer and live ops event',
      'Implement tracking event, monetization SDKs',
    ],
    palette: ['#4a4e69', '#9a8c98', '#c9ada7'],
    icon: 'build',
    cover: 'assets/appicon-screwpuzzle.png',
    media: [
      { type: 'image', src: 'assets/screwpuzzle-gameplay-1.jpg' },
      { type: 'image', src: 'assets/screwpuzzle-gameplay-2.jpg' },
      { type: 'image', src: 'assets/screwpuzzle-gameplay-3.jpg' },
      { type: 'image', src: 'assets/screwpuzzle-gameplay-4.jpg' },
      { type: 'image', src: 'assets/screwpuzzle-gameplay-5.jpg' },
    ],
  },

  // ── 23 ─────────────────────────────────────────────────────
  {
    id: 'what-the-ship',
    links: { itch: 'https://cqtuan.itch.io/what-the-ship' },
    name: 'What The Ship',
    tagline: 'Funny Game Jam',
    year: '2025',
    platforms: ['iOS', 'AOS', 'Itch.io'],
    genres: ['puzzle', 'casual'],
    role: 'Core Gameplay · Game Designer',
    stack: ['Unity', 'C#'],
    bullets: [
      'Internal game jam project — 1st Place Winner',
      'Implement core gameplay mechanics',
      'Implement 5+ different gameplay mechanisms',
      'Draw level design idea',
      'Building APK, deploy to Itch.io',
    ],
    palette: ['#023e8a', '#0096c7', '#caf0f8'],
    icon: 'lane',
    cover: 'assets/whattheship-gameplay-1.png',
    media: [
      { type: 'image', src: 'assets/whattheship-gameplay-1.png' },
      { type: 'image', src: 'assets/whattheship-gameplay-2.png' },
      { type: 'image', src: 'assets/whattheship-gameplay-3.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-4.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-5.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-6.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-7.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-8.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-9.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-10.jpg' },
      { type: 'image', src: 'assets/whattheship-gameplay-11.jpg' },
    ],
  },
];

// =============================================================
// Procedural "phone screenshot" generator — kept as fallback
// for any entry that doesn't have a real media array.
// =============================================================
window.renderScreenshot = function(g, variant) {
  const [c1, c2, c3] = g.palette;
  const W = 360, H = 780;
  const seed = g.id.split('').reduce((a,c) => a + c.charCodeAt(0), 0);

  let body = '';
  if (variant === 'title') {
    body = `
      <rect width="${W}" height="${H}" fill="${c3}"/>
      <circle cx="${W/2}" cy="${H*0.35}" r="${W*0.3}" fill="${c1}"/>
      <circle cx="${W/2}" cy="${H*0.35}" r="${W*0.22}" fill="${c2}" opacity="0.9"/>
      <text x="${W/2}" y="${H*0.6}" text-anchor="middle" font-family="Space Grotesk" font-size="38" font-weight="700" fill="#fff" letter-spacing="-1">${g.name.toUpperCase()}</text>
      <text x="${W/2}" y="${H*0.65}" text-anchor="middle" font-family="Space Grotesk" font-size="14" fill="#fff" opacity="0.7" letter-spacing="2">${g.tagline.toUpperCase()}</text>
      <rect x="${W/2 - 80}" y="${H*0.78}" width="160" height="48" rx="24" fill="${c1}"/>
      <text x="${W/2}" y="${H*0.78 + 31}" text-anchor="middle" font-family="Space Grotesk" font-size="18" font-weight="600" fill="#fff">PLAY</text>
    `;
  } else if (variant === 'gameplay') {
    const cols = 5, rows = 7, cellW = (W - 40) / cols, cellH = cellW, boardY = 140, tiles = [];
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const col = [c1, c2, c3][(r * cols + c + seed) % 3];
      tiles.push(`<rect x="${20 + c * cellW + 3}" y="${boardY + r * cellH + 3}" width="${cellW-6}" height="${cellH-6}" rx="8" fill="${col}"/>`);
    }
    body = `
      <rect width="${W}" height="${H}" fill="${c3}" opacity="0.9"/>
      <rect width="${W}" height="${H}" fill="#0a0a0e" opacity="0.2"/>
      <rect x="20" y="40" width="${W-40}" height="56" rx="12" fill="rgba(0,0,0,0.4)"/>
      <text x="40" y="75" font-family="Space Grotesk" font-size="22" font-weight="700" fill="#fff">LVL ${(seed%30)+1}</text>
      ${tiles.join('')}
    `;
  } else if (variant === 'ui') {
    body = `
      <rect width="${W}" height="${H}" fill="${c2}"/>
      <rect x="0" y="0" width="${W}" height="120" fill="${c3}"/>
      <text x="${W/2}" y="95" text-anchor="middle" font-family="Space Grotesk" font-size="32" font-weight="700" fill="#fff">COINS 12,450</text>
    `;
  } else {
    body = `
      <rect width="${W}" height="${H}" fill="${c1}"/>
      <text x="${W/2}" y="${H*0.3}" text-anchor="middle" font-family="Space Grotesk" font-size="48" font-weight="700" fill="#fff" letter-spacing="-1">VICTORY!</text>
    `;
  }

  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;display:block;">${body}</svg>`;
};

// =============================================================
// Procedural cover-art generator — used only when g.cover is absent.
// =============================================================
window.renderCover = function(g, large = false) {
  const [c1, c2, c3] = g.palette;
  const size = large ? 512 : 360;
  const seed = g.id.split('').reduce((a,c) => a + c.charCodeAt(0), 0);

  const bgVariant = seed % 4;
  let bg = '';
  if (bgVariant === 0) {
    bg = `<rect width="${size}" height="${size}" fill="${c1}"/>
          <circle cx="${size*0.75}" cy="${size*0.25}" r="${size*0.5}" fill="${c2}" opacity="0.8"/>`;
  } else if (bgVariant === 1) {
    bg = `<rect width="${size}" height="${size}" fill="${c3}"/>
          <polygon points="0,0 ${size},0 0,${size}" fill="${c1}"/>
          <polygon points="${size},0 ${size},${size} ${size*0.3},${size}" fill="${c2}" opacity="0.7"/>`;
  } else if (bgVariant === 2) {
    bg = `<defs><linearGradient id="g${g.id}" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
          </linearGradient></defs>
          <rect width="${size}" height="${size}" fill="url(#g${g.id})"/>`;
  } else {
    bg = `<rect width="${size}" height="${size}" fill="${c2}"/>
          ${Array.from({length:5},(_,i)=>`<circle cx="${(seed*7+i*83)%size}" cy="${(seed*11+i*47)%size}" r="${size*0.12}" fill="${c1}" opacity="${0.3+i*0.1}"/>`).join('')}`;
  }

  const cx = size/2, cy = size/2;
  const icons = {
    car: `<g transform="translate(${cx},${cy})"><rect x="-80" y="-25" width="160" height="50" rx="12" fill="${c3}"/><rect x="-60" y="-45" width="120" height="30" rx="10" fill="${c3}"/><circle cx="-50" cy="30" r="22" fill="#111"/><circle cx="50" cy="30" r="22" fill="#111"/><circle cx="-50" cy="30" r="10" fill="#fff"/><circle cx="50" cy="30" r="10" fill="#fff"/></g>`,
    hex: `<g transform="translate(${cx},${cy})"><polygon points="0,-70 60,-35 60,35 0,70 -60,35 -60,-35" fill="${c3}"/><polygon points="0,-50 42,-25 42,25 0,50 -42,25 -42,-25" fill="${c1}" opacity="0.9"/><polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="${c2}"/></g>`,
    home: `<g transform="translate(${cx},${cy})"><polygon points="0,-70 80,0 60,0 60,60 -60,60 -60,0 -80,0" fill="${c3}"/><rect x="-20" y="10" width="40" height="50" fill="${c1}"/><rect x="-45" y="-5" width="25" height="25" fill="${c2}"/><rect x="20" y="-5" width="25" height="25" fill="${c2}"/></g>`,
    bus: `<g transform="translate(${cx},${cy})"><rect x="-75" y="-45" width="150" height="80" rx="14" fill="${c3}"/><rect x="-65" y="-35" width="35" height="30" fill="${c2}"/><rect x="-20" y="-35" width="35" height="30" fill="${c2}"/><rect x="25" y="-35" width="35" height="30" fill="${c2}"/><circle cx="-45" cy="40" r="16" fill="#111"/><circle cx="45" cy="40" r="16" fill="#111"/></g>`,
    dog: `<g transform="translate(${cx},${cy})"><circle r="55" fill="${c3}"/><ellipse cx="-35" cy="-45" rx="22" ry="30" fill="${c3}"/><ellipse cx="35" cy="-45" rx="22" ry="30" fill="${c3}"/><circle cx="-20" cy="-5" r="6" fill="#fff"/><circle cx="20" cy="-5" r="6" fill="#fff"/><circle cx="0" cy="18" r="10" fill="#111"/></g>`,
    run: `<g transform="translate(${cx},${cy})"><circle cx="0" cy="-50" r="18" fill="${c3}"/><rect x="-8" y="-32" width="16" height="40" rx="6" fill="${c3}"/></g>`,
    tri: `<g transform="translate(${cx},${cy})"><polygon points="0,-60 52,30 -52,30" fill="${c3}"/><polygon points="0,-30 26,15 -26,15" fill="${c1}"/></g>`,
    shield: `<g transform="translate(${cx},${cy})"><path d="M 0,-70 L 60,-50 L 55,30 C 55,50 30,65 0,75 C -30,65 -55,50 -55,30 L -60,-50 Z" fill="${c3}"/></g>`,
    block: `<g transform="translate(${cx},${cy})">${Array.from({length:9},(_,i)=>`<rect x="${((i%3)-1)*35-14}" y="${(Math.floor(i/3)-1)*35-14}" width="28" height="28" rx="5" fill="${[c1,c2,c3][i%3]}"/>`).join('')}</g>`,
    drop: `<g transform="translate(${cx},${cy})"><path d="M 0,-65 C -40,-20 -45,10 -45,25 C -45,55 -22,75 0,75 C 22,75 45,55 45,25 C 45,10 40,-20 0,-65 Z" fill="${c3}"/><ellipse cx="-15" cy="10" rx="10" ry="15" fill="${c1}" opacity="0.6"/></g>`,
    pin: `<g transform="translate(${cx},${cy})"><circle cx="0" cy="-30" r="25" fill="${c3}"/><rect x="-4" y="-10" width="8" height="60" fill="${c3}"/><polygon points="-15,50 15,50 0,70" fill="${c3}"/></g>`,
    crowd: `<g transform="translate(${cx},${cy})">${[-1,0,1].map(i=>`<circle cx="${i*35}" cy="-30" r="14" fill="${c3}"/><rect x="${i*35-10}" y="-15" width="20" height="35" rx="6" fill="${c3}"/>`).join('')}</g>`,
    lane: `<g transform="translate(${cx},${cy})"><rect x="-60" y="-80" width="120" height="160" fill="${c3}"/><rect x="-6" y="-80" width="12" height="30" fill="#fff"/><rect x="-6" y="-30" width="12" height="30" fill="#fff"/><rect x="-6" y="20" width="12" height="30" fill="#fff"/></g>`,
    stack: `<g transform="translate(${cx},${cy})"><rect x="-50" y="20" width="100" height="25" rx="4" fill="${c3}"/><rect x="-40" y="-5" width="80" height="25" rx="4" fill="${c1}"/><rect x="-30" y="-30" width="60" height="25" rx="4" fill="${c2}"/></g>`,
    build: `<g transform="translate(${cx},${cy})"><rect x="-60" y="-40" width="30" height="80" fill="${c3}"/><rect x="-25" y="-60" width="30" height="100" fill="${c3}"/><rect x="10" y="-30" width="30" height="70" fill="${c3}"/></g>`,
    blade: `<g transform="translate(${cx},${cy})"><polygon points="0,-65 15,-30 0,50 -15,-30" fill="${c3}"/><rect x="-15" y="45" width="30" height="35" rx="6" fill="${c1}"/></g>`,
    park: `<g transform="translate(${cx},${cy})"><rect x="-70" y="-70" width="140" height="140" fill="${c3}" opacity="0.3"/><rect x="-35" y="-20" width="35" height="55" rx="6" fill="${c1}"/></g>`,
    pencil: `<g transform="translate(${cx},${cy}) rotate(-30)"><rect x="-8" y="-55" width="16" height="90" fill="${c3}"/><polygon points="-8,35 8,35 0,55" fill="${c1}"/></g>`,
    cube: `<g transform="translate(${cx},${cy})"><polygon points="0,-55 50,-25 50,35 0,65 -50,35 -50,-25" fill="${c3}"/><polygon points="0,-55 50,-25 0,5 -50,-25" fill="${c1}"/><polygon points="0,5 50,-25 50,35 0,65" fill="${c2}"/></g>`,
    paw: `<g transform="translate(${cx},${cy})"><circle cx="-30" cy="-25" r="14" fill="${c3}"/><circle cx="30" cy="-25" r="14" fill="${c3}"/><circle cx="-50" cy="10" r="12" fill="${c3}"/><circle cx="50" cy="10" r="12" fill="${c3}"/><ellipse cx="0" cy="25" rx="32" ry="28" fill="${c3}"/></g>`,
    chess: `<g transform="translate(${cx},${cy})"><rect x="-45" y="55" width="90" height="18" rx="4" fill="${c3}"/><rect x="-28" y="34" width="56" height="23" rx="3" fill="${c3}"/><path d="M -28,35 L -38,-8 L -12,12 L 0,-28 L 12,12 L 38,-8 L 28,35 Z" fill="${c3}"/><rect x="-6" y="-54" width="12" height="28" fill="${c3}"/><rect x="-17" y="-44" width="34" height="10" fill="${c3}"/></g>`,
    word: `<g transform="translate(${cx},${cy})"><rect x="-60" y="-20" width="35" height="35" rx="4" fill="${c3}"/><rect x="-18" y="-20" width="35" height="35" rx="4" fill="${c3}"/><rect x="24" y="-20" width="35" height="35" rx="4" fill="${c3}"/></g>`,
  };

  const icon = icons[g.icon] || `<text x="${cx}" y="${cy+20}" text-anchor="middle" font-family="Space Grotesk" font-size="72" font-weight="600" fill="${c3}">${g.name.charAt(0)}</text>`;
  return `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">${bg}${icon}</svg>`;
};
