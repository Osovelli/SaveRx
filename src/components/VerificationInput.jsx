import React, { useState, useRef, useEffect } from "react"
import { cn } from "../lib/utils"

const VerificationInput = React.forwardRef(
  ({ length = 6, onComplete, onChange, value = "", disabled = false, error = false, className, ...props }, ref) => {
    const [values, setValues] = useState(Array(length).fill(""))
    const inputRefs = useRef([])

    useEffect(() => {
      if (value) {
        const newValues = value.split("").slice(0, length)
        while (newValues.length < length) {
          newValues.push("")
        }
        setValues(newValues)
      }
    }, [value, length])

    const handleChange = (index, newValue) => {
      if (disabled) return

      // Only allow single digits
      if (newValue.length > 1) {
        newValue = newValue.slice(-1)
      }

      // Only allow numbers
      if (newValue && !/^\d$/.test(newValue)) {
        return
      }

      const newValues = [...values]
      newValues[index] = newValue
      setValues(newValues)

      // Call onChange with the complete value
      const completeValue = newValues.join("")
      onChange?.(completeValue)

      // Auto-focus next input
      if (newValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }

      // Call onComplete when all fields are filled
      if (completeValue.length === length) {
        onComplete?.(completeValue)
      }
    }

    const handleKeyDown = (index, e) => {
      if (disabled) return

      // Handle backspace
      if (e.key === "Backspace") {
        if (!values[index] && index > 0) {
          // If current field is empty, focus previous field
          inputRefs.current[index - 1]?.focus()
        } else {
          // Clear current field
          handleChange(index, "")
        }
      }
      // Handle arrow keys
      else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus()
      } else if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus()
      }
      // Handle paste
      else if (e.key === "Enter") {
        e.preventDefault()
        if (values.join("").length === length) {
          onComplete?.(values.join(""))
        }
      }
    }

    const handlePaste = (e) => {
      if (disabled) return

      e.preventDefault()
      const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length)
      const newValues = Array(length).fill("")

      for (let i = 0; i < pastedData.length; i++) {
        newValues[i] = pastedData[i]
      }

      setValues(newValues)
      onChange?.(newValues.join(""))

      // Focus the next empty field or the last field
      const nextEmptyIndex = newValues.findIndex((val) => !val)
      const focusIndex = nextEmptyIndex === -1 ? length - 1 : nextEmptyIndex
      inputRefs.current[focusIndex]?.focus()

      if (newValues.join("").length === length) {
        onComplete?.(newValues.join(""))
      }
    }

    return (
      <div className={cn("flex gap-2 md:gap-3 justify-center", className)} {...props}>
        {values.map((value, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            disabled={disabled}
            className={cn(
              "w-12 h-12 md:w-14 md:h-14 text-center text-lg md:text-xl font-bold border-2 rounded-lg transition-all duration-300 focus:outline-none",
              error
                ? "border-red-500 bg-red-50 text-red-900 focus:border-red-600 focus:ring-2 focus:ring-red-500/20"
                : "border-gray-200 bg-white text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-gray-300",
              disabled && "opacity-50 cursor-not-allowed bg-gray-100",
              value && !error && "border-blue-500 bg-blue-50",
            )}
            aria-label={`Verification code digit ${index + 1}`}
          />
        ))}
      </div>
    )
  },
)

VerificationInput.displayName = "VerificationInput"

export { VerificationInput }
