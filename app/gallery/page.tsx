import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, MapPin, Calendar, Users, Phone, MessageCircle, Heart, Star } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d51e1dee7dc2446863cef50ccb257e31.jpg-4da0fZMjFFPKsgD62ie5kB5lLPKO4D.jpeg",
      title: "Nandi Hills Sunrise",
      location: "Nandi Hills",
      category: "Sunrise Trek",
      description: "Breathtaking sunrise views from the historic Nandi Hills",
    },
    {
      id: 2,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/823a4d3cc7940987d42e629260ea7657.jpg-ZTtbxkqdSrRNvSfyuoEiL3KpMMFM3h.jpeg",
      title: "Savandurga Adventure",
      location: "Savandurga",
      category: "Rock Climbing",
      description: "Conquering one of Asia's largest monolith hills",
    },
    {
      id: 3,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ae31ff761a4a5bc712d4698096490718.jpg-t6Yq8f9MiwpS8c4z4JP9hQOtNckCrF.jpeg",
      title: "Skandagiri Night Trek",
      location: "Skandagiri",
      category: "Night Trek",
      description: "Thrilling night trek with mesmerizing sunrise views",
    },
    {
      id: 4,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84fc1cbf7bd4a97d9893abfdc41e0f9d%20%281%29.jpg-tniux34eccmxX3eI266tYCVwuB2QK3.jpeg",
      title: "Coorg Coffee Plantations",
      location: "Coorg",
      category: "Plantation Tour",
      description: "Misty hills and aromatic coffee plantation experience",
    },
    {
      id: 5,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ed1ca01dfa2f309e07333fa3e42f1fc3.jpg-4vUtVyXbgPWXcqZYMDdNjOmOJag5jK.jpeg",
      title: "Hampi Heritage",
      location: "Hampi",
      category: "Heritage Tour",
      description: "Ancient ruins and UNESCO World Heritage Site exploration",
    },
    {
      id: 6,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43def08def9d0d28c1dbc687fad3de76.jpg-VvsWESStwC7nIjCnZQPA55OSchv74g.jpeg",
      title: "Gokarna Beach Bliss",
      location: "Gokarna",
      category: "Beach Tour",
      description: "Pristine beaches and spiritual temple visits",
    },
    {
      id: 7,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/e770a010b14b8e61b2ab9c1cfc9c9fb0.jpg-aZ2r0TEKDfqQ010qIdAuLHypP4oLeG.jpeg",
      title: "Chikmagalur Hills",
      location: "Chikmagalur",
      category: "Hill Station",
      description: "Coffee capital with scenic Western Ghats views",
    },
    {
      id: 8,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/52ae0c3e34336027ca3488a7c0a36505.jpg-riwRFfE8rsw7MEHRJk0JsJ2jZz0hZL.jpeg",
      title: "Kabini Wildlife",
      location: "Kabini",
      category: "Wildlife Safari",
      description: "Jungle safari and wildlife photography adventure",
    },
    {
      id: 9,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f5a251fa02c60ce10c044f40b9828ba0.jpg-BU9NJztg3GmRSjmrKSndFx3UpQuKIs.jpeg",
      title: "Couple Trekking",
      location: "Forest Trails",
      category: "Couple Adventure",
      description: "Romantic trekking experiences through lush forests",
    },
    {
      id: 10,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b008517b815a1e0e16c02838fa941c4b.jpg-J99SHaABjltqovKo71tuz1BQKrhfBR.jpeg",
      title: "Mountain Sunrise",
      location: "Western Ghats",
      category: "Sunrise Trek",
      description: "Group watching spectacular sunrise from mountain peaks",
    },
    {
      id: 11,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/832c1555b65a38244141549a13c89c79.jpg-aBMwDYLdpZmYsjH6tHTh2qmsP1PjjQ.jpeg",
      title: "Mountain Expedition",
      location: "High Peaks",
      category: "Trekking",
      description: "Challenging mountain treks with stunning lake views",
    },
    {
      id: 12,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c977916a2d8ed17ce69a78da4905c359.jpg-R4hDiERCidaO2UUahXoZD5A0YDETTN.jpeg",
      title: "Stream Crossing",
      location: "Forest Streams",
      category: "Adventure Trek",
      description: "Exciting stream crossings during forest adventures",
    },
    {
      id: 13,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd842f847f923dc1bb5b63778cf75e9c.jpg-pm8eKGU2SxKkO5ddhIySBr1rY3nTZY.jpeg",
      title: "Solo Adventure",
      location: "Mountain Peaks",
      category: "Solo Trek",
      description: "Empowering solo trekking experiences in misty mountains",
    },
    {
      id: 14,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/82a37c6641676656de9a4209e7b7926c.jpg-0piin2zFQJGKkDyYIbXbt6Kmt82ojR.jpeg",
      title: "River Valley",
      location: "Mountain Streams",
      category: "Nature Walk",
      description: "Peaceful walks along pristine mountain streams",
    },
    {
      id: 15,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/322e842dceb4f7222eeac1da44034f48.jpg-I3FY0zDXCUQp4hbNZmn0ZIGHbGnSc6.jpeg",
      title: "Summit Celebration",
      location: "Various Peaks",
      category: "Group Achievement",
      description: "Celebrating successful summit achievements together",
    },
    {
      id: 16,
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/d52e58799c8201cd549e45532a3bc57a.jpg-U2NPU6PtkD4gZlTFDhASDuggFAo4dx.jpeg",
      title: "Lakeside Camping",
      location: "Mountain Lakes",
      category: "Camping",
      description: "Relaxing camping experiences by serene mountain lakes",
    },
  ]

  const categories = [
    "All",
    "Sunrise Trek",
    "Rock Climbing",
    "Night Trek",
    "Plantation Tour",
    "Heritage Tour",
    "Beach Tour",
    "Hill Station",
    "Wildlife Safari",
    "Couple Adventure",
    "Trekking",
    "Adventure Trek",
    "Solo Trek",
    "Nature Walk",
    "Group Achievement",
    "Camping",
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/322e842dceb4f7222eeac1da44034f48.jpg-I3FY0zDXCUQp4hbNZmn0ZIGHbGnSc6.jpeg"
            alt="Adventure gallery showcase"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-indigo-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Camera className="h-6 w-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide uppercase text-sm">Adventure Gallery</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Memories That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                Last Forever
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed">
              Explore our collection of breathtaking moments captured during our adventures across Karnataka and South
              India.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Camera className="h-5 w-5 text-yellow-400" />
                <span>500+ Photos</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>50+ Destinations</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-5 w-5 text-blue-400" />
                <span>Happy Travelers</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Heart className="h-5 w-5 text-red-400" />
                <span>Unforgettable Moments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer hover:bg-pink-50 hover:border-pink-300 hover:text-pink-700 transition-all duration-200 px-4 py-2 text-sm font-medium"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02] bg-white"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm border-0 text-xs">
                      {image.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <div className="flex items-center gap-1 text-sm text-gray-200 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span>{image.location}</span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-6 w-6 text-pink-600" />
              <span className="text-pink-600 font-semibold tracking-wide uppercase text-sm">Our Journey</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Adventures in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">
                Numbers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="h-8 w-8 text-pink-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">Photos Captured</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-gray-600">Destinations</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600">Adventures</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/832c1555b65a38244141549a13c89c79.jpg-aBMwDYLdpZmYsjH6tHTh2qmsP1PjjQ.jpeg"
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
              <Calendar className="h-6 w-6 text-pink-400" />
              <span className="text-pink-400 font-semibold tracking-wide uppercase text-sm">Join Our Adventures</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Create Your Own{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
                Photo Story
              </span>
            </h2>
            <p className="text-xl text-pink-100 mb-8 leading-relaxed">
              Be part of our next adventure and create memories that will last a lifetime. Your story could be featured
              in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="tel:+919740174089">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-pink-500 to-indigo-500 hover:from-pink-600 hover:to-indigo-600 text-white shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Call +91 97401 74089
                </button>
              </a>
              <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 text-white hover:bg-white hover:text-pink-600 backdrop-blur-sm bg-white/10 hover:shadow-2xl transform hover:scale-105 h-14 px-10">
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
