import React from "react"
import { Check } from "lucide-react"
import { cn } from "../lib/utils"

const Checkbox = React.forwardRef(
  ({ className, checked, onCheckedChange, primaryColor = "emerald", ...props }, ref) => {
    const getCheckboxStyles = (color) => `data-[state=checked]:bg-${color}-600 data-[state=checked]:border-${color}-600`

    return (
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        data-state={checked ? "checked" : "unchecked"}
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-gray-300 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          getCheckboxStyles(primaryColor),
          className,
        )}
        ref={ref}
        onClick={() => onCheckedChange && onCheckedChange(!checked)}
        {...props}
      >
        {checked && <Check className="h-3 w-3 text-white" />}
      </button>
    )
  },
)

Checkbox.displayName = "Checkbox"

export { Checkbox }
