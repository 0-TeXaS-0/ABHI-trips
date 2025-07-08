import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Mountain, Sunrise, Droplets, TreePine, Rocket, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import ClientBookingForm from './ClientBookingForm';

export default function WayanadAdventurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-emerald-800/90 to-teal-800/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-teal-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Wayanad Adventure - Lush Kerala Highlands"
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
                <span className="inline-flex items-center bg-gradient-to-r from-green-600 to-teal-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <TreePine className="mr-2 h-4 w-4" />
                  Kerala
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-teal-600 to-green-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <Rocket className="mr-2 h-4 w-4" />
                  Adventure
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Wayanad Adventure
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
                      <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-yellow-400' : ''}`} />
                    ))}
                  </div>
                  <span>4.7 (92 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹4,999</span>
                <span className="text-xl line-through text-white/70">₹5,499</span>
                <span className="ml-3 bg-gradient-to-r from-green-500 to-teal-600 rounded-full px-3 py-1 text-xs font-bold text-white">
                  9% OFF
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-3">
                  <TreePine className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Wayanad is a lush green haven in Kerala, known for its misty hills, waterfalls, and wildlife. From scenic treks to ancient caves and spice plantations, it offers a perfect mix of nature and culture. An ideal getaway for adventure seekers and peace lovers alike, Wayanad never disappoints.
              </p>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 rounded-full mr-3">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Highlights</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Edakkal Caves</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Banasura Dam</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">900 Kandi Bridge</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Soochipara Waterfalls</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300 md:col-span-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Adventure activities: ziplining, giant swing, sky-cycling</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-green-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-green-400 to-teal-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Wayanad</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">10:00 PM</span>
                        <span>Start from Banashankari</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">10:15 PM</span>
                        <span>Quick pickup BTM Layout</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">10:30 PM</span>
                        <span>Next stop, Silk Board</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">10:45 PM</span>
                        <span>Board at Bellandur</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">11:00 PM</span>
                        <span>Assemble at Marathalli</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">11:30 PM</span>
                        <span>Pickup at Tin Factory</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">12:00 AM</span>
                        <span>Picking up at Indira Nagar</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">12:10 AM</span>
                        <span>Meet us at Halasuru</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">12:30 AM</span>
                        <span>Join at Corporation Circle</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-24">12:50 AM</span>
                        <span>Board at Mysuru Road Bus Station</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-teal-400 to-green-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-teal-500 to-green-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Zipline Your Way to Happiness</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">9:00 AM</span>
                        <span>Arrive at the homestay, freshen up, and enjoy breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">10:00 AM</span>
                        <span>Visit Soochipara Waterfalls and unwind in nature</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">01:00 PM</span>
                        <span>Lunch Stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">01:30 PM</span>
                        <span>Visit the 900 Kandi Glass Bridge (jeep ride self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">4:00 PM</span>
                        <span>Try thrilling activities like ziplining (Wayanad's longest), sky cycling & giant swing (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-teal-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-teal-700 font-semibold w-28">6:30 PM</span>
                        <span>Return to homestay and enjoy dinner</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-green-500 to-teal-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Nature, History & Scenic Views</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">07:00 AM</span>
                        <span>Freshen up, have breakfast, check out, and head to Banasura Dam</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">10:00 AM</span>
                        <span>Explore Banasura Dam (activities self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">12:00 PM</span>
                        <span>Travel to Edakkal Caves with lunch en route (self-sponsored)</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">01:00 PM</span>
                        <span>Lunch Stop</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">3:00 PM</span>
                        <span>Discover the ancient carvings and stories of Edakkal Caves</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">5:00 PM</span>
                        <span>Depart for Bengaluru</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-green-700 font-semibold w-28">11:00 PM</span>
                        <span>Reach Bengaluru the drop-off points will be the same as the pick-up points</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Pick Up Points</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Banashankari</h3>
                      <p className="text-green-600">10:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">BTM Layout</h3>
                      <p className="text-green-600">10:15 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Silk Board</h3>
                      <p className="text-green-600">10:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Bellandur</h3>
                      <p className="text-green-600">10:45 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Marathalli</h3>
                      <p className="text-green-600">11:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Tin Factory</h3>
                      <p className="text-green-600">11:30 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Indira Nagar</h3>
                      <p className="text-green-600">12:00 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Halasuru</h3>
                      <p className="text-green-600">12:10 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Corporation Circle</h3>
                      <p className="text-green-600">12:30 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border border-green-100 hover:shadow-md transition-shadow duration-300 hover:border-green-200">
                  <div className="flex items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-gray-800">Mysuru Road</h3>
                      <p className="text-green-600">12:50 AM</p>
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
              {/* Inclusions & Exclusions */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-600 rounded-full mr-3 shadow-md">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Inclusions & Exclusions</h2>
              </div>
              
              <div className="mb-6 bg-green-50 p-4 rounded-lg border border-green-100 transform hover:scale-[1.01] transition-transform duration-300">
                <p className="text-green-800 font-medium flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-green-600" />
                  What's included in your Wayanad Adventure package and what you'll need to arrange separately.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-5 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-semibold text-green-800 mb-4 flex items-center text-lg">
                    <div className="h-8 w-8 flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500 rounded-full mr-3 flex-shrink-0 shadow-sm">
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
                      <span>2 Breakfasts and 1 Dinner (Veg and Non-Veg)</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Visit to Soochipara Waterfalls</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Visit to Edakkal Caves</span>
                    </li>
                    <li className="flex items-start text-sm bg-white p-2 rounded-lg shadow-sm border border-green-100 transform hover:translate-y-[-2px] transition-transform duration-300">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Visit to Banasura Dam</span>
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
                      <span className="text-gray-700 font-medium">900 Kandi Glass Bridge jeep ride (self-sponsored)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-700 font-medium">Adventure activities (ziplining, sky cycling, giant swing)</span>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border-l-4 border border-red-200 border-l-red-400 transform hover:translate-y-[-2px] transition-all duration-300 hover:shadow-md group">
                      <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0 group-hover:text-red-600 group-hover:scale-110 transition-all duration-300" />
                      <span className="text-gray-700 font-medium">Lunches during the trip</span>
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
          
          {/* Sidebar for Booking Form and Testimonial */}
          <aside className="space-y-6 sticky top-28">
            {/* Booking Form Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-lg">
              <h4 className="flex items-center text-lg font-bold text-green-800 mb-4">
                <span className="bg-green-500 text-white rounded-full p-2 mr-2"><CheckCircle2 className="h-5 w-5" /></span>
                Book Wayanad Adventure
              </h4>
              <ClientBookingForm tripTitle="Wayanad Adventure" tripPrice="₹4,999" />
            </div>
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    S
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sanjay K.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Our Wayanad trip was simply magical! The glass bridge was breathtaking, and the adventure activities were thrilling. The Edakkal Caves were fascinating with their ancient carvings, and Soochipara Falls was a serene experience. Our guide was knowledgeable and friendly, making sure we enjoyed every moment. The homestay was comfortable and the food was delicious. Highly recommend this trip for anyone looking to experience the natural beauty of Kerala!"</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}




