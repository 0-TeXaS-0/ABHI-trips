import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before booking any trip with Abhi Trip.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">1. Booking and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• All bookings must be confirmed with advance payment as specified for each trip.</p>
                <p>• Full payment is required at least 3 days before the trip departure date.</p>
                <p>• Payment can be made through bank transfer, UPI, or other specified payment methods.</p>
                <p>• Booking confirmation will be sent via email or WhatsApp after payment verification.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">2. Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• Cancellations made 7 days or more before departure: 90% refund</p>
                <p>• Cancellations made 3-6 days before departure: 50% refund</p>
                <p>• Cancellations made less than 3 days before departure: No refund</p>
                <p>• No-show on departure day: No refund</p>
                <p>• Refunds will be processed within 7-10 working days after cancellation.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">3. Trip Modifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  • Abhi Trip reserves the right to modify itineraries due to weather conditions, natural disasters, or
                  unforeseen circumstances.
                </p>
                <p>• Alternative arrangements will be made to ensure the best possible experience.</p>
                <p>• No compensation will be provided for minor itinerary changes.</p>
                <p>• In case of trip cancellation by Abhi Trip, full refund will be provided.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">4. Participant Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• Participants must be physically and mentally fit for the chosen activity.</p>
                <p>• Valid ID proof is mandatory for all participants.</p>
                <p>• Participants must follow safety guidelines and instructions from guides.</p>
                <p>• Consumption of alcohol or drugs during trips is strictly prohibited.</p>
                <p>• Participants are responsible for their personal belongings.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">5. Safety and Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• Abhi Trip takes all reasonable precautions for participant safety.</p>
                <p>• Participants join trips at their own risk and responsibility.</p>
                <p>• Abhi Trip is not liable for accidents, injuries, or losses during trips.</p>
                <p>• Travel insurance is recommended for all participants.</p>
                <p>• Medical expenses, if any, will be borne by the participant.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">6. Inclusions and Exclusions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• Trip inclusions and exclusions are clearly mentioned in each trip description.</p>
                <p>• Personal expenses like shopping, additional food, etc., are not included unless specified.</p>
                <p>• Entry fees to monuments/parks are included unless mentioned otherwise.</p>
                <p>• Transportation from designated pickup points is included.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">7. Code of Conduct</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>• Respect for local culture, environment, and fellow travelers is mandatory.</p>
                <p>• Littering or damaging natural/cultural sites is strictly prohibited.</p>
                <p>• Abhi Trip reserves the right to exclude participants who violate conduct rules.</p>
                <p>• No refund will be provided for exclusion due to misconduct.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">8. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>For any queries or clarifications regarding these terms and conditions, please contact us:</p>
                <p>
                  <strong>Email:</strong> abhitripkarnataka@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +91 97401 74089, +91 9448482501
                </p>
                <p>
                  <strong>Address:</strong> 3rd Floor, SAKET CALLIPOLIS, 301/302, Sarjapur - Marathahalli Rd, Rainbow
                  Drive, Doddakannelli, Bengaluru, Karnataka 560035
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-gray-600 text-sm">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              <p>These terms and conditions are subject to change without prior notice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
