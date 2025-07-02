"use client"

import { useState, useEffect } from "react"
import { X, MapPin, Calendar, Users, Star } from "lucide-react"

const announcements = [
  {
    id: 1,
    text: "🌟 Special Weekend Packages Available",
    mobileText: "🌟 Weekend Packages Available",
    icon: MapPin,
  },
  {
    id: 2,
    text: "📅 All Trips Depart Every Friday",
    mobileText: "📅 Trips Every Friday",
    icon: Calendar,
  },
  {
    id: 3,
    text: "👥 Small Group Personalized Experience",
    mobileText: "👥 Small Group Experience",
    icon: Users,
  },
  {
    id: 4,
    text: "⭐ Rated 4.8/5 by 500+ Travelers",
    mobileText: "⭐ 4.8/5 Rating",
    icon: Star,
  },
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  const currentAnnouncement = announcements[currentIndex]

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 px-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2 flex-1 justify-center pr-8">
          <currentAnnouncement.icon className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0 animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-center">
            <span className="hidden sm:inline">{currentAnnouncement.text}</span>
            <span className="sm:hidden">{currentAnnouncement.mobileText}</span>
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="h-3 w-3 md:h-4 md:w-4" />
        </button>
      </div>
    </div>
  )
}
