import React from "react"
import { cn } from "../lib/utils"

const CustomButton = React.forwardRef(
  (
    { className, variant = "default", size = "default", primaryColor = "emerald", children, disabled, ...props },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-12 rounded-lg px-8",
      icon: "h-10 w-10",
    }

    const getVariantStyles = (color) => ({
      default: `bg-${color}-600 text-white hover:bg-${color}-700 focus-visible:ring-${color}-500`,
      destructive: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",
      outline: `border border-${color}-200 bg-white hover:bg-${color}-50 hover:text-${color}-900 focus-visible:ring-${color}-500`,
      secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-500",
      ghost: `hover:bg-${color}-100 hover:text-${color}-900 focus-visible:ring-${color}-500`,
      link: `text-${color}-600 underline-offset-4 hover:underline focus-visible:ring-${color}-500`,
    })

    const variantStyles = getVariantStyles(primaryColor)

    return (
      <button
        className={cn(
          baseStyles,
          sizeStyles[size],
          variantStyles[variant],
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  },
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
