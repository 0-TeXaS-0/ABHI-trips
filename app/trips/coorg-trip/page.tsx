import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';

export default function CoorgTripPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-purple-900/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1669744665015-33f3a2f657b3?q=80&w=1342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Coorg Coffee Plantation Experience"
            fill
            className="object-cover opacity-75 transform hover:scale-105 transition-transform duration-700"
            priority
            unoptimized
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
                <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Coffee className="mr-2 h-4 w-4" />
                  Premium Experience
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-purple-600 to-purple-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Camera className="mr-2 h-4 w-4" />
                  Scenic Views
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Coorg Coffee Plantation Experience
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-blue-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-green-300" />
                  250km from Bangalore
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
                  <span>4.8 (124 reviews)</span>
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mr-3">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Discover the lush beauty and cultural richness of Coorg – often hailed as the "Scotland of India." From majestic viewpoints and roaring waterfalls to spiritual sanctuaries and elephant encounters, this 2-day escape is crafted for nature lovers, photographers, and adventure seekers. Ideal for solo travelers, friends, and weekend wanderers.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Mandalpatti View Point</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Abbey Falls – a roaring cascade in the heart of nature</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Raja Seat – sunset views that steal your breath</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Harangi Elephant Camp – close encounter with gentle giants</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Namdroling Monastery – serene spiritual retreat</span>
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
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to the Hills of Kodagu</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:00 PM</span>
                        <span>Start from Banashankari</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:15 PM</span>
                        <span>Quick pickup at BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:30 PM</span>
                        <span>Stop at Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">10:45 PM</span>
                        <span>Board at Bellandur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">11:00 PM</span>
                        <span>Assemble at Marathahalli</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">11:30 PM</span>
                        <span>Pickup at Tin Factory</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:30 AM</span>
                        <span>Board at Mysuru Road Bus Station</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-indigo-700 font-semibold w-24">12:50 AM</span>
                        <span>Final pickup at RR Nagar Arcade</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-green-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Royal Exploration in Coorg</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">06:00 - 09:30 AM</span>
                        <span>Arrival, check-in, freshen up, and breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">09:30 - 01:00 PM</span>
                        <span>Visit Mandalpatti View Point (optional jeep ride)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">01:00 - 02:00 PM</span>
                        <span>Lunch break (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">02:00 - 03:00 PM</span>
                        <span>Explore Kote Abbey Falls</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">03:45 - 06:30 PM</span>
                        <span>Visit Raja Seat and soak in the sunset</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">06:30 - 07:00 PM</span>
                        <span>Visit the Omkareshwar Temple</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-36">07:30 PM</span>
                        <span>Return to stay, Campfire & Dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">A Tryst with Nature & Spirituality</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">10:00 - 11:00 AM</span>
                        <span>Breakfast and head to Harangi Elephant Camp</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">11:00 - 12:30 PM</span>
                        <span>Elephant interaction (optional activities)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">12:30 - 02:00 PM</span>
                        <span>Lunch break (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">02:00 - 05:00 PM</span>
                        <span>Explore Namdroling Monastery</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">05:00 PM</span>
                        <span>Start return journey to Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">10:00 PM</span>
                        <span>Reach Bangalore (same drop points as pickup)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-200 border-dashed">
                      <div className="flex">
                        <span className="text-purple-700 font-semibold w-36">Optional</span>
                        <span>If time permits, visit to Nisargadhama Bird Park can be included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-orange-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-orange-600">10:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-orange-600">10:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Bellandur</h3>
                      <p className="text-orange-600">10:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Marathahalli</h3>
                      <p className="text-orange-600">11:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Tin Factory</h3>
                      <p className="text-orange-600">11:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Mysuru Road Bus Station</h3>
                      <p className="text-orange-600">12:30 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">RR Nagar Arcade</h3>
                      <p className="text-orange-600">12:50 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 rounded-full mr-3">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Xerox Copy of Aadhar/Voter ID</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Small backpack</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Comfortable trekking shoes</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Raincoat and bag covers</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Extra pair of clothes</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Torch or Headlamp</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Personal medication</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Hand sanitizers</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Portable chargers</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Chocolates, energy bars, dry fruits</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px]">
                  <PackageOpen className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0" />
                  <span>Snacks</span>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-6">
              {/* Booking Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Book Your Trip</h3>
                
                <div className="mb-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Base Price</span>
                    <span className="font-semibold">₹3,999</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">GST</span>
                    <span className="font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                    <span className="text-gray-900 font-semibold">Total Price</span>
                    <div>
                      <span className="text-2xl font-bold text-blue-600">₹3,999</span>
                      <span className="text-sm text-gray-500 line-through ml-2">₹4,499</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Link href="/contact">
                    <button className="w-full inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 h-14">
                      Book Now
                    </button>
                  </Link>
                  
                  <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                    <button className="w-full inline-flex items-center justify-center rounded-md text-lg font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 h-14">
                      WhatsApp Enquiry
                    </button>
                  </a>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-6">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Non-A/C Transport from Bangalore (Round Trip)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>2 Breakfasts and 1 Dinner (Veg)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Forest/Trek Permits</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dormitory Accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Abhi Trip Trek Coordinator</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic First Aid Kit</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <h3 className="font-semibold text-lg mb-3 flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Optional Activities (Jeep ride, elephant interaction)</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Personal Expenses: Snacks, Bottled Water, Additional Meals</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Insurance of any kind</span>
                    </li>
                    <li className="flex items-start">
                      <XCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Anything not listed in the "Inclusions"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




