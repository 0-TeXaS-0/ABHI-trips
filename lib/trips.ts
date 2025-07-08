import { Trip } from "./types";

export const trips: Trip[] = [
  {
    id: 1,
    title: "Nandi Hills Sunrise Trek",
    description:
      "Wake up to an unforgettable adventure! The Nandi Hills Sunrise Trek is one of the most sought-after quick getaways from Bangalore – perfect for beginners, nature lovers, and anyone craving fresh mountain air and mesmerizing sunrise views.",
    image:
      "/images/11.jpeg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-25",
    rating: 4.7,
    reviews: 89,
    slug: "nandi-hills-sunrise-trek",
    highlights: [
      "Ideal for all trekkers Beginners to seasoned hikers",
      "Ancient hill fort trail with scenic viewpoints",
      "Budget-friendly adventure"
    ],
    location: "60km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Wake up to an unforgettable adventure! The Nandi Hills Sunrise Trek is one of the most sought-after quick getaways from Bangalore – perfect for beginners, nature lovers, and anyone craving fresh mountain air and mesmerizing sunrise views.",
    itinerary: [
      { time: "11:15 PM", activity: "Start from Gopalan Arcade, RR Nagar" },
      { time: "11:30 PM", activity: "Pickup at Kathriguppe Circle, Kathriguppe" },
      { time: "11:45 PM", activity: "Pickup at BMTC Bus Stop, Banashankari" },
      { time: "12:05 AM", activity: "Pickup at Udupi Garden Signal, BTM Layout" },
      { time: "12:15 AM", activity: "Pickup at Bus Stop, Silk Board" },
      { time: "12:45 AM", activity: "Pickup at Shell Petrol Pump, Bellandur" },
      { time: "01:15 AM", activity: "Pickup at Opp. Kalamandir, Marathahalli" },
      { time: "01:35 AM", activity: "Pickup at HP Petrol Pump, Tin Factory" },
      { time: "01:45 AM", activity: "Pickup at Opp. Esteem Mall, Hebbal" },
      { time: "02:00 AM", activity: "Reach Nandi base, rest or stargaze" },
      { time: "03:30 AM", activity: "Start trek after orientation" },
      { time: "05:30 AM", activity: "Reach summit & enjoy the sunrise" },
      { time: "07:00 AM", activity: "Begin descent" },
      { time: "09:00 AM", activity: "Reach base & start return journey" },
      { time: "09:30 AM", activity: "Visit Bhoga Nandishwara Temple & breakfast stop (self-funded)" },
      { time: "11:00 AM", activity: "Drop-off at your original pickup points in Bangalore" }
    ],
    pickupPoints: [
      "11:15 PM - Gopalan Arcade, RR Nagar",
      "11:30 PM - Kathriguppe Circle, Kathriguppe",
      "11:45 PM - BMTC Bus Stop, Banashankari",
      "12:05 AM - Udupi Garden Signal, BTM Layout",
      "12:15 AM - Bus Stop, Silk Board",
      "12:45 AM - Shell Petrol Pump, Bellandur",
      "01:15 AM - Opp. Kalamandir, Marathahalli",
      "01:35 AM - HP Petrol Pump, Tin Factory",
      "01:45 AM - Opp. Esteem Mall, Hebbal"
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)"
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions"
    ],
    whatToBring: [
      "A photocopy of your Aadhar/Voter ID (mandatory)",
      "Small backpack (to carry essentials)",
      "Water bottles – 1–2 liters",
      "Raincoat/poncho or bag cover (in case of rain)",
      "Trekking shoes with good grip + extra socks",
      "Torch/headlamp (required for night trek)",
      "Power bank",
      "Snacks (dry fruits, energy bars, etc.)",
      "Any personal medication"
    ],
  },
  {
    id: 2,
    title: "Skandagiri Sunrise Trek",
    description:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds! The Skandagiri Sunrise Trek offers an unforgettable night hike through ancient fort ruins, misty trails, and panoramic views of Nandi Hills and beyond.",
    image:
      "/images/mountains/skandagiri.jpg",
    price: "₹1249",
    originalPrice: "₹1,499",
    duration: "1 Day",
    difficulty: "Easy-Moderate",
    groupSize: "15-25",
    rating: 4.8,
    reviews: 156,
    slug: "skandagiri-sunrise-trek",
    highlights: [
      "Early morning trek to one of Karnataka's most scenic sunrise points",
      "Mesmerizing sunrise view above the clouds",
      "360° views from the summit, often above the clouds"
    ],
    location: "70km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds! The Skandagiri Sunrise Trek offers an unforgettable night hike through ancient fort ruins, misty trails, and panoramic views of Nandi Hills and beyond. Just 70 km from Bangalore, this trek is perfect for both beginners and seasoned adventurers looking for a quick escape into nature.",    itinerary: [
      { time: "10:45 PM", activity: "Start from Gopalan Arcade, RR Nagar" },
      { time: "11:15 PM", activity: "Pickup at BMTC Bus Stop, Banashankari" },
      { time: "11:35 PM", activity: "Pickup at Udupi Garden Signal, BTM Layout" },
      { time: "11:45 PM", activity: "Pickup at Bus Stop, Silk Board" },
      { time: "12:15 AM", activity: "Pickup at Shell Petrol Pump, Bellandur" },
      { time: "12:45 AM", activity: "Pickup at Opp. Kalamandir, Marathahalli" },
      { time: "01:05 AM", activity: "Pickup at HP Petrol Pump, Tin Factory" },
      { time: "01:15 AM", activity: "Pickup at Opp. Esteem Mall, Hebbal" },
      { time: "03:00 AM", activity: "Arrive at the base; rest or enjoy a calm walk under the stars" },
      { time: "05:30 AM", activity: "Begin trek after a safety briefing from our guides" },
      { time: "07:15 AM", activity: "Reach the summit; enjoy sunrise and scenic cloud views" },
      { time: "08:00 AM", activity: "Start your descent" },
      { time: "10:00 AM", activity: "Reach base and board vehicle for return" },
      { time: "11:30 AM", activity: "Halt for self-funded breakfast & freshen-up" },
      { time: "01:00 PM", activity: "Arrive back in Bangalore at original pickup locations" }
    ],
    pickupPoints: [
      "10:45 PM - Gopalan Arcade, RR Nagar",
      "11:15 PM - BMTC Bus Stop, Banashankari",
      "11:35 PM - Udupi Garden Signal, BTM Layout",
      "11:45 PM - Bus Stop, Silk Board",
      "12:15 AM - Shell Petrol Pump, Bellandur",
      "12:45 AM - Opp. Kalamandir, Marathahalli",
      "01:05 AM - HP Petrol Pump, Tin Factory",
      "01:15 AM - Opp. Esteem Mall, Hebbal"
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest permit (INCLUDED)",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit"
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions"
    ],
    whatToBring: [
      "A photocopy of your Aadhar/Voter ID (mandatory)",
      "Small backpack (to carry essentials)",
      "Water bottles – 1–2 liters",
      "Raincoat/poncho or bag cover (in case of rain)",
      "Trekking shoes with good grip + extra socks",
      "Torch/headlamp (required for night trek)",
      "Power bank",
      "Snacks (dry fruits, energy bars, etc.)",
      "Any personal medication"
    ],
  },
  {
    id: 3,
    title: "Kunti Betta Sunrise Trek",
    description:
      "Looking for a thrilling night trek with breathtaking sunrise views? The Kunti Betta Sunrise Trek is the perfect blend of adventure, nature, and mythology just 125 km from Bangalore in the historic town of Pandavapura, near Mysore.",
    image:
      "/images/adventure-sports.jpeg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.4,
    reviews: 56,
    slug: "kunti-betta-sunrise-trek",
    highlights: [
      "Night trek with flashlight-lit trails under the star",
      "Sunrise view from the summit with 360° panoramic beauty",
      "Budget-friendly adventure"
    ],
    location: "125km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Looking for a thrilling night trek with breathtaking sunrise views? The Kunti Betta Sunrise Trek is the perfect blend of adventure, nature, and mythology just 125 km from Bangalore in the historic town of Pandavapura, near Mysore.",
    itinerary: [
      { time: "11:15 PM", activity: "Start from Benniganahalli Metro Station, Tin Factory" },
      { time: "11:35 PM", activity: "Pickup at Kalamandir, Marathahalli" },
      { time: "11:50 PM", activity: "Pickup at Akme Harmony, Bellandur" },
      { time: "12:05 AM", activity: "Pickup at Silkboard Bus Stop" },
      { time: "12:15 AM", activity: "Pickup at Udupi Garden Signal, BTM" },
      { time: "12:30 AM", activity: "Pickup at Banashankari Bus Stop" },
      { time: "12:45 AM", activity: "Pickup at Kathriguppe Circle" },
      { time: "01:00 AM", activity: "Pickup at Gopalan Arcade Mall, RR Nagar" },
      { time: "01:15 AM", activity: "Pickup at Kengeri Bus Stop" },
      { time: "03:30 AM", activity: "Arrive at Kunti Betta base" },
      { time: "03:45 AM", activity: "Briefing by the trek guide" },
      { time: "04:00 AM", activity: "Begin the night trek" },
      { time: "05:00 AM", activity: "Reach the summit & enjoy the sunrise" },
      { time: "06:30 AM", activity: "Start descent" },
      { time: "09:30 AM", activity: "Breakfast stop (self-funded)" },
      { time: "11:00 AM", activity: "Depart for Bangalore" },
      { time: "01:00 PM", activity: "Drop-off at original pickup points" }
    ],
    pickupPoints: [
      "11:15 PM - Benniganahalli Metro Station, Tin Factory",
      "11:35 PM - Kalamandir, Marathahalli",
      "11:50 PM - Akme Harmony, Bellandur",
      "12:05 AM - Silkboard Bus Stop",
      "12:15 AM - Udupi Garden Signal, BTM",
      "12:30 AM - Banashankari Bus Stop",
      "12:45 AM - Kathriguppe Circle",
      "01:00 AM - Gopalan Arcade Mall, RR Nagar",
      "01:15 AM - Kengeri Bus Stop"
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)"
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions"
    ],
    whatToBring: [
      "A photocopy of your Aadhar/Voter ID (mandatory)",
      "Small backpack (to carry essentials)",
      "Water bottles – 1–2 liters",
      "Raincoat/poncho or bag cover (in case of rain)",
      "Trekking shoes with good grip + extra socks",
      "Torch/headlamp (required for night trek)",
      "Power bank",
      "Snacks (dry fruits, energy bars, etc.)",
      "Any personal medication"
    ],
  },
  {
    id: 4,
    title: "Shivagange Sunrise Trek",
    description:
      'Ascend the sacred peak of Shivagange, known as "Dakshina Kashi," located just ~60 km from Bangalore. This moderate night trek weaves through temples, rocky terrain, and lush landscapes, culminating in a beautiful sunrise at the summit—perfect for a quick spiritual and scenic escape.',
    image:
      "/images/mountains/shivagange.jpg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "15-25",
    rating: 4.7,
    reviews: 108,
    slug: "shivagange-sunrise-trek",
    highlights: [
      "Short, convenient getaway from Bangalore",
      "Spectacular sunrise from a culturally significant hillpeak",
      "Moderate night trek featuring sacred shrines and rocky trails"
    ],
    location: "60km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      'Ascend the sacred peak of Shivagange, known as "Dakshina Kashi," located just ~60 km from Bangalore. This moderate night trek weaves through temples, rocky terrain, and lush landscapes, culminating in a beautiful sunrise at the summit—perfect for a quick spiritual and scenic escape.',
    itinerary: [
      { time: "10:45 PM", activity: "Start from Tin Factory (Benniganahalli Metro)" },
      { time: "11:05 PM", activity: "Pickup at Opp. Kalamandir, Marathahalli" },
      { time: "11:20 PM", activity: "Pickup at Akme Harmony, Bellandur" },
      { time: "11:35 PM", activity: "Pickup at Silk Board Bus Stop" },
      { time: "11:50 PM", activity: "Pickup at Udupi Garden Signal, BTM" },
      { time: "12:05 AM", activity: "Pickup at Banashankari Bus Stop" },
      { time: "12:35 AM", activity: "Pickup at Gopalan Arcade Mall, RR Nagar" },
      { time: "12:55 AM", activity: "Pickup at Guraguntepalya Signal, Yeshwanthpur" },
      { time: "02:30 AM", activity: "Arrive at the base; Quick rest" },
      { time: "03:00 AM", activity: "Begin ascent through rocky steps and temple trail" },
      { time: "05:30 AM", activity: "Reach summit; enjoy sunrise and panoramic views" },
      { time: "07:00 AM", activity: "Descend back to the base" },
      { time: "07:30 AM", activity: "Halt for a self-funded breakfast" },
      { time: "12:30 PM", activity: "Return to Bangalore; same drop-off points" }
    ],
      pickupPoints: [
        "10:45 PM - Tin Factory (Benniganahalli Metro)",
        "11:05 PM - Opp. Kalamandir, Marathahalli",
        "11:20 PM - Akme Harmony, Bellandur",
        "11:35 PM - Silk Board Bus Stop",
        "11:50 PM - Udupi Garden Signal, BTM",
        "12:05 AM - Banashankari Bus Stop",
        "12:35 AM - Gopalan Arcade Mall, RR Nagar",
        "12:55 AM - Guraguntepalya Signal, Yeshwanthpur"
      ],
      inclusions: [
        "Comfortable round-trip transportation from Bangalore",
        "Forest or trekking guide",
        "Trek lead from the Abhitrip Team",
        "Access to first-aid kit",
        "Forest permit if any (INCLUDED)"
      ],
      exclusions: [
        "Meals (breakfast/snacks)",
        "Bottled water or other personal purchases",
        "Insurance or items not listed under inclusions"
      ],
      whatToBring: [
        "A photocopy of your Aadhar/Voter ID (mandatory)",
        "Small backpack (to carry essentials)",
        "Water bottles – 1–2 liters",
        "Raincoat/poncho or bag cover (in case of rain)",
        "Trekking shoes with good grip + extra socks",
        "Torch/headlamp (required for night trek)",
        "Power bank",
        "Snacks (dry fruits, energy bars, etc.)",
        "Any personal medication"
          ],
        },
  {
    id: 17,
    title: "Adiyogi & Gudibande Fort Trek",
    description:
      "Embark on a unique day adventure where spiritual calm and historic thrill come together! The Adiyogi & Gudibande Fort Trek offers the perfect blend of peaceful vibes, scenic views, and a short hike — making it an ideal getaway for both beginners and weekend explorers.",
    image:
      "/images/mountains/adiyogi.jpg",
    price: "₹999",
    originalPrice: "₹1,299",
    duration: "1 Day",
    difficulty: "Easy-Moderate",
    groupSize: "15-25",
    rating: 4.6,
    reviews: 45,
    slug: "adiyogi-gudibande-fort-trek",
    highlights: [
      "Visit the Adiyogi Shiva statue for a peaceful start",
      "Easy-to-moderate trek to Gudibande Fort (around 400 steps)",
      "Explore the centuries-old fort and rainwater harvesting systems"
    ],
    location: "100km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Embark on a unique day adventure where spiritual calm and historic thrill come together! The Adiyogi & Gudibande Fort Trek offers the perfect blend of peaceful vibes, scenic views, and a short hike — making it an ideal getaway for both beginners and weekend explorers.",
    itinerary: [
      { time: "08:00 AM", activity: "Start from BTM (Near A2B)" },
      { time: "08:10 AM", activity: "Pickup at Silkboard (Udupi Upachar)" },
      { time: "08:20 AM", activity: "Pickup at Bellandur Bus Stop" },
      { time: "08:30 AM", activity: "Pickup at Marathahalli (Opp. Kalamandir)" },
      { time: "08:45 AM", activity: "Pickup at Tin Factory" },
      { time: "10:30 AM", activity: "Arrive at Gudibande Fort & begin trek" },
      { time: "11:30 AM", activity: "Relax & enjoy summit views" },
      { time: "01:00 PM", activity: "Lunch stop" },
      { time: "05:30 PM", activity: "Reach Adiyogi, explore and attend Divya Darshan" },
      { time: "07:30 PM", activity: "Enjoy the special laser show" },
      { time: "10:00 PM", activity: "Dinner stop (self-sponsored)" },
      { time: "11:30 PM", activity: "Drop back to Bangalore" }
    ],
    pickupPoints: [
      "08:00 AM - BTM (Near A2B)",
      "08:10 AM - Silkboard (Udupi Upachar)",
      "08:20 AM - Bellandur Bus Stop",
      "08:30 AM - Marathahalli (Opp. Kalamandir)",
      "08:45 AM - Tin Factory"
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Breakfast (In pure veg restaurant)",
      "Tea/Coffee",
      "All toll & permit",
      "Entry tickets",
      "Abhitrip Coordinator"
    ],
    exclusions: [
      "Meals (lunch)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions"
    ],
    whatToBring: [
      "Backpack to carry your essentials",
      "Water bottles (1 litre, plastic bottle not allowed)",
      "Sunscreen and Suncap",
      "Energy bars and snacks"
    ],
  }
    ];
