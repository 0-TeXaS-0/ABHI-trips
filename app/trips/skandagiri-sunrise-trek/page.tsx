import Image from "next/image"
import Link from "next/link"
import { Calendar, Users, Star, Phone, MessageCircle, MapPin, Clock, CheckCircle, ArrowLeft, Share2, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"
import ClientBookingForm from "./ClientBookingForm"

export default function SkandagiriSunriseTrekPage() {
  const trip = {
    id: 2,
    title: "Skandagiri Sunrise Trek",
    description:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds!",
    image:
      "/images/adventure-sports.jpeg", // Using a local image to avoid remote image issues
    price: "₹1249",
    originalPrice: "₹1499",
    duration: "1 Day",
    difficulty: "Moderate",
    groupSize: "15-25",
    rating: 4.8,
    reviews: 75,
    slug: "skandagiri-sunrise-trek",
    highlights: [
      "Early morning trek to one of Karnataka's most scenic sunrise points",
      "Mesmerizing sunrise view above the clouds",
      "360° views from the summit, often above the clouds"
    ],
    location: "70km from Bangalore",
    category: "One Day Trip",
    fullDescription:
      "Experience the magic of trekking under the stars and watching the sunrise from above the clouds! The Skandagiri Sunrise Trek offers an unforgettable night hike through ancient fort ruins, misty trails, and panoramic views of Nandi Hills and beyond. Just 70 km from Bangalore, this trek is perfect for both beginners and seasoned adventurers looking for a quick escape into nature.",
    itinerary: [
      { time: "Day 0", activity: "Departure from Bengaluru at selected pickup points" },
      { time: "10:45 PM", activity: "Gopalan Arcade, RR Nagar" },
      { time: "11:15 PM", activity: "BMTC Bus Stop, Banashankari" },
      { time: "11:35 PM", activity: "Udupi Garden Signal, BTM Layout" },
      { time: "11:45 PM", activity: "Bus Stop, Silk Board" },
      { time: "12:15 AM", activity: "Shell Petrol Pump, Bellandur" },
      { time: "12:45 AM", activity: "Opp. Kalamandir, Marathahalli" },
      { time: "01:05 AM", activity: "HP Petrol Pump, Tin Factory" },
      { time: "01:15 AM", activity: "Opp. Esteem Mall, Hebbal" },
      { time: "03:00 AM", activity: "Arrive at the base; rest or enjoy a calm walk under the stars" },
      { time: "05:30 AM", activity: "Begin trek after a safety briefing from our guides" },
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
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image 
          src="/images/adventure-sports.jpeg" 
          alt={trip.title} 
          fill 
          className="object-cover" 
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
        />
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
            <Link href="/one-day-trips" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to One Day Trips
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
                  <ClientBookingForm tripTitle={trip.title} tripPrice={trip.price} />

                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-medium text-center">Need Help?</h4>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919740174089"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href="https://wa.me/919740174089"
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





