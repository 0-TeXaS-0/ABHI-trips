import { Calendar, Users, Star, Phone, MessageCircle, Mountain, Clock } from "lucide-react"
import { OneDayTripCard } from "@/components/one-day-trip-card"
import Image from "next/image"
import Link from "next/link"

export default function OneDayTripsPage() {
  const oneDayTrips = [
    {
      id: 1,
      title: "Nandi Hills Sunrise Trek",
      description:
        "Witness the breathtaking sunrise from the historic Nandi Hills, perfect for photography enthusiasts and nature lovers.",
      image:
        "/images/adventure-sports.jpeg",
      price: "₹799",
      originalPrice: "₹999",
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
      title: "Uttari Betta Sunrise Trek",
      description:
        "Experience the stunning sunrise from Uttari Betta (Hutridurga), a perfect trekking spot for beginners and families.",
      image:
        "/images/customized-adventure.jpeg",
      price: "₹799",
      originalPrice: "₹999",
      duration: "1 Day",
      difficulty: "Easy",
      groupSize: "15-25",
      rating: 4.6,
      reviews: 67,
      slug: "uttari-betta-sunrise-trek",
      highlights: ["Sunrise views", "Ancient fort", "Rocky terrain", "Nature photography"],
      location: "70km from Bangalore",
    },
    {
      id: 3,
      title: "Skandagiri Sunrise Trek",
      description: "Experience the magic of trekking under the stars and watching the sunrise from above the clouds!",
      image:
        "/images/photography-expedition.jpeg",
      price: "₹1249",
      originalPrice: "₹1499",
      duration: "1 Day",
      difficulty: "Moderate",
      groupSize: "15-20",
      rating: 4.8,
      reviews: 124,
      slug: "skandagiri-sunrise-trek",
      highlights: ["Night trekking", "Sunrise views", "Fort ruins", "Star gazing"],
      location: "70km from Bangalore",
    },
    {
      id: 4,
      title: "Shivagange Sunrise Trek",
      description: "Explore the religious hill that resembles a Shiva Linga and offers both spiritual connection and adventure.",
      image:
        "/images/family-adventure.jpeg",
      price: "₹799",
      originalPrice: "₹999",
      duration: "1 Day",
      difficulty: "Moderate",
      groupSize: "15-25",
      rating: 4.5,
      reviews: 78,
      slug: "shivagange-sunrise-trek",
      highlights: ["Spiritual site", "Temple visit", "Rock climbing", "Panoramic views"],
      location: "55km from Bangalore",
    },
    {
      id: 5,
      title: "Kunti Betta Sunrise Trek",
      description:
        "Looking for a thrilling night trek with breathtaking sunrise views? The perfect blend of adventure, nature, and mythology.",
      image:
        "/images/wellness-yoga.jpeg",
      price: "₹799",
      originalPrice: "₹999",
      duration: "1 Day",
      difficulty: "Easy",
      groupSize: "15-20",
      rating: 4.4,
      reviews: 56,
      slug: "kunti-betta-sunrise-trek",
      highlights: ["Night trek with flashlight-lit trails", "Sunrise with 360° panoramic views", "Budget-friendly adventure"],
      location: "125km from Bangalore",
    },
    {
      id: 6,
      title: "Adiyogi & Gudibande Fort Trek",
      description: "Embark on a unique day adventure where spiritual calm and historic thrill come together - perfect for beginners and weekend explorers.",
      image:
        "/images/corporate-team.jpeg",
      price: "₹999",
      originalPrice: "₹1299",
      duration: "1 Day",
      difficulty: "Easy",
      groupSize: "15-25",
      rating: 4.6,
      reviews: 92,
      slug: "adiyogi-gudibande-fort-trek",
      highlights: ["Adiyogi statue", "Gudibande Fort trek", "Laser show", "Cultural experience"],
      location: "80km from Bangalore",
    },
  ]

  // console.log("Trip image path:", trip.image);
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 pt-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/adventure-sports.jpeg"
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
              Experience adventure, nature, and culture in just one day. Perfect weekend escapes from Bangalore with direct WhatsApp booking.
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
              <OneDayTripCard key={trip.id} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photography-expedition.jpeg"
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
              Create memories that last a lifetime with our perfectly planned day trips. All bookings are confirmed instantly via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-2xl hover:shadow-yellow-500/25 transform hover:scale-105 h-14 px-10">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Contact Us
                </button>
              </Link>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-purple-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <Calendar className="mr-3 h-6 w-6" />
                  WhatsApp Booking
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}







