import { useState } from "react"
import { Search, ShoppingCart, User, Menu, X, LogOut, Settings, Package } from "lucide-react"
import { CustomButton } from "../CustomButton"
import { Combobox } from "../ComboBox"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu"

const medicalCategories = [
  { value: "all", label: "All Categories" },
  { value: "prescription", label: "Prescription Drugs" },
  { value: "otc", label: "Over-the-Counter" },
  { value: "vitamins", label: "Vitamins & Supplements" },
  { value: "personal-care", label: "Personal Care" },
  { value: "medical-devices", label: "Medical Devices" },
  { value: "first-aid", label: "First Aid" },
  { value: "baby-care", label: "Baby & Child Care" },
  { value: "wellness", label: "Health & Wellness" },
]

const browseCategories = [
  { label: "Home", href: "/" },
  { label: "Pharmacy", href: "/pharmacy" },
  { label: "Prescription", href: "/prescription" },
  { label: "Wellness", href: "/wellness" },
  { label: "Medical Devices", href: "/medical-devices" },
  { label: "About Us", href: "/about" },
  { label: "Health Blog", href: "/blog" },
]

export default function Header() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true) // This would come from your auth state

  const handleSignOut = () => {
    setIsLoggedIn(false)
    // Add your sign-out logic here
    console.log("User signed out")
  }

  return (
    <header className="bg-gradient-to-r from-sky-600 to-blue-700 text-white shadow-lg">
      {/* Main Header */}
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-lg shadow-md">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                <circle cx="12" cy="15" r="2" />
              </svg>
            </div>
            <span className="text-xl font-bold hidden sm:block">SaveRx</span>
          </div>

          {/* Enhanced Search Bar */}
          <div className="flex-1 max-w-3xl mx-4">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <div className="w-32 sm:w-40 md:w-48">
                <Combobox
                  options={medicalCategories}
                  value={selectedCategory}
                  onValueChange={setSelectedCategory}
                  placeholder="Categories"
                  className="rounded-none border-0 bg-white text-gray-900 hover:bg-gray-50 h-10 sm:h-12 text-xs sm:text-sm"
                />
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search medicines..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 sm:h-12 px-3 sm:px-4 text-gray-900 bg-white border-0 focus:outline-none focus:ring-0 placeholder:text-gray-500 text-sm"
                />
                <CustomButton
                  className="absolute right-0 top-0 h-full px-3 sm:px-6 rounded-none bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 border-0"
                  primaryColor="blue"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </CustomButton>
              </div>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            {/* Shopping Cart */}
            <button className="p-2 hover:bg-sky-500/50 rounded-lg transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md">
                3
              </span>
            </button>

            {/* User Profile */}
            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="p-2 hover:bg-sky-500/50 rounded-lg transition-colors">
                  <User className="w-5 h-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 mr-4">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Package className="w-4 h-4 mr-2" />
                    My Orders
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <div className="border-t border-gray-200 my-1"></div>
                  <DropdownMenuItem className="cursor-pointer text-red-600" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <CustomButton
                onClick={() => (window.location.href = "/sign-in")}
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-blue-700 text-sm px-3 py-1"
                size="sm"
              >
                Sign In
              </CustomButton>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 hover:bg-sky-500/50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="border-t border-sky-500/30 hidden lg:block">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Browse Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white hover:from-cyan-500 hover:to-blue-500 font-medium px-4 py-2 rounded-lg flex items-center shadow-md">
                <Menu className="w-4 h-4 mr-2" />
                Browse All Categories
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {browseCategories.map((category, index) => (
                  <DropdownMenuItem key={index} className="cursor-pointer">
                    <a href={category.href} className="w-full">
                      {category.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Quick Links */}
            <nav className="flex items-center space-x-8">
              <a href="/emergency" className="hover:text-cyan-200 transition-colors font-medium text-cyan-300">
                Emergency Pharmacy
              </a>
              <a href="/prescription-upload" className="hover:text-cyan-200 transition-colors font-medium">
                Upload Prescription
              </a>
              <a href="/health-checkup" className="hover:text-cyan-200 transition-colors font-medium">
                Health Checkup
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-500/30 bg-gradient-to-r from-sky-700 to-blue-800">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-4">
              {/* Browse Categories for Mobile */}
              <div className="space-y-2">
                <h3 className="font-semibold text-cyan-300 text-sm uppercase tracking-wide">Categories</h3>
                {browseCategories.map((category, index) => (
                  <a
                    key={index}
                    href={category.href}
                    className="block py-2 text-sky-100 hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.label}
                  </a>
                ))}
              </div>

              {/* Quick Links for Mobile */}
              <div className="space-y-2 border-t border-sky-500/30 pt-4">
                <h3 className="font-semibold text-cyan-300 text-sm uppercase tracking-wide">Quick Access</h3>
                <a
                  href="/emergency"
                  className="block py-2 text-sky-100 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Emergency Pharmacy
                </a>
                <a
                  href="/prescription-upload"
                  className="block py-2 text-sky-100 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upload Prescription
                </a>
                <a
                  href="/health-checkup"
                  className="block py-2 text-sky-100 hover:text-white transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Health Checkup
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
