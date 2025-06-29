import { useState } from "react"
import { Link } from "react-router-dom"
import { CustomInput } from "../../components/CustomInput"
import { CustomButton } from "../../components/CustomButton"
import { Checkbox } from "../../components/CustomCheckbox"

export default function SignUpPage() {
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  return (
    <div className="min-h-screen flex p-8">
      {/* Left Side - Background Image with Testimonial */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src="/casey-horner-4rDCa5hBlCs-unsplash.jpg" alt="People shopping for groceries" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        {/* <div className="absolute bottom-20 left-8 right-8">
          <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 text-white">
            <blockquote className="text-lg leading-relaxed mb-6">
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore."
            </blockquote>
            <div>
              <div className="font-semibold text-lg">Cameron Williamson</div>
              <div className="text-gray-300">Housewife</div>
            </div>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-8 h-1 bg-gray-400 rounded-full"></div>
          </div>
        </div> */}
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">SaveRx</h1>
          </div>

          {/* Form */}
          <form className="space-y-6">
            <CustomInput label="Full Name" type="text" placeholder="Enter Full Name" required primaryColor="emerald" />

            <CustomInput label="Email" type="email" placeholder="Enter Email Address" required primaryColor="emerald" />

            <CustomInput
              label="Password"
              type="password"
              placeholder="Enter Password"
              showPasswordToggle
              required
              primaryColor="emerald"
            />

            <CustomInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              showPasswordToggle
              required
              primaryColor="emerald"
            />

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" checked={agreeToTerms} onCheckedChange={setAgreeToTerms} primaryColor="emerald" />
              <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="font-medium text-emerald-600 hover:text-emerald-700">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="font-medium text-emerald-600 hover:text-emerald-700">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <CustomButton type="submit" className="w-full" size="lg" primaryColor="emerald" disabled={!agreeToTerms}>
              Sign Up
            </CustomButton>

            <div className="text-center">
              <span className="text-gray-500">or Sign Up with</span>
            </div>

            <CustomButton type="button" variant="outline" className="w-full" size="lg" primaryColor="emerald">
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign Up With Google
            </CustomButton>

            <div className="text-center">
              <span className="text-gray-600">
                Already have an account?{" "}
                <Link to="/sign-in" className="font-medium text-emerald-600 hover:text-emerald-700 underline">
                  Sign In
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
