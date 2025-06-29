import { useState } from "react"
import { ArrowRight, Pill, Heart, Shield, Clock, Truck, Phone, Star } from "lucide-react"
import { CustomButton } from "../CustomButton"

const featuredCategories = [
  {
    id: 1,
    name: "Prescription Drugs",
    productCount: "500+ Products",
    icon: Pill,
    bgColor: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
    description: "FDA approved prescription medications",
  },
  {
    id: 2,
    name: "Vitamins & Supplements",
    productCount: "200+ Products",
    icon: Heart,
    bgColor: "from-cyan-100 to-sky-100",
    iconColor: "text-cyan-600",
    description: "Essential vitamins and health supplements",
  },
  {
    id: 3,
    name: "Personal Care",
    productCount: "150+ Products",
    icon: Star,
    bgColor: "from-sky-100 to-blue-100",
    iconColor: "text-sky-600",
    description: "Daily personal care essentials",
  },
  {
    id: 4,
    name: "Medical Devices",
    productCount: "80+ Products",
    icon: Shield,
    bgColor: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600",
    description: "Certified medical equipment and devices",
  },
  {
    id: 5,
    name: "Baby Care",
    productCount: "120+ Products",
    icon: Heart,
    bgColor: "from-cyan-100 to-sky-100",
    iconColor: "text-cyan-600",
    description: "Safe and gentle baby care products",
  },
  {
    id: 6,
    name: "First Aid",
    productCount: "60+ Products",
    icon: Shield,
    bgColor: "from-sky-100 to-blue-100",
    iconColor: "text-sky-600",
    description: "Emergency first aid supplies",
  },
]

const keyFeatures = [
  {
    id: 1,
    title: "24/7 Emergency Service",
    description: "Round-the-clock pharmacy service for urgent medical needs",
    icon: Clock,
    bgColor: "from-blue-50 to-cyan-50",
    iconColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Free Home Delivery",
    description: "Fast and secure delivery to your doorstep within 2 hours",
    icon: Truck,
    bgColor: "from-cyan-50 to-sky-50",
    iconColor: "text-cyan-600",
  },
  {
    id: 3,
    title: "Expert Consultation",
    description: "Professional pharmacist consultation available anytime",
    icon: Phone,
    bgColor: "from-sky-50 to-blue-50",
    iconColor: "text-sky-600",
  },
]

export default function FeaturedSection() {
  const [hoveredCategory, setHoveredCategory] = useState(null)
  const [hoveredFeature, setHoveredFeature] = useState(null)

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-500 mb-2 uppercase tracking-wide">Categories</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Categories</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of medical products and healthcare essentials, carefully curated for your
            well-being.
          </p>
        </div>

        {/* Featured Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20">
          {featuredCategories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="text-center">
                {/* Icon Container */}
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.bgColor} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}
                >
                  <category.icon
                    className={`w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${category.iconColor} transition-transform duration-300 ${
                      hoveredCategory === category.id ? "scale-110" : ""
                    }`}
                  />
                </div>

                {/* Category Info */}
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 mb-2">{category.productCount}</p>
                <p className="text-xs text-gray-400 hidden md:block">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Section */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">SaveRx</span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the future of pharmacy services with our innovative features designed for your convenience and
              safety.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {keyFeatures.map((feature) => (
              <div
                key={feature.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredFeature(feature.id)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div
                  className={`bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100`}
                >
                  {/* Feature Icon */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br ${feature.bgColor} flex items-center justify-center shadow-md`}
                  >
                    <feature.icon
                      className={`w-8 h-8 md:w-10 md:h-10 ${feature.iconColor} transition-transform duration-300 ${
                        hoveredFeature === feature.id ? "scale-110" : ""
                      }`}
                    />
                  </div>

                  {/* Feature Content */}
                  <div className="text-center">
                    <h4 className="font-bold text-gray-900 text-lg md:text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">{feature.description}</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CustomButton
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50 text-sm"
                        size="sm"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </CustomButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <CustomButton
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 md:px-12 py-3 md:py-4 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            Explore All Categories
            <ArrowRight className="w-5 h-5 ml-2" />
          </CustomButton>
        </div>
      </div>
    </section>
  )
}
