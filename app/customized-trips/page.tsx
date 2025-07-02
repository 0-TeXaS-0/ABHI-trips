import Link from "next/link"

const trips = [
  {
    slug: "customized-adventure-package",
    title: "Customized Adventure Package",
    description: "Tailor-made adventure experiences to suit your preferences.",
    price: "₹2,999",
    originalPrice: "₹3,499",
    image: "/images/customized-adventure.jpg",
  },
  {
    slug: "corporate-team-building",
    title: "Corporate Team Building",
    description: "Strengthen your team with engaging outdoor activities.",
    price: "₹3,499",
    originalPrice: "₹3,999",
    image: "/images/corporate-team.jpg",
  },
  {
    slug: "photography-expedition",
    title: "Photography Expedition",
    description: "Capture stunning landscapes and wildlife with expert guidance.",
    price: "₹4,299",
    originalPrice: "₹4,799",
    image: "/images/photography-expedition.jpg",
  },
  {
    slug: "family-adventure-package",
    title: "Family Adventure Package",
    description: "Create lasting memories with exciting family-friendly adventures.",
    price: "₹2,799",
    originalPrice: "₹3,299",
    image: "/images/family-adventure.jpg",
  },
  {
    slug: "wellness-yoga-retreat",
    title: "Wellness & Yoga Retreat",
    description: "Rejuvenate your mind and body in serene natural settings.",
    price: "₹3,999",
    originalPrice: "₹4,499",
    image: "/images/wellness-yoga.jpg",
  },
  {
    slug: "adventure-sports-package",
    title: "Adventure Sports Package",
    description: "Experience thrilling adventure sports like never before.",
    price: "₹4,999",
    originalPrice: "₹5,499",
    image: "/images/adventure-sports.jpg",
  },
]

const CustomizedTripsPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Customized Trips</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {trips.map((trip) => (
          <div key={trip.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={trip.image || "/placeholder.svg"} alt={trip.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{trip.title}</h2>
              <p className="text-gray-700 mb-4">{trip.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-gray-500 line-through mr-2">{trip.originalPrice}</span>
                  <span className="text-green-600 font-bold">{trip.price}</span>
                </div>
                <Link
                  href={`/customized-trips/${trip.slug}`}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomizedTripsPage
