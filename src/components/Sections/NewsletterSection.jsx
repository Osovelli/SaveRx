import { useState } from "react"
import { Mail, Check, AlertCircle, ArrowRight } from "lucide-react"
import { CustomButton } from "../CustomButton"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [message, setMessage] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    if (!isValidEmail(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus("success")
      setMessage("Thank you for subscribing! Check your email for your discount code.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const resetStatus = () => {
    setStatus("idle")
    setMessage("")
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="mb-8 md:mb-12">
            <p className="text-sm md:text-base text-gray-500 mb-4 uppercase tracking-wide">Our Newsletter</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Subscribe to Our Newsletter to Get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Health Updates & Exclusive Offers
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Get 25% off on your first order plus receive health tips, medication reminders, and exclusive pharmacy
              deals
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input and Button */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (status === "error") resetStatus()
                    }}
                    placeholder="Enter your email address"
                    className="w-full h-12 md:h-14 pl-12 pr-4 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 placeholder:text-gray-500"
                    disabled={status === "loading"}
                  />
                </div>
                <CustomButton
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className={`h-12 md:h-14 px-6 md:px-8 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                  }`}
                  size="lg"
                >
                  {status === "loading" && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  )}
                  {status === "success" && <Check className="w-5 h-5 mr-2" />}
                  {status === "loading" ? "Subscribing..." : status === "success" ? "Subscribed!" : "Subscribe"}
                  {status === "idle" && <ArrowRight className="w-5 h-5 ml-2" />}
                </CustomButton>
              </div>

              {/* Status Message */}
              {message && (
                <div
                  className={`flex items-center justify-center space-x-2 p-4 rounded-xl transition-all duration-300 ${
                    status === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status === "success" ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="text-sm md:text-base font-medium">{message}</span>
                </div>
              )}
            </form>

            {/* Benefits List */}
            <div className="mt-8 md:mt-12">
              <p className="text-gray-600 mb-6 font-medium">What you'll receive:</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {[
                  {
                    icon: "💊",
                    title: "Health Tips",
                    description: "Expert advice from licensed pharmacists",
                  },
                  {
                    icon: "🔔",
                    title: "Medication Reminders",
                    description: "Never miss your prescription refills",
                  },
                  {
                    icon: "💰",
                    title: "Exclusive Deals",
                    description: "Special discounts on medicines & supplements",
                  },
                  {
                    icon: "📰",
                    title: "Health News",
                    description: "Latest updates in healthcare & wellness",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{benefit.icon}</div>
                    <h4 className="font-semibold text-gray-900 text-sm mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                By subscribing, you agree to receive marketing emails from SaveRx. You can unsubscribe at any time.{" "}
                <a href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  Privacy Policy
                </a>{" "}
                |{" "}
                <a href="/terms" className="text-blue-600 hover:text-blue-700 underline">
                  Terms of Service
                </a>
              </p>
            </div>
          </div>

          {/* Additional CTA */}
          <div className="mt-8 md:mt-12">
            <p className="text-gray-600 mb-4">
              Already a subscriber?{" "}
              <a href="/account" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Manage your preferences
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
