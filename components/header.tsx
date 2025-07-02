"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Trips",
      href: "#",
      submenu: [
        { name: "One Day Trips", href: "/one-day-trips" },
        { name: "Two Day Trips", href: "/two-day-trips" },
        { name: "Customized Trips", href: "/customized-trips" },
      ],
    },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ]

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-900/95 to-green-900/95 backdrop-blur-md shadow-xl border-b border-blue-200/30"
          : "bg-gradient-to-r from-blue-900/90 to-green-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <div className="relative">
              <Image
                src="/abhi-trip-logo.png"
                alt="Abhi Trip"
                width={40}
                height={40}
                className="md:w-12 md:h-12 rounded-full group-hover:scale-105 transition-transform duration-300 shadow-md"
              />
            </div>
            <div className="block">
              <div className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                Abhi Trip
              </div>
              <div className="text-xs text-blue-300 font-medium hidden sm:block">Explore. Experience. Escape.</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="flex items-center gap-1 px-4 py-3 text-gray-200 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-lg group">
                      {item.name}
                      <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white backdrop-blur-md rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-3 text-gray-200 hover:text-white font-medium transition-all duration-300 hover:bg-white/10 rounded-lg relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-6 group-hover:left-1/2 transform -translate-x-1/2"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 text-gray-200 hover:text-white hover:bg-white/10"
              >
                <Menu className="h-6 w-6 md:h-7 md:w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Image src="/abhi-trip-logo.png" alt="Abhi Trip" width={35} height={35} className="rounded-full" />
                  <div>
                    <div className="text-lg font-bold text-gray-800">Abhi Trip</div>
                    <div className="text-xs text-blue-600">Explore. Experience. Escape.</div>
                  </div>
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col space-y-1 mb-6">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <div className="space-y-1">
                        <div className="text-gray-700 font-medium py-2 px-3 border-b border-gray-200">{item.name}</div>
                        {item.submenu.map((subItem) => (
                          <SheetClose asChild key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="block text-gray-600 hover:text-blue-600 py-2 px-5 rounded-lg hover:bg-blue-50 transition-all duration-300"
                              onClick={closeMenu}
                            >
                              {subItem.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="block text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 transition-all duration-300 border-b border-gray-100"
                          onClick={closeMenu}
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
