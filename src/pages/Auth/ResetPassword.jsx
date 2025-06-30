import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ArrowLeft, Check, Eye, EyeOff, Lock } from "lucide-react"
import { CustomInput } from "../../components/CustomInput"
import { CustomButton } from "../../components/CustomButton"
import { PasswordStrength } from "../../components/PasswordStrength"

export default function ResetPasswordPage() {
  const location = useLocation()
  const email = location.state?.email || "user@example.com"

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [status, setStatus] = useState("idle") // idle, loading, success, error
  const [errors, setErrors] = useState({})

  const validatePassword = (pwd) => {
    const requirements = [
      { test: (p) => p.length >= 8, message: "Password must be at least 8 characters" },
      { test: (p) => /[A-Z]/.test(p), message: "Password must contain an uppercase letter" },
      { test: (p) => /[a-z]/.test(p), message: "Password must contain a lowercase letter" },
      { test: (p) => /\d/.test(p), message: "Password must contain a number" },
      { test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p), message: "Password must contain a special character" },
    ]

    const failedRequirements = requirements.filter((req) => !req.test(pwd))
    return failedRequirements.length === 0 ? null : failedRequirements[0].message
  }

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
    setPassword(newPassword)

    // Clear errors when user starts typing
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: null }))
    }
    if (errors.confirmPassword && confirmPassword && newPassword === confirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: null }))
    }
  }

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value
    setConfirmPassword(newConfirmPassword)

    // Clear confirm password error when passwords match
    if (errors.confirmPassword && password === newConfirmPassword) {
      setErrors((prev) => ({ ...prev, confirmPassword: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newErrors = {}

    // Validate password
    const passwordError = validatePassword(password)
    if (passwordError) {
      newErrors.password = passwordError
    }

    // Validate password confirmation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setStatus("loading")
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setStatus("success")

      // Redirect after success
      setTimeout(() => {
        window.location.href = "/sign-in"
      }, 3000)
    } catch (error) {
      setStatus("error")
      setErrors({ general: "Something went wrong. Please try again." })
    }
  }

  return (
    <div className="min-h-screen flex p-8">
      {/* Left Side - Background Image with Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src="/casey-horner-4rDCa5hBlCs-unsplash.jpg" alt="Secure password reset process" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Right Side - Reset Password Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Back Link */}
          <div className="flex items-center">
            <Link
              to="/verify-code"
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back to Verification</span>
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

          {/* Success State */}
          {status === "success" ? (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Password Reset Successfully!</h2>
                <p className="text-gray-600 leading-relaxed">
                  Your password has been updated successfully. You can now sign in with your new password.
                </p>
              </div>
              <div className="space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="text-sm text-gray-500">Redirecting to sign in...</p>
              </div>
              <CustomButton
                onClick={() => (window.location.href = "/sign-in")}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
                size="lg"
              >
                Continue to Sign In
              </CustomButton>
            </div>
          ) : (
            /* Form State */
            <div className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Set New Password</h2>
                <div className="space-y-2">
                  <p className="text-gray-600">Create a strong password to secure your account</p>
                  <p className="text-sm text-blue-600 font-medium">For: {email}</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* General Error */}
                {errors.general && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">{errors.general}</p>
                  </div>
                )}

                {/* New Password */}
                <div className="space-y-2">
                  <div className="relative">
                    <CustomInput
                      label="New Password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={handlePasswordChange}
                      placeholder="Enter your new password"
                      required
                      primaryColor="blue"
                      disabled={status === "loading"}
                      error={errors.password}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {password && <PasswordStrength password={password} />}

                {/* Confirm Password */}
                <div className="space-y-2">
                  <div className="relative">
                    <CustomInput
                      label="Confirm New Password"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      placeholder="Confirm your new password"
                      required
                      primaryColor="blue"
                      disabled={status === "loading"}
                      error={errors.confirmPassword}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <CustomButton
                  type="submit"
                  disabled={status === "loading" || !password || !confirmPassword}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  {status === "loading" && (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  )}
                  <Lock className="w-5 h-5 mr-2" />
                  {status === "loading" ? "Updating Password..." : "Reset Password"}
                </CustomButton>

                {/* Return to Sign In */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <Link to="/sign-in" className="text-sm text-gray-600 hover:text-gray-800 underline">
                    Return to Sign In
                  </Link>
                </div>
              </form>
            </div>
          )}

          {/* Security Tips */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 p-2 rounded-full flex-shrink-0">
                <Lock className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-blue-900 text-sm">Password Security Tips</h4>
                <ul className="text-blue-800 text-xs mt-2 space-y-1 leading-relaxed">
                  <li>• Use a unique password you haven't used elsewhere</li>
                  <li>• Consider using a password manager</li>
                  <li>• Never share your password with anyone</li>
                  <li>• Update your password regularly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
