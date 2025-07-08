import { useState } from "react"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Shield,
  Truck,
  Clock,
} from "lucide-react"

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/story" },
    { label: "Careers", href: "/careers" },
    { label: "Press & Media", href: "/press" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "My Account", href: "/account" },
    { label: "Track Your Order", href: "/track-order" },
    { label: "Prescription Upload", href: "/upload-prescription" },
    { label: "Medication Reminders", href: "/reminders" },
    { label: "Health Consultation", href: "/consultation" },
    { label: "FAQ", href: "/faq" },
  ],
  information: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Return Policy", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "Refund Policy", href: "/refunds" },
  ],
  quickLinks: [
    { label: "Emergency Pharmacy", href: "/emergency" },
    { label: "Prescription Drugs", href: "/prescription" },
    { label: "Over-the-Counter", href: "/otc" },
    { label: "Vitamins & Supplements", href: "/vitamins" },
    { label: "Medical Devices", href: "/devices" },
    { label: "Health & Wellness", href: "/wellness" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/saverx", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/saverx", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/saverx", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/saverx", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/saverx", label: "YouTube" },
]

const trustBadges = [
  { icon: Shield, text: "NAFDAC Approved" },
  { icon: Truck, text: "Free Delivery" },
  { icon: Clock, text: "24/7 Support" },
]

export default function FooterComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const languages = ["English", "Spanish", "French"]
  const currencies = ["USD", "EUR", "CAD"]

  return (
    <footer className="bg-gradient-to-br from-sky-800 via-blue-800 to-cyan-800 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <span className="text-2xl font-bold">SaveRx</span>
            </div>

            {/* Description */}
            <p className="text-sky-100 leading-relaxed text-sm">
              Your trusted online pharmacy providing quality medications, expert consultation, and convenient delivery
              services for all your healthcare needs.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-sky-700/50 p-2 rounded-lg">
                    <badge.icon className="w-4 h-4 text-cyan-300" />
                  </div>
                  <span className="text-sm text-sky-100">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-sky-700/50 hover:bg-sky-600/70 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <social.icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        hoveredSocial === index ? "text-cyan-300" : "text-sky-200"
                      }`}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-sky-600 pb-2">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sky-100 hover:text-cyan-300 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-sky-600 pb-2">Customer Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sky-100 hover:text-cyan-300 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-sky-600 pb-2">Our Information</h3>
            <ul className="space-y-3">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sky-100 hover:text-cyan-300 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-sky-600 pb-2">Contact Info</h3>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sky-100 text-sm">24/7 Support</p>
                  <a
                    href="tel:+1-800-SAVERX-24"
                    className="text-white font-semibold hover:text-cyan-300 transition-colors"
                  >
                    +234-800-SAVERX-24
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sky-100 text-sm">Email Support</p>
                  <a
                    href="mailto:support@saverx.com"
                    className="text-white font-semibold hover:text-cyan-300 transition-colors"
                  >
                    support@saverx.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sky-100 text-sm">Main Office</p>
                  <address className="text-white text-sm not-italic">
                    123 Healthcare Rd.
                    <br />
                    Medical District, Abj 10001
                  </address>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-red-600/20 border border-red-400/30 rounded-lg p-3 mt-4">
                <p className="text-red-200 text-xs font-medium mb-1">Emergency Prescription</p>
                <a href="tel:911" className="text-red-300 font-bold hover:text-red-200 transition-colors">
                  Call 911 or Emergency Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-sky-600/50 bg-sky-900/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sky-200 text-sm">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="text-cyan-300 font-semibold">SaveRx Pharmacy</span>. All Rights
                Reserved.
              </p>
              <p className="text-sky-300 text-xs mt-1">Licensed Pharmacy | Registration: AB1234567</p>
            </div>

            {/* Language and Currency Selectors */}
            <div className="flex items-center justify-center md:justify-end space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="bg-sky-700/50 text-white border border-sky-600 rounded-lg px-3 py-2 text-sm appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} className="bg-sky-800">
                      {lang}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sky-300 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
