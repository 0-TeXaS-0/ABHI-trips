import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';
import ClientBookingForm from '../wayanad-adventure/ClientBookingForm';

export default function BandajeFallsTrekPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-blue-800/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Bandaje Falls Trek - Western Ghats Adventure"
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
                <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Mountain className="mr-2 h-4 w-4" />
                  Waterfall Trek
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-teal-600 to-blue-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Sunrise className="mr-2 h-4 w-4" />
                  Western Ghats
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Bandaje Falls Trek
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-blue-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-blue-300" />
                  275km from Bangalore
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
                  <span>4.9 (42 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,899</span>
                <span className="text-xl line-through text-white/70">₹4,399</span>
                <span className="ml-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full px-3 py-1 text-xs font-bold text-white">
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Bandaje Falls Trek is a scenic adventure through the Western Ghats, leading to a stunning waterfall
                hidden amidst lush forests and rolling hills. Perfect for nature lovers and thrill-seekers alike.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Bandaje Falls Trek</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Ballarayana Durga Fort</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Samse Tea Estate</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Horanadu Temple</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Soormane Falls</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Kalasa Hanging Bridge</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Bandaje Trek</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">08:00 PM</span>
                        <span>Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">08:15 PM</span>
                        <span>Join from Ragigudda Metro Station</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">08:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">08:45 PM</span>
                        <span>Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">09:00 PM</span>
                        <span>Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">09:15 PM</span>
                        <span>Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">09:30 PM</span>
                        <span>Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">09:45 PM</span>
                        <span>Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-24">10:00 PM</span>
                        <span>Last pickup at Goraguntepalya</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-indigo-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Waterfalls for the Eyes, Temple for the Soul</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">06:00 AM</span>
                        <span>Check-in at the homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">07:00 AM</span>
                        <span>Freshen up and enjoy breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">09:00 AM</span>
                        <span>Visit the scenic Samse Tea Estate</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">10:30 AM</span>
                        <span>Visit Horanadu Temple for darshan and lunch (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">02:30 PM</span>
                        <span>Explore Soormane Falls</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">05:30 PM</span>
                        <span>Stop by Hanging Bridge in Kalasa</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-28">07:00 PM</span>
                        <span>Return to homestay, have dinner, and rest</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Trek to Bandaje Falls & Ballalarayana Durga Fort</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">05:30 AM</span>
                        <span>Wake-up call</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">06:00 AM</span>
                        <span>Freshen up, breakfast, and collect packed lunch</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">07:30 AM</span>
                        <span>Travel to trek starting point (by jeep or bus)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">09:00 AM</span>
                        <span>Trek to Bandaje Falls (approx. 3.5 hours)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">12:30 PM</span>
                        <span>Lunch break at the falls</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">01:30 PM</span>
                        <span>Short trek to Ballalarayana Durga Fort</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">02:00 PM</span>
                        <span>Enjoy the fort views and surroundings</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">03:00 PM</span>
                        <span>Trek down to the basecamp</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">06:00 PM</span>
                        <span>Tea and snacks at the homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">08:00 PM</span>
                        <span>Depart for Bangalore</span>
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
                      <h3 className="font-semibold text-gray-800">Ragigudda Metro</h3>
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-blue-600 rounded-full mr-3">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Xerox Copy of your Aadhar/Voter ID</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Small backpack</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Comfortable trekking shoes with good grip</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raincoat and bag covers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extra pair of clothes</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Torch or Headlamp</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personal medication</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hand sanitizers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Portable chargers</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Chocolates, energy bars, dry fruits</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Snacks</span>
                </div>
              </div>
            </section>
          </div>
          
          {/* Sidebar for Booking Form and Testimonial */}
          <aside className="space-y-6 sticky top-28">
            {/* Booking Form Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-lg">
              <h4 className="flex items-center text-lg font-bold text-green-800 mb-4">
                <span className="bg-green-500 text-white rounded-full p-2 mr-2"><CheckCircle2 className="h-5 w-5" /></span>
                Book Bandaje Falls Trek
              </h4>
              <ClientBookingForm tripTitle="Bandaje Falls Trek" tripPrice="₹4,999" />
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    R
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-indigo-800 transition-colors duration-300">Rahul M.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">"The Bandaje Falls Trek was absolutely breathtaking! The cascading waterfall surrounded by pristine forest was worth every step of the trek. Our guide was knowledgeable and patient. The homestay experience, the fort visit, and the tea estates added so much to the experience. Highly recommended for anyone who loves nature and adventure!"</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Inclusions & Exclusions Section */}
      <div className="my-10 flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
        <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200 shadow-lg">
          <h4 className="flex items-center text-lg font-bold text-green-800 mb-4">
            <span className="bg-green-500 text-white rounded-full p-2 mr-2"><CheckCircle2 className="h-5 w-5" /></span>
            Inclusions
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Non-A/C round-trip transport from Bangalore</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />2 Breakfasts and 1 dinner (Veg and Non Veg)</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Trek to Bandaje Falls</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Visit to Ballarayana Durga Fort</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Samse Tea Estate experience</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Dormitory accommodation (separate for men and women)</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Abhi Trip trek coordinator</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-green-100 shadow-sm"><CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />Basic first aid kit</li>
          </ul>
        </div>
        <div className="flex-1 bg-gradient-to-br from-rose-50 to-red-100 rounded-xl p-6 border border-red-200 shadow-lg">
          <h4 className="flex items-center text-lg font-bold text-red-800 mb-4">
            <span className="bg-red-500 text-white rounded-full p-2 mr-2"><XCircle className="h-5 w-5" /></span>
            Exclusions
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center bg-white rounded-lg p-3 border border-red-100 shadow-sm"><XCircle className="h-5 w-5 text-red-500 mr-2" />Any kind of insurance</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-red-100 shadow-sm"><XCircle className="h-5 w-5 text-red-500 mr-2" />Personal Expenses (snacks, mineral water, etc)</li>
            <li className="flex items-center bg-white rounded-lg p-3 border border-red-100 shadow-sm"><XCircle className="h-5 w-5 text-red-500 mr-2" />Anything not included above</li>
          </ul>
        </div>
      </div>
    </div>
  );
}




