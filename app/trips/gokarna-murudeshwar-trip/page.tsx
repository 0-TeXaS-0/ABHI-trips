import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Anchor, Sunrise } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';

export default function GokarnaMurudeshwarTripPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-cyan-900/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/43def08def9d0d28c1dbc687fad3de76.jpg-VvsWESStwC7nIjCnZQPA55OSchv74g.jpeg"
            alt="Gokarna and Murudeshwar Trip"
            fill
            className="object-cover opacity-75 transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-6 md:px-10 pb-10 md:pb-16">
            <Link href="/two-day-trips" className="inline-flex items-center text-white mb-6 hover:text-blue-300 transition-colors transform hover:translate-x-[-5px] duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Two Day Trips
            </Link>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Anchor className="mr-2 h-4 w-4" />
                  Beach Getaway
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Sunrise className="mr-2 h-4 w-4" />
                  Spiritual Journey
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Gokarna and Murudeshwar Trip
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-blue-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-cyan-300" />
                  480km from Bangalore
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Users className="mr-2 h-4 w-4 text-yellow-300" />
                  15-18 people
                </span>
                <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400/60 fill-yellow-400/60'}`} />
                    ))}
                  </div>
                  <span>4.6 (87 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,699</span>
                <span className="text-xl line-through text-white/70">₹4,199</span>
                <span className="ml-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                  12% OFF
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                A perfect weekend escape combining beach bliss and spiritual vibes. Relax on serene shores, explore scenic trails, and visit iconic coastal temples.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Mahabaleshwar Temple</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Mirjan Fort</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Om Beach</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Kudle Beach</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Murudeshwar - Shiva Statue</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Honnavara Backwaters</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Gokarna</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">08:00 PM</span>
                        <span>Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">08:15 PM</span>
                        <span>Join from BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">08:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">08:45 PM</span>
                        <span>Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">09:00 PM</span>
                        <span>Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">09:15 PM</span>
                        <span>Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">09:30 PM</span>
                        <span>Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">09:45 PM</span>
                        <span>Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:00 PM</span>
                        <span>Last pickup at Goraguntepalya</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Forts and Beaches</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">09:00 - 11:00 AM</span>
                        <span>Arrival at campsite, freshen up and relax</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">11:00 - 12:00 PM</span>
                        <span>Visit Mahabaleshwar Temple (Temple closes at 12:30 PM)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">12:30 - 01:30 PM</span>
                        <span>Explore the historic Mirjan Fort</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">01:30 - 02:30 PM</span>
                        <span>Lunch break (Self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">04:00 - 05:00 PM</span>
                        <span>Visit Om Beach, followed by a short trek (1 km) to Kudle Beach</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">05:30 - 06:30 PM</span>
                        <span>Sunset at Kudle Beach</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">06:30 - 10:00 PM</span>
                        <span>Return to campsite, enjoy campfire, group bonding, and dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Temples, Boating & Return</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">06:00 - 09:00 AM</span>
                        <span>Wake up, freshen up, and enjoy breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">09:00 - 12:00 PM</span>
                        <span>Visit Murudeshwar Temple and return</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">12:00 - 02:30 PM</span>
                        <span>Honnavara Boating</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">02:30 - 03:30 PM</span>
                        <span>Lunch</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">Post 03:30 PM</span>
                        <span>Depart for Bengaluru</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">Evening</span>
                        <span>Dinner en route (Self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-36">05:00 AM</span>
                        <span>Reach Bangalore</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-blue-600">08:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-blue-600">08:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-blue-600">08:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Koramangala</h3>
                      <p className="text-blue-600">08:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Domlur</h3>
                      <p className="text-blue-600">09:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">MG Road</h3>
                      <p className="text-blue-600">09:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">KTM Mekhri Circle</h3>
                      <p className="text-blue-600">09:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Yeshwanthpura</h3>
                      <p className="text-blue-600">09:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-100 hover:shadow-md transition-shadow duration-300 hover:border-blue-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Goraguntepalya</h3>
                      <p className="text-blue-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-3">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Xerox Copy of your Aadhar/Voter ID</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Small backpack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable trekking shoes with good grip</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raincoat and bag covers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extra pair of clothes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Torch or Headlamp</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personal medication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hand sanitizers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portable chargers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chocolates, energy bars, dry fruits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Snacks</span>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Booking Card */}
            <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200 sticky top-20">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Beach Adventure</h3>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900 mr-2">₹3,699</span>
                  <span className="text-lg line-through text-gray-500">₹4,199</span>
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">12% OFF</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">per person</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>2 Days / 1 Night</span>
                </div>
                <div className="flex items-center text-sm">
                  <CalendarClock className="h-4 w-4 text-gray-500 mr-2" />
                  <span>Friday night to Sunday morning</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>15-18 people per group</span>
                </div>
              </div>
              
              <div className="my-5 border-t border-b border-gray-200 py-4">
                <h4 className="font-semibold text-gray-800 mb-2">Inclusions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Non-A/C Transport from Bangalore (Round Trip)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Breakfasts and 1 Dinner (Veg)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Forest/Trek Permits</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dormitory Accommodation (Separate for Men and Women)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Abhi Trip Trek Coordinator</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basic First Aid Kit</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-5">
                <h4 className="font-semibold text-gray-800 mb-2">Exclusions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Optional Activities</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Personal Expenses: Snacks, Bottled Water, Additional Meals</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Insurance of any kind</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <XCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Anything not listed in the "Inclusions"</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <Link href="/contact" className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-700 hover:from-blue-700 hover:to-cyan-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                  Book Now
                </Link>
                
                <button className="w-full flex items-center justify-center border border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Rahul M.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : i === 4 ? 'text-yellow-400 fill-yellow-400 opacity-60' : ''}`} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"The Gokarna-Murudeshwar trip was an amazing blend of relaxation and adventure. Watching the sunset at Kudle Beach was magical, and the Murudeshwar temple visit was spiritually enriching. The team took care of everything, making it a stress-free getaway. Perfect weekend escape from city life!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
