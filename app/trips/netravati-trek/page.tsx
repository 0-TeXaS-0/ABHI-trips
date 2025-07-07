import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Coffee, Mountain, Sunrise, Droplets, Phone, MessageCircle, Check, CheckCircle, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { AnnouncementBar } from '@/components/announcement-bar';
import ClientBookingForm from './ClientBookingForm';

export default function NetravatiTrekPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-900/90 to-teal-900/90">
    {/* Decorative background gradients */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
      <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-emerald-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
    </div>
  </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ed1ca01dfa2f309e07333fa3e42f1fc3.jpg-4vUtVyXbgPWXcqZYMDdNjOmOJag5jK.jpeg"
            alt="Netravati Trek - Western Ghats Adventure"
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
                  Adventure Trek
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-teal-600 to-green-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Sunrise className="mr-2 h-4 w-4" />
                  Western Ghats
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Netravati Trek
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-green-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-emerald-300" />
                  300km from Bangalore
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
                  <span>4.9 (56 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹3,899</span>
                <span className="text-xl line-through text-white/70">₹4,399</span>
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mr-3 shadow-md">
                  <Mountain className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg mb-4 border border-green-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 transform hover:scale-[1.01]">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Embark on an extraordinary 2-day expedition to <span className="font-semibold text-emerald-700 hover:text-emerald-600 transition-colors">Netravati Peak</span>, nestled in the pristine Western Ghats. Experience the thrill of trekking through dense rainforests, traverse challenging terrains, and be rewarded with breathtaking panoramic views from the summit. Discover hidden waterfalls, explore tea estates, and immerse yourself in the rich cultural heritage of the region with temple visits. This adventure combines the perfect blend of nature, adventure, and cultural immersion.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-green-200 hover:text-green-900 transition-colors duration-300 transform hover:scale-105">
                  <Mountain className="mr-1 h-3 w-3" />
                  Western Ghats
                </span>
                <span className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-200 hover:text-blue-900 transition-colors duration-300 transform hover:scale-105">
                  <Coffee className="mr-1 h-3 w-3" />
                  Tea Estates
                </span>
                <span className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-purple-200 hover:text-purple-900 transition-colors duration-300 transform hover:scale-105">
                  <Heart className="mr-1 h-3 w-3" />
                  Cultural Heritage
                </span>
                <span className="inline-flex items-center bg-amber-100 text-amber-800 rounded-full px-3 py-1 text-sm font-medium hover:bg-amber-200 hover:text-amber-900 transition-colors duration-300 transform hover:scale-105">
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
                  Key attractions and experiences that make this trek special.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <Mountain className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Netravathi Peak Trek</h3>
                      <p className="text-sm text-gray-600">Conquer the majestic peak and enjoy stunning panoramic views of the Western Ghats.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <Coffee className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Samse Tea Estate</h3>
                      <p className="text-sm text-gray-600">Walk through lush tea plantations and learn about the tea-making process.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <Heart className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Horanadu Temple</h3>
                      <p className="text-sm text-gray-600">Visit this ancient temple and experience the cultural heritage of the region.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <Droplets className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Soormane Falls</h3>
                      <p className="text-sm text-gray-600">Marvel at the beautiful waterfall hidden in the dense forests of the Western Ghats.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2 border border-emerald-100">
                  <div className="flex items-start">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mr-3 mt-0.5 flex-shrink-0 shadow-sm">
                      <Sunrise className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800 mb-1">Kalasa Hanging Bridge</h3>
                      <p className="text-sm text-gray-600">Cross the adventurous hanging bridge for a thrilling experience and beautiful river views.</p>
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
                    <h3 className="ml-4 text-xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Day 0 – 08:00 PM: Begin Your Scenic Journey to Netravati</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">08:00 PM</span>
                        <span className="ml-3">Start from Banashankari bus stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">08:15 PM</span>
                        <span className="ml-3">Join from BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">08:30 PM</span>
                        <span className="ml-3">Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">08:45 PM</span>
                        <span className="ml-3">Assemble at Koramangala</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">09:00 PM</span>
                        <span className="ml-3">Picking up at Domlur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">09:15 PM</span>
                        <span className="ml-3">Meet us at MG Road</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">09:30 PM</span>
                        <span className="ml-3">Join at KTM Mekhri Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">09:45 PM</span>
                        <span className="ml-3">Board at Yeshwanthpura</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-blue-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-blue-700 font-semibold w-36 bg-blue-50 p-1 rounded text-center">10:00 PM</span>
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
                    <h3 className="ml-4 text-xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Day 1 – Arrival & Trek to Netravati Peak</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">06:00 AM</span>
                        <span className="ml-3">Arrive at the homestay in Kalasa</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">06:30 AM</span>
                        <span className="ml-3">Freshen up and get ready</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">07:30 AM</span>
                        <span className="ml-3">Breakfast at homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">08:30 AM</span>
                        <span className="ml-3">Transfer to Netravati trek starting point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">09:30 AM</span>
                        <span className="ml-3">Begin trek to Netravati Peak (moderate difficulty, 7km)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">01:00 PM</span>
                        <span className="ml-3">Lunch at the peak with panoramic views</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">02:00 PM</span>
                        <span className="ml-3">Start descent from the peak</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">05:00 PM</span>
                        <span className="ml-3">Return to homestay, rest and refresh</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">07:00 PM</span>
                        <span className="ml-3">Dinner at homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-green-700 font-semibold w-36 bg-green-50 p-1 rounded text-center">08:00 PM</span>
                        <span className="ml-3">Campfire, stargazing, and overnight stay</span>
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
                    <h3 className="ml-4 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Day 2 – Cultural Exploration & Return</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">07:00 AM</span>
                        <span className="ml-3">Breakfast at homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">08:00 AM</span>
                        <span className="ml-3">Check out from homestay</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">09:00 AM</span>
                        <span className="ml-3">Visit to Samse Tea Estate</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">11:00 AM</span>
                        <span className="ml-3">Visit to Horanadu Temple</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">01:00 PM</span>
                        <span className="ml-3">Lunch</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">02:00 PM</span>
                        <span className="ml-3">Visit to Bhadra Wildlife Sanctuary viewpoint</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">04:00 PM</span>
                        <span className="ml-3">Start return journey to Bangalore</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">08:00 PM</span>
                        <span className="ml-3">Dinner break en route (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <div className="flex items-center">
                        <span className="text-purple-700 font-semibold w-36 bg-purple-50 p-1 rounded text-center">11:00 PM</span>
                        <span className="ml-3">Arrive in Bangalore</span>
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
                        08:00 PM - Start from Banashankari
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
                        08:15 PM - Quick pickup at BTM Layout
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
                        08:30 PM - Stop at Silk Board
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
                        08:45 PM - Board at Koramangala
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
                        09:00 PM - Assemble at Domlur
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
                        09:15 PM - Pickup at MG Road
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
                        09:30 PM - Join at KTM Mekhri Circle
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
                        09:45 PM - Board at Yeshwanthpura
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
                        10:00 PM - Final pickup at Goraguntepalya
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
                  Essential items to pack for a comfortable and enjoyable trek experience.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Valid ID proof (original and photocopy)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Trekking/hiking shoes with good grip</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Small backpack for trek essentials</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Water bottle (2 liters minimum)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Personal medications if any</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Raincoat or poncho (weather dependent)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Quick-dry towel and toiletries</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Warm clothes for night (jacket/sweater)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Change of clothes (1-2 sets)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Sun cap, sunglasses, and sunscreen</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Power bank and camera (optional)</span>
                </div>
                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-lg px-4 py-3 flex items-center hover:shadow-md transition-all duration-300 transform hover:translate-y-[-3px] border border-green-100 hover:border-green-300 group">
                  <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-teal-400 to-green-500 rounded-full mr-3 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <PackageOpen className="h-4 w-4 text-white" />
                  </div>
                  <span className="group-hover:font-medium transition-all">Energy bars, chocolates, or dry fruits</span>
                </div>
              </div>
            </section>
            {/* Additional section can be added here if needed */}
          </div>
          
          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Pricing Card */}
              <Card className="shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-green-600">₹3,899</span>
                    <span className="text-lg text-gray-500 line-through">₹4,399</span>
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
                  
                  <ClientBookingForm tripTitle="Netravati Trek" tripPrice="₹3,899" />

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
                    <span>12-15 people per group</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                    <span>380km from Bangalore</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CalendarClock className="h-4 w-4 text-gray-500 mr-2" />
                    <span>Friday night to Sunday night</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span>4.8/5 (65 reviews)</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Inclusions & Exclusions Card */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Inclusions & Exclusions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                      <Check className="h-4 w-4" /> Inclusions
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Transportation: Non-AC vehicle from Bangalore to Netravati and back</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Accommodation: Dormitory style homestay (gender-segregated)</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Meals: 2 breakfasts, 2 lunches, 1 dinner</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Trek guide and forest entry permits</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">First aid support and experienced trip leader</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-green-200 border-l-green-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-green-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Evening campfire and activities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                      <X className="h-4 w-4" /> Exclusions
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Day 2 dinner (will be arranged en route, self-sponsored)</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Personal expenses and additional beverages</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Any additional activities not mentioned in inclusions</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Personal insurance, medical expenses</span>
                      </li>
                      <li className="flex items-start bg-white p-3 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                        <span className="text-gray-700 font-medium">Tips to staff and guides (optional)</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 border border-emerald-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 hover:border-emerald-300 group">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                    <div className="h-full w-full rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                      S
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 group-hover:text-emerald-800 transition-colors duration-300">Sneha K.</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">"The Netravati Trek was an incredible journey through pristine Western Ghats. The views from the peak were absolutely breathtaking! Our guide was knowledgeable about local flora and fauna, making the trek both challenging and educational. The homestay, campfire, and the tea estate visit added beautiful cultural dimensions to the adventure."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}