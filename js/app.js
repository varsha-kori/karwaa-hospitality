/**
 * KARWAA HOSPITALITY PVT. LTD. (A unit of MCS Associates)
 * Client-Side Single Page Application Engine
 */

(function () {
  'use strict';

  /* ===================================================================
     1. DESTINATIONS & PACKAGES DATA
     =================================================================== */
  const PACKAGES_DATA = [
    {
      id: 'kerala-getaway',
      name: 'Kerala Getaway',
      price: '₹12,999',
      duration: '4N/5D',
      location: 'Kerala',
      category: 'Backwaters',
      rating: 4.9,
      inclusions: ['Hotels', 'Breakfast', 'Houseboat', 'Transfers'],
      description: 'Glide along the serene palm-fringed backwaters of Alleppey in a traditional kettuvallam and explore fragrant spice hills.',
      itinerary: [
        'Day 1: Arrival in Cochin & Scenic transfer to Munnar tea plantations',
        'Day 2: Munnar sightseeing - Mattupetty Dam, Tea Museum & Echo Point',
        'Day 3: Transfer to Alleppey & Deluxe Houseboat cruise with backwater dinner',
        'Day 4: Kumarakom backwater bird reserve & Cochin heritage walk',
        'Day 5: Cochin Dutch Palace & departure transfer'
      ],
      palette: ['#0A3828', '#145A32', '#52BE80', '#F9E79F']
    },
    {
      id: 'himachal-escape',
      name: 'Himachal Escape',
      price: '₹15,999',
      duration: '5N/6D',
      location: 'Himachal Pradesh',
      category: 'Mountains',
      rating: 4.8,
      inclusions: ['Hotels', 'Breakfast', 'Sightseeing', 'Private Cab'],
      description: 'Wake up to mist-cloaked pine valleys, panoramic Himalayan snow peaks, Solang thrills, and charming wooden chalets.',
      itinerary: [
        'Day 1: Delhi to Shimla mountain drive & Mall Road stroll',
        'Day 2: Kufri cedar forests, Himalayan nature park & Jakhoo temple',
        'Day 3: Scenic journey through Kullu Valley to Manali',
        'Day 4: Solang Valley snow activities & Atal Tunnel excursion',
        'Day 5: Old Manali cafes, Hadimba temple & Vashisht hot springs',
        'Day 6: Breakfast & return transfer to Delhi'
      ],
      palette: ['#1A365D', '#2B6CB0', '#63B3ED', '#FAF089']
    },
    {
      id: 'goa-beach-holiday',
      name: 'Goa Beach Holiday',
      price: '₹13,999',
      duration: '4N/5D',
      location: 'Goa',
      category: 'Beaches',
      rating: 4.9,
      inclusions: ['Beach Resort', 'Breakfast', 'Sunset Cruise', 'Airport Cab'],
      description: 'Sun-drenched golden beaches, Latin quarter architecture, water sports, and tranquil sundowners by the Arabian Sea.',
      itinerary: [
        'Day 1: Arrival & check-in at North Goa luxury beach resort',
        'Day 2: Fort Aguada, Candolim water sports & Anjuna flea stroll',
        'Day 3: South Goa heritage churches, Fontainhas walk & Mandovi sunset cruise',
        'Day 4: Palolem secluded beach day or Dudhsagar waterfall safari',
        'Day 5: Souvenir shopping & departure transfer'
      ],
      palette: ['#1A4731', '#1976D2', '#00BCD4', '#FFE082']
    },
    {
      id: 'rajasthan-royal-tour',
      name: 'Rajasthan Royal Tour',
      price: '₹18,999',
      duration: '5N/6D',
      location: 'Rajasthan',
      category: 'Heritage',
      rating: 4.9,
      inclusions: ['Heritage Haveli', 'Breakfast', 'Desert Safari', 'Fort Tours'],
      description: 'Step into royal Rajputana courtyards, majestic amber forts, sunset camel safaris across Thar dunes, and regal feasts.',
      itinerary: [
        'Day 1: Welcome to Jaipur (The Pink City) & evening Chokhi Dhani dinner',
        'Day 2: Amber Fort elephant/jeep ride, City Palace & Hawa Mahal',
        'Day 3: Highway route to Jodhpur - Mehrangarh Fort & Jaswant Thada',
        'Day 4: Jaisalmer Golden Fort & Sam Sand Dunes desert camping',
        'Day 5: Thar desert folk dance, campfire & camel caravan trek',
        'Day 6: Breakfast & departure transfer to Jodhpur airport'
      ],
      palette: ['#4A2E10', '#8C4A1E', '#D97706', '#FDE68A']
    },
    {
      id: 'maldives-honeymoon',
      name: 'Maldives Honeymoon',
      price: '₹45,999',
      duration: '5N/6D',
      location: 'Maldives',
      category: 'Islands',
      rating: 5.0,
      inclusions: ['Overwater Villa', 'All Meals', 'Speedboat', 'Snorkeling'],
      description: 'Crystal-clear turquoise atolls, private stilt villa sundecks, coral reef snorkeling, and candlelit oceanside dinners.',
      itinerary: [
        'Day 1: Male arrival & scenic speedboat transfer to luxury private island',
        'Day 2: Check-in to Overwater Villa, lagoon swim & champagne sunset',
        'Day 3: Guided house reef snorkeling & encounters with sea turtles',
        'Day 4: Rejuvenating couples spa & starlight private sandbank dining',
        'Day 5: Sunset dolphin cruise & water sports adventures',
        'Day 6: Breakfast over the ocean & speedboat back to Male airport'
      ],
      palette: ['#044343', '#007A78', '#20B2AA', '#A7F3D0']
    },
    {
      id: 'manali-snow-trail',
      name: 'Manali Snow Trail',
      price: '₹14,499',
      duration: '4N/5D',
      location: 'Himachal Pradesh',
      category: 'Mountains',
      rating: 4.7,
      inclusions: ['Resort', 'Breakfast & Dinner', 'Snow Points', 'Campfire'],
      description: 'Alpine pine forests, thrilling Rohtang pass snow slopes, roaring Beas riverbanks, and cozy wooden mountain cottages.',
      itinerary: [
        'Day 1: Scenic arrival in Manali & riverside lodge check-in',
        'Day 2: Rohtang Pass / Snow Viewpoint expedition & ski basics',
        'Day 3: Naggar Castle heritage visit & traditional Kullu shawl weaving',
        'Day 4: Solang paragliding, zip-lining & evening outdoor bonfire',
        'Day 5: Morning apple orchard stroll & departure transfer'
      ],
      palette: ['#1C2D42', '#3B597B', '#8AB4F8', '#E2E8F0']
    },
    {
      id: 'andaman-island-escape',
      name: 'Andaman Island Escape',
      price: '₹24,999',
      duration: '5N/6D',
      location: 'Port Blair & Havelock',
      category: 'Islands',
      rating: 4.9,
      inclusions: ['Beach Hotel', 'Breakfast', 'Ferry Tickets', 'Radhanagar Tour'],
      description: 'Vibrant coral reefs, historical Cellular Jail light show, emerald rainforests, and world-acclaimed Radhanagar sunsets.',
      itinerary: [
        'Day 1: Port Blair touchdown, Cellular Jail tour & sound-and-light show',
        'Day 2: Premium Catamaran cruise to Havelock Island & Radhanagar Beach',
        'Day 3: Elephant Beach excursion with glass-bottom boat & snorkeling',
        'Day 4: Neil Island transit - Bharatpur beach & natural rock bridge',
        'Day 5: Return to Port Blair & local Chidiya Tapu sunset spot',
        'Day 6: Airport drop for onward journey'
      ],
      palette: ['#063940', '#195E63', '#3FB0AC', '#FFE79A']
    },
    {
      id: 'udaipur-lakeside-tour',
      name: 'Udaipur Lakeside Tour',
      price: '₹16,999',
      duration: '3N/4D',
      location: 'Udaipur, Rajasthan',
      category: 'Heritage',
      rating: 4.8,
      inclusions: ['Lakeview Hotel', 'Breakfast', 'Boat Ride', 'Palace Passes'],
      description: 'Romantic Lake Pichola boat cruises, towering City Palace marble domes, Jagdish temple, and panoramic Monsoon Palace views.',
      itinerary: [
        'Day 1: Arrival in Udaipur & sunset motorboat cruise around Jag Mandir',
        'Day 2: Grand City Palace tour, crystal gallery & Saheliyon-ki-Bari',
        'Day 3: Sajjangarh Monsoon Palace hilltop vista & Bagore Ki Haveli show',
        'Day 4: Lake Fateh Sagar stroll & departure'
      ],
      palette: ['#422006', '#78350F', '#B45309', '#FDE68A']
    },
    {
      id: 'munnar-hills-retreat',
      name: 'Munnar Hills Retreat',
      price: '₹11,999',
      duration: '3N/4D',
      location: 'Munnar, Kerala',
      category: 'Mountains',
      rating: 4.8,
      inclusions: ['Hill Resort', 'Breakfast', 'Tea Museum', 'Echo Point Cab'],
      description: 'Endless rolling emerald tea plantations, crisp mist, cascading Cheeyappara waterfalls, and exotic spice garden trails.',
      itinerary: [
        'Day 1: Scenic mountain climb through Valara waterfalls to Munnar',
        'Day 2: Tata Tea Museum, Mattupetty Lake & Kundala Dam boat ride',
        'Day 3: Eravikulam National Park (Nilgiri Tahr habitat) & Top Station view',
        'Day 4: Spices shopping & Cochin drop'
      ],
      palette: ['#064E3B', '#047857', '#34D399', '#A7F3D0']
    },
    {
      id: 'bali-island-getaway',
      name: 'Bali Island Getaway',
      price: '₹39,999',
      duration: '5N/6D',
      location: 'Bali, Indonesia',
      category: 'Beaches',
      rating: 4.9,
      inclusions: ['Pool Villa', 'Breakfast', 'Temple Tour', 'Island Transfers'],
      description: 'Cliffside Uluwatu sea temples, Ubud lush jungle rice terraces, mystical water purification springs, and vibrant Seminyak shores.',
      itinerary: [
        'Day 1: Denpasar arrival & private pool villa check-in in Seminyak',
        'Day 2: Ubud cultural tour - Tegalalang rice terraces & Sacred Monkey Forest',
        'Day 3: Kintamani volcano view & Tirta Empul holy spring water blessing',
        'Day 4: Nusa Penida day trip to Kelingking T-Rex beach & Angel Billabong',
        'Day 5: Uluwatu cliff temple & mesmerizing Kecak fire dance at sunset',
        'Day 6: Balinese spa therapy & transfer to airport'
      ],
      palette: ['#1B3B36', '#2F665D', '#68B0AB', '#FFD166']
    }
  ];

  /* ===================================================================
     2. GALLERY DESTINATIONS DATA
     =================================================================== */
  const GALLERY_DATA = [
    {
      id: 'gal-1',
      title: 'Alleppey Backwaters',
      category: 'Backwaters',
      location: 'Kerala, India',
      className: 'tile-wide',
      description: 'Drifting along peaceful palm-fringed channels on traditional luxury wooden houseboats.',
      theme: 'backwaters'
    },
    {
      id: 'gal-2',
      title: 'Snowy Solang Valley',
      category: 'Mountains',
      location: 'Himachal Pradesh',
      className: 'tile-tall',
      description: 'Crisp alpine winter wonderland surrounded by towering cedar trees and snow-capped peaks.',
      theme: 'snow'
    },
    {
      id: 'gal-3',
      title: 'Palolem Sunset Beach',
      category: 'Beaches',
      location: 'South Goa',
      className: '',
      description: 'Golden hour waves gently rolling onto pristine white sand lined with leaning coconut palms.',
      theme: 'beach'
    },
    {
      id: 'gal-4',
      title: 'Udaipur City Palace',
      category: 'Heritage',
      location: 'Udaipur, Rajasthan',
      className: '',
      description: 'Majestic Rajput royal architecture reflecting gracefully onto the tranquil waters of Lake Pichola.',
      theme: 'palace'
    },
    {
      id: 'gal-5',
      title: 'Overwater Maldives Atoll',
      category: 'Islands',
      location: 'Baa Atoll, Maldives',
      className: 'tile-wide',
      description: 'Private thatched stilt villas floating over vibrant turquoise coral lagoons under sunny skies.',
      theme: 'maldives'
    },
    {
      id: 'gal-6',
      title: 'Munnar Emerald Hills',
      category: 'Mountains',
      location: 'Munnar, Kerala',
      className: '',
      description: 'Rolling carpet of manicured green tea plantations veiled in early morning highland mist.',
      theme: 'tea'
    },
    {
      id: 'gal-7',
      title: 'Sam Sand Dunes',
      category: 'Heritage',
      location: 'Jaisalmer, Rajasthan',
      className: '',
      description: 'Camel caravan silhouetted against glowing golden dunes during a desert sunset safari.',
      theme: 'desert'
    },
    {
      id: 'gal-8',
      title: 'Radhanagar White Haven',
      category: 'Islands',
      location: 'Havelock Island, Andaman',
      className: 'tile-tall',
      description: 'Voted one of Asia\'s most breathtaking beaches with crystal turquoise waters and tropical forest edge.',
      theme: 'andaman'
    },
    {
      id: 'gal-9',
      title: 'Uluwatu Ocean Cliff',
      category: 'Beaches',
      location: 'Bali, Indonesia',
      className: '',
      description: 'Crashing turquoise swells against dramatic ocean limestone cliffs during golden hour.',
      theme: 'bali'
    }
  ];

  /* ===================================================================
     3. VECTOR ARTWORK GENERATORS (Pure SVG - zero external images!)
     =================================================================== */
  function generateDestinationSvg(theme, title) {
    switch (theme) {
      case 'Backwaters':
      case 'backwaters':
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-bw-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDE8CD"/>
                <stop offset="60%" stop-color="#FCD34D"/>
                <stop offset="100%" stop-color="#F59E0B"/>
              </linearGradient>
              <linearGradient id="water-bw-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#145A32"/>
                <stop offset="100%" stop-color="#0B3C20"/>
              </linearGradient>
              <linearGradient id="boat-bw-${title}" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#78350F"/>
                <stop offset="100%" stop-color="#B45309"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-bw-${title})"/>
            <circle cx="480" cy="120" r="48" fill="#FFFBEB" opacity="0.9"/>
            <!-- Distant hills -->
            <path d="M0,230 Q150,180 300,220 T600,200 L600,400 L0,400 Z" fill="#2D5A27" opacity="0.6"/>
            <!-- Palm tree silhouettes -->
            <path d="M40,240 Q70,160 110,130 Q120,135 90,170 Q60,200 50,240 Z" fill="#143D19"/>
            <circle cx="110" cy="130" r="28" fill="#143D19"/>
            <path d="M110,130 Q60,110 30,120 M110,130 Q80,80 70,50 M110,130 Q130,70 150,60 M110,130 Q170,100 190,120" stroke="#143D19" stroke-width="4" stroke-linecap="round"/>
            <!-- Water -->
            <rect y="240" width="600" height="160" fill="url(#water-bw-${title})"/>
            <!-- Water ripples -->
            <line x1="80" y1="270" x2="220" y2="270" stroke="#4ADE80" stroke-width="2" opacity="0.4"/>
            <line x1="320" y1="310" x2="480" y2="310" stroke="#4ADE80" stroke-width="2" opacity="0.3"/>
            <!-- Houseboat kettuvallam -->
            <g transform="translate(180, 260)">
              <ellipse cx="120" cy="40" rx="110" ry="16" fill="url(#boat-bw-${title})"/>
              <!-- Thatch roof canopy -->
              <path d="M40,36 Q120,0 200,36 Z" fill="#D97706"/>
              <path d="M50,36 L50,25 M190,36 L190,25" stroke="#78350F" stroke-width="3"/>
              <!-- Warm window glow -->
              <rect x="100" y="20" width="40" height="12" rx="4" fill="#FEF3C7"/>
              <!-- Water reflection -->
              <ellipse cx="120" cy="55" rx="70" ry="6" fill="#000000" opacity="0.3"/>
            </g>
          </svg>
        `;

      case 'Mountains':
      case 'snow':
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-mt-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0F172A"/>
                <stop offset="60%" stop-color="#1E3A8A"/>
                <stop offset="100%" stop-color="#60A5FA"/>
              </linearGradient>
              <linearGradient id="snow-grad-${title}" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFFFFF"/>
                <stop offset="100%" stop-color="#BFDBFE"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-mt-${title})"/>
            <!-- Golden sun/moon glow -->
            <circle cx="150" cy="110" r="38" fill="#FDE68A" opacity="0.85"/>
            <!-- Background Mountain Peaks -->
            <polygon points="50,280 200,100 350,280" fill="#1E293B"/>
            <polygon points="200,100 230,150 200,160 170,140" fill="url(#snow-grad-${title})"/>
            <polygon points="220,300 380,80 540,300" fill="#334155"/>
            <polygon points="380,80 420,140 380,155 340,135" fill="url(#snow-grad-${title})"/>
            <polygon points="-50,340 100,160 250,340" fill="#475569"/>
            <!-- Foreground pine trees -->
            <g fill="#0F172A">
              <polygon points="90,380 75,320 85,320 70,270 80,270 65,230 90,230 90,380"/>
              <polygon points="130,400 115,340 125,340 110,290 120,290 105,250 130,250 130,400"/>
              <polygon points="460,400 440,330 450,330 430,270 440,270 420,220 460,220 460,400"/>
              <polygon points="510,400 495,350 505,350 490,300 500,300 485,260 510,260 510,400"/>
            </g>
            <!-- Snow valley base -->
            <path d="M0,330 Q180,310 320,340 T600,320 L600,400 L0,400 Z" fill="#E2E8F0"/>
            <!-- Wooden chalets -->
            <polygon points="260,350 290,330 320,350" fill="#991B1B"/>
            <rect x="270" y="350" width="40" height="25" fill="#78350F"/>
            <rect x="282" y="355" width="12" height="12" fill="#FEF08A"/>
          </svg>
        `;

      case 'Beaches':
      case 'beach':
      case 'bali':
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-beach-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#C2410C"/>
                <stop offset="40%" stop-color="#EA580C"/>
                <stop offset="70%" stop-color="#FBBF24"/>
                <stop offset="100%" stop-color="#FED7AA"/>
              </linearGradient>
              <linearGradient id="sea-beach-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0284C7"/>
                <stop offset="60%" stop-color="#0369A1"/>
                <stop offset="100%" stop-color="#075985"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-beach-${title})"/>
            <!-- Setting sun -->
            <circle cx="320" cy="210" r="54" fill="#FFFBEB" opacity="0.95"/>
            <!-- Ocean -->
            <rect y="220" width="600" height="180" fill="url(#sea-beach-${title})"/>
            <!-- Sun reflection on water -->
            <path d="M300,225 L340,225 L360,400 L280,400 Z" fill="#FDE68A" opacity="0.25"/>
            <!-- Waves -->
            <path d="M0,290 C120,285 180,295 300,290 C420,285 480,295 600,290 L600,400 L0,400 Z" fill="#F4E2C7"/>
            <path d="M0,288 C120,283 180,293 300,288 C420,283 480,293 600,288" stroke="#FFFFFF" stroke-width="3" fill="none" opacity="0.7"/>
            <!-- Palm Tree Silhouette -->
            <g transform="translate(480, 160)">
              <path d="M30,240 Q10,120 -40,30" stroke="#16263F" stroke-width="12" fill="none" stroke-linecap="round"/>
              <path d="M-40,30 Q-120,20 -140,-10 M-40,30 Q-90,-50 -80,-90 M-40,30 Q-20,-70 20,-70 M-40,30 Q40,-40 60,-10 M-40,30 Q10,40 50,70" stroke="#16263F" stroke-width="6" fill="none" stroke-linecap="round"/>
            </g>
            <!-- Sailing boat -->
            <g transform="translate(140, 215)">
              <polygon points="0,0 20,-30 20,0" fill="#FFFFFF"/>
              <polygon points="22,0 36,-24 22,0" fill="#FFFFFF" opacity="0.8"/>
              <path d="M-6,0 L42,0 L32,8 L4,8 Z" fill="#78350F"/>
            </g>
          </svg>
        `;

      case 'Heritage':
      case 'palace':
      case 'desert':
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-her-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#7C2D12"/>
                <stop offset="50%" stop-color="#C2410C"/>
                <stop offset="100%" stop-color="#FBBF24"/>
              </linearGradient>
              <linearGradient id="dunes-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#D97706"/>
                <stop offset="100%" stop-color="#92400E"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-her-${title})"/>
            <!-- Desert Sun -->
            <circle cx="460" cy="110" r="42" fill="#FEF3C7" opacity="0.9"/>
            <!-- Palace / Haveli silhouette -->
            <g fill="#451A03" transform="translate(40, 150)">
              <!-- Fort ramparts -->
              <rect x="0" y="70" width="340" height="80"/>
              <!-- Battlements -->
              <rect x="0" y="60" width="16" height="10"/>
              <rect x="26" y="60" width="16" height="10"/>
              <rect x="52" y="60" width="16" height="10"/>
              <rect x="78" y="60" width="16" height="10"/>
              <rect x="104" y="60" width="16" height="10"/>
              <!-- Central Dome (Chhatri) -->
              <path d="M120,70 Q160,-20 200,70 Z"/>
              <rect x="156" y="-30" width="8" height="15" fill="#C9982F"/>
              <circle cx="160" cy="-32" r="5" fill="#C9982F"/>
              <!-- Side Domes -->
              <path d="M40,70 Q70,10 100,70 Z"/>
              <path d="M220,70 Q250,10 280,70 Z"/>
              <!-- Archways -->
              <path d="M140,150 A20,20 0 0,1 180,150 Z" fill="#F59E0B" opacity="0.6"/>
              <path d="M60,150 A15,15 0 0,1 90,150 Z" fill="#F59E0B" opacity="0.5"/>
              <path d="M230,150 A15,15 0 0,1 260,150 Z" fill="#F59E0B" opacity="0.5"/>
            </g>
            <!-- Rolling desert sand dunes -->
            <path d="M0,280 Q200,240 380,290 T600,260 L600,400 L0,400 Z" fill="url(#dunes-${title})"/>
            <path d="M0,320 Q240,360 480,310 T600,340 L600,400 L0,400 Z" fill="#78350F"/>
            <!-- Camel caravan silhouette -->
            <g transform="translate(420, 280)" fill="#291203">
              <ellipse cx="20" cy="10" rx="14" ry="8"/>
              <ellipse cx="34" cy="-4" rx="4" ry="6"/>
              <path d="M30,-4 Q38,-12 42,-8 Q38,-2 32,2" stroke="#291203" stroke-width="3"/>
              <line x1="12" y1="14" x2="8" y2="34" stroke="#291203" stroke-width="3"/>
              <line x1="26" y1="14" x2="30" y2="34" stroke="#291203" stroke-width="3"/>
              <!-- Rider -->
              <circle cx="20" cy="-2" r="5"/>
            </g>
          </svg>
        `;

      case 'Islands':
      case 'maldives':
      case 'andaman':
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-isl-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#0284C7"/>
                <stop offset="60%" stop-color="#38BDF8"/>
                <stop offset="100%" stop-color="#BAE6FD"/>
              </linearGradient>
              <linearGradient id="lagoon-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#06B6D4"/>
                <stop offset="50%" stop-color="#14B8A6"/>
                <stop offset="100%" stop-color="#0D9488"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-isl-${title})"/>
            <!-- Bright tropical sun -->
            <circle cx="500" cy="90" r="44" fill="#FEF08A" opacity="0.95"/>
            <circle cx="500" cy="90" r="70" fill="#FEF08A" opacity="0.25"/>
            <!-- Distant coral island ring -->
            <ellipse cx="250" cy="220" rx="160" ry="12" fill="#047857"/>
            <g fill="#065F46">
              <ellipse cx="160" cy="210" rx="12" ry="14"/>
              <ellipse cx="200" cy="208" rx="16" ry="18"/>
              <ellipse cx="240" cy="206" rx="14" ry="16"/>
              <ellipse cx="290" cy="212" rx="10" ry="12"/>
            </g>
            <!-- Turquoise Lagoon -->
            <rect y="225" width="600" height="175" fill="url(#lagoon-${title})"/>
            <!-- Overwater Villa Stilt Bungalows -->
            <g transform="translate(80, 240)">
              <!-- Wooden walkway pier -->
              <polygon points="0,50 300,50 320,65 -20,65" fill="#78350F"/>
              <line x1="40" y1="65" x2="40" y2="120" stroke="#451A03" stroke-width="4"/>
              <line x1="120" y1="65" x2="120" y2="120" stroke="#451A03" stroke-width="4"/>
              <line x1="200" y1="65" x2="200" y2="120" stroke="#451A03" stroke-width="4"/>
              <!-- Villa 1 -->
              <rect x="50" y="0" width="70" height="45" fill="#92400E"/>
              <polygon points="40,5 85,-25 130,5" fill="#B45309"/>
              <rect x="70" y="15" width="30" height="30" fill="#FEF3C7"/>
              <!-- Villa 2 -->
              <rect x="170" y="0" width="70" height="45" fill="#92400E"/>
              <polygon points="160,5 205,-25 250,5" fill="#B45309"/>
              <rect x="190" y="15" width="30" height="30" fill="#FEF3C7"/>
            </g>
            <!-- Crystal water sparkles -->
            <ellipse cx="440" cy="330" rx="40" ry="4" fill="#FFFFFF" opacity="0.5"/>
            <ellipse cx="280" cy="360" rx="60" ry="5" fill="#FFFFFF" opacity="0.4"/>
          </svg>
        `;

      case 'tea':
      default:
        return `
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sky-tea-${title}" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#93C5FD"/>
                <stop offset="60%" stop-color="#E0F2FE"/>
                <stop offset="100%" stop-color="#FEF3C7"/>
              </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#sky-tea-${title})"/>
            <circle cx="160" cy="120" r="40" fill="#FDE68A" opacity="0.9"/>
            <!-- Tiered rolling tea terraces -->
            <path d="M0,190 Q150,150 320,180 T600,160 L600,400 L0,400 Z" fill="#15803D" opacity="0.7"/>
            <path d="M0,240 Q220,190 400,230 T600,210 L600,400 L0,400 Z" fill="#166534" opacity="0.9"/>
            <path d="M0,290 Q180,250 360,280 T600,260 L600,400 L0,400 Z" fill="#14532D"/>
            <path d="M0,340 Q260,300 480,330 T600,310 L600,400 L0,400 Z" fill="#052E16"/>
            <!-- Tea bush contour lines -->
            <path d="M0,310 Q180,270 360,300 T600,280" stroke="#22C55E" stroke-width="2" fill="none" opacity="0.5"/>
            <path d="M0,360 Q260,320 480,350 T600,330" stroke="#4ADE80" stroke-width="2" fill="none" opacity="0.4"/>
          </svg>
        `;
    }
  }

  /* ===================================================================
     4. COMPONENT RENDERERS
     =================================================================== */
  function renderPackageCard(pkg) {
    return `
      <div class="package-card" data-category="${pkg.category}" data-id="${pkg.id}">
        <div class="package-visual">
          ${generateDestinationSvg(pkg.category, pkg.id)}
          <span class="package-price-pill">${pkg.price}</span>
          <span class="package-category-pill">${pkg.category}</span>
        </div>
        <div class="package-content">
          <h3 class="package-name">${pkg.name}</h3>
          <div class="package-meta">
            <span class="package-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${pkg.duration}
            </span>
            <span class="package-meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#C9982F" stroke="#C9982F"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ${pkg.rating}
            </span>
          </div>
          <div class="package-inclusions">
            ${pkg.inclusions.map(inc => `<span class="inclusion-tag">${inc}</span>`).join('')}
          </div>
          <div class="package-footer">
            <span class="package-loc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${pkg.location}
            </span>
            <button class="btn-icon-circle view-package-btn" data-id="${pkg.id}" title="View Details & Book" aria-label="View Details for ${pkg.name}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }

  function renderGalleryTile(tile) {
    return `
      <div class="gallery-tile ${tile.className}" data-category="${tile.category}" data-id="${tile.id}">
        ${generateDestinationSvg(tile.theme, tile.id)}
        <div class="gallery-tile-overlay">
          <span class="gallery-tile-category">${tile.category} • ${tile.location}</span>
          <h4 class="gallery-tile-title">${tile.title}</h4>
        </div>
      </div>
    `;
  }

  /* ===================================================================
     5. TOAST NOTIFICATION UTILITY
     =================================================================== */
  function showToast(title, message, duration = 4000) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <div class="toast-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <div class="toast-progress" style="animation-duration: ${duration}ms;"></div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  /* ===================================================================
     6. CLIENT-SIDE ROUTER (Hash Based)
     =================================================================== */
  const VALID_PAGES = ['home', 'about', 'packages', 'services', 'driver', 'gallery', 'contact'];

  function handleRouting() {
    let hash = window.location.hash.replace('#', '').trim().toLowerCase();
    if (!hash || !VALID_PAGES.includes(hash)) {
      hash = 'home';
    }

    // Hide all pages, show target page
    document.querySelectorAll('.page-section').forEach(sec => {
      sec.classList.remove('active');
    });

    const activeSec = document.getElementById(`page-${hash}`);
    if (activeSec) {
      activeSec.classList.add('active');
    }

    // Update active state in nav links (Desktop & Mobile Drawer)
    document.querySelectorAll('.nav-link, .drawer-nav-link').forEach(link => {
      const linkPage = link.getAttribute('data-page');
      if (linkPage === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Close mobile drawer if open
    closeMobileDrawer();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ===================================================================
     7. MOBILE DRAWER HANDLING
     =================================================================== */
  function openMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const hamburger = document.getElementById('hamburger-btn');
    if (drawer) drawer.classList.add('open');
    if (hamburger) hamburger.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    const hamburger = document.getElementById('hamburger-btn');
    if (drawer) drawer.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ===================================================================
     8. DARK / LIGHT THEME TOGGLE
     =================================================================== */
  function initTheme() {
    const savedTheme = localStorage.getItem('karwaa_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme ? savedTheme : (systemPrefersDark ? 'dark' : 'light');

    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeToggleIcons(initialTheme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('karwaa_theme', next);
    updateThemeToggleIcons(next);
    showToast('Theme Updated', `Switched to ${next} mode`);
  }

  function updateThemeToggleIcons(theme) {
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');
    if (!sunIcon || !moonIcon) return;

    if (theme === 'dark') {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }

  /* ===================================================================
     9. PACKAGES & GALLERY FILTERING
     =================================================================== */
  function initCategoryFilters() {
    // Packages Filters
    const packageChips = document.querySelectorAll('.package-filter-chip');
    packageChips.forEach(chip => {
      chip.addEventListener('click', () => {
        packageChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const cat = chip.getAttribute('data-filter');
        filterPackagesCatalog(cat);
      });
    });

    // Gallery Filters
    const galleryChips = document.querySelectorAll('.gallery-filter-chip');
    galleryChips.forEach(chip => {
      chip.addEventListener('click', () => {
        galleryChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const cat = chip.getAttribute('data-filter');
        filterGalleryTiles(cat);
      });
    });
  }

  function filterPackagesCatalog(category) {
    const container = document.getElementById('packages-catalog-grid');
    if (!container) return;

    const cards = container.querySelectorAll('.package-card');
    let visibleCount = 0;

    cards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat.toLowerCase() === category.toLowerCase()) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const empty = document.getElementById('packages-empty-state');
    if (empty) {
      empty.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  function filterGalleryTiles(category) {
    const container = document.getElementById('gallery-masonry-grid');
    if (!container) return;

    const tiles = container.querySelectorAll('.gallery-tile');
    tiles.forEach(tile => {
      const tileCat = tile.getAttribute('data-category');
      if (category === 'all' || tileCat.toLowerCase() === category.toLowerCase()) {
        tile.style.display = 'block';
      } else {
        tile.style.display = 'none';
      }
    });
  }

  /* ===================================================================
     10. PACKAGE DETAIL & QUICK BOOKING MODAL
     =================================================================== */
  function openPackageModal(packageId) {
    const pkg = PACKAGES_DATA.find(p => p.id === packageId);
    if (!pkg) return;

    const modal = document.getElementById('package-modal');
    if (!modal) return;

    document.getElementById('modal-pkg-header').innerHTML = generateDestinationSvg(pkg.category, pkg.id + '-modal');
    document.getElementById('modal-pkg-title').innerText = pkg.name;
    document.getElementById('modal-pkg-price').innerText = pkg.price;
    document.getElementById('modal-pkg-duration').innerText = pkg.duration;
    document.getElementById('modal-pkg-location').innerText = pkg.location;
    document.getElementById('modal-pkg-desc').innerText = pkg.description;

    // Itinerary List
    const itinList = document.getElementById('modal-pkg-itinerary');
    if (itinList) {
      itinList.innerHTML = pkg.itinerary.map(item => `<li><span class="check-bullet">✓</span> ${item}</li>`).join('');
    }

    // Pre-fill hidden package name
    const hiddenInput = document.getElementById('modal-book-package-name');
    if (hiddenInput) hiddenInput.value = `${pkg.name} (${pkg.price})`;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closePackageModal() {
    const modal = document.getElementById('package-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ===================================================================
     11. GALLERY LIGHTBOX MODAL
     =================================================================== */
  function openGalleryLightbox(galleryId) {
    const item = GALLERY_DATA.find(g => g.id === galleryId);
    if (!item) return;

    const modal = document.getElementById('lightbox-modal');
    if (!modal) return;

    document.getElementById('lightbox-visual').innerHTML = generateDestinationSvg(item.theme, item.id + '-lb');
    document.getElementById('lightbox-title').innerText = item.title;
    document.getElementById('lightbox-category').innerText = `${item.category} • ${item.location}`;
    document.getElementById('lightbox-desc').innerText = item.description;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeGalleryLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ===================================================================
     12. FORM SUBMISSIONS & VALIDATION
     =================================================================== */
  function setupForms() {
    // 1. Hero Search Form
    const searchForm = document.getElementById('hero-search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destination = document.getElementById('search-dest').value.trim();
        const travellers = document.getElementById('search-travellers').value;

        showToast('Searching Packages', `Finding perfect stays and packages for ${destination || 'your destination'} (${travellers})...`);

        setTimeout(() => {
          window.location.hash = '#packages';
          // If destination entered matches any category or name, filter it
          if (destination) {
            const match = PACKAGES_DATA.find(p =>
              p.name.toLowerCase().includes(destination.toLowerCase()) ||
              p.location.toLowerCase().includes(destination.toLowerCase()) ||
              p.category.toLowerCase().includes(destination.toLowerCase())
            );
            if (match) {
              const chip = document.querySelector(`.package-filter-chip[data-filter="${match.category.toLowerCase()}"]`);
              if (chip) chip.click();
            }
          }
        }, 600);
      });
    }

    // 2. Driver Assign Form
    const driverForm = document.getElementById('driver-assign-form');
    if (driverForm) {
      driverForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('driver-name').value.trim();
        const phone = document.getElementById('driver-phone').value.trim();
        const pickup = document.getElementById('driver-pickup').value.trim();
        const vehicle = document.getElementById('driver-vehicle').value;
        const refNo = `KRW-DRV-${Math.floor(1000 + Math.random() * 9000)}`;

        const alertBox = document.getElementById('driver-form-alert');
        const alertRef = document.getElementById('driver-booking-ref');
        if (alertBox && alertRef) {
          alertRef.innerText = refNo;
          alertBox.classList.add('active');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showToast('Driver Request Confirmed!', `Booking #${refNo} received for ${name}. Chauffeur dispatch in 60 mins.`);
        driverForm.reset();
      });
    }

    // 3. Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const refNo = `KRW-TKT-${Math.floor(1000 + Math.random() * 9000)}`;

        const alertBox = document.getElementById('contact-form-alert');
        const alertRef = document.getElementById('contact-ticket-ref');
        if (alertBox && alertRef) {
          alertRef.innerText = refNo;
          alertBox.classList.add('active');
          alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        showToast('Message Received', `Thanks ${name}! Reference #${refNo}. Our concierge team will reach out promptly.`);
        contactForm.reset();
      });
    }

    // 4. Quick Package Modal Booking Form
    const modalBookForm = document.getElementById('modal-package-form');
    if (modalBookForm) {
      modalBookForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const pkgName = document.getElementById('modal-book-package-name').value;
        const name = document.getElementById('modal-book-name').value.trim();
        const refNo = `KRW-PKG-${Math.floor(1000 + Math.random() * 9000)}`;

        showToast('Package Enquiry Sent!', `Ref #${refNo}: We have reserved inquiry details for ${name} (${pkgName}).`);
        modalBookForm.reset();
        closePackageModal();
      });
    }
  }

  /* ===================================================================
     13. INITIALIZATION ON DOM READY
     =================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Featured Packages on Home (5 cards)
    const homePackagesGrid = document.getElementById('home-featured-packages-grid');
    if (homePackagesGrid) {
      const top5 = PACKAGES_DATA.slice(0, 5);
      homePackagesGrid.innerHTML = top5.map(pkg => renderPackageCard(pkg)).join('');
    }

    // 2. Render Full Catalog on Packages Page (10 cards)
    const catalogGrid = document.getElementById('packages-catalog-grid');
    if (catalogGrid) {
      catalogGrid.innerHTML = PACKAGES_DATA.map(pkg => renderPackageCard(pkg)).join('');
    }

    // 3. Render Gallery Grid (9 curated masonry tiles)
    const galleryGrid = document.getElementById('gallery-masonry-grid');
    if (galleryGrid) {
      galleryGrid.innerHTML = GALLERY_DATA.map(item => renderGalleryTile(item)).join('');
    }

    // 4. Setup Routing
    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    // 5. Setup Theme Toggle
    initTheme();
    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // 6. Hamburger & Drawer setup
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const drawerCloseBtn = document.getElementById('drawer-close-btn');
    if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);

    // 7. Setup Live Filters
    initCategoryFilters();

    // 8. Setup Forms
    setupForms();

    // 9. Delegated Click Listener for Package details & Gallery Lightbox
    document.addEventListener('click', (e) => {
      // Package card button or card click
      const packageBtn = e.target.closest('.view-package-btn');
      if (packageBtn) {
        const pkgId = packageBtn.getAttribute('data-id');
        openPackageModal(pkgId);
        return;
      }

      // Gallery tile click
      const galleryTile = e.target.closest('.gallery-tile');
      if (galleryTile) {
        const galId = galleryTile.getAttribute('data-id');
        openGalleryLightbox(galId);
        return;
      }

      // Lightbox close button or backdrop
      if (e.target.closest('#lightbox-close-btn') || e.target.id === 'lightbox-modal') {
        closeGalleryLightbox();
      }

      // Package modal close button or backdrop
      if (e.target.closest('#package-modal-close-btn') || e.target.id === 'package-modal') {
        closePackageModal();
      }
    });

    // Keyboard support (Escape closes modals)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeGalleryLightbox();
        closePackageModal();
        closeMobileDrawer();
      }
    });

    // Today's date default on inputs
    const today = new Date().toISOString().split('T')[0];
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
      if (!input.value) input.value = today;
      input.min = today;
    });
  });

})();
