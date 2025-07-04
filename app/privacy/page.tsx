"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Database, Bell, UserCheck, Clock, Globe, FileEdit, Phone, Sparkles, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useRef, useEffect, useState } from "react"

// Animation component for floating elements
type FloatingElementProps = {
  className?: string
  delay?: number
  duration?: number
  children?: React.ReactNode
  size?: "sm" | "md" | "lg" | "xl"
  blur?: "sm" | "md" | "lg"
  style?: React.CSSProperties
}

function FloatingElement({ 
  className, 
  delay = 0, 
  duration = 20, 
  children, 
  size = "md",
  blur = "md",
  style
}: FloatingElementProps) {
  const sizes = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-64 h-64",
    xl: "w-96 h-96"
  }
  
  const blurs = {
    sm: "blur-xl",
    md: "blur-2xl",
    lg: "blur-3xl"
  }
  
  return (
    <div 
      className={`absolute rounded-full ${sizes[size]} ${blurs[blur]} animate-floating ${className}`}
      style={{ 
        animationDelay: `${delay}s`, 
        animationDuration: `${duration}s`,
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default function PrivacyPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Mouse parallax effect
  useEffect(() => {
    interface MousePosition {
      x: number
      y: number
    }

    interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      
      setMousePosition({ x, y })
    }
    
    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        heroElement.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [])
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 text-white py-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute top-0 left-0 w-full h-48 md:h-56 lg:h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                className="animate-wave-slow" 
                fill="rgba(255, 255, 255, 0.3)" 
                d="M0,64L40,80C80,96,160,128,240,144C320,160,400,160,480,138.7C560,117,640,75,720,69.3C800,64,880,96,960,117.3C1040,139,1120,149,1200,154.7C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
              <path 
                className="animate-wave-fast" 
                fill="rgba(255, 255, 255, 0.15)" 
                d="M0,96L30,101.3C60,107,120,117,180,117.3C240,117,300,107,360,101.3C420,96,480,96,540,101.3C600,107,660,117,720,112C780,107,840,85,900,80C960,75,1020,85,1080,112C1140,139,1200,181,1260,192C1320,203,1380,181,1410,170.7L1440,160L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
          </div>
          
          {/* Floating elements with parallax effect */}
          <FloatingElement 
            className="top-10 left-[10%] bg-purple-500/20" 
            delay={0} 
            duration={25} 
            size="lg"
            style={{ 
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` 
            }}
          />
          <FloatingElement 
            className="top-[20%] right-[15%] bg-indigo-500/15" 
            delay={2} 
            duration={18} 
            size="md"
            style={{ 
              transform: `translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)` 
            }}
          />
          <FloatingElement 
            className="bottom-[25%] left-[20%] bg-blue-500/20" 
            delay={1} 
            duration={22} 
            size="md"
            style={{ 
              transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` 
            }}
          />
          <FloatingElement 
            className="bottom-20 right-[25%] bg-indigo-500/15" 
            delay={3} 
            duration={20} 
            size="lg"
            style={{ 
              transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` 
            }}
          />
          
          {/* Sparkle effects */}
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping-slow"></div>
          <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-white rounded-full animate-ping-slow delay-1000"></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-white rounded-full animate-ping-slow delay-2000"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6 animate-float">
              <div className="relative">
                <Lock className="h-8 w-8 text-purple-300" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-purple-300 rounded-full animate-ping-slow"></span>
              </div>
              <Badge variant="outline" className="border-purple-300 text-purple-300 bg-purple-400/20 backdrop-blur-sm shadow-glow transition-all duration-300 hover:bg-purple-400/30">
                <Sparkles className="h-3 w-3 mr-1 animate-pulse" />
                Data Protection
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-indigo-200 bg-clip-text text-transparent animate-gradient">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm px-4 py-2 rounded-lg bg-purple-900/20">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            
            {/* Quick Overview */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-8 mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Data Protection Overview</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <UserCheck className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Control Your Data</p>
                  <p className="text-sm text-gray-600">Access and manage your data</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Database className="h-8 w-8 text-indigo-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Secure Storage</p>
                  <p className="text-sm text-gray-600">Protection by encryption</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <Bell className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900">Consent Based</p>
                  <p className="text-sm text-gray-600">Marketing is opt-in only</p>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">1. Information We Collect</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Personal Information:</strong> We collect personal information that you provide to us, including name, email address, phone number, and address.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Payment information for booking transactions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Emergency contact details</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Dietary restrictions and medical information (if provided)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Photos and videos taken during trips (with consent)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Eye className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">2. How We Use Your Information</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Processing and managing your trip bookings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Communicating with you about your trips and services</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Providing customer support and assistance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Sending promotional materials and updates (with consent)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Improving our services and website functionality</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Ensuring safety and security during trips</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">3. Information Sharing</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>With service providers (hotels, transport, guides) necessary for trip execution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>With emergency contacts in case of medical emergencies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>When required by law or legal proceedings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>With your explicit consent for marketing purposes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-green-50">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">4. Data Security</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Secure data transmission using encryption technology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Limited access to personal information on a need-to-know basis</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Regular security assessments and updates</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Secure storage of physical and digital records</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800"><strong>Note:</strong> No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-pink-50">
              <CardHeader className="bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">5. Cookies and Website Data</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">Our website may use cookies and similar technologies to:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Enhance your browsing experience</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Remember your preferences and settings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Analyze website traffic and usage patterns</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Provide personalized content and advertisements</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-pink-50 border border-pink-200 rounded-lg">
                  <p className="text-pink-800"><strong>Note:</strong> You can control cookie settings through your browser preferences.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50 relative">
              <div className="absolute -top-3 -left-3 w-20 h-20 bg-orange-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-red-500/20 rounded-full blur-xl"></div>
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-t-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/20 w-full h-full"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <UserCheck className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold z-10 relative">6. Your Rights</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">You have the following rights regarding your personal information:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Access:</strong> Request a copy of the personal information we hold about you</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Portability:</strong> Request transfer of your data to another service provider</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">7. Data Retention</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We retain your personal information for as long as necessary to:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Provide our services and support</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Comply with legal obligations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Resolve disputes and enforce agreements</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Maintain business records as required by law</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-lg">
                  <p className="text-teal-800"><strong>Note:</strong> When information is no longer needed, we securely delete or anonymize it.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">8. Third-Party Links</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg mb-4">
                  <p className="text-cyan-800">
                    Our website may contain links to third-party websites. We are not responsible for the privacy
                    practices or content of these external sites. We encourage you to review the privacy policies of any
                    third-party websites you visit.
                  </p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  <p className="text-gray-700 text-sm">Always verify the privacy policy of external websites before sharing personal information.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <FileEdit className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">9. Changes to This Policy</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any significant changes by:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Posting the updated policy on our website</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Sending an email notification to registered users</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Updating the "Last Modified" date at the bottom of this policy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6" />
                  <div className="tracking-tight text-2xl font-bold">10. Contact Us</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700 p-8">
                <p className="mb-4">If you have any questions about this privacy policy or our data practices, please contact us:</p>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Email:</strong> abhitripkarnataka@gmail.com
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Phone:</strong> +91 97401 74089, +91 9448482501
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      <strong>Address:</strong> 3rd Floor, SAKET CALLIPOLIS, 301/302, Sarjapur - Marathahalli Rd, Rainbow
                      Drive, Doddakannelli, Bengaluru, Karnataka 560035
                    </p>
                  </div>
                </div>
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
