import { useState } from "react"
import { ArrowRight, Shield, Truck, Clock, Star, Plus } from "lucide-react"
import { CustomButton } from "../CustomButton"

const trustBadges = [
  { icon: Shield, text: "NAFDAC Approved" },
  { icon: Truck, text: "Fast Delivery" },
  { icon: Clock, text: "24/7 Support" },
]

const customerAvatars = [
  "/alex-starnes.jpg",
  "/alexander.jpg",
  "/dreadhead.jpg",
  "/prince-akachi.jpg",
]

export default function HeroSection() {
  const [hoveredBadge, setHoveredBadge] = useState(null)

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating Pills/Capsules - Adjusted for mobile */}
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-6 md:w-8 h-12 md:h-16 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 md:top-40 right-10 md:right-20 w-4 md:w-6 h-8 md:h-12 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
        {/* <div className="absolute bottom-20 md:bottom-32 left-1/4 w-8 md:w-10 h-8 md:h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full opacity-20 animate-pulse delay-500"></div> */}

        {/* Geometric Shapes - Responsive sizing */}
        <div className="absolute top-1/4 right-1/4 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 md:w-48 h-32 md:h-48 bg-gradient-to-br from-sky-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="mx-auto px-4 py-8 md:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-3 md:px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium">
              <Shield className="w-3 md:w-4 h-3 md:h-4 mr-2" />
              The Most Trusted Online Pharmacy
            </div>

            {/* Main Headline - Responsive text sizing */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your One-Stop Shop for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Quality Medicines
                </span>
              </h1>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Get your prescriptions filled quickly and safely. We offer genuine medicines, expert consultation, and
                doorstep delivery for all your healthcare needs.
              </p>
            </div>

            {/* CTA Buttons - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center lg:items-start">
              <CustomButton
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Shop Medicines
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 ml-2" />
              </CustomButton>
              <CustomButton
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold"
                size="lg"
              >
                Upload Prescription
              </CustomButton>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4 md:space-y-6">
              {/* Customer Reviews */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex -space-x-2">
                  {customerAvatars.map((avatar, index) => (
                    <img
                      key={index}
                      src={avatar || "/placeholder.svg"}
                      alt={`Customer ${index + 1}`}
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                  <div className="w-8 md:w-10 h-8 md:h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                    <Plus className="w-3 md:w-4 h-3 md:h-4 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-1">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 md:w-4 h-3 md:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900 text-sm md:text-base">4.9 Ratings</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">Trusted by 100k+ Customers</p>
                </div>
              </div>

              {/* Trust Badges - Responsive grid */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-4">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-3 md:px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredBadge(index)}
                    onMouseLeave={() => setHoveredBadge(null)}
                  >
                    <div
                      className={`p-1 rounded-full transition-colors duration-300 ${
                        hoveredBadge === index ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <badge.icon
                        className={`w-3 md:w-4 h-3 md:h-4 transition-colors duration-300 ${
                          hoveredBadge === index ? "text-blue-600" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image/Illustration - Simplified for mobile */}
          <div className="relative mt-8 lg:mt-0">
            {/* Main Hero Image Container */}
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl">
              {/* Mockup Browser/App Interface */}
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
                {/* Browser Header - Simplified for mobile */}
                <div className="bg-gray-100 px-3 md:px-4 py-2 md:py-3 flex items-center space-x-2">
                  <div className="flex space-x-1 md:space-x-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-2 md:px-3 py-1 text-xs text-gray-500">saverx.com</div>
                </div>

                {/* App Interface Content - Responsive */}
                <div className="p-3 md:p-6 space-y-3 md:space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 md:w-8 h-6 md:h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg"></div>
                      <span className="font-bold text-gray-900 text-sm md:text-base">SaveRx</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-4 md:w-6 h-4 md:h-6 bg-gray-200 rounded"></div>
                      <div className="w-4 md:w-6 h-4 md:h-6 bg-gray-200 rounded"></div>
                    </div>
                  </div>

                  {/* Search Bar */}
                  <div className="bg-gray-50 rounded-lg p-2 md:p-3">
                    <div className="text-xs text-gray-500">Search medicines...</div>
                  </div>

                  {/* Medicine Cards - Single column on mobile */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 md:p-4 space-y-2">
                      <div className="w-full h-12 md:h-16 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-lg flex items-center justify-center">
                        <div className="w-6 md:w-8 h-8 md:h-12 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Vitamins &</div>
                      <div className="text-xs font-medium text-gray-700">Supplements</div>
                      <div className="text-xs text-blue-600 font-medium">Buy Now</div>
                    </div>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-3 md:p-4 space-y-2">
                      <div className="w-full h-12 md:h-16 bg-gradient-to-r from-cyan-200 to-blue-200 rounded-lg flex items-center justify-center">
                        <div className="w-6 md:w-8 h-8 md:h-12 bg-gradient-to-b from-cyan-500 to-cyan-700 rounded-full"></div>
                      </div>
                      <div className="text-xs font-medium text-gray-700">Pain Relief</div>
                      <div className="text-xs font-medium text-gray-700">Medicines</div>
                      <div className="text-xs text-cyan-600 font-medium">Buy Now</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Medicine Bottles - Responsive sizing */}
              <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-12 md:w-16 h-16 md:h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl md:rounded-2xl shadow-lg transform rotate-12 opacity-90"></div>
              <div className="absolute -bottom-3 md:-bottom-6 -left-2 md:-left-4 w-8 md:w-12 h-12 md:h-16 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-lg md:rounded-xl shadow-lg transform -rotate-12 opacity-90"></div>
            </div>

            {/* Floating Elements - Hidden on small mobile */}
            <div className="hidden sm:block absolute top-10 -left-6 bg-white rounded-full p-2 md:p-3 shadow-lg">
              <Shield className="w-4 md:w-6 h-4 md:h-6 text-blue-600" />
            </div>
            <div className="hidden sm:block absolute bottom-20 -right-6 bg-white rounded-full p-2 md:p-3 shadow-lg">
              <Truck className="w-4 md:w-6 h-4 md:h-6 text-cyan-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
