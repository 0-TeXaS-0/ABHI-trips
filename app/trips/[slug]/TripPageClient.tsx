"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  Star,
  Clock,
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle,
  ArrowLeft,
  Share2,
  Heart,
} from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { BookingForm } from "@/components/booking-form"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Complete trip database with all updated content
const getAllTrips = () => [
  // ONE DAY TRIPS
  {
    id: 1,
    title: "Skandagiri Sunrise Trek",
    description:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds! The Skandagiri Sunrise Trek offers an unforgettable night hike through ancient fort ruins, misty trails, and panoramic views of Nandi Hills and beyond. Just 70 km from Bangalore, this trek is perfect for both beginners and seasoned adventurers looking for a quick escape into nature.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae31ff761a4a5bc712d4698096490718.jpg-t6Yq8f9MiwpS8c4z4JP9hQOtNckCrF.jpeg",
    price: "₹1,249",
    originalPrice: "₹1,599",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "15-20",
    rating: 4.8,
    reviews: 124,
    slug: "skandagiri-sunrise-trek",
    highlights: [
      "Early morning trek to one of Karnataka's most scenic sunrise points",
      "Mesmerizing sunrise view above the clouds",
      "360° views from the summit, often above the clouds",
    ],
    location: "70km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds! The Skandagiri Sunrise Trek offers an unforgettable night hike through ancient fort ruins, misty trails, and panoramic views of Nandi Hills and beyond. Just 70 km from Bangalore, this trek is perfect for both beginners and seasoned adventurers looking for a quick escape into nature.",
    itinerary: [
      {
        time: "Day 0 – Departure from Bengaluru",
        activity:
          "Meet at your selected pickup point and begin the overnight journey to Skandagiri in a comfortable tempo traveller or mini-bus.",
      },
      { time: "10:45 PM", activity: "Gopalan Arcade, RR Nagar" },
      { time: "11:15 PM", activity: "BMTC Bus Stop, Banashankari" },
      { time: "11:35 PM", activity: "Udupi Garden Signal, BTM Layout" },
      { time: "11:45 PM", activity: "Bus Stop, Silk Board" },
      { time: "12:15 AM", activity: "Shell Petrol Pump, Bellandur" },
      { time: "12:45 AM", activity: "Opp. Kalamandir, Marathahalli" },
      { time: "01:05 AM", activity: "HP Petrol Pump, Tin Factory" },
      { time: "01:15 AM", activity: "Opp. Esteem Mall, Hebbal" },
      { time: "Day 1 – Ascending the Trail", activity: "" },
      { time: "03:00 AM", activity: "Arrive at the base; rest or enjoy a calm walk under the stars" },
      {
        time: "05:30 AM",
        activity:
          "Begin trek after a safety briefing from our guides (Forest permit is included in the package – no extra charges)",
      },
      { time: "07:15 AM", activity: "Reach the summit; enjoy sunrise and scenic cloud views" },
      { time: "08:00 AM", activity: "Start your descent" },
      { time: "10:00 AM", activity: "Reach base and board vehicle for return" },
      { time: "11:30 AM", activity: "Halt for self-funded breakfast & freshen-up" },
      { time: "01:00 PM", activity: "Arrive back in Bangalore; drop-off at your original pickup location" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest permit (INCLUDED)",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
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
      "Any personal medication",
    ],
  },
  {
    id: 2,
    title: "Nandi Hills Sunrise Trek",
    description:
      "Wake up to an unforgettable adventure! The Nandi Hills Sunrise Trek is one of the most sought-after quick getaways from Bangalore – perfect for beginners nature lovers, and anyone craving fresh mountain air and mesmerizing sunrise views",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d51e1dee7dc2446863cef50ccb257e31.jpg-4da0fZMjFFPKsgD62ie5kB5lLPKO4D.jpeg",
    price: "₹799",
    originalPrice: "₹1,599",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-25",
    rating: 4.7,
    reviews: 89,
    slug: "nandi-hills-sunrise-trek",
    highlights: [
      "Ideal for all trekkers Beginners to seasoned hikers",
      "Ancient hill fort trail with scenic viewpoints",
      "Budget-friendly adventure",
    ],
    location: "60km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Wake up to an unforgettable adventure! The Nandi Hills Sunrise Trek is one of the most sought-after quick getaways from Bangalore – perfect for beginners nature lovers, and anyone craving fresh mountain air and mesmerizing sunrise views",
    itinerary: [
      {
        time: "Day 0 – Departure from Bengaluru",
        activity: "Meet at your selected pickup point and begin the overnight journey to Nandi Hills",
      },
      { time: "11:15 PM", activity: "Gopalan Arcade, RR Nagar" },
      { time: "11:30 PM", activity: "Kathriguppe Circle, Kathriguppe" },
      { time: "11:45 PM", activity: "BMTC Bus Stop, Banashankari" },
      { time: "12:05 AM", activity: "Udupi Garden Signal, BTM Layout" },
      { time: "12:15 AM", activity: "Bus Stop, Silk Board" },
      { time: "12:45 AM", activity: "Shell Petrol Pump, Bellandur" },
      { time: "01:15 AM", activity: "Opp. Kalamandir, Marathahalli" },
      { time: "01:35 AM", activity: "HP Petrol Pump, Tin Factory" },
      { time: "01:45 AM", activity: "Opp. Esteem Mall, Hebbal" },
      { time: "Day 1 – Trek, Sunrise, & Return", activity: "" },
      { time: "02:00 AM", activity: "Reach Nandi base, rest or stargaze" },
      { time: "03:30 AM", activity: "Start trek after orientation" },
      { time: "05:30 AM", activity: "Reach summit & enjoy the sunrise" },
      { time: "07:00 AM", activity: "Begin descent" },
      { time: "09:00 AM", activity: "Reach base & start return journey" },
      { time: "09:30 AM", activity: "Visit Bhoga Nandishwara Temple & breakfast stop (self-funded)" },
      { time: "11:00 AM", activity: "Drop-off at your original pickup points in Bangalore" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)",
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
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
      "Any personal medication",
    ],
  },
  {
    id: 3,
    title: "Savandurga Hill Trek",
    description:
      "Conquer one of the largest monolith hills in Asia with challenging rock formations and panoramic views.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/823a4d3cc7940987d42e629260ea7657.jpg-ZTtbxkqdSrRNvSfyuoEiL3KpMMFM3h.jpeg",
    price: "₹1,499",
    originalPrice: "₹1,799",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "12-15",
    rating: 4.6,
    reviews: 67,
    slug: "savandurga-hill-trek",
    highlights: ["Largest monolith", "Rock climbing", "Ancient temple", "Adventure"],
    location: "50km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Conquer one of the largest monolith hills in Asia with challenging rock formations and panoramic views.",
    itinerary: [
      { time: "6:00 AM", activity: "Pickup from Bangalore" },
      { time: "7:30 AM", activity: "Reach Savandurga base" },
      { time: "8:00 AM", activity: "Begin trek to summit" },
      { time: "11:00 AM", activity: "Reach summit and enjoy views" },
      { time: "12:00 PM", activity: "Start descent" },
      { time: "1:30 PM", activity: "Lunch break" },
      { time: "3:00 PM", activity: "Return journey to Bangalore" },
      { time: "5:00 PM", activity: "Drop at pickup points" },
    ],
    inclusions: ["Transportation from Bangalore", "Professional guide", "Entry fees", "First aid kit"],
    exclusions: ["Personal expenses", "Meals", "Travel insurance"],
    whatToBring: ["Comfortable trekking shoes", "Water bottle", "Camera", "Sunscreen", "Personal medication"],
  },
  {
    id: 4,
    title: "Ramanagara Rock Climbing",
    description: "Adventure day at the famous Sholay filming location with rock climbing and rappelling activities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/eaf7d62f7999ea2249d39cdcd6466c72.jpg-ba1b4q5Y3Hf9PIVWMOzGAvhlvopc7u.jpeg",
    price: "₹1,799",
    originalPrice: "₹2,099",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "10-12",
    rating: 4.5,
    reviews: 78,
    slug: "ramanagara-rock-climbing",
    highlights: ["Rock climbing", "Rappelling", "Sholay rocks", "Adventure sports"],
    location: "50km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Adventure day at the famous Sholay filming location with rock climbing and rappelling activities.",
    itinerary: [
      { time: "7:00 AM", activity: "Pickup from Bangalore" },
      { time: "8:30 AM", activity: "Reach Ramanagara" },
      { time: "9:00 AM", activity: "Rock climbing session" },
      { time: "12:00 PM", activity: "Lunch break" },
      { time: "1:00 PM", activity: "Rappelling activities" },
      { time: "4:00 PM", activity: "Return journey" },
      { time: "6:00 PM", activity: "Drop at pickup points" },
    ],
    inclusions: ["Transportation from Bangalore", "Professional instructor", "Safety equipment", "Entry fees"],
    exclusions: ["Personal expenses", "Meals", "Travel insurance"],
    whatToBring: ["Comfortable clothes", "Sports shoes", "Water bottle", "Camera", "Personal medication"],
  },
  {
    id: 5,
    title: "Bheemeshwari Fishing & Coracle",
    description:
      "Peaceful day by the Cauvery river with fishing, coracle rides, and nature walks in serene surroundings.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82a37c6641676656de9a4209e7b7926c.jpg-0piin2zFQJGKkDyYIbXbt6Kmt82ojR.jpeg",
    price: "₹1,399",
    originalPrice: "₹1,699",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.4,
    reviews: 56,
    slug: "bheemeshwari-fishing-coracle",
    highlights: ["River fishing", "Coracle rides", "Nature walks", "Bird watching"],
    location: "100km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Peaceful day by the Cauvery river with fishing, coracle rides, and nature walks in serene surroundings.",
    itinerary: [
      { time: "6:00 AM", activity: "Pickup from Bangalore" },
      { time: "8:30 AM", activity: "Reach Bheemeshwari" },
      { time: "9:00 AM", activity: "Fishing activities" },
      { time: "12:00 PM", activity: "Lunch break" },
      { time: "1:00 PM", activity: "Coracle rides" },
      { time: "3:00 PM", activity: "Nature walks" },
      { time: "4:00 PM", activity: "Return journey" },
      { time: "7:00 PM", activity: "Drop at pickup points" },
    ],
    inclusions: ["Transportation from Bangalore", "Fishing equipment", "Coracle rides", "Guide"],
    exclusions: ["Personal expenses", "Meals", "Travel insurance"],
    whatToBring: ["Comfortable clothes", "Hat", "Water bottle", "Camera", "Personal medication"],
  },
  {
    id: 6,
    title: "Makalidurga Sunrise Trek",
    description: "Trek to the ancient hill fort and enjoy panoramic sunrise views over the Western Ghats.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b008517b815a1e0e16c02838fa941c4b.jpg-J99SHaABjltqovKo71tuz1BQKrhfBR.jpeg",
    price: "₹1,199",
    originalPrice: "₹1,499",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-25",
    rating: 4.6,
    reviews: 92,
    slug: "makalidurga-sunrise-trek",
    highlights: ["Ancient fort", "Sunrise views", "Railway track", "Photography"],
    location: "60km from Bangalore",
    category: "One Day Trip",
    fullDescription: "Trek to the ancient hill fort and enjoy panoramic sunrise views over the Western Ghats.",
    itinerary: [
      { time: "4:00 AM", activity: "Pickup from Bangalore" },
      { time: "5:30 AM", activity: "Reach Makalidurga base" },
      { time: "6:00 AM", activity: "Begin trek" },
      { time: "7:00 AM", activity: "Sunrise viewing" },
      { time: "8:30 AM", activity: "Explore fort ruins" },
      { time: "10:00 AM", activity: "Descent" },
      { time: "11:00 AM", activity: "Breakfast" },
      { time: "1:00 PM", activity: "Return to Bangalore" },
    ],
    inclusions: ["Transportation from Bangalore", "Professional guide", "Entry fees", "Breakfast"],
    exclusions: ["Personal expenses", "Additional meals", "Travel insurance"],
    whatToBring: ["Trekking shoes", "Water bottle", "Camera", "Light jacket", "Personal medication"],
  },
  {
    id: 7,
    title: "Uttari Betta Sunrise Trek",
    description:
      "Discover the historic charm of Uttari Betta (Hutridurga), just 70 km from Bangalore. This night trek takes you through lush grasslands, rocky trails and ancient fort gateways, culminating in a breathtaking sunrise view atop a serene hilltop temple.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d51e1dee7dc2446863cef50ccb257e31.jpg-4da0fZMjFFPKsgD62ie5kB5lLPKO4D.jpeg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-25",
    rating: 4.7,
    reviews: 89,
    slug: "uttari-betta-sunrise-trek",
    highlights: [
      "Ideal for all trekkers Beginners to seasoned hikers",
      "Ancient hill fort trail with scenic viewpoints",
      "Budget-friendly adventure",
    ],
    location: "70km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Discover the historic charm of Uttari Betta (Hutridurga), just 70 km from Bangalore. This night trek takes you through lush grasslands, rocky trails and ancient fort gateways, culminating in a breathtaking sunrise view atop a serene hilltop temple.",
    itinerary: [
      {
        time: "Day 0 – Departure from Bengaluru",
        activity: "Meet at your selected pickup point and begin the overnight journey to Uttari Betta",
      },
      { time: "10:45 PM", activity: "Tin Factory (Benniganahalli Metro)" },
      { time: "11:05 PM", activity: "Opp. Kalamandir, Marathahalli" },
      { time: "11:20 PM", activity: "Akme Harmony, Bellandur" },
      { time: "11:35 PM", activity: "Silk Board Bus Stop" },
      { time: "11:50 PM", activity: "Udupi Garden Signal, BTM" },
      { time: "12:05 AM", activity: "Banashankari Bus Stop" },
      { time: "12:35 AM", activity: "Gopalan Arcade Mall, RR Nagar" },
      { time: "12:55 AM", activity: "Guraguntepalya Signal, Yeshwanthpur" },
      { time: "Day 1 – Sunrise Trek & Return", activity: "" },
      { time: "02:15 AM", activity: "Arrive at the base; quick rest" },
      { time: "02:45 AM", activity: "Start the trek with our experienced guides" },
      { time: "04:30 AM", activity: "Reach the summit and enjoy a peaceful sunrise" },
      { time: "05:45 AM", activity: "Begin descent" },
      { time: "06:15 AM", activity: "Halt for self-funded breakfast" },
      { time: "12:30 PM", activity: "Arrive back in Bangalore; same drop-off points" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)",
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
    ],
    whatToBring: [
      "Small backpack to carry your essentials during the trek",
      "Water bottles 1-2 (1 liter each)",
      "Raincoat (poncho)/Bag covers in case of rains",
      "A comfortable pair of shoes with good grip for trekking with extra pair of socks",
      "Torch/Headlamp to be used at night",
      "Portable chargers for your electronics",
      "Eatables during trek Energy Booster, Tissues, Chocolates, Dry fruits, etc",
      "Personal Medication",
      "Snacks for yourself",
    ],
  },
  {
    id: 8,
    title: "Shivagange Sunrise Trek",
    description:
      "Ascend the sacred peak of Shivagange, known as 'Dakshina Kashi,' located just ~60 km from Bangalore. This moderate night trek weaves through temples, rocky terrain, and lush landscapes, culminating in a beautiful sunrise at the summit—perfect for a quick spiritual and scenic escape.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "15-20",
    rating: 4.6,
    reviews: 95,
    slug: "shivagange-sunrise-trek",
    highlights: [
      "Short, convenient getaway from Bangalore",
      "Spectacular sunrise from a culturally significant hillpeak",
      "Moderate night trek featuring sacred shrines and rocky trails",
    ],
    location: "60km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Ascend the sacred peak of Shivagange, known as 'Dakshina Kashi,' located just ~60 km from Bangalore. This moderate night trek weaves through temples, rocky terrain, and lush landscapes, culminating in a beautiful sunrise at the summit—perfect for a quick spiritual and scenic escape.",
    itinerary: [
      {
        time: "Day 0 – Departure from Bengaluru",
        activity: "Meet at your selected pickup point and begin the overnight journey to Shivagange Betta",
      },
      { time: "10:45 PM", activity: "Tin Factory (Benniganahalli Metro)" },
      { time: "11:05 PM", activity: "Opp. Kalamandir, Marathahalli" },
      { time: "11:20 PM", activity: "Akme Harmony, Bellandur" },
      { time: "11:35 PM", activity: "Silk Board Bus Stop" },
      { time: "11:50 PM", activity: "Udupi Garden Signal, BTM" },
      { time: "12:05 AM", activity: "Banashankari Bus Stop" },
      { time: "12:35 AM", activity: "Gopalan Arcade Mall, RR Nagar" },
      { time: "12:55 AM", activity: "Guraguntepalya Signal, Yeshwanthpur" },
      { time: "Day 1 – Trek, Sunrise, & Return", activity: "" },
      { time: "02:30 AM", activity: "Arrive at the base; Quick rest" },
      { time: "03:00 AM", activity: "Begin ascent through rocky steps and temple trail" },
      { time: "05:30 AM", activity: "Reach summit; enjoy sunrise and panoramic views" },
      { time: "07:00 AM", activity: "Descend back to the base" },
      { time: "07:30 AM", activity: "Halt for a self-funded breakfast" },
      { time: "12:30 PM", activity: "Return to Bangalore; same drop-off points" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)",
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
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
      "Any personal medication",
    ],
  },
  {
    id: 9,
    title: "Kunti Betta Sunrise Trek",
    description:
      "Looking for a thrilling night trek with breathtaking sunrise views? The Kunti Betta Sunrise Trek is the perfect blend of adventure, nature, and mythology just 125 km from Bangalore in the historic town of Pandavapura, near Mysore.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹799",
    originalPrice: "₹999",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "15-20",
    rating: 4.5,
    reviews: 78,
    slug: "kunti-betta-sunrise-trek",
    highlights: [
      "Night trek with flashlight-lit trails under the star",
      "Sunrise view from the summit with 360° panoramic beauty",
      "Budget-friendly adventure",
    ],
    location: "125km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Looking for a thrilling night trek with breathtaking sunrise views? The Kunti Betta Sunrise Trek is the perfect blend of adventure, nature, and mythology just 125 km from Bangalore in the historic town of Pandavapura, near Mysore.",
    itinerary: [
      {
        time: "Day 0 – Departure from Bengaluru",
        activity: "Meet at your selected pickup point and begin the overnight journey to Kunti Betta",
      },
      { time: "11:15 PM", activity: "Benniganahalli Metro Station, Tin Factory" },
      { time: "11:35 PM", activity: "Kalamandir, Marathahalli" },
      { time: "11:50 PM", activity: "Akme Harmony, Bellandur" },
      { time: "12:05 AM", activity: "Silkboard Bus Stop" },
      { time: "12:15 AM", activity: "Udupi Garden Signal, BTM" },
      { time: "12:30 AM", activity: "Banashankari Bus Stop" },
      { time: "12:45 AM", activity: "Kathriguppe Circle" },
      { time: "01:00 AM", activity: "Gopalan Arcade Mall, RR Nagar" },
      { time: "01:15 AM", activity: "Kengeri Bus Stop" },
      { time: "Day 1 – Trek, Sunrise, & Return", activity: "" },
      { time: "03:30 AM", activity: "Arrive at Kunti Betta base" },
      { time: "03:45 AM", activity: "Briefing by the trek guide" },
      { time: "04:00 AM", activity: "Begin the night trek" },
      { time: "05:00 AM", activity: "Reach the summit & enjoy the sunrise" },
      { time: "06:30 AM", activity: "Start descent" },
      { time: "09:30 AM", activity: "Breakfast stop (self-funded)" },
      { time: "11:00 AM", activity: "Depart for Bangalore" },
      { time: "01:00 PM", activity: "Drop-off at original pickup points" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Forest or trekking guide",
      "Trek lead from the Abhitrip Team",
      "Access to first-aid kit",
      "Forest permit If any(INCLUDED)",
    ],
    exclusions: [
      "Meals (breakfast/snacks)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
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
      "Any personal medication",
    ],
  },
  {
    id: 10,
    title: "Adiyogi & Gudibande Fort Trek",
    description:
      "Embark on a unique day adventure where spiritual calm and historic thrill come together! The Adiyogi & Gudibande Fort Trek offers the perfect blend of peaceful vibes, scenic views, and a short hike — making it an ideal getaway for both beginners and weekend explorers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹999",
    originalPrice: "₹1,199",
    duration: "1 Day",
    difficulty: "Easy",
    groupSize: "15-25",
    rating: 4.4,
    reviews: 67,
    slug: "adiyogi-gudibande-fort-trek",
    highlights: [
      "Visit the Adiyogi Shiva statue for a peaceful start",
      "Easy-to-moderate trek to Gudibande Fort (around 400 steps)",
      "Explore the centuries-old fort and rainwater harvesting systems",
    ],
    location: "120km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Embark on a unique day adventure where spiritual calm and historic thrill come together! The Adiyogi & Gudibande Fort Trek offers the perfect blend of peaceful vibes, scenic views, and a short hike — making it an ideal getaway for both beginners and weekend explorers.",
    itinerary: [
      { time: "08:00 AM", activity: "BTM (Near A2B)" },
      { time: "08:10 AM", activity: "Silkboard (Udupi Upachar)" },
      { time: "08:20 AM", activity: "Bellandur Bus Stop" },
      { time: "08:30 AM", activity: "Marathahalli (Opp. Kalamandir)" },
      { time: "08:45 AM", activity: "Tin Factory" },
      { time: "Day 1 – Ascending the Trail", activity: "" },
      { time: "08:00 AM", activity: "Start from Bangalore (breakfast on the way)" },
      { time: "10:30 AM", activity: "Arrive at Gudibande Fort & begin trek" },
      { time: "11:30 AM", activity: "Relax & enjoy summit views" },
      { time: "01:00 PM", activity: "Lunch stop" },
      { time: "05:30 PM", activity: "Reach Adiyogi, explore and attend Divya Darshan" },
      { time: "07:30 PM", activity: "Enjoy the special laser show" },
      { time: "10:00 PM", activity: "Dinner stop (self-sponsored)" },
      { time: "11:30 PM – 12:00 AM", activity: "Drop back to Bangalore" },
    ],
    inclusions: [
      "Comfortable round-trip transportation from Bangalore",
      "Breakfast (In pure veg restaurant)",
      "Tea/Coffee",
      "All toll & permit",
      "Entry tickets",
      "Abhitrip Coordinator",
    ],
    exclusions: [
      "Meals (lunch)",
      "Bottled water or other personal purchases",
      "Insurance or items not listed under inclusions",
    ],
    whatToBring: [
      "Backpack to carry your essentials",
      "Water bottles (1 litre, plastic bottle not allowed)",
      "Sunscreen and Suncap",
      "Energy bars and snacks",
    ],
  },
  // TWO DAY TRIPS
  {
    id: 11,
    title: "Coorg Coffee Plantation Experience",
    description:
      "Discover the lush beauty and cultural richness of Coorg – often hailed as the 'Scotland of India.' From majestic viewpoints and roaring waterfalls to spiritual sanctuaries and elephant encounters, this 2-day escape is crafted for nature lovers, photographers, and adventure seekers. Ideal for solo travelers, friends, and weekend wanderers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹3,999",
    originalPrice: "₹3,499",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.8,
    reviews: 124,
    slug: "coorg-trip",
    highlights: [
      "Mandalpatti View Point",
      "Abbey Falls – a roaring cascade in the heart of nature",
      "Raja Seat – sunset views that steal your breath",
      "Harangi Elephant Camp – close encounter with gentle giants",
      "Namdroling Monastery – serene spiritual retreat",
    ],
    location: "250km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Discover the lush beauty and cultural richness of Coorg – often hailed as the 'Scotland of India.' From majestic viewpoints and roaring waterfalls to spiritual sanctuaries and elephant encounters, this 2-day escape is crafted for nature lovers, photographers, and adventure seekers. Ideal for solo travelers, friends, and weekend wanderers.",
    itinerary: [
      { time: "Day 0 – 10:00 PM", activity: "Begin Your Scenic Journey to the Hills of Kodagu" },
      { time: "10:00 PM", activity: "Start from Banashankari" },
      { time: "10:15 PM", activity: "Quick pickup at BTM Layout" },
      { time: "10:30 PM", activity: "Stop at Silk Board" },
      { time: "10:45 PM", activity: "Board at Bellandur" },
      { time: "11:00 PM", activity: "Assemble at Marathahalli" },
      { time: "11:30 PM", activity: "Pickup at Tin Factory" },
      { time: "12:30 PM", activity: "Board at Mysuru Road Bus Station" },
      { time: "12:50 PM", activity: "Final pickup at RR Nagar Arcade" },
      { time: "Day 1: Royal Exploration in Coorg", activity: "" },
      { time: "06:00 AM – 09:30 AM", activity: "Arrival, check-in, freshen up, and breakfast" },
      { time: "09:30 AM – 01:00 PM", activity: "Visit Mandalpatti View Point (optional jeep ride)" },
      { time: "01:00 PM – 02:00 PM", activity: "Lunch break (self-sponsored)" },
      { time: "02:00 PM – 03:00 PM", activity: "Explore Kote Abbey Falls" },
      { time: "03:45 PM – 06:30 PM", activity: "Visit Raja Seat and soak in the sunset" },
      { time: "06:30 PM – 07:00 PM", activity: "Visit the Omkareshwar Temple" },
      { time: "07:30 PM", activity: "Return to stay, Campfire & Dinner" },
      { time: "Day 2: A Tryst with Nature & Spirituality", activity: "" },
      { time: "10:00 AM – 11:00 AM", activity: "Breakfast and head to Harangi Elephant Camp" },
      { time: "11:00 AM – 12:30 PM", activity: "Elephant interaction (optional activities)" },
      { time: "12:30 PM – 02:00 PM", activity: "Lunch break (self-sponsored)" },
      { time: "02:00 PM – 05:00 PM", activity: "Explore Namdroling Monastery" },
      { time: "05:00 PM", activity: "Start return journey to Bangalore" },
      { time: "10:00 PM", activity: "Reach Bangalore (same drop points as pickup)" },
    ],
    inclusions: [
      "Non-A/C Transport from Bangalore (Round Trip)",
      "2 Breakfasts and 1 Dinner (Veg)",
      "Forest/Trek Permits",
      "Dormitory Accommodation (Separate for Men and Women)",
      "Abhi Trip Trek Coordinator",
      "Basic First Aid Kit",
    ],
    exclusions: [
      "Optional Activities (Jeep ride, elephant interaction)",
      "Personal Expenses: Snacks, Bottled Water, Additional Meals",
      "Insurance of any kind",
      "Anything not listed in the 'Inclusions'",
    ],
    whatToBring: [
      "Xerox Copy of your Aadhar/Voter ID",
      "Small backpack",
      "Water bottles (1–2 liters)",
      "Comfortable trekking shoes with good grip",
      "Raincoat and bag covers",
      "Extra pair of clothes",
      "Torch or Headlamp",
      "Personal medication",
      "Hand sanitizers",
      "Portable chargers",
      "Chocolates, energy bars, dry fruits",
      "Snacks",
    ],
  },
  {
    id: 12,
    title: "Hampi Heritage Adventure",
    description:
      "Explore the ancient ruins of Hampi, a UNESCO World Heritage Site with rich history and stunning architecture.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ed1ca01dfa2f309e07333fa3e42f1fc3.jpg-4vUtVyXbgPWXcqZYMDdNjOmOJag5jK.jpeg",
    price: "₹3,499",
    originalPrice: "₹3,999",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "12-15",
    rating: 4.9,
    reviews: 156,
    slug: "hampi-heritage-adventure",
    highlights: ["UNESCO site", "Virupaksha Temple", "Vittala Temple", "Coracle ride"],
    location: "350km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Explore the ancient ruins of Hampi, a UNESCO World Heritage Site with rich history and stunning architecture.",
    itinerary: [
      { time: "Day 1 - 8:00 AM", activity: "Departure from Bangalore" },
      { time: "Day 1 - 2:00 PM", activity: "Arrive in Hampi, check-in" },
      { time: "Day 1 - 3:00 PM", activity: "Visit Virupaksha Temple" },
      { time: "Day 1 - 5:00 PM", activity: "Explore Hampi Bazaar" },
      { time: "Day 1 - 7:00 PM", activity: "Sunset at Hemakuta Hill" },
      { time: "Day 2 - 9:00 AM", activity: "Visit Vittala Temple" },
      { time: "Day 2 - 12:00 PM", activity: "Coracle ride on Tungabhadra" },
      { time: "Day 2 - 2:00 PM", activity: "Lunch and departure" },
      { time: "Day 2 - 8:00 PM", activity: "Return to Bangalore" },
    ],
    inclusions: [
      "Transportation from Bangalore",
      "Accommodation (1 night)",
      "All meals",
      "Professional guide",
      "Entry fees",
    ],
    exclusions: ["Personal expenses", "Additional activities", "Travel insurance"],
    whatToBring: ["Comfortable walking shoes", "Camera", "Hat and sunscreen", "Personal medication", "Light clothing"],
  },
  {
    id: 13,
    title: "Chikmagalur Backpacking Trip",
    description:
      "Escape into the heart of Karnataka's Western Ghats with our Chikmagalur Backpacking Trip Misty peaks, hidden waterfalls, ancient temples, and lakeside sunsets all packed into a perfect weekend getaway",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e770a010b14b8e61b2ab9c1cfc9c9fb0.jpg-aZ2r0TEKDfqQ010qIdAuLHypP4oLeG.jpeg",
    price: "₹3,999",
    originalPrice: "₹3,299",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 98,
    slug: "chikmagalur-trip",
    highlights: [
      "Mullayanagiri Peak",
      "Bababudangiri",
      "Z Point",
      "Beluru Temple",
      "Honnamana Halla Falls",
      "Hirekolale Lake",
    ],
    location: "240km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Escape into the heart of Karnataka's Western Ghats with our Chikmagalur Backpacking Trip Misty peaks, hidden waterfalls, ancient temples, and lakeside sunsets all packed into a perfect weekend getaway",
    itinerary: [
      { time: "Day 0 – 10:00 PM", activity: "Begin Your Scenic Journey to the Chikmagalur" },
      { time: "10:00 PM", activity: "Start from Banashankari bus stop" },
      { time: "10:15 PM", activity: "Join from BTM Layout" },
      { time: "10:30 PM", activity: "Next stop, Silk Board" },
      { time: "10:45 PM", activity: "Assemble at Koramangala" },
      { time: "11:00 PM", activity: "Picking up at Domlur" },
      { time: "11:15 PM", activity: "Meet us at MG Road" },
      { time: "11:30 PM", activity: "Join at KTM Mekhri Circle" },
      { time: "11:45 PM", activity: "Board at Yeshwanthpura" },
      { time: "12:00 AM", activity: "Last pickup at Goraguntepalya" },
      { time: "Day 1 – Peaks, Falls & Sunset Lakes", activity: "" },
      { time: "06:00 AM – 09:00 AM", activity: "Arrive at Chikmagalur and head to Mullayanagiri Peak" },
      { time: "09:00 AM – 10:00 AM", activity: "Check-in, freshen up, and breakfast" },
      { time: "10:00 AM – 02:00 PM", activity: "Visit Honnammana Halla Falls, Baba Budangiri, and Z Point" },
      { time: "02:00 PM – 03:30 PM", activity: "Lunch break" },
      { time: "04:00 PM – 06:00 PM", activity: "Visit Hirekolale Lake for sunset" },
      { time: "06:30 PM", activity: "Return to stay, campfire, and veg dinner" },
      { time: "Day 2 – Adventure & Temples", activity: "" },
      { time: "09:00 AM", activity: "Breakfast and checkout" },
      { time: "10:00 AM – 01:00 PM", activity: "Water sports at Yagachi Dam (self-sponsored)" },
      { time: "01:00 PM – 02:00 PM", activity: "Lunch en route to Belur" },
      { time: "02:00 PM – 03:00 PM", activity: "Visit Chennakeshava Temple, Belur" },
      { time: "03:00 PM – 04:00 PM", activity: "Explore Hoysaleshwara Temple, Halebeedu" },
      { time: "04:00 PM", activity: "Depart for Bangalore" },
      { time: "08:00 PM", activity: "Dinner stop" },
      { time: "10:00 PM", activity: "Arrive in Bangalore (same drop points)" },
    ],
    inclusions: [
      "Non-A/C Transport from Bangalore (Round Trip)",
      "2 Breakfasts and 1 Dinner (Veg)",
      "Forest/Trek Permits",
      "Dormitory Accommodation (Separate for Men and Women)",
      "Abhi Trip Trek Coordinator",
      "Basic First Aid Kit",
    ],
    exclusions: [
      "Optional Activities (Jeep ride, elephant interaction)",
      "Personal Expenses: Snacks, Bottled Water, Additional Meals",
      "Insurance of any kind",
      "Anything not listed in the 'Inclusions'",
    ],
    whatToBring: [
      "Xerox Copy of your Aadhar/Voter ID",
      "Small backpack",
      "Water bottles (1–2 liters)",
      "Comfortable trekking shoes with good grip",
      "Raincoat and bag covers",
      "Extra pair of clothes",
      "Torch or Headlamp",
      "Personal medication",
      "Hand sanitizers",
      "Portable chargers",
      "Chocolates, energy bars, dry fruits",
      "Snacks",
    ],
  },
  {
    id: 14,
    title: "Gokarna Beach Retreat",
    description:
      "A perfect weekend escape combining beach bliss and spiritual vibes. Relax on serene shores, explore scenic trails, and visit iconic coastal temples.",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    price: "₹3,699",
    originalPrice: "₹3,699",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-18",
    rating: 4.6,
    reviews: 87,
    slug: "gokarna-murudeshwar-trip",
    highlights: [
      "Mahabaleshwar Temple",
      "Mirjan Fort",
      "Om Beach",
      "Kudle Beach",
      "Murudeshwar - Shiva Statue",
      "Honnavara Backwaters",
    ],
    location: "480km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "A perfect weekend escape combining beach bliss and spiritual vibes. Relax on serene shores, explore scenic trails, and visit iconic coastal temples.",
    itinerary: [
      { time: "Day 0 – 08:00 PM", activity: "Begin Your Scenic Journey to the Gokarna" },
      { time: "08:00 PM", activity: "Start from Banashankari bus stop" },
      { time: "08:15 PM", activity: "Join from BTM Layout" },
      { time: "08:30 PM", activity: "Next stop, Silk Board" },
      { time: "08:45 PM", activity: "Assemble at Koramangala" },
      { time: "09:00 PM", activity: "Picking up at Domlur" },
      { time: "09:15 PM", activity: "Meet us at MG Road" },
      { time: "09:30 PM", activity: "Join at KTM Mekhri Circle" },
      { time: "09:45 PM", activity: "Board at Yeshwanthpura" },
      { time: "10:00 PM", activity: "Last pickup at Goraguntepalya" },
      { time: "Day 1 – Forts and Beaches", activity: "" },
      { time: "09:00 AM – 11:00 AM", activity: "Arrival at campsite, freshen up and relax" },
      { time: "11:00 AM – 12:00 PM", activity: "Visit Mahabaleshwar Temple (Temple closes at 12:30 PM)" },
      { time: "12:30 PM – 01:30 PM", activity: "Explore the historic Mirjan Fort" },
      { time: "01:30 PM – 02:30 PM", activity: "Lunch break (Self-sponsored)" },
      { time: "04:00 PM – 05:00 PM", activity: "Visit Om Beach, followed by a short trek (1 km) to Kudle Beach" },
      { time: "05:30 PM – 06:30 PM", activity: "Sunset at Kudle Beach" },
      { time: "06:30 PM – 10:00 PM", activity: "Return to campsite, enjoy campfire, group bonding, and dinner" },
      { time: "Day 2 – Temples, Boating & Return", activity: "" },
      { time: "06:00 AM – 09:00 AM", activity: "Wake up, freshen up, and enjoy breakfast" },
      { time: "09:00 AM – 12:00 PM", activity: "Visit Murudeshwar Temple and return" },
      { time: "12:00 PM – 02:30 PM", activity: "Honnavara Boating" },
      { time: "02:30 PM – 03:30 PM", activity: "Lunch" },
      { time: "Post 03:30 PM", activity: "Depart for Bengaluru" },
      { time: "Dinner en route", activity: "(Self-sponsored)" },
      { time: "05:00 AM", activity: "Reach Bangalore" },
    ],
    inclusions: [
      "Non-A/C Transport from Bangalore (Round Trip)",
      "2 Breakfasts and 1 Dinner (Veg)",
      "Forest/Trek Permits",
      "Dormitory Accommodation (Separate for Men and Women)",
      "Abhi Trip Trek Coordinator",
      "Basic First Aid Kit",
    ],
    exclusions: [
      "Optional Activities",
      "Personal Expenses: Snacks, Bottled Water, Additional Meals",
      "Insurance of any kind",
      "Anything not listed in the 'Inclusions'",
    ],
    whatToBring: [
      "Xerox Copy of your Aadhar/Voter ID",
      "Small backpack",
      "Water bottles (1–2 liters)",
      "Comfortable trekking shoes with good grip",
      "Raincoat and bag covers",
      "Extra pair of clothes",
      "Torch or Headlamp",
      "Personal medication",
      "Hand sanitizers",
      "Portable chargers",
      "Chocolates, energy bars, dry fruits",
      "Snacks",
    ],
  },
  {
    id: 15,
    title: "Ooty Queen of Hills Experience",
    description:
      "Experience the magic of misty hills, cascading waterfalls, and scenic landscapes – your ideal weekend getaway to Ooty!",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fe5c2327c69e9f3462844b909820385d.jpg-EotWWJMAppLNv3UySI6TR1Nul0a8gY.jpeg",
    price: "₹5,500",
    originalPrice: "₹3,799",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "20-25",
    rating: 4.5,
    reviews: 112,
    slug: "ooty-queen-of-hills",
    highlights: [
      "Needle Rock View Point",
      "Ooty Lake and nearby attractions",
      "Dodda Betta Tea Factory",
      "Pine Tree Forest",
      "Conoor",
    ],
    location: "270km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Experience the magic of misty hills, cascading waterfalls, and scenic landscapes – your ideal weekend getaway to Ooty!",
    itinerary: [
      { time: "Day 0 – 10:00 PM", activity: "Begin Your Scenic Journey to Ooty" },
      { time: "10:00 PM", activity: "Start from Banashankari" },
      { time: "10:15 PM", activity: "Quick pickup BTM Layout" },
      { time: "10:30 PM", activity: "Next stop, Silk Board" },
      { time: "10:45 PM", activity: "Board at Bellandur" },
      { time: "11:00 PM", activity: "Assemble at Marathalli" },
      { time: "11:30 PM", activity: "Pickup at Tin Factory" },
      { time: "12:00 AM", activity: "Picking up at Indira Nagar" },
      { time: "12:10 AM", activity: "Meet us at Halasuru" },
      { time: "12:30 AM", activity: "Join at Corporation Circle" },
      { time: "12:50 AM", activity: "Board at Mysuru Road Bus Station" },
      { time: "Day 1 – Into the Wild & Water", activity: "" },
      { time: "7:00 AM – 10:00 AM", activity: "Arrive and explore Needle Rock View Point" },
      { time: "10:00 AM", activity: "Check-in at your accommodation" },
      { time: "11:30 AM – 12:30 PM", activity: "Visit Ooty Lake for scenic views and optional boat rides" },
      { time: "1:00 PM – 2:00 PM", activity: "Lunch at a local restaurant" },
      { time: "2:00 PM – 3:00 PM", activity: "Explore Dodda Betta Tea Factory" },
      { time: "3:00 PM – 5:00 PM", activity: "Optional adventure activities" },
      { time: "5:00 PM – 7:00 PM", activity: "Stroll through Ooty Botanical Garden" },
      { time: "7:00 PM", activity: "Return to stay and unwind" },
      { time: "Day 2 – Discover the Charm of Ooty", activity: "" },
      { time: "9:30 AM", activity: "Check out from the accommodation" },
      { time: "10:00 AM – 11:00 AM", activity: "Stroll through the scenic Rose Garden" },
      { time: "11:30 AM – 12:30 PM", activity: "Trek to Doddabetta Peak, the highest point in the Nilgiris" },
      { time: "1:00 PM – 2:00 PM", activity: "Lunch at a local restaurant (self-sponsored)" },
      { time: "2:00 PM – 3:00 PM", activity: "Explore the peaceful Pine Tree Forest" },
      { time: "3:00 PM – 4:00 PM", activity: "Visit 6th Mile Shooting Point for panoramic views" },
      { time: "4:00 PM", activity: "Depart from Ooty to Bangalore" },
      { time: "12:00 AM", activity: "Arrive in Bengaluru" },
    ],
    inclusions: [
      "Non-A/C round-trip transport from Bangalore",
      "2 Breakfasts and 1 Veg dinner",
      "All required permits and entry fees",
      "Dormitory accommodation (separate for men and women)",
      "Abhi Trip trek coordinator",
      "Basic first aid kit",
    ],
    exclusions: [
      "Optional Activities",
      "Personal Expenses: Snacks, Bottled Water, Additional Meals",
      "Insurance of any kind",
      "Anything not listed in the 'Inclusions'",
    ],
    whatToBring: [
      "Xerox Copy of your Aadhar/Voter ID",
      "Small backpack",
      "Water bottles (1–2 liters)",
      "Comfortable trekking shoes with good grip",
      "Raincoat and bag covers",
      "Extra pair of clothes",
      "Torch or Headlamp",
      "Personal medication",
      "Hand sanitizers",
      "Portable chargers",
      "Chocolates, energy bars, dry fruits",
      "Snacks",
    ],
  },
  {
    id: 16,
    title: "Kabini Wildlife Safari",
    description:
      "Wildlife adventure at Kabini with jungle safaris, river cruise, and nature walks in pristine forests.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52ae0c3e34336027ca3488a7c0a36505.jpg-riwRFfE8rsw7MEHRJk0JsJ2jZz0hZL.jpeg",
    price: "₹3,799",
    originalPrice: "₹4,299",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "12-15",
    rating: 4.8,
    reviews: 76,
    slug: "kabini-wildlife-safari",
    highlights: ["Jungle safari", "River cruise", "Wildlife", "Nature walks"],
    location: "200km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Wildlife adventure at Kabini with jungle safaris, river cruise, and nature walks in pristine forests.",
    itinerary: [
      { time: "Day 1 - 7:00 AM", activity: "Departure from Bangalore" },
      { time: "Day 1 - 11:00 AM", activity: "Arrive at Kabini, check-in" },
      { time: "Day 1 - 12:00 PM", activity: "Lunch and rest" },
      { time: "Day 1 - 3:00 PM", activity: "Afternoon jungle safari" },
      { time: "Day 1 - 6:00 PM", activity: "River cruise" },
      { time: "Day 1 - 8:00 PM", activity: "Dinner and overnight stay" },
      { time: "Day 2 - 6:00 AM", activity: "Early morning safari" },
      { time: "Day 2 - 9:00 AM", activity: "Breakfast and checkout" },
      { time: "Day 2 - 10:00 AM", activity: "Nature walk" },
      { time: "Day 2 - 12:00 PM", activity: "Lunch" },
      { time: "Day 2 - 2:00 PM", activity: "Return journey to Bangalore" },
    ],
    inclusions: [
      "Transportation from Bangalore",
      "Accommodation (1 night)",
      "All meals",
      "Safari charges",
      "River cruise",
      "Professional guide",
    ],
    exclusions: ["Personal expenses", "Additional activities", "Travel insurance"],
    whatToBring: ["Comfortable clothes", "Binoculars", "Camera", "Hat and sunscreen", "Personal medication"],
  },
  {
    id: 17,
    title: "Netravati Trek",
    description:
      "The Netravati Peak Trek is a challenging yet rewarding adventure through the Western Ghats, offering stunning views and diverse flora.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹4,299",
    originalPrice: "₹4,799",
    duration: "2 Days / 1 Night",
    difficulty: "Challenging",
    groupSize: "10-12",
    rating: 4.7,
    reviews: 45,
    slug: "netravati-peak-trek",
    highlights: ["Western Ghats", "Peak trek", "Flora diversity", "Challenging trail"],
    location: "350km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "The Netravati Peak Trek is a challenging yet rewarding adventure through the Western Ghats, offering stunning views and diverse flora.",
    itinerary: [
      { time: "Day 1 - 6:00 AM", activity: "Departure from Bangalore" },
      { time: "Day 1 - 12:00 PM", activity: "Reach base camp" },
      { time: "Day 1 - 1:00 PM", activity: "Lunch and briefing" },
      { time: "Day 1 - 2:00 PM", activity: "Begin trek to campsite" },
      { time: "Day 1 - 6:00 PM", activity: "Reach campsite, dinner" },
      { time: "Day 2 - 5:00 AM", activity: "Early morning summit push" },
      { time: "Day 2 - 8:00 AM", activity: "Reach summit" },
      { time: "Day 2 - 10:00 AM", activity: "Descent begins" },
      { time: "Day 2 - 2:00 PM", activity: "Lunch at base" },
      { time: "Day 2 - 3:00 PM", activity: "Return journey" },
    ],
    inclusions: ["Transportation", "Accommodation", "All meals", "Professional guide", "Camping equipment"],
    exclusions: ["Personal expenses", "Travel insurance", "Personal trekking gear"],
    whatToBring: ["Trekking shoes", "Warm clothes", "Rain gear", "Personal medication", "Headlamp"],
  },
  {
    id: 18,
    title: "Wayanad Adventure",
    description:
      "Explore the lush forests and waterfalls of Wayanad",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹3,899",
    originalPrice: "₹4,399",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.6,
    reviews: 89,
    slug: "wayanad-adventure",
    highlights: ["Spice plantations", "Wildlife sanctuary", "Tribal culture", "Waterfalls"],
    location: "280km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Explore the aromatic spice plantations of Wayanad with guided tours, wildlife spotting, and cultural experiences.",
    itinerary: [
      { time: "Day 1 - 7:00 AM", activity: "Departure from Bangalore" },
      { time: "Day 1 - 1:00 PM", activity: "Arrive in Wayanad" },
      { time: "Day 1 - 2:00 PM", activity: "Check-in and lunch" },
      { time: "Day 1 - 4:00 PM", activity: "Spice plantation tour" },
      { time: "Day 1 - 7:00 PM", activity: "Cultural program and dinner" },
      { time: "Day 2 - 8:00 AM", activity: "Visit Edakkal Caves" },
      { time: "Day 2 - 11:00 AM", activity: "Soochipara Falls" },
      { time: "Day 2 - 1:00 PM", activity: "Lunch" },
      { time: "Day 2 - 3:00 PM", activity: "Return journey" },
      { time: "Day 2 - 9:00 PM", activity: "Arrive in Bangalore" },
    ],
    inclusions: ["Transportation", "Accommodation", "All meals", "Plantation tour", "Entry fees"],
    exclusions: ["Personal expenses", "Additional activities", "Travel insurance"],
    whatToBring: ["Comfortable walking shoes", "Camera", "Light clothing", "Personal medication", "Insect repellent"],
  },
  // CUSTOMIZED TRIPS
  {
    id: 19,
    title: "Customized Adventure Package",
    description:
      "Create your perfect adventure with our fully customizable trip packages tailored to your preferences and group size.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹2,999",
    originalPrice: "₹3,499",
    duration: "Flexible",
    difficulty: "Customizable",
    groupSize: "5-50",
    rating: 4.9,
    reviews: 234,
    slug: "customized-adventure-package",
    highlights: ["Fully customizable", "Flexible duration", "Group discounts", "Personal guide"],
    location: "Anywhere in Karnataka",
    category: "Customized Trip",
    fullDescription:
      "Create your perfect adventure with our fully customizable trip packages tailored to your preferences and group size.",
    itinerary: [
      { time: "Flexible", activity: "Customized based on your preferences" },
      { time: "Day planning", activity: "Work with our team to plan your perfect itinerary" },
      { time: "Activity selection", activity: "Choose from trekking, camping, sightseeing, adventure sports" },
      { time: "Accommodation", activity: "Select from budget to luxury options" },
      { time: "Transportation", activity: "Private or shared transport options" },
    ],
    inclusions: ["Customized itinerary", "Professional guide", "Transportation options", "Activity coordination"],
    exclusions: ["Varies based on package", "Personal expenses", "Travel insurance"],
    whatToBring: ["Based on selected activities", "Personal preferences", "Weather appropriate clothing"],
  },
  {
    id: 20,
    title: "Corporate Team Building Retreat",
    description:
      "Strengthen team bonds with our specially designed corporate retreat packages featuring team building activities and leadership challenges.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹3,499",
    originalPrice: "₹3,999",
    duration: "1-3 Days",
    difficulty: "Easy to Moderate",
    groupSize: "20-100",
    rating: 4.8,
    reviews: 156,
    slug: "corporate-team-building",
    highlights: ["Team building", "Leadership activities", "Professional facilitation", "Venue options"],
    location: "Various locations near Bangalore",
    category: "Customized Trip",
    fullDescription:
      "Strengthen team bonds with our specially designed corporate retreat packages featuring team building activities and leadership challenges.",
    itinerary: [
      { time: "Day 1", activity: "Arrival and ice-breaking activities" },
      { time: "Morning", activity: "Team building challenges" },
      { time: "Afternoon", activity: "Leadership workshops" },
      { time: "Evening", activity: "Group activities and bonding" },
      { time: "Day 2", activity: "Outdoor challenges and problem solving" },
      { time: "Conclusion", activity: "Reflection and action planning" },
    ],
    inclusions: [
      "Professional facilitator",
      "Team building activities",
      "Venue and equipment",
      "Meals and refreshments",
      "Transportation",
    ],
    exclusions: ["Personal expenses", "Additional activities", "Extended accommodation"],
    whatToBring: ["Comfortable clothes", "Sports shoes", "Notebook and pen", "Positive attitude"],
  },
  {
    id: 21,
    title: "Photography Expedition",
    description:
      "Capture stunning landscapes and wildlife with our photography-focused trips led by professional photographers.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹4,299",
    originalPrice: "₹4,799",
    duration: "2-4 Days",
    difficulty: "Easy to Moderate",
    groupSize: "8-12",
    rating: 4.7,
    reviews: 78,
    slug: "photography-expedition",
    highlights: ["Professional guidance", "Scenic locations", "Wildlife photography", "Technique workshops"],
    location: "Western Ghats and Wildlife Sanctuaries",
    category: "Customized Trip",
    fullDescription:
      "Capture stunning landscapes and wildlife with our photography-focused trips led by professional photographers.",
    itinerary: [
      { time: "Golden hour", activity: "Sunrise and sunset photography sessions" },
      { time: "Morning", activity: "Landscape photography techniques" },
      { time: "Afternoon", activity: "Wildlife photography at sanctuaries" },
      { time: "Evening", activity: "Photo review and editing tips" },
      { time: "Night", activity: "Astrophotography sessions" },
    ],
    inclusions: [
      "Professional photographer guide",
      "Photography workshops",
      "Transportation",
      "Accommodation",
      "Entry fees",
    ],
    exclusions: ["Camera equipment", "Personal expenses", "Photo editing software"],
    whatToBring: ["DSLR/Mirrorless camera", "Tripod", "Extra batteries", "Memory cards", "Lens cleaning kit"],
  },
  {
    id: 22,
    title: "Family Adventure Package",
    description:
      "Fun-filled family adventures with activities suitable for all ages, creating memorable experiences for the whole family.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹2,799",
    originalPrice: "₹3,299",
    duration: "1-2 Days",
    difficulty: "Easy",
    groupSize: "Family groups",
    rating: 4.6,
    reviews: 145,
    slug: "family-adventure-package",
    highlights: ["Kid-friendly activities", "Safety focused", "Educational experiences", "Family bonding"],
    location: "Family-friendly destinations near Bangalore",
    category: "Customized Trip",
    fullDescription:
      "Fun-filled family adventures with activities suitable for all ages, creating memorable experiences for the whole family.",
    itinerary: [
      { time: "Morning", activity: "Easy nature walks and exploration" },
      { time: "Mid-morning", activity: "Educational activities for kids" },
      { time: "Afternoon", activity: "Family games and bonding activities" },
      { time: "Evening", activity: "Storytelling and cultural experiences" },
      { time: "Optional", activity: "Overnight camping with family tents" },
    ],
    inclusions: [
      "Family-friendly guide",
      "Safety equipment",
      "Educational materials",
      "Family meals",
      "Transportation",
    ],
    exclusions: ["Personal expenses", "Additional snacks", "Travel insurance"],
    whatToBring: ["Comfortable clothes for all", "Sun protection", "Personal medication", "Camera", "Snacks for kids"],
  },
  {
    id: 23,
    title: "Wellness & Yoga Retreat",
    description:
      "Rejuvenate your mind and body with our wellness retreats featuring yoga sessions, meditation, and nature therapy.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹3,999",
    originalPrice: "₹4,499",
    duration: "2-3 Days",
    difficulty: "Easy",
    groupSize: "10-15",
    rating: 4.8,
    reviews: 92,
    slug: "wellness-yoga-retreat",
    highlights: ["Certified yoga instructor", "Meditation sessions", "Healthy meals", "Nature therapy"],
    location: "Peaceful hill stations and ashrams",
    category: "Customized Trip",
    fullDescription:
      "Rejuvenate your mind and body with our wellness retreats featuring yoga sessions, meditation, and nature therapy.",
    itinerary: [
      { time: "Early morning", activity: "Sunrise yoga and pranayama" },
      { time: "Morning", activity: "Meditation and mindfulness sessions" },
      { time: "Afternoon", activity: "Nature walks and therapy" },
      { time: "Evening", activity: "Restorative yoga and relaxation" },
      { time: "Night", activity: "Sound healing and peaceful sleep" },
    ],
    inclusions: [
      "Certified yoga instructor",
      "Meditation guide",
      "Healthy vegetarian meals",
      "Accommodation",
      "Yoga mats and props",
    ],
    exclusions: ["Personal yoga equipment", "Spa treatments", "Personal expenses"],
    whatToBring: ["Comfortable yoga clothes", "Personal water bottle", "Journal", "Open mind", "Meditation cushion"],
  },
  {
    id: 24,
    title: "Adventure Sports Package",
    description:
      "Adrenaline-pumping adventure sports package including rock climbing, rappelling, river rafting, and more extreme activities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹4,999",
    originalPrice: "₹5,499",
    duration: "2-3 Days",
    difficulty: "Moderate to Challenging",
    groupSize: "8-15",
    rating: 4.9,
    reviews: 167,
    slug: "adventure-sports-package",
    highlights: ["Multiple adventure sports", "Professional instructors", "Safety equipment", "Certification"],
    location: "Adventure sports destinations in Karnataka",
    category: "Customized Trip",
    fullDescription:
      "Adrenaline-pumping adventure sports package including rock climbing, rappelling, river rafting, and more extreme activities.",
    itinerary: [
      { time: "Day 1", activity: "Rock climbing and rappelling" },
      { time: "Day 2", activity: "River rafting and kayaking" },
      { time: "Day 3", activity: "Zip-lining and obstacle courses" },
      { time: "Throughout", activity: "Safety briefings and skill development" },
      { time: "Evening", activity: "Adventure stories and bonding" },
    ],
    inclusions: [
      "Professional instructors",
      "All safety equipment",
      "Adventure activities",
      "Meals and accommodation",
      "Transportation",
      "Certificates",
    ],
    exclusions: ["Personal adventure gear", "Medical insurance", "Personal expenses"],
    whatToBring: [
      "Sports shoes with good grip",
      "Quick-dry clothes",
      "Personal medication",
      "Courage and enthusiasm",
      "Camera for memories",
    ],
  },
  {
    id: 19,
    title: "Dandeli Wildlife Adventure",
    description:
      "Experience thrilling water sports and jungle adventures in the nature paradise of Dandeli.",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "₹4,999",
    originalPrice: "₹5,499",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "15-20",
    rating: 4.8,
    reviews: 104,
    slug: "dandeli-adventure",
    highlights: ["White water rafting", "Jungle safari", "Kayaking", "Zip-lining"],
    location: "450km from Bangalore",
    category: "Two Day Trip",
    fullDescription:
      "Experience the thrill of adventure in the pristine forests of Dandeli. From exhilarating white water rafting to peaceful jungle safaris, Dandeli offers the perfect blend of adrenaline and nature. This well-preserved wildlife sanctuary is also home to diverse flora and fauna, making it an ideal destination for nature enthusiasts and adventure seekers alike.",
    itinerary: [
      { time: "Day 1 - 6:00 AM", activity: "Departure from Bangalore" },
      { time: "Day 1 - 2:00 PM", activity: "Arrive in Dandeli" },
      { time: "Day 1 - 2:30 PM", activity: "Check-in at resort" },
      { time: "Day 1 - 3:30 PM", activity: "Lunch and briefing" },
      { time: "Day 1 - 4:30 PM", activity: "White water rafting (Grade 2-3 rapids)" },
      { time: "Day 1 - 7:00 PM", activity: "Return to resort" },
      { time: "Day 1 - 8:00 PM", activity: "Bonfire and dinner" },
      { time: "Day 2 - 7:00 AM", activity: "Breakfast" },
      { time: "Day 2 - 8:00 AM", activity: "Jungle safari in Dandeli Wildlife Sanctuary" },
      { time: "Day 2 - 11:00 AM", activity: "Adventure activities (kayaking, zip-lining)" },
      { time: "Day 2 - 1:00 PM", activity: "Lunch" },
      { time: "Day 2 - 2:00 PM", activity: "Departure to Bangalore" },
      { time: "Day 2 - 10:00 PM", activity: "Reach Bangalore" },
    ],
    inclusions: [
      "Transportation from Bangalore",
      "Accommodation (1 night)",
      "All meals (1 breakfast, 2 lunches, 1 dinner)",
      "White water rafting",
      "Jungle safari",
      "Basic adventure activities",
      "Professional guide",
    ],
    exclusions: [
      "Personal expenses",
      "Additional adventure activities",
      "Travel insurance",
      "Tips",
      "Anything not mentioned in inclusions",
    ],
    whatToBring: [
      "Change of clothes",
      "Swimming attire",
      "Sports shoes",
      "Insect repellent",
      "Sunscreen",
      "Personal medication",
      "Binoculars for wildlife spotting",
    ],
  },
]

interface Trip {
  id: number
  title: string
  description: string
  image: string
  price: string
  originalPrice?: string
  duration: string
  difficulty: string
  groupSize: string
  rating: number
  reviews: number
  slug: string
  highlights: string[]
  location: string
  category: string
  fullDescription: string
  itinerary: Array<{ time: string; activity: string }>
  inclusions: string[]
  exclusions: string[]
  whatToBring: string[]
}

interface TripPageClientProps {
  params: {
    slug: string
  }
}

export default function TripPageClient({ params }: TripPageClientProps) {
  const trips = getAllTrips()
  const trip = trips.find((t) => t.slug === params.slug)

  if (!trip) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image src={trip.image || "/placeholder.svg"} alt={trip.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{trip.title}</h1>
            <p className="text-lg md:text-xl mb-6 opacity-90">{trip.description}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="w-4 h-4 mr-1" />
                {trip.location}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="w-4 h-4 mr-1" />
                {trip.duration}
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Users className="w-4 h-4 mr-1" />
                {trip.groupSize} people
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="sticky top-0 bg-white shadow-sm z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{trip.rating}</span>
                <span className="text-gray-500">({trip.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Trip Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">{trip.fullDescription}</p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <div className="font-medium">{trip.duration}</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                    <div className="font-medium">{trip.groupSize}</div>
                    <div className="text-sm text-gray-600">Group Size</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Badge variant="outline" className="text-orange-600 border-orange-200">
                      {trip.difficulty}
                    </Badge>
                    <div className="text-sm text-gray-600 mt-1">Difficulty</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Key Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {trip.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Detailed Itinerary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  Detailed Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trip.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4 pb-4 border-b border-gray-100 last:border-b-0">
                      <div className="flex-shrink-0 w-20 md:w-24">
                        <Badge variant="outline" className="text-xs">
                          {item.time}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Inclusions & Exclusions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trip.inclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">What's Not Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {trip.exclusions.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-4 h-4 border border-red-300 rounded-full mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* What to Bring */}
            <Card>
              <CardHeader>
                <CardTitle>What to Bring</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-3">
                  {trip.whatToBring.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-600">{trip.price}</span>
                    {trip.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{trip.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">per person</p>
                </CardHeader>
                <CardContent>
                  <BookingForm tripTitle={trip.title} tripPrice={trip.price} />

                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-medium text-center">Need Help?</h4>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919876543210"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
