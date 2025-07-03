import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';

export default function ChikmagalurTripPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-900/90 to-teal-900/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1586351012965-861623eacf69?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Chikmagalur Backpacking Trip"
            fill
            className="object-cover opacity-75 transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-6 md:px-10 pb-10 md:pb-16">
            <Link href="/two-day-trips" className="inline-flex items-center text-white mb-6 hover:text-green-300 transition-colors transform hover:translate-x-[-5px] duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Two Day Trips
            </Link>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Mountain className="mr-2 h-4 w-4" />
                  Backpacking Adventure
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-teal-600 to-cyan-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Sunrise className="mr-2 h-4 w-4" />
                  Scenic Views
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Chikmagalur Backpacking Trip
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-green-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-teal-300" />
                  280km from Bangalore
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Users className="mr-2 h-4 w-4 text-yellow-300" />
                  15-20 people
                </span>
                <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span>4.9 (87 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,999</span>
                <span className="text-xl line-through text-white/70">₹4,499</span>
                <span className="ml-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-3 py-1 text-xs font-bold text-white">
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Escape into the heart of Karnataka's Western Ghats with our Chikmagalur Backpacking Trip. Misty peaks, hidden waterfalls, ancient temples, and lakeside sunsets—all packed into a perfect weekend getaway.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Mullayanagiri Peak</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Bababudangiri</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Z Point</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Beluru Temple</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Honnamana Halla Falls</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Hirekolale Lake</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-teal-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Chikmagalur</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">10:00 PM</span>
                        <span>Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">10:15 PM</span>
                        <span>Join from BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">10:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">10:45 PM</span>
                        <span>Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">11:00 PM</span>
                        <span>Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">11:15 PM</span>
                        <span>Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">11:30 PM</span>
                        <span>Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">11:45 PM</span>
                        <span>Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">12:00 AM</span>
                        <span>Last pickup at Goraguntepalya</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-teal-400 to-cyan-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Peaks, Falls & Sunset Lakes</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">06:00 - 09:00 AM</span>
                        <span>Arrive at Chikmagalur and head to Mullayanagiri Peak</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">09:00 - 10:00 AM</span>
                        <span>Check-in, freshen up, and breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">10:00 - 02:00 PM</span>
                        <span>Visit Honnammana Halla Falls, Baba Budangiri, and Z Point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">02:00 - 03:30 PM</span>
                        <span>Lunch break</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">04:00 - 06:00 PM</span>
                        <span>Visit Hirekolale Lake for sunset</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">06:30 PM</span>
                        <span>Return to stay, campfire, and veg dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Adventure & Temples</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">09:00 AM</span>
                        <span>Breakfast and checkout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">10:00 - 01:00 PM</span>
                        <span>Water sports at Yagachi Dam (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">01:00 - 02:00 PM</span>
                        <span>Lunch en route to Belur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">02:00 - 03:00 PM</span>
                        <span>Visit Chennakeshava Temple, Belur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">03:00 - 04:00 PM</span>
                        <span>Explore Hoysaleshwara Temple, Halebeedu</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">04:00 PM</span>
                        <span>Depart for Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">08:00 PM</span>
                        <span>Dinner stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-36">10:00 PM</span>
                        <span>Arrive in Bangalore (same drop points)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-amber-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-amber-600">10:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-amber-600">10:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Koramangala</h3>
                      <p className="text-amber-600">10:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Domlur</h3>
                      <p className="text-amber-600">11:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">MG Road</h3>
                      <p className="text-amber-600">11:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">KTM Mekhri Circle</h3>
                      <p className="text-amber-600">11:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Yeshwanthpura</h3>
                      <p className="text-amber-600">11:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100 hover:shadow-md transition-shadow duration-300 hover:border-amber-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Goraguntepalya</h3>
                      <p className="text-amber-600">12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mr-3">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">Things to Carry</h2>
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Adventure</h3>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900 mr-2">₹3,999</span>
                  <span className="text-lg line-through text-gray-500">₹4,499</span>
                  <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">12% OFF</span>
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
                  <span>Friday night to Sunday night</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 text-gray-500 mr-2" />
                  <span>15-20 people per group</span>
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
                    <span>Optional Activities (Jeep ride, elephant interaction)</span>
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
                <Link href="/contact" className="w-full flex items-center justify-center bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                  Book Now
                </Link>
                
                <button className="w-full flex items-center justify-center border border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Aishwarya R.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"The Chikmagalur trip was absolutely magical! The misty mountains, beautiful waterfalls, and serene temples created the perfect weekend escape. Our guide was knowledgeable and friendly. Highly recommended for anyone looking to disconnect and recharge in nature."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
