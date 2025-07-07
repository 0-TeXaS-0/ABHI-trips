"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle } from "lucide-react"

interface BookingFormProps {
  tripTitle?: string
  tripPrice?: string
}

export function BookingForm({ tripTitle = "Customized Trip", tripPrice = "Contact for pricing" }: BookingFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelers: "",
    message: "",
    preferredDate: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message
    const whatsappMessage = `Hello Abhi Trip! 👋

I would like to book the following trip:

🎯 *Trip Details:*
• Trip: ${tripTitle}
• Price: ${tripPrice} per person
• Preferred Date: ${formData.preferredDate || "Not specified"}

👤 *My Details:*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email}
• Number of Travelers: ${formData.travelers}

💬 *Special Requirements:*
${formData.message || "No special requirements"}

Please confirm the availability and provide payment details. Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Redirect to WhatsApp
    window.open(`https://wa.me/919740174089?text=${encodedMessage}`, "_blank")

    // Show success message briefly
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
    }, 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="border-0 shadow-lg bg-white max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Redirecting to WhatsApp!</h3>
              <p className="text-gray-600">
                Your booking request is being sent via WhatsApp with all the details pre-filled. You'll be connected directly with our booking team for quick confirmation.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-0 shadow-lg bg-white max-w-2xl mx-auto">
      <CardHeader className="text-center pb-6">            <CardTitle className="text-2xl font-bold text-gray-900">Book {tripTitle}</CardTitle>
            <CardDescription className="text-lg">
              Fill out the form below to book directly via WhatsApp
            </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="travelers" className="text-sm font-semibold text-gray-700">
                Number of Travelers *
              </Label>
              <Select value={formData.travelers} onValueChange={(value) => handleInputChange("travelers", value)}>
                <SelectTrigger className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Select travelers" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 People</SelectItem>
                  <SelectItem value="3">3 People</SelectItem>
                  <SelectItem value="4">4 People</SelectItem>
                  <SelectItem value="5">5 People</SelectItem>
                  <SelectItem value="6+">6+ People</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="text-sm font-semibold text-gray-700">
                Preferred Date *
              </Label>
              <Input
                id="preferredDate"
                type="text"
                placeholder="e.g., July 15-16, 2025 or Next weekend"
                value={formData.preferredDate || ""}
                onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                className="h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
              Special Requirements or Questions
            </Label>
            <Textarea
              id="message"
              placeholder="Any dietary restrictions, medical conditions, or special requests?"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={4}
              className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div className="bg-blue-50 rounded-lg p-6 space-y-3">
            <h4 className="font-semibold text-blue-900">Trip Summary</h4>
            <div className="text-sm text-blue-800 space-y-1">
              <p>
                <strong>Trip:</strong> {tripTitle}
              </p>
              <p>
                <strong>Price:</strong> {tripPrice} per person
              </p>
              {formData.preferredDate && (
                <p>
                  <strong>Date:</strong> {formData.preferredDate}
                </p>
              )}
              {formData.travelers && (
                <p>
                  <strong>Travelers:</strong> {formData.travelers}
                </p>
              )}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Book Now via WhatsApp
          </Button>

          <p className="text-sm text-gray-500 text-center">
            Your booking details will be sent to us via WhatsApp for quick confirmation.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
