"use client"

import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import ClientBookingForm from './ClientBookingForm';

export default function ChikmagalurTripPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    

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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chikmagalur-PJjxJ6OpiWIbc3vY2OqhbxaYFsBmy5.jpeg"
            alt="Chikmagalur Backpacking Trip"
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
                  <Coffee className="mr-2 h-4 w-4" />
                  Coffee Capital
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
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
                  240km from Bangalore
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
                  <span>4.7 (108 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,999</span>
                <span className="text-xl line-through text-white/70">₹4,299</span>
                <span className="ml-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-3 py-1 text-xs font-bold text-white">
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-3 shadow-md">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4 border border-green-100">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Escape into the heart of Karnataka's Western Ghats with our <span className="font-semibold text-emerald-700">Chikmagalur Backpacking Trip</span>. Misty peaks, hidden waterfalls, ancient temples, and lakeside sunsets all packed into a perfect weekend getaway. Explore the coffee capital of India with its lush plantations, misty mountains, and serene landscapes in this refreshing 2-day retreat.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Mountain className="mr-1 h-3 w-3" />
                  Mountains
                </span>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Coffee className="mr-1 h-3 w-3" />
                  Coffee Estates
                </span>
                <span className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Heart className="mr-1 h-3 w-3" />
                  Heritage Sites
                </span>
                <span className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium">
                  <Users className="mr-1 h-3 w-3" />
                  Group-friendly
                </span>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full mr-3 shadow-md">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-emerald-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-green-800 font-medium flex items-center">
                  <Star className="h-5 w-5 mr-2 text-green-600" />
                  Key attractions and experiences that make this trip special.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Mullayanagiri Peak</span>
                      <p className="text-sm text-gray-600 mt-1">Karnataka's highest peak with breathtaking panoramic views</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Bababudangiri</span>
                      <p className="text-sm text-gray-600 mt-1">Sacred caves and hills with historical and religious significance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Z Point Trek</span>
                      <p className="text-sm text-gray-600 mt-1">Exhilarating trek with stunning views of the Western Ghats</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Belur Temple</span>
                      <p className="text-sm text-gray-600 mt-1">Ancient Hoysala architectural masterpiece with intricate carvings</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Honnammana Halla Falls</span>
                      <p className="text-sm text-gray-600 mt-1">Pristine waterfall surrounded by lush coffee plantations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Hirekolale Lake</span>
                      <p className="text-sm text-gray-600 mt-1">Picturesque lake offering magnificent sunset views</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <span className="font-medium text-emerald-800">Yagachi Dam & Halebeedu Temple</span>
                      <p className="text-sm text-gray-600 mt-1">Optional water sports and another magnificent example of Hoysala architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mr-3 shadow-md">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent">Detailed Itinerary</h2>
              </div>
              <div className="mb-6 bg-indigo-50 p-4 rounded-lg border border-indigo-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-indigo-800 font-medium flex items-center">
                  <CalendarClock className="h-5 w-5 mr-2 text-indigo-600" />
                  Your complete journey breakdown with activities, timings, and locations to make the most of your adventure.
                </p>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md ring-2 ring-indigo-100">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Day 0 – 10:00 PM: Begin Your Scenic Journey to the Chikmagalur</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">10:00 PM</span>
                        <span className="ml-3">Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">10:15 PM</span>
                        <span className="ml-3">Join from BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">10:30 PM</span>
                        <span className="ml-3">Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">10:45 PM</span>
                        <span className="ml-3">Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">11:00 PM</span>
                        <span className="ml-3">Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">11:15 PM</span>
                        <span className="ml-3">Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">11:30 PM</span>
                        <span className="ml-3">Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">11:45 PM</span>
                        <span className="ml-3">Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-indigo-700 font-semibold w-24 bg-indigo-50 p-1 rounded text-center">12:00 AM</span>
                        <span className="ml-3">Last pickup at Goraguntepalya</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-green-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-md ring-2 ring-green-100">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Day 1 – Peaks, Falls & Sunset Lakes</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">06:00 - 09:00 AM</span>
                        <span className="ml-3">Arrive at Chikmagalur and head to Mullayanagiri Peak</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">09:00 - 10:00 AM</span>
                        <span className="ml-3">Check-in, freshen up, and breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">10:00 - 02:00 PM</span>
                        <span className="ml-3">Visit Honnammana Halla Falls, Baba Budangiri, and Z Point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">02:00 - 03:30 PM</span>
                        <span className="ml-3">Lunch break (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">04:00 - 06:00 PM</span>
                        <span className="ml-3">Visit Hirekolale Lake for sunset views</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-teal-700 font-semibold w-36 bg-teal-50 p-1 rounded text-center">06:30 PM</span>
                        <span className="ml-3">Return to stay, campfire, and veg dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-purple-400 to-pink-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 shadow-md ring-2 ring-purple-100">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Day 2 – Adventure & Temples</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">09:00 AM</span>
                        <span className="ml-3">Breakfast and checkout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">10:00 - 01:00 PM</span>
                        <span className="ml-3">Water sports at Yagachi Dam (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">01:00 - 02:00 PM</span>
                        <span className="ml-3">Lunch en route to Belur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">02:00 - 03:00 PM</span>
                        <span className="ml-3">Visit Chennakeshava Temple, Belur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">03:00 - 04:00 PM</span>
                        <span className="ml-3">Explore Hoysaleshwara Temple, Halebeedu</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">04:00 PM</span>
                        <span className="ml-3">Depart for Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">08:00 PM</span>
                        <span className="ml-3">Dinner stop</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-red-500 to-orange-600 rounded-full mr-3 shadow-md">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="mb-6 bg-orange-50 p-4 rounded-lg border border-orange-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-orange-800 font-medium flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-orange-600" />
                  Multiple pickup locations in Bangalore for your convenience. Same locations serve as drop points on return.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Banashankari</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        10:00 PM - Start from Banashankari
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">BTM Layout</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        10:15 PM - Quick pickup at BTM Layout
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Silk Board</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        10:30 PM - Stop at Silk Board
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Koramangala</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        10:45 PM - Board at Koramangala
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Domlur</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        11:00 PM - Assemble at Domlur
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">MG Road</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        11:15 PM - Pickup at MG Road
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">KTM Mekhri Circle</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        11:30 PM - Join at KTM Mekhri Circle
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Yeshwanthpura</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        11:45 PM - Board at Yeshwanthpura
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow duration-300 hover:border-orange-200 transform hover:translate-y-[-5px] transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-600 shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800 mb-1">Goraguntepalya</h3>
                      <p className="text-orange-600 flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        12:00 AM - Final pickup at Goraguntepalya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Things to Carry */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 rounded-full mr-3 shadow-md">
                  <PackageOpen className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Things to Carry</h2>
              </div>
              
              <div className="mb-6 bg-teal-50 p-4 rounded-lg border border-teal-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-teal-800 font-medium flex items-center">
                  <PackageOpen className="h-5 w-5 mr-2 text-teal-600" />
                  Essential items to pack for a comfortable and enjoyable journey.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Xerox Copy of your Aadhar/Voter ID</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Small backpack for essentials</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Water bottles (1–2 liters)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Comfortable trekking shoes with good grip</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Raincoat or poncho (weather dependent)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Extra pair of clothes</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Torch or headlamp</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Personal medication (if any)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Sanitizer and basic toiletries</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Portable charger/power bank</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Energy bars, dry fruits, and snacks</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-3px] border border-green-100">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span>Cap or hat for sun protection</span>
                </div>
              </div>
            </section>
            {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mr-3 shadow-md">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">Inclusions & Exclusions</h2>
              </div>
              
              <div className="mb-6 bg-emerald-50 p-4 rounded-lg border border-emerald-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-emerald-800 font-medium flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-emerald-600" />
                  What's included in your package and what you'll need to arrange separately.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-emerald-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    Inclusions
                  </h3>
                  <ul className="space-y-3 pl-11">
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Non-A/C Transport from Bangalore (Round Trip)</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>2 Breakfasts and 1 Dinner (Veg)</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Trek & Location Entry Permits</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Dormitory Accommodation (Separate for Men and Women)</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Abhi Trip Trek Coordinator</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Basic First Aid Kit</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Evening Campfire (weather permitting)</span>
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
                      <span className="text-gray-700 font-medium">Water Sports at Yagachi Dam (approx. ₹200-500 per activity)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-700 font-medium">Any meals not mentioned in inclusions (Lunches, etc.)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-700 font-medium">Personal Expenses: Bottled Water, Snacks, Souvenirs</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-700 font-medium">Insurance of any kind</span>
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

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-600">₹3,999</span>
                    <span className="text-lg text-gray-500 line-through">₹4,499</span>
                  </div>
                  <p className="text-sm text-gray-600">per person</p>
                  <div className="mt-2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                      12% OFF
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" /> Quick WhatsApp Booking
                    </h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Book instantly through WhatsApp for faster confirmations and immediate responses!
                    </p>
                  </div>
                  
                  <ClientBookingForm tripTitle="Chikmagalur Backpacking Trip" tripPrice="₹3,999" />

                  {/* Contact Options */}
                  <div className="mt-6 pt-6 border-t space-y-3">
                    <h4 className="font-medium text-center">Need Help?</h4>
                    <div className="flex gap-2">
                      <a
                        href="tel:+919740174089"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href="https://wa.me/919740174089"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trip Details Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Trip Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span>2 Days / 1 Night</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-gray-500 mr-2" />
                    <span>15-20 people per group</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span>280km from Bangalore</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>4.9/5 (87 reviews)</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      A
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Aishwarya P.</h4>
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
    </div>
  );
}




