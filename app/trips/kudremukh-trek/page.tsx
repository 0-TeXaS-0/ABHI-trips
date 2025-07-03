import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Mountain, Sunrise, Droplets, TreePine } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';

export default function KudremukhTrekPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBar />

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-900/90 to-green-800/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1580223530509-849e0dbed0c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Kudremukh Trek - Horse-faced Peak Adventure"
            fill
            className="object-cover opacity-75 transform hover:scale-105 transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
        </div>
        
        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-end">
          <div className="container mx-auto px-6 md:px-10 pb-10 md:pb-16">
            <Link href="/two-day-trips" className="inline-flex items-center text-white mb-6 hover:text-emerald-300 transition-colors transform hover:translate-x-[-5px] duration-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Two Day Trips
            </Link>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-teal-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Mountain className="mr-2 h-4 w-4" />
                  Mountain Trek
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-teal-600 to-emerald-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <TreePine className="mr-2 h-4 w-4" />
                  Western Ghats
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Kudremukh Trek
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-emerald-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-teal-300" />
                  335km from Bangalore
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Users className="mr-2 h-4 w-4 text-yellow-300" />
                  12-15 people
                </span>
                <div className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : ''}`} />
                    ))}
                  </div>
                  <span>4.9 (83 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,899</span>
                <span className="text-xl line-through text-white/70">₹4,399</span>
                <span className="ml-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                  11% OFF
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mr-3">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Kudremukh Trek is a breathtaking journey through rolling hills, dense forests, and mist-covered valleys in the Western Ghats. Known for its iconic horse-face peak, it offers a perfect blend of adventure and natural beauty.
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
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Kudremukha Peak Trek</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Samse Tea Estate</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Horanadu Temple</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Soormane Falls</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Kalasa Hanging Bridge</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Kudremukh</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">08:00 PM</span>
                        <span>Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">08:15 PM</span>
                        <span>Join from BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">08:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">08:45 PM</span>
                        <span>Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">09:00 PM</span>
                        <span>Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">09:15 PM</span>
                        <span>Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">09:30 PM</span>
                        <span>Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">09:45 PM</span>
                        <span>Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-24">10:00 PM</span>
                        <span>Last pickup at Goraguntepalya</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-teal-400 to-emerald-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Kudremukha Trek Adventure</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">6:00 AM</span>
                        <span>Arrive at the homestay and freshen up</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">6:30 AM</span>
                        <span>Enjoy breakfast and collect your packed lunch</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">7:30 AM</span>
                        <span>Head out by jeep to the Kudremukha trek starting point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">9:00 AM</span>
                        <span>Begin the scenic trek through forest trails</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">1:30 PM</span>
                        <span>Break at the peak for lunch with a view</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">2:30 PM</span>
                        <span>Start the descent back to base</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">6:00 PM</span>
                        <span>Return to the homestay for dinner and well-earned rest</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Nature & Spiritual Exploration</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">7:00 AM</span>
                        <span>Freshen up and have breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">9:00 AM</span>
                        <span>Visit the tranquil Samse Tea Estate</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">10:30 AM</span>
                        <span>Head to Horanadu Temple for darshan and lunch (prasad or nearby hotel – self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">2:30 PM</span>
                        <span>Visit the serene Soormane Falls (jeep ride self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">5:30 PM</span>
                        <span>Stop at the Hanging Bridge in Kalasa</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">8:00 PM</span>
                        <span>Depart for Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-emerald-700 font-semibold w-28">5:30 AM</span>
                        <span>Arrive in Bangalore at your designated drop-off point (Next Day)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-emerald-600">08:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-emerald-600">08:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-emerald-600">08:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Koramangala</h3>
                      <p className="text-emerald-600">08:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Domlur</h3>
                      <p className="text-emerald-600">09:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">MG Road</h3>
                      <p className="text-emerald-600">09:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">KTM Mekhri Circle</h3>
                      <p className="text-emerald-600">09:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Yeshwanthpura</h3>
                      <p className="text-emerald-600">09:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-emerald-100 hover:shadow-md transition-shadow duration-300 hover:border-emerald-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Goraguntepalya</h3>
                      <p className="text-emerald-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mr-3">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Xerox Copy of your Aadhar/Voter ID</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Small backpack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable trekking shoes with good grip</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raincoat and bag covers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extra pair of clothes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Torch or Headlamp</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personal medication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hand sanitizers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portable chargers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chocolates, energy bars, dry fruits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
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
                <h3 className="text-xl font-bold text-gray-800 mb-2">Book Your Kudremukh Trek</h3>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-gray-900 mr-2">₹3,899</span>
                  <span className="text-lg line-through text-gray-500">₹4,399</span>
                  <span className="ml-2 bg-emerald-100 text-emerald-800 text-xs font-semibold px-2 py-0.5 rounded-full">11% OFF</span>
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
                  <span>12-15 people per group</span>
                </div>
              </div>
              
              <div className="my-5 border-t border-b border-gray-200 py-4">
                <h4 className="font-semibold text-gray-800 mb-2">Inclusions</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Non-A/C round-trip transport from Bangalore</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>2 Breakfasts, 1 Packed lunch, and 1 Veg dinner</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>All required permits and entry fees</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dormitory accommodation (separate for men and women)</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Abhi Trip trek coordinator</span>
                  </li>
                  <li className="flex items-start text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
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
                <Link href="/contact" className="w-full flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
                  Book Now
                </Link>
                
                <button className="w-full flex items-center justify-center border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-4 rounded-lg transition-colors duration-300">
                  <Heart className="h-5 w-5 mr-2" /> Add to Wishlist
                </button>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Rahul M.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"The Kudremukh trek was absolutely incredible! The views from the peak were breathtaking, and our guide was extremely knowledgeable about the local flora and fauna. The homestay was comfortable, and the food was delicious. The visit to Samse Tea Estate and Horanadu Temple added cultural depth to our adventure. Highly recommend this trek for anyone looking to experience the true beauty of the Western Ghats!"</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
