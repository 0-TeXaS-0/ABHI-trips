"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Star, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredTrips = [
	{
		id: 1,
		title: "Gokarna Beach Retreat",
		slug: "gokarna-murudeshwar-trip",
		location: "Gokarna, Karnataka",
		duration: "2 Days",
		groupSize: "8-12 people",
		rating: 4.8,
		price: "₹3,500",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aab9fd021e81cc9e438ef17de218912a.jpg-U5rdEPZFaaX6DHa7xxb9JNrUZigy2l.jpeg",
		description: "Pristine beaches, temple visits, and coastal camping experience",
		highlights: ["Beach camping", "Temple visits", "Sunset views", "Water sports"],
		category: "Beach",
	},
	{
		id: 2,
		title: "Coorg Coffee Plantation Trek",
		slug: "coorg-trip",
		location: "Coorg, Karnataka",
		duration: "2 Days",
		groupSize: "6-10 people",
		rating: 4.9,
		price: "₹4,200",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fde19972731d42caeb767943d1bfe30f.jpg-HCE5ARqj0rFEkK330EldQpp56VFzTT.jpeg",
		description: "Explore coffee plantations, waterfalls, and hill station beauty",
		highlights: ["Coffee plantation tour", "Abbey Falls", "Raja's Seat", "Local cuisine"],
		category: "Hill Station",
	},
	{
		id: 3,
		title: "Wayanad Adventure",
		slug: "wayanad-adventure",
		location: "Wayanad, Kerala",
		duration: "2 Days",
		groupSize: "8-15 people",
		rating: 4.7,
		price: "₹3,800",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/93f2208d6ae3879eafcefc0fe086a048.jpg-MDCpirfQoyqvnzdMrqbG9jxOgUxSz6.jpeg",
		description: "Explore the lush forests and waterfalls of Wayanad",
		highlights: ["Edakkal Caves", "Banasura Dam", "Pookode Lake", "Soochipara Falls"],
		category: "Adventure",
	},
	{
		id: 4,
		title: "Chikmagalur Coffee Land",
		slug: "chikmagalur-trip",
		location: "Chikmagalur, Karnataka",
		duration: "2 Days",
		groupSize: "6-12 people",
		rating: 4.8,
		price: "₹4,000",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84637d5cb7eda8d86ea0fa3fdc31e7fb.jpg-6dYwUVgvHOarBkEgd5A2ErgCvcNH7M.jpeg",
		description: "Coffee estates, hill treks, and serene landscapes",
		highlights: ["Mullayanagiri Peak", "Coffee plantation", "Hebbe Falls", "Baba Budangiri"],
		category: "Adventure",
	},
	{
		id: 5,
		title: "Dandeli Wildlife Adventure",
		slug: "dandeli-adventure",
		location: "Dandeli, Karnataka",
		duration: "2 Days",
		groupSize: "6-10 people",
		rating: 4.9,
		price: "₹4,500",
		image:
			"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dandeli-KBLW5S1uIQH2cYSzOoKLDNp6jOAYLb.jpg",
		description: "Exciting wildlife safari, river rafting, and jungle stay",
		highlights: ["White water rafting", "Wildlife safari", "Kayaking", "Jungle stay"],
		category: "Wildlife",
	},
]

export function FeaturedTripsCarousel() {
	return (
		<div className="w-full max-w-7xl mx-auto px-4">
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				className="w-full"
			>
				<CarouselContent className="-ml-2 md:-ml-4">
					{featuredTrips.map((trip) => (
						<CarouselItem key={trip.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
							<Link href={`/trips/${trip.slug}`}>
								<Card className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 cursor-pointer bg-white h-full">
									<div className="relative h-48 overflow-hidden">
										<Image
											src={trip.image || "/placeholder.svg"}
											alt={trip.title}
											width={400}
											height={300}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
										<Badge className="absolute top-3 left-3 bg-blue-600 hover:bg-blue-700 text-white">
											{trip.category}
										</Badge>
										<div className="absolute bottom-3 left-3 text-white">
											<div className="flex items-center gap-1 text-sm">
												<Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
												<span className="font-semibold">{trip.rating}</span>
											</div>
										</div>
										<div className="absolute bottom-3 right-3 text-white">
											<span className="text-lg font-bold">{trip.price}</span>
										</div>
									</div>
									<CardHeader className="pb-3">
										<CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-1">
											{trip.title}
										</CardTitle>
										<CardDescription className="text-gray-600 line-clamp-2">
											{trip.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="pt-0">
										<div className="space-y-3">
											<div className="flex items-center justify-between text-sm text-gray-600">
												<div className="flex items-center gap-1">
													<MapPin className="h-4 w-4" />
													<span>{trip.location}</span>
												</div>
												<div className="flex items-center gap-1">
													<Clock className="h-4 w-4" />
													<span>{trip.duration}</span>
												</div>
											</div>
											<div className="flex items-center justify-between text-sm text-gray-600">
												<div className="flex items-center gap-1">
													<Users className="h-4 w-4" />
													<span>{trip.groupSize}</span>
												</div>
												<div className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													<span className="text-green-600 font-semibold">Available</span>
												</div>
											</div>
											<div className="flex flex-wrap gap-1 pt-2">
												{trip.highlights.slice(0, 2).map((highlight, index) => (
													<Badge key={index} variant="secondary" className="text-xs">
														{highlight}
													</Badge>
												))}
												{trip.highlights.length > 2 && (
													<Badge variant="outline" className="text-xs">
														+{trip.highlights.length - 2} more
													</Badge>
												)}
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden md:flex" />
				<CarouselNext className="hidden md:flex" />
			</Carousel>
		</div>
	)
}

export default FeaturedTripsCarousel
