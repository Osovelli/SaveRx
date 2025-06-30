import { Check, X } from "lucide-react"
import { cn } from "../lib/utils"

const PasswordStrength = ({ password, className, ...props }) => {
  const requirements = [
    { label: "At least 8 characters", test: (pwd) => pwd.length >= 8 },
    { label: "Contains uppercase letter", test: (pwd) => /[A-Z]/.test(pwd) },
    { label: "Contains lowercase letter", test: (pwd) => /[a-z]/.test(pwd) },
    { label: "Contains number", test: (pwd) => /\d/.test(pwd) },
    { label: "Contains special character", test: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
  ]

  const passedRequirements = requirements.filter((req) => req.test(password))
  const strength = passedRequirements.length

  const getStrengthColor = () => {
    if (strength <= 2) return "bg-red-500"
    if (strength <= 3) return "bg-yellow-500"
    if (strength <= 4) return "bg-blue-500"
    return "bg-green-500"
  }

  const getStrengthText = () => {
    if (strength <= 2) return "Weak"
    if (strength <= 3) return "Fair"
    if (strength <= 4) return "Good"
    return "Strong"
  }

  const getStrengthTextColor = () => {
    if (strength <= 2) return "text-red-600"
    if (strength <= 3) return "text-yellow-600"
    if (strength <= 4) return "text-blue-600"
    return "text-green-600"
  }

  if (!password) return null

  return (
    <div className={cn("space-y-3", className)} {...props}>
      {/* Strength Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Password Strength</span>
          <span className={cn("text-sm font-semibold", getStrengthTextColor())}>{getStrengthText()}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={cn("h-2 rounded-full transition-all duration-300", getStrengthColor())}
            style={{ width: `${(strength / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Requirements List */}
      <div className="space-y-2">
        {requirements.map((requirement, index) => {
          const passed = requirement.test(password)
          return (
            <div key={index} className="flex items-center space-x-2">
              <div
                className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center transition-colors duration-200",
                  passed ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-400",
                )}
              >
                {passed ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
              </div>
              <span
                className={cn("text-sm transition-colors duration-200", passed ? "text-green-600" : "text-gray-500")}
              >
                {requirement.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { PasswordStrength }
