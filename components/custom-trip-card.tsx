'use client'

import Link from "next/link"

interface Trip {
  slug: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  image: string;
}

export default function CustomTripCard({ trip }: { trip: Trip }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 bg-gray-200 relative">
        <img 
          src={trip.image || "/placeholder.svg"} 
          alt={trip.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{trip.title}</h3>
        <p className="text-gray-600 mb-4">{trip.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-1">
            <span className="text-gray-400 line-through text-sm">{trip.originalPrice}</span>
            <span className="text-emerald-600 font-bold text-xl">{trip.price}</span>
          </div>
          <Link
            href={`/customized-trips/${trip.slug}`}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-2 px-4"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}
