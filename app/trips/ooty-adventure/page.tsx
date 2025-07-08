import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { BookingForm } from "@/components/booking-form";

export default function OotyAdventurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

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
            <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl shadow-lg p-6 border border-indigo-100 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-indigo-200/20 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-3 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Coffee className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent relative">
                  Overview
                  <span className="block h-1 w-10 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mt-1 group-hover:w-20 transition-all duration-300"></span>
                </h2>
              </div>
              <div className="bg-white/80 rounded-lg p-4 border border-indigo-50 shadow-inner group-hover:shadow-lg transition-all duration-300">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Experience the magic of misty hills, cascading waterfalls, and scenic landscapes – your ideal weekend getaway to Ooty!
                </p>
              </div>
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
          
          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Pricing Card */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-indigo-700 drop-shadow">₹5,500</span>
                    <span className="text-lg text-gray-400 line-through">₹6,000</span>
                  </div>
                  <p className="text-sm text-gray-600">per person</p>
                  <div className="mt-2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md">
                      8% OFF
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 bg-gradient-to-r from-yellow-50 to-purple-50 p-4 rounded-lg border border-yellow-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-yellow-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Quick WhatsApp Booking
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Book instantly through WhatsApp for faster confirmations and immediate responses!
                    </p>
                  </div>
                  <div className="rounded-xl bg-white/80 shadow-inner p-2 hover:shadow-lg transition-all duration-300">
                    <BookingForm tripTitle="Ooty Adventure" tripPrice="₹5,500" />
                  </div>
                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t border-dashed border-indigo-200">
                    <h4 className="font-medium text-center text-indigo-700 mb-2">Need Help?</h4>
                    <div className="flex gap-2 min-w-0 flex-wrap sm:flex-nowrap items-stretch">
                      <a
                        href="tel:+919740174089"
                        className="flex-1 w-0 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-md hover:scale-105"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href="https://wa.me/919740174089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 w-0 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg hover:from-green-600 hover:to-green-800 transition-colors shadow-md hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Details Card */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-indigo-800">Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm group-hover:text-indigo-700 transition-colors duration-300">
                    <Clock className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-600 transition-colors duration-300" />
                    <span>2 Days / 1 Night</span>
                  </div>
                  <div className="flex items-center text-sm group-hover:text-indigo-700 transition-colors duration-300">
                    <Users className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-600 transition-colors duration-300" />
                    <span>20-25 people per group</span>
                  </div>
                  <div className="flex items-center text-sm group-hover:text-indigo-700 transition-colors duration-300">
                    <MapPin className="h-4 w-4 text-indigo-400 mr-2 group-hover:text-indigo-600 transition-colors duration-300" />
                    <span>270km from Bangalore</span>
                  </div>
                  <div className="flex items-center text-sm group-hover:text-indigo-700 transition-colors duration-300">
                    <Star className="h-4 w-4 text-yellow-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    <span>4.5/5 (112 reviews)</span>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-xl p-6 border border-indigo-100 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:border-purple-300 group relative overflow-hidden">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-indigo-200/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-indigo-800 transition-colors duration-300">Arun P.</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">"The Ooty Adventure was nothing short of magical! From the misty morning views at Needle Rock to the serene Pine Tree Forest, every moment was picture-perfect. The tea factory tour was both educational and delicious. Our guide was knowledgeable and friendly, making the entire trip even more enjoyable. I'd highly recommend this trip to anyone looking for a peaceful yet adventurous getaway from Bangalore!"</p>
              </div>
            </div>
          </div>
        </div>        {/* Inclusions & Exclusions */}
        <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100 my-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mr-3 shadow-md">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-700 bg-clip-text text-transparent">Inclusions & Exclusions</h2>
          </div>
          
          <div className="mb-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100 transform hover:scale-[1.01] transition-transform duration-300">
            <p className="text-indigo-800 font-medium flex items-center">
              <CheckCircle2 className="h-5 w-5 mr-2 text-indigo-600" />
              What's included in your package and what you'll need to arrange separately.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-5 border border-indigo-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="font-semibold text-indigo-800 mb-4 flex items-center text-lg">
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-white" />
                </div>
                Inclusions
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Non-A/C Transport from Bangalore (Round Trip)</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>2 Breakfasts and 1 Dinner (Veg and Non Veg)</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ooty Sightseeing Tour</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visit to Doddabetta Peak, Botanical Gardens, Tea Factory</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dormitory Accommodation (Separate for Men and Women)</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Abhi Trip Coordinator</span>
                </li>
                <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-indigo-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Basic First Aid Kit</span>
                </li>
              </ul>
            </div>
            
            {/* Exclusions */}
            <div className="bg-gradient-to-br from-rose-50 via-red-50 to-pink-50 rounded-lg p-6 border border-red-200 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-200/20 to-pink-200/30 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-200/30 to-pink-200/20 rounded-full blur-xl -ml-6 -mb-6 pointer-events-none"></div>
              
              <h3 className="font-bold text-red-800 mb-5 flex items-center text-lg relative z-10">
                <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-red-500 to-pink-600 rounded-full mr-3 flex-shrink-0 shadow-md ring-2 ring-red-200">
                  <XCircle className="h-4 w-4 text-white" />
                </div>
                Exclusions
              </h3>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-red-100 relative z-10">
                <p className="text-gray-700 text-sm italic">The following items are not included in your trip package and may require additional payment or separate arrangements.</p>
              </div>
              
              <ul className="space-y-3 pl-12 relative z-10">
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">Any kind of insurance (travel, medical, etc.)</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">Any meals not mentioned in inclusions (Day 2 lunch)</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">Personal expenses (bottled water, snacks, souvenirs)</span>
                </li>
                <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                  <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                  <span className="text-gray-700 font-medium">Anything not listed in the "Inclusions"</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}




