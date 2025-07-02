import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/abhi-trip-logo.png" alt="Abhi Trip" width={40} height={40} className="rounded-full" />
              <div>
                <div className="text-xl font-bold">Abhi Trip</div>
                <div className="text-sm text-gray-300">Explore. Experience. Escape.</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted travel partner for weekend escapes and thrilling adventures across Karnataka and South India.
            </p>
            <div className="flex space-x-4">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                asChild
              >
                <a
                  href="https://www.instagram.com/abhitrip.in?igsh=MzRpdjR6Mzh4dDVo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                asChild
              >
                <a href="https://wa.me/919740174089" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/one-day-trips" className="text-gray-300 hover:text-white transition-colors">
                  One Day Trips
                </Link>
              </li>
              <li>
                <Link href="/two-day-trips" className="text-gray-300 hover:text-white transition-colors">
                  Two Day Trips
                </Link>
              </li>
              <li>
                <Link href="/customized-trips" className="text-gray-300 hover:text-white transition-colors">
                  Customized Trips
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-gray-400" />
                <div className="text-gray-300">
                  3rd Floor, SAKET CALLIPOLIS, 301/302,
                  <br />
                  Sarjapur - Marathahalli Rd, Rainbow Drive,
                  <br />
                  Doddakannelli, Bengaluru, Karnataka 560035
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-400" />
                <div className="text-gray-300">
                  <a href="tel:+919740174089" className="hover:text-white">
                    +91 97401 74089
                  </a>
                  ,{" "}
                  <a href="tel:+919448482501" className="hover:text-white">
                    9448482501
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-400" />
                <a href="mailto:abhitripkarnataka@gmail.com" className="text-gray-300 hover:text-white">
                  abhitripkarnataka@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Abhi Trip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
