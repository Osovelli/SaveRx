import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, Mail, Check, RefreshCw, Clock } from "lucide-react"
import { VerificationInput } from "../../components/VerificationInput"
import { CustomButton } from "../../components/CustomButton"

export default function VerifyCodePage() {
  const location = useLocation()
  const email = location.state?.email || "user@example.com"

  const [code, setCode] = useState("")
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [message, setMessage] = useState("")
  const [resendStatus, setResendStatus] = useState("idle") // idle, loading, success
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false)

  // Timer for code expiration
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else {
      setCanResend(true)
    }
  }, [timeLeft])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleCodeChange = (newCode) => {
    setCode(newCode)
    if (status === "error") {
      setStatus("idle")
      setMessage("")
    }
  }

  const handleCodeComplete = async (completeCode) => {
    setStatus("loading")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Simulate validation
      if (completeCode === "123456") {
        setStatus("success")
        setMessage("Code verified successfully! Redirecting to reset password...")

        // Redirect after success
        setTimeout(() => {
          window.location.href = "/reset-password"
        }, 2000)
      } else {
        setStatus("error")
        setMessage("Invalid verification code. Please check and try again.")
      }
    } catch (error) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  const handleResendCode = async () => {
    setResendStatus("loading")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setResendStatus("success")
      setTimeLeft(300) // Reset timer
      setCanResend(false)

      setTimeout(() => {
        setResendStatus("idle")
      }, 3000)
    } catch (error) {
      setResendStatus("idle")
    }
  }

  const handleManualVerify = () => {
    if (code.length === 6) {
      handleCodeComplete(code)
    } else {
      setStatus("error")
      setMessage("Please enter the complete 6-digit verification code.")
    }
  }

  return (
    <div className="min-h-screen flex p-8">
      {/* Left Side - Background Image with Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img
          src="/casey-horner-4rDCa5hBlCs-unsplash.jpg"
          alt="Healthcare professional using secure verification"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Side - Verify Code Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Back Link */}
          <div className="flex items-center">
            <Link
              to="/forgot-password"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Forgot Password</span>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Verify Code</h2>
            <div className="space-y-2">
              <p className="text-gray-600">Please enter the 6-digit code we just sent to</p>
              <p className="font-semibold text-blue-600">{email}</p>
            </div>
          </div>

          {/* Success State */}
          {status === "success" ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">Code Verified!</h3>
                <p className="text-gray-600">{message}</p>
              </div>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            </div>
          ) : (
            /* Form State */
            <div className="space-y-6">
              {/* Verification Code Input */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900 text-center">
                  Verification Code <span className="text-red-500">*</span>
                </label>
                <VerificationInput
                  length={6}
                  value={code}
                  onChange={handleCodeChange}
                  onComplete={handleCodeComplete}
                  disabled={status === "loading"}
                  error={status === "error"}
                />
                {message && (
                  <div className={`text-center text-sm ${status === "error" ? "text-red-600" : "text-green-600"}`}>
                    {message}
                  </div>
                )}
              </div>

              {/* Timer */}
              {timeLeft > 0 && (
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Code expires in {formatTime(timeLeft)}</span>
                  </div>
                </div>
              )}

              {/* Manual Verify Button */}
              <CustomButton
                onClick={handleManualVerify}
                disabled={status === "loading" || code.length !== 6}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                {status === "loading" && (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                )}
                {status === "loading" ? "Verifying..." : "Verify Code"}
              </CustomButton>

              {/* Resend Code */}
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">Didn't receive the code?</p>
                <CustomButton
                  onClick={handleResendCode}
                  disabled={!canResend || resendStatus === "loading"}
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  size="sm"
                >
                  {resendStatus === "loading" && <RefreshCw className="w-4 h-4 mr-2 animate-spin" />}
                  {resendStatus === "success" ? (
                    <>
                      <Check className="w-4 h-4 mr-2 text-green-600" />
                      Code Sent!
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      {canResend ? "Resend Code" : `Resend in ${formatTime(timeLeft)}`}
                    </>
                  )}
                </CustomButton>
              </div>

              {/* Help Section */}
              <div className="text-center space-y-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Having trouble?</p>
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
                    Email Support
                  </a>
                </div>
              </div>

              {/* Return to Sign In */}
              <div className="text-center pt-4 border-t border-gray-200">
                <Link to="/sign-in" className="text-sm text-gray-600 hover:text-gray-800 underline">
                  Return to Sign In
                </Link>
              </div>
            </div>
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
                <h4 className="font-medium text-blue-900 text-sm">Security Tip</h4>
                <p className="text-blue-800 text-xs mt-1 leading-relaxed">
                  Never share your verification code with anyone. SaveRx will never ask for your code via phone or
                  email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
