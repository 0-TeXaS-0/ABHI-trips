import { Calendar, Users, Star, Phone, MessageCircle, Mountain, Clock } from "lucide-react"
import { TripCard } from "@/components/trip-card"
import { AnnouncementBar } from "@/components/announcement-bar"
import Image from "next/image"

export default function OneDayTripsPage() {
  const oneDayTrips = [
    {
      id: 1,
      title: "Nandi Hills Sunrise Trek",
      description:
        "Witness the breathtaking sunrise from the historic Nandi Hills, perfect for photography enthusiasts and nature lovers.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d51e1dee7dc2446863cef50ccb257e31.jpg-4da0fZMjFFPKsgD62ie5kB5lLPKO4D.jpeg",
      price: "₹1,299",
      originalPrice: "₹1,599",
      duration: "1 Day",
      difficulty: "Easy",
      groupSize: "15-25",
      rating: 4.7,
      reviews: 89,
      slug: "nandi-hills-sunrise-trek",
      highlights: ["Sunrise viewpoint", "Historical fort", "Photography spots", "Bird watching"],
      location: "60km from Bangalore",
    },
    {
      id: 2,
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
    },
    {
      id: 3,
      title: "Skandagiri Night Trek",
      description: "Experience the thrill of night trekking and catch the mesmerizing sunrise from Skandagiri peak.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae31ff761a4a5bc712d4698096490718.jpg-t6Yq8f9MiwpS8c4z4JP9hQOtNckCrF.jpeg",
      price: "₹1,599",
      originalPrice: "₹1,899",
      duration: "1 Day",
      difficulty: "Moderate",
      groupSize: "15-20",
      rating: 4.8,
      reviews: 124,
      slug: "skandagiri-night-trek",
      highlights: ["Night trekking", "Sunrise views", "Fort ruins", "Star gazing"],
      location: "70km from Bangalore",
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
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/832c1555b65a38244141549a13c89c79.jpg-aBMwDYLdpZmYsjH6tHTh2qmsP1PjjQ.jpeg"
            alt="Mountain trekking adventure"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Mountain className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm">One Day Adventures</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Day Escapes
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Experience adventure, nature, and culture in just one day. Perfect weekend escapes from Bangalore.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Calendar className="h-5 w-5 text-yellow-400" />
                <span>Every Friday</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-green-400" />
                <span>Small Groups</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span>4.6+ Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span>Day Trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trips Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {oneDayTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/322e842dceb4f7222eeac1da44034f48.jpg-I3FY0zDXCUQp4hbNZmn0ZIGHbGnSc6.jpeg"
            alt="Adventure background"
            fill
            className="object-cover opacity-10"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="h-6 w-6 text-yellow-400" />
              <span className="text-yellow-400 font-semibold tracking-wide uppercase text-sm">Ready for Adventure</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Book Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Day Adventure
              </span>
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              Create memories that last a lifetime with our perfectly planned day trips. All trips depart on Fridays.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
