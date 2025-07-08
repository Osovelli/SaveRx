import { useState } from "react"
import { Heart, Star, ShoppingCart, ArrowRight } from "lucide-react"
import { CustomButton } from "../CustomButton"

const bestSellerProducts = [
  {
    id: 1,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    image: "/capsule image.jpg",
    rating: 4.8,
    reviews: 245,
    originalPrice: 15.99,
    currentPrice: 9.99,
    discount: 35,
    dosage: "500mg x 20 tablets",
    brand: "MediCare",
    inStock: true,
    bestseller: true,
  },
  {
    id: 2,
    name: "Vitamin D3 1000 IU",
    category: "Vitamins & Supplements",
    image: "/medications.jpg",
    rating: 4.9,
    reviews: 189,
    originalPrice: 24.99,
    currentPrice: 18.99,
    discount: 25,
    dosage: "1000 IU x 60 capsules",
    brand: "VitaPlus",
    inStock: true,
    bestseller: true,
  },
  {
    id: 3,
    name: "Omega-3 Fish Oil",
    category: "Heart Health",
    image: "/pills and drugs.jpg",
    rating: 4.7,
    reviews: 156,
    originalPrice: 32.99,
    currentPrice: 26.99,
    discount: 20,
    dosage: "1000mg x 90 softgels",
    brand: "OceanHealth",
    inStock: true,
    bestseller: true,
  },
  {
    id: 4,
    name: "Multivitamin Complex",
    category: "Daily Wellness",
    image: "/supliful-supplements-on-demand.jpg",
    rating: 4.6,
    reviews: 203,
    originalPrice: 28.99,
    currentPrice: 21.99,
    discount: 25,
    dosage: "Daily formula x 30 tablets",
    brand: "WellnessMax",
    inStock: true,
    bestseller: true,
  },
  {
    id: 5,
    name: "Probiotic Capsules",
    category: "Digestive Health",
    image: "/capsule image.jpg",
    rating: 4.8,
    reviews: 178,
    originalPrice: 35.99,
    currentPrice: 27.99,
    discount: 22,
    dosage: "10 billion CFU x 60 caps",
    brand: "GutHealth",
    inStock: true,
    bestseller: true,
  },
]

export default function BestSellersSection() {
  const [favorites, setFavorites] = useState(new Set())
  const [hoveredProduct, setHoveredProduct] = useState(null)

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const addToCart = (product) => {
    console.log("Added to cart:", product.name)
    // Add your cart logic here
  }

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-sky-50/50 to-blue-50/50">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12">
          <div>
            <p className="text-sm md:text-base text-gray-500 mb-2 uppercase tracking-wide">Best Seller</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Best Seller{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Products</span>
            </h2>
          </div>
          <CustomButton
            className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            size="lg"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2" />
          </CustomButton>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {bestSellerProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image Container */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute flex flex-col gap-4 top-3 -left-2 z-10">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {product.discount}% off
                    </span>

                    <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {product.category}
                    </span>
                  </div>
                )}

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors duration-300 ${
                      favorites.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-400 group-hover:text-red-500"
                    }`}
                  />
                </button>

                {/* Product Image */}
                <div className="aspect-square bg-white rounded-xl mb-2 flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-3">
                {/* Category */}
                {/* <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">{product.category}</p> */}

                {/* Product Name */}
                <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                {/* Dosage/Brand */}
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">{product.dosage}</p>
                  <p className="text-xs text-gray-500">by {product.brand}</p>
                </div>

                {/* Rating */}
                {/* <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-gray-900 text-sm">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} reviews)</span>
                </div> */}

                {/* Pricing */}
                {/* <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-gray-900">${product.currentPrice}</span>
                  {product.originalPrice > product.currentPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div> */}

                {/* Add to Cart Button */}
                <CustomButton
                  onClick={() => addToCart(product)}
                  className={`w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 ${
                    hoveredProduct === product.id ? "scale-105" : ""
                  }`}
                  size="sm"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </CustomButton>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 mb-4">Discover more health products tailored to your needs</p>
          <CustomButton
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 font-semibold"
            size="lg"
          >
            Browse All Categories
          </CustomButton>
        </div>
      </div>
    </section>
  )
}
