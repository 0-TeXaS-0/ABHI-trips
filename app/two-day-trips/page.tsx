import { Calendar, Users, Star, Phone, MessageCircle, Mountain, Clock, Tent } from "lucide-react"
import { TripCard } from "@/components/trip-card"
import Link from "next/link"

const twoDayTrips = [
  {
    id: 1,
    title: "Coorg Trip – The Scotland of India",
    description:
      "Immerse yourself in the misty hills of Coorg with coffee plantation tours, waterfalls, and authentic local culture.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
    price: "₹3,999",
    originalPrice: "₹4,499",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.8,
    reviews: 124,
    slug: "coorg-trip",
    highlights: ["Coffee plantation", "Abbey Falls", "Raja's Seat", "Local cuisine"],
    location: "250km from Bangalore",
  },
  {
    id: 2,
    title: "Chikmagalur Backpacking Trip",
    description:
      "Relax in the coffee capital of India with scenic drives, trekking, and plantation visits in the Western Ghats.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e770a010b14b8e61b2ab9c1cfc9c9fb0.jpg-aZ2r0TEKDfqQ010qIdAuLHypP4oLeG.jpeg",
    price: "₹3,999",
    originalPrice: "₹4,499",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 98,
    slug: "chikmagalur-trip",
    highlights: ["Mullayanagiri peak", "Coffee museum", "Hebbe Falls", "Hill station"],
    location: "240km from Bangalore",
  },
  {
    id: 3,
    title: "Gokarna and Murudeshwar Trip",
    description:
      "Perfect blend of spirituality and beach relaxation at the pristine beaches of Gokarna with temple visits.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43def08def9d0d28c1dbc687fad3de76.jpg-VvsWESStwC7nIjCnZQPA55OSchv74g.jpeg",
    price: "₹3,699",
    originalPrice: "₹4,199",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-18",
    rating: 4.6,
    reviews: 87,
    slug: "gokarna-murudeshwar-trip",
    highlights: ["Om Beach", "Kudle Beach", "Temple visits", "Murudeshwar Temple"],
    location: "480km from Bangalore",
  },
  {
    id: 4,
    title: "Netravati Trek",
    description:
      "An exhilarating trek through lush green Western Ghats with breathtaking views and pristine nature trails.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ed1ca01dfa2f309e07333fa3e42f1fc3.jpg-4vUtVyXbgPWXcqZYMDdNjOmOJag5jK.jpeg",
    price: "₹3,899",
    originalPrice: "₹4,399",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "12-15",
    rating: 4.9,
    reviews: 56,
    slug: "netravati-trek",
    highlights: ["Jungle trails", "River crossing", "Camping", "Wildlife spotting"],
    location: "300km from Bangalore",
  },
  {
    id: 5,
    title: "Bandaje Falls Trek",
    description: "Adventure through dense forests to reach the spectacular Bandaje Falls in the Western Ghats.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fe5c2327c69e9f3462844b909820385d.jpg-EotWWJMAppLNv3UySI6TR1Nul0a8gY.jpeg",
    price: "₹3,899",
    originalPrice: "₹4,399",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "12-15",
    rating: 4.8,
    reviews: 72,
    slug: "bandaje-falls-trek",
    highlights: ["Waterfall trek", "Camping", "Nature trails", "Photography"],
    location: "320km from Bangalore",
  },
  {
    id: 6,
    title: "Ooty Adventure",
    description:
      "Escape to the cool climate of Ooty with toy train rides, botanical gardens, and lake activities.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52ae0c3e34336027ca3488a7c0a36505.jpg-riwRFfE8rsw7MEHRJk0JsJ2jZz0hZL.jpeg",
    price: "₹5,500",
    originalPrice: "₹6,000",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "20-25",
    rating: 4.5,
    reviews: 112,
    slug: "ooty-adventure",
    highlights: ["Toy train", "Botanical Gardens", "Ooty Lake", "Tea gardens"],
    location: "270km from Bangalore",
  },
  {
    id: 7,
    title: "Kudremukh Trek",
    description:
      "Trek through the magnificent horse-faced peak of Kudremukh, one of the most popular treks in Karnataka.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/823a4d3cc7940987d42e629260ea7657.jpg-ZTtbxkqdSrRNvSfyuoEiL3KpMMFM3h.jpeg",
    price: "₹3,899",
    originalPrice: "₹4,399",
    duration: "2 Days / 1 Night",
    difficulty: "Moderate",
    groupSize: "12-15",
    rating: 4.9,
    reviews: 83,
    slug: "kudremukh-trek",
    highlights: ["Mountain trek", "Camping", "Forest trails", "Scenic views"],
    location: "335km from Bangalore",
  },
  {
    id: 8,
    title: "Wayanad Adventure",
    description:
      "Explore the lush green landscapes of Wayanad with waterfalls, wildlife, and cultural experiences.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d51e1dee7dc2446863cef50ccb257e31.jpg-4da0fZMjFFPKsgD62ie5kB5lLPKO4D.jpeg",
    price: "₹4,999",
    originalPrice: "₹5,499",
    duration: "2 Days / 1 Night",
    difficulty: "Easy",
    groupSize: "15-20",
    rating: 4.7,
    reviews: 92,
    slug: "wayanad-adventure",
    highlights: ["Edakkal Caves", "Banasura Dam", "900 Kandi Bridge", "Adventure activities"],
    location: "280km from Bangalore",
  },
  {
    id: 9,
    title: "Dandeli Adventure",
    description:
      "Experience thrilling water sports and jungle adventures in the nature paradise of Dandeli.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae31ff761a4a5bc712d4698096490718.jpg-t6Yq8f9MiwpS8c4z4JP9hQOtNckCrF.jpeg",
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
  },
]

export default function TwoDayTripsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large moving circles */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
          
          {/* Small floating elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-[15deg] animate-shift-horizontal"></div>
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent transform -rotate-[5deg] animate-shift-horizontal animation-delay-1000"></div>
            <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent transform rotate-[10deg] animate-shift-horizontal animation-delay-2000"></div>
          </div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Tent className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm">Two Day Adventures</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Weekend{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Getaways
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Escape the city for an unforgettable weekend. Perfect two-day adventures with overnight stays.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <span>Every Weekend</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-green-400" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>4.7+ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>2 Days / 1 Night</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {twoDayTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        
        {/* Moving Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large moving circles */}
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-move-slow"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-move-slow-reverse"></div>
          
          {/* Diagonal lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-[8deg] animate-shift-horizontal animation-delay-1000"></div>
            <div className="absolute bottom-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent transform -rotate-[5deg] animate-shift-horizontal animation-delay-2000"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">Book Your Weekend</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready for a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Weekend Escape?
              </span>
            </h2>
            <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
              Create lasting memories with our perfectly planned weekend trips. All accommodations and activities included.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 h-14 px-10">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Contact Us
                </button>
              </Link>
              <Link href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-indigo-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <Calendar className="mr-3 h-6 w-6" />
                  WhatsApp Booking
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



