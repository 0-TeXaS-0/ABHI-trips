import React from 'react';
import { ArrowLeft, CalendarClock, Clock, MapPin, CheckCircle2, XCircle, PackageOpen, Tent, Utensils, Car, Heart, Star, Users, Camera, Mountain, Sunrise, Droplets, Waves, TreePine } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle } from 'lucide-react';
import ClientBookingForm from '../wayanad-adventure/ClientBookingForm';

export default function DandeliAdventurePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-cyan-800/90 to-blue-800/90">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[50%] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl animate-move-slow"></div>
            <div className="absolute -bottom-[10%] -right-[10%] w-[120%] h-[50%] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-move-slow-reverse"></div>
          </div>
        </div>
        
        {/* Main image with overlay */}
        <div className="absolute inset-0 z-10">
          <Image
            src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Dandeli Adventure - Adrenaline Packed Weekend"
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
                  <Waves className="mr-2 h-4 w-4" />
                  Water Sports
                </span>
                <span className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-800 rounded-full px-4 py-1 text-sm font-medium text-white shadow-lg">
                  <TreePine className="mr-2 h-4 w-4" />
                  Jungle Adventure
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md">
                Dandeli Adventure
              </h1>
              
              <div className="flex flex-wrap gap-4 items-center mt-2">
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <Clock className="mr-2 h-4 w-4 text-blue-300" />
                  2 Days / 1 Night
                </span>
                <span className="inline-flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/10">
                  <MapPin className="mr-2 h-4 w-4 text-cyan-300" />
                  450km from Bangalore
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
                  <span>4.8 (104 reviews)</span>
                </div>
              </div>
              
              <div className="mt-3 flex items-center">
                <span className="text-4xl font-bold text-white mr-2">₹4,999</span>
                <span className="text-xl line-through text-white/70">₹5,499</span>
                <span className="ml-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full px-3 py-1 text-xs font-bold text-white">
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
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-3">
                  <Waves className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">Overview</h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                Dandeli is an adventure lover's paradise nestled in the Western Ghats of Karnataka. From thrilling white-water rafting on the Kali River to jungle safaris, ziplining, and kayaking—Dandeli offers non-stop excitement in the heart of nature. It's the perfect weekend getaway for adrenaline junkies and nature enthusiasts alike.
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
                    <span className="font-medium">Adventure activities: white water rafting, kayaking, zip-lining..etc</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">The Syntheri Rocks</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Nature and wildlife</span>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300 transform hover:translate-y-[-5px] duration-300">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-6 w-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Ulavi Caves</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mr-3">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">Itinerary</h2>
              </div>
              
              <div className="space-y-8">
                {/* Day 0 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-blue-400 to-cyan-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-md">
                      <span className="text-xs font-bold text-white">0</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Begin Your Scenic Journey to Dandeli</h3>
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
                        <span>Join from BTM Layout</span>
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
                  </div>
                </div>
                
                {/* Day 1 */}
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-600 ml-0.5"></div>
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md">
                      <span className="text-xs font-bold text-white">1</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Syntheri Rocks Hike & Adventure Activities</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">7:00 AM</span>
                        <span>Arrive at the campsite, freshen up, have breakfast, and explore the surroundings</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">9:00 AM</span>
                        <span>Begin the hike from the campsite to Syntheri Rocks to witness the stunning waterfall views</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">11:15 AM</span>
                        <span>Enjoy the panoramic views from the top of Syntheri Rocks</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">11:45 AM</span>
                        <span>Begin the return hike to the campsite</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">1:30 PM</span>
                        <span>Lunch at the campsite</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">2:00 PM</span>
                        <span>Head out for an action-packed session of adventure activities and return by evening</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-cyan-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-cyan-700 font-semibold w-28">6:00 PM</span>
                        <span>Unwind around a campfire, share stories, enjoy dinner, and rest for the night</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Day 2 */}
                <div className="relative">
                  <div className="mb-4 flex items-center">
                    <div className="z-10 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 shadow-md">
                      <span className="text-xs font-bold text-white">2</span>
                    </div>
                    <h3 className="ml-4 text-xl font-bold text-gray-800">Ulavi Cave Trek</h3>
                  </div>
                  
                  <div className="ml-14 space-y-3">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">6:00 AM</span>
                        <span>Wake up, explore the area, and have breakfast</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">8:00 AM</span>
                        <span>Depart to the trek starting point</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">10:00 AM</span>
                        <span>Begin the scenic trek to Ulavi Caves</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">2:00 PM</span>
                        <span>Reach the caves, explore, and optionally take a dip in the natural pool</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">2:30 PM</span>
                        <span>Lunch amidst nature</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">3:00 PM</span>
                        <span>Start the descent back to the base</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">5:00 PM</span>
                        <span>Relax with a cup of tea before departure</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">6:00 PM</span>
                        <span>Board the vehicle back to Bengaluru</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex">
                        <span className="text-blue-700 font-semibold w-28">8:30 PM</span>
                        <span>Stop for dinner en route</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Pick Up Points */}
            <section className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full mr-3">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-700 bg-clip-text text-transparent">Pick Up Points</h2>
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
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Booking Form Card */}
            <Card className="shadow-xl border-2 border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-800">Book Dandeli Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <ClientBookingForm tripTitle="Dandeli Adventure" tripPrice="₹4,999" />
              </CardContent>
            </Card>

            {/* Pricing Card */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-blue-100 via-cyan-50 to-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold text-blue-700 drop-shadow">₹4,999</span>
                  <span className="text-lg text-gray-400 line-through">₹5,499</span>
                </div>
                <p className="text-sm text-gray-600">per person</p>
                <div className="mt-2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md">
                    9% OFF
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 bg-gradient-to-r from-yellow-50 to-cyan-50 p-4 rounded-lg border border-yellow-200 shadow-sm group-hover:shadow-md transition-all duration-300">
                  <h4 className="font-medium text-yellow-800 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Quick WhatsApp Booking
                  </h4>
                  <p className="text-sm text-yellow-700 mt-1">
                    Book instantly through WhatsApp for faster confirmations and immediate responses!
                  </p>
                </div>
                <div className="rounded-xl bg-white/80 shadow-inner p-2 hover:shadow-lg transition-all duration-300">
                  {/* Replace with your BookingForm if available */}
                  {/* <BookingForm tripTitle="Dandeli Adventure" tripPrice="₹4,999" /> */}
                </div>
                {/* Contact Options */}
                <div className="mt-6 pt-6 border-t border-dashed border-blue-200">
                  <h4 className="font-medium text-center text-blue-700 mb-2">Need Help?</h4>
                  <div className="flex gap-2 min-w-0 flex-wrap sm:flex-nowrap items-stretch">
                    <a
                      href="tel:+919740174089"
                      className="flex-1 w-0 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:scale-105"
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
            <Card className="shadow-lg border-0 bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-lg text-blue-800">Trip Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm group-hover:text-blue-700 transition-colors duration-300">
                  <Clock className="h-4 w-4 text-blue-400 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                  <span>2 Days / 1 Night</span>
                </div>
                <div className="flex items-center text-sm group-hover:text-blue-700 transition-colors duration-300">
                  <Users className="h-4 w-4 text-blue-400 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                  <span>15-20 people per group</span>
                </div>
                <div className="flex items-center text-sm group-hover:text-blue-700 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-blue-400 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
                  <span>450km from Bangalore</span>
                </div>
                <div className="flex items-center text-sm group-hover:text-blue-700 transition-colors duration-300">
                  <Star className="h-4 w-4 text-yellow-500 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  <span>4.8/5 (104 reviews)</span>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-white rounded-xl p-6 border border-blue-100 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 hover:border-cyan-300 group relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-cyan-200/30 to-blue-200/20 rounded-full blur-xl pointer-events-none"></div>
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-white p-0.5 shadow-md mr-3 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg">
                  <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-600 flex items-center justify-center text-white font-bold text-lg">
                    V
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-blue-800 transition-colors duration-300">Vikram D.</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic group-hover:text-gray-700 transition-colors duration-300">"Dandeli was an incredible adrenaline rush! The white water rafting was world-class, and the Syntheri Rocks hike offered breathtaking views. Our accommodations were comfortable and the food was delicious. The trip to Ulavi Caves was fascinating and the campfire night was magical. Our guides were knowledgeable and safety-conscious throughout all activities. Would highly recommend this trip to anyone looking for adventure in the Western Ghats!"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inclusions and Exclusions (new design) */}
      <div className="my-5">
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200 shadow-lg">
          <h4 className="flex items-center text-lg font-bold text-green-800 mb-4">
            <span className="bg-green-500 text-white rounded-full p-2 mr-2"><CheckCircle2 className="h-5 w-5" /></span>
            Inclusions
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Non-A/C round-trip transport from Bangalore</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">2 Breakfasts and 1 dinner (Veg and Non Veg)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">River Rafting</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Swimming in Kali river</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Indoor Games (Carom, Archery, Cycling, Badminton, Table tennis)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Dormitory accommodation (separate for men and women)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Abhi Trip trek coordinator</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Basic first aid kit</span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-rose-50 to-red-100 rounded-xl p-6 border border-red-200 shadow-lg mt-6">
          <h4 className="flex items-center text-lg font-bold text-red-800 mb-4">
            <span className="bg-red-500 text-white rounded-full p-2 mr-2"><XCircle className="h-5 w-5" /></span>
            Exclusions
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Any kind of insurance</span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Personal Expenses (snacks, mineral water, etc)</span>
            </li>
            <li className="flex items-start">
              <XCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 font-medium">Anything not included above</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}




