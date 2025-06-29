import React, { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "../lib/utils"
import { CustomButton } from "./CustomButton"

const Combobox = React.forwardRef(
  ({ options = [], value, onValueChange, placeholder = "Select option...", className, ...props }, ref) => {
    const [open, setOpen] = useState(false)

    return (
      <div className="relative" ref={ref}>
        <CustomButton
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between", className)}
          onClick={() => setOpen(!open)}
          {...props}
        >
          {value ? options.find((option) => option.value === value)?.label : placeholder}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </CustomButton>
        {open && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-white shadow-lg">
            {options.map((option) => (
              <div
                key={option.value}
                className={cn(
                  "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-gray-100",
                  value === option.value && "bg-gray-100",
                )}
                onClick={() => {
                  onValueChange?.(option.value === value ? "" : option.value)
                  setOpen(false)
                }}
              >
                <Check className={cn("mr-2 h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")} />
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
)

Combobox.displayName = "Combobox"

export { Combobox }
