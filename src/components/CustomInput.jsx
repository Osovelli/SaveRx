import React, { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "../lib/utils"

const CustomInput = React.forwardRef(
  ({ className, type, label, showPasswordToggle = false, error, primaryColor = "emerald", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputType = showPasswordToggle ? (showPassword ? "text" : "password") : type

    const getFocusStyles = (color) => `focus:border-${color}-500 focus:ring-2 focus:ring-${color}-500/20`

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium text-gray-900">
            {label} <span className="text-red-500">*</span>
          </label>
        )}
        <div className="relative">
          <input
            type={inputType}
            className={cn(
              "flex h-12 w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              getFocusStyles(primaryColor),
              error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
              className,
            )}
            ref={ref}
            {...props}
          />
          {showPasswordToggle && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          )}
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

CustomInput.displayName = "CustomInput"

export { CustomInput }
