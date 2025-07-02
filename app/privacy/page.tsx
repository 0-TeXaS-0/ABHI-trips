import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  <strong>Personal Information:</strong> We collect personal information that you provide to us,
                  including:
                </p>
                <p>• Name, email address, phone number, and address</p>
                <p>• Payment information for booking transactions</p>
                <p>• Emergency contact details</p>
                <p>• Dietary restrictions and medical information (if provided)</p>
                <p>• Photos and videos taken during trips (with consent)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We use the collected information for the following purposes:</p>
                <p>• Processing and managing your trip bookings</p>
                <p>• Communicating with you about your trips and services</p>
                <p>• Providing customer support and assistance</p>
                <p>• Sending promotional materials and updates (with consent)</p>
                <p>• Improving our services and website functionality</p>
                <p>• Ensuring safety and security during trips</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">3. Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share your
                  information only in the following circumstances:
                </p>
                <p>• With service providers (hotels, transport, guides) necessary for trip execution</p>
                <p>• With emergency contacts in case of medical emergencies</p>
                <p>• When required by law or legal proceedings</p>
                <p>• With your explicit consent for marketing purposes</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We implement appropriate security measures to protect your personal information:</p>
                <p>• Secure data transmission using encryption technology</p>
                <p>• Limited access to personal information on a need-to-know basis</p>
                <p>• Regular security assessments and updates</p>
                <p>• Secure storage of physical and digital records</p>
                <p>
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute
                  security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">5. Cookies and Website Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Our website may use cookies and similar technologies to:</p>
                <p>• Enhance your browsing experience</p>
                <p>• Remember your preferences and settings</p>
                <p>• Analyze website traffic and usage patterns</p>
                <p>• Provide personalized content and advertisements</p>
                <p>You can control cookie settings through your browser preferences.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>You have the following rights regarding your personal information:</p>
                <p>• Access: Request a copy of the personal information we hold about you</p>
                <p>• Correction: Request correction of inaccurate or incomplete information</p>
                <p>• Deletion: Request deletion of your personal information (subject to legal requirements)</p>
                <p>• Opt-out: Unsubscribe from marketing communications at any time</p>
                <p>• Portability: Request transfer of your data to another service provider</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">7. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>We retain your personal information for as long as necessary to:</p>
                <p>• Provide our services and support</p>
                <p>• Comply with legal obligations</p>
                <p>• Resolve disputes and enforce agreements</p>
                <p>• Maintain business records as required by law</p>
                <p>When information is no longer needed, we securely delete or anonymize it.</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">8. Third-Party Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices or content of these external sites. We encourage you to review the privacy policies of any
                  third-party websites you visit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">9. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  We may update this privacy policy from time to time. We will notify you of any significant changes by:
                </p>
                <p>• Posting the updated policy on our website</p>
                <p>• Sending an email notification to registered users</p>
                <p>• Updating the "Last Modified" date at the bottom of this policy</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">10. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
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
              <p>
                This privacy policy is effective as of the date listed above and replaces any prior privacy policies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
