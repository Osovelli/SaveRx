import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Mail, Check } from "lucide-react"
import { CustomInput } from "../../components/CustomInput"
import { CustomButton } from "../../components/CustomButton"

export default function ForgotPasswordPage() {
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
      setMessage("Password reset instructions have been sent to your email address.")
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again or contact support.")
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
    <div className="min-h-screen flex p-8">
      {/* Left Side - Background Image with Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="/casey-horner-4rDCa5hBlCs-unsplash.jpg"
          alt="Healthcare professional providing consultation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />  
      </div>

      {/* Right Side - Forgot Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Back to Sign In Link */}
          <div className="flex items-center">
            <Link
              to="/sign-in"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Sign In</span>
            </Link>
          </div>

          {/* Logo */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              {/* <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div> */}
              <h1 className="text-3xl font-bold text-gray-900">SaveRx</h1>
            </div>
          </div>

          {/* Header */}
          <div className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Forgot Password?</h2>
            <p className="text-gray-600 leading-relaxed">
              Don't worry, we'll send you reset instructions to get you back into your account safely.
            </p>
          </div>

          {/* Success State */}
          {status === "success" ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Check Your Email</h3>
                <p className="text-gray-600 leading-relaxed">{message}</p>
                <p className="text-sm text-gray-500">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button
                    onClick={() => {
                      setStatus("idle")
                      setMessage("")
                    }}
                    className="text-blue-600 hover:text-blue-700 font-medium underline"
                  >
                    try again
                  </button>
                </p>
              </div>
              <CustomButton
                onClick={() => (window.location.href = "/sign-in")}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                size="lg"
              >
                Back to Sign In
              </CustomButton>
            </div>
          ) : (
            /* Form State */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <CustomInput
                  label="Email Address"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (status === "error") resetStatus()
                  }}
                  placeholder="Enter your registered email address"
                  required
                  primaryColor="blue"
                  disabled={status === "loading"}
                  error={status === "error" ? message : ""}
                />
              </div>

              {/* Submit Button */}
              <CustomButton
                type="submit"
                disabled={status === "loading" || !email}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                {status === "loading" && (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                )}
                <Mail className="w-5 h-5 mr-2" />
                {status === "loading" ? "Sending Instructions..." : "Send Reset Instructions"}
              </CustomButton>

              {/* Additional Help */}
              <div className="text-center space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">Need more help?</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-600">
                    If you're still having trouble accessing your account, our support team is here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 justify-center">
                    <a
                      href="tel:+1-800-SAVERX-24"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
                    >
                      Call Support: 234-811-SAVERX-24
                    </a>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <a
                      href="mailto:support@saverx.com"
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm underline"
                    >
                      Email: support@saverx.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Remember Password Link */}
              <div className="text-center pt-4 border-t border-gray-200">
                <span className="text-gray-600 text-sm">
                  Remember your password?{" "}
                  <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-700 underline">
                    Sign In
                  </Link>
                </span>
              </div>
            </form>
          )}

          {/* Security Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 text-sm">Security Notice</h4>
                <p className="text-blue-800 text-xs mt-1 leading-relaxed">
                  For your security, password reset links expire after 24 hours. If you don't receive an email within a
                  few minutes, please check your spam folder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
