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
import { Trip } from "@/lib/types";

interface TripPageClientProps {
  trip: Trip | undefined;
}

export default function TripPageClient({ trip }: TripPageClientProps) {
  if (!trip) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <Image 
          src={trip.image || "/placeholder.svg"} 
          alt={trip.title} 
          fill 
          className="object-cover" 
          priority 
          unoptimized 
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
                  {trip.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>            {/* Pickup Points */}
            {trip.pickupPoints && trip.pickupPoints.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    Pickup Points
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {trip.pickupPoints.map((pickup, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{pickup}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

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
                    {trip.inclusions.map((item: string, index: number) => (
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
                    {trip.exclusions.map((item: string, index: number) => (
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
                  {trip.whatToBring.map((item: string, index: number) => (
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
