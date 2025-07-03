import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';

export default function OotyAdventurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/90 to-indigo-800/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-indigo-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1580137292031-d489a11f21a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Ooty Adventure - Misty Hills Escape"
            fill
            className="object-cover opacity-75 transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-6 md:px-10 pb-10 md:pb-16">
            <Link href="/two-day-trips" className="inline-flex items-center text-white mb-6 hover:text-purple-300 transition-colors transform hover:translate-x-[-5px] duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Two Day Trips
            </Link>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Mountain className="mr-2 h-4 w-4" />
                  Hill Station
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Sunrise className="mr-2 h-4 w-4" />
                  Misty Hills
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Ooty Adventure
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-purple-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-indigo-300" />
                  270km from Bangalore
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Users className="mr-2 h-4 w-4 text-yellow-300" />
                  20-25 people
                </span>
                <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : ''}`} />
                    ))}
                  </div>
                  <span>4.5 (112 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹5,500</span>
                <span className="text-xl line-through text-white/70">₹6,000</span>
                <span className="ml-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                  8% OFF
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Experience the magic of misty hills, cascading waterfalls, and scenic landscapes – your ideal weekend getaway to Ooty!
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Needle Rock View Point</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Ooty Lake and nearby attractions</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Dodda Betta Tea Factory</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Pine Tree Forest</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Coonoor</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Ooty</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:00 PM</span>
                        <span>Start from Banashankari</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:15 PM</span>
                        <span>Quick pickup BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:45 PM</span>
                        <span>Board at Bellandur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">11:00 PM</span>
                        <span>Assemble at Marathalli</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">11:30 PM</span>
                        <span>Pickup at Tin Factory</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:00 AM</span>
                        <span>Picking up at Indira Nagar</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:10 AM</span>
                        <span>Meet us at Halasuru</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:30 AM</span>
                        <span>Join at Corporation Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:50 AM</span>
                        <span>Board at Mysuru Road Bus Station</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-purple-400 to-indigo-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Into the Wild & Water</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">7:00 AM</span>
                        <span>Arrive and explore Needle Rock View Point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">10:00 AM</span>
                        <span>Check-in at your accommodation</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">11:30 AM</span>
                        <span>Visit Ooty Lake for scenic views and optional boat rides</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">1:00 PM</span>
                        <span>Lunch at a local restaurant</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">2:00 PM</span>
                        <span>Explore Dodda Betta Tea Factory</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">3:00 PM</span>
                        <span>Optional adventure activities</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">5:00 PM</span>
                        <span>Stroll through Ooty Botanical Garden</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-28">7:00 PM</span>
                        <span>Return to stay and unwind</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Discover the Charm of Ooty</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">9:30 AM</span>
                        <span>Check out from the accommodation</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">10:00 AM</span>
                        <span>Stroll through the scenic Rose Garden</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">11:30 AM</span>
                        <span>Trek to Doddabetta Peak, the highest point in the Nilgiris</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">1:00 PM</span>
                        <span>Lunch at a local restaurant (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">2:00 PM</span>
                        <span>Explore the peaceful Pine Tree Forest</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">3:00 PM</span>
                        <span>Visit 6th Mile Shooting Point for panoramic views</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">4:00 PM</span>
                        <span>Depart from Ooty to Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">12:00 AM</span>
                        <span>Arrive in Bengaluru</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-indigo-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-indigo-600">10:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-indigo-600">10:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Bellandur</h3>
                      <p className="text-indigo-600">10:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Marathalli</h3>
                      <p className="text-indigo-600">11:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Tin Factory</h3>
                      <p className="text-indigo-600">11:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Indira Nagar</h3>
                      <p className="text-indigo-600">12:00 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Halasuru</h3>
                      <p className="text-indigo-600">12:10 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Corporation Circle</h3>
                      <p className="text-indigo-600">12:30 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-indigo-100 hover:shadow-md transition-shadow duration-300 hover:border-indigo-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Mysuru Road</h3>
                      <p className="text-indigo-600">12:50 AM</p>
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
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Xerox Copy of your Aadhar/Voter ID</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Small backpack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable trekking shoes with good grip</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raincoat and bag covers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extra pair of clothes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Torch or Headlamp</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personal medication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hand sanitizers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portable chargers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chocolates, energy bars, dry fruits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Ooty Adventure</h3>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900 mr-2">₹5,500</span>
                  <span className="text-lg line-through text-gray-500">₹6,000</span>
                  <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-0.5 rounded-full">8% OFF</span>
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
                  <span>20-25 people per group</span>
                </div>
              </div>
              
              <div className="my-5 border-t border-b border-gray-200 py-4">
                <h4 className="font-semibold text-gray-800 mb-2">Inclusions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Non-A/C round-trip transport from Bangalore</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Breakfasts and 1 Veg dinner</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All required permits and entry fees</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dormitory accommodation (separate for men and women)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Abhi Trip trek coordinator</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Basic first aid kit</span>
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
                <Link href="/contact" className="w-full flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                  Book Now
                </Link>
                
                <button className="w-full flex items-center justify-center border border-indigo-600 text-indigo-700 hover:bg-indigo-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                    A
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Arun P.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"The Ooty Adventure was nothing short of magical! From the misty morning views at Needle Rock to the serene Pine Tree Forest, every moment was picture-perfect. The tea factory tour was both educational and delicious. Our guide was knowledgeable and friendly, making the entire trip even more enjoyable. I'd highly recommend this trip to anyone looking for a peaceful yet adventurous getaway from Bangalore!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
