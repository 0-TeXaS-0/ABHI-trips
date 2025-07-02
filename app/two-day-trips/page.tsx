import { TripCard } from "@/components/trip-card"

const twoDayTrips = [
  {
    id: 1,
    title: "Coorg Coffee Plantation Experience",
    description:
      "Immerse yourself in the misty hills of Coorg with coffee plantation tours, waterfalls, and authentic local culture.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹2,999",
    originalPrice: "₹3,499",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.8,
    reviews: 124,
    slug: "coorg-coffee-plantation-trek",
    highlights: ["Coffee plantation", "Abbey Falls", "Raja's Seat", "Local cuisine"],
    location: "250km from Bangalore",
  },
  {
    id: 2,
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
  },
  {
    id: 3,
    title: "Chikmagalur Hill Station Retreat",
    description:
      "Relax in the coffee capital of India with scenic drives, trekking, and plantation visits in the Western Ghats.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e770a010b14b8e61b2ab9c1cfc9c9fb0.jpg-aZ2r0TEKDfqQ010qIdAuLHypP4oLeG.jpeg",
    price: "₹2,799",
    originalPrice: "₹3,299",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 98,
    slug: "chikmagalur-hill-station",
    highlights: ["Mullayanagiri peak", "Coffee museum", "Hebbe Falls", "Hill station"],
    location: "240km from Bangalore",
  },
  {
    id: 4,
    title: "Gokarna Beach & Temple Tour",
    description:
      "Perfect blend of spirituality and beach relaxation at the pristine beaches of Gokarna with temple visits.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43def08def9d0d28c1dbc687fad3de76.jpg-VvsWESStwC7nIjCnZQPA55OSchv74g.jpeg",
    price: "₹3,199",
    originalPrice: "₹3,699",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-18",
    rating: 4.6,
    reviews: 87,
    slug: "gokarna-beach-retreat",
    highlights: ["Om Beach", "Kudle Beach", "Temple visits", "Beach activities"],
    location: "480km from Bangalore",
  },
  {
    id: 5,
    title: "Ooty Queen of Hills Experience",
    description: "Escape to the cool climate of Ooty with toy train rides, botanical gardens, and lake activities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fe5c2327c69e9f3462844b909820385d.jpg-EotWWJMAppLNv3UySI6TR1Nul0a8gY.jpeg",
    price: "₹3,299",
    originalPrice: "₹3,799",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "20-25",
    rating: 4.5,
    reviews: 112,
    slug: "ooty-queen-of-hills",
    highlights: ["Toy train", "Botanical Gardens", "Ooty Lake", "Tea gardens"],
    location: "270km from Bangalore",
  },
  {
    id: 6,
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
  },
]

const TwoDayTripsPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Two-Day Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {twoDayTrips.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  )
}

export default TwoDayTripsPage
