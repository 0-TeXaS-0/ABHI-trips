import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  MapPin,
  Users,
  Shield,
  Clock,
  Star,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
  Camera,
  Mountain,
  Waves,
  Award,
  Heart,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FeaturedTripsCarousel } from "@/components/featured-trips-carousel"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StatsSection } from "@/components/stats-section"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"

export default function HomePage() {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Small Group Sizes",
      description: "Personal experience with intimate group sizes for better connections and personalized attention",
      color: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Passionate guides with deep local knowledge and insider access to hidden gems",
      color: "from-green-500 to-green-600",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: Shield,
      title: "Fully Managed Service",
      description: "End-to-end service management for a completely hassle-free travel experience",
      color: "from-orange-500 to-orange-600",
      iconBg: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Safe travel with round-the-clock support and assistance whenever you need it",
      color: "from-purple-500 to-purple-600",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ]

  const quickCategories = [
    {
      title: "One Day Adventures",
      description: "Perfect weekend escapes from Bangalore",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aab9fd021e81cc9e438ef17de218912a.jpg-U5rdEPZFaaX6DHa7xxb9JNrUZigy2l.jpeg",
      icon: Mountain,
      href: "/one-day-trips",
      gradient: "from-blue-500 to-blue-600",
      count: "6+ Trips",
    },
    {
      title: "Two Day Getaways",
      description: "Extended adventures with comfortable stays",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fde19972731d42caeb767943d1bfe30f.jpg-HCE5ARqj0rFEkK330EldQpp56VFzTT.jpeg",
      icon: Waves,
      href: "/two-day-trips",
      gradient: "from-green-500 to-green-600",
      count: "8+ Trips",
    },
    {
      title: "Custom Journeys",
      description: "Tailored experiences just for you",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93f2208d6ae3879eafcefc0fe086a048.jpg-MDCpirfQoyqvnzdMrqbG9jxOgUxSz6.jpeg",
      icon: Camera,
      href: "/customized-trips",
      gradient: "from-orange-500 to-orange-600",
      count: "Unlimited",
    },
  ]

  return (
    <div className="min-h-screen">
      

      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Stats Pills */}
      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 pt-4 md:pt-6 bg-gray-900 py-6">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-bold">4.8/5 Rating</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <Users className="h-5 w-5 text-blue-400" />
          <span className="font-bold">500+ Happy Travelers</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 text-white">
          <CheckCircle className="h-5 w-5 text-green-400" />
          <span className="font-bold">Premium Service</span>
        </div>
      </div>

      {/* Quick Categories */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Your Perfect Adventure</h2>
            <p className="text-gray-600 text-lg">
              From quick day trips to immersive weekend getaways, find the perfect experience for your schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickCategories.map((category, index) => (
              <Link href={category.href} key={index} passHref>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <Image src={category.image} alt={category.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.gradient} opacity-50`}></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-3 py-1 text-sm font-semibold shadow-sm">
                        {category.count}
                      </span>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-full bg-blue-50">
                        <category.icon className={`h-5 w-5 ${category.gradient.split(" ")[0].replace("from-", "text-")}`} />
                      </div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">{category.description}</CardDescription>
                    <div className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                      <span>View Available Trips</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section id="featured-trips" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Trips</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our most popular adventures, handpicked for unforgettable experiences
            </p>
          </div>
          
          <FeaturedTripsCarousel />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg')] bg-repeat opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Adventure with Us?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We're committed to providing exceptional travel experiences with our signature approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-none shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 relative">
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.color}`}></div>
                <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                  <div className={`mr-4 p-3 rounded-xl ${item.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                    <item.icon className={`h-6 w-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />
      
      {/* Travel Services */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84637d5cb7eda8d86ea0fa3fdc31e7fb.jpg-6dYwUVgvHOarBkEgdtIknNKLGMyw0S.jpeg"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Travel Services</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Everything you need for a perfect adventure experience, expertly planned and professionally managed
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Transportation",
                description: "Comfortable vehicles with experienced drivers for safe journeys to and from all destinations",
                icon: "🚐",
              },
              {
                title: "Accommodations",
                description: "Carefully selected stays that balance comfort, authenticity, and proximity to nature",
                icon: "🏕️",
              },
              {
                title: "Expert Guides",
                description: "Knowledgeable local guides who enhance your experience with stories and insights",
                icon: "🧠",
              },
              {
                title: "Safety Equipment",
                description: "Top-quality gear and equipment with regular safety checks for peace of mind",
                icon: "🦺",
              },
              {
                title: "Meals & Refreshments",
                description: "Delicious local cuisine and refreshments included in most of our adventure packages",
                icon: "🍲",
              },
              {
                title: "Photography",
                description: "Capture your memories with our optional professional photography services",
                icon: "📸",
              },
            ].map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-colors duration-300">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl text-blue-100">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100/90">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b47b5d0bfd822f3c7ff00bdbbd08535e.jpg-WzrmBgT4lQ5kwTVEQyKzFHCxuxipKL.jpeg"
            alt="Mountain landscape"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100">
              Join hundreds of satisfied travelers who have explored Karnataka with us.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/contact" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 h-14 px-10">
                  <Phone className="mr-3 h-6 w-6" />
                  Contact Us
                </button>
              </Link>
              <Link href="#featured-trips" className="inline-block">
                <button className="inline-flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/80 text-white hover:bg-white hover:text-blue-700 backdrop-blur-sm bg-white/10 hover:shadow-xl transform hover:scale-105 h-14 px-10">
                  <Calendar className="mr-3 h-6 w-6" />
                  Browse Trips
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


