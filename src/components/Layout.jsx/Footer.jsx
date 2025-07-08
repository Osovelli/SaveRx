import { useState } from "react"
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Mail, MapPin, ArrowRight } from "lucide-react"
import { CustomButton } from "../CustomButton"
import { Checkbox } from "../CustomCheckbox"

const footerLinks = {
  information: [
    { label: "About Us", href: "/about" },
    { label: "Delivery Information", href: "/delivery" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Prescription Upload", href: "/upload-prescription" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  account: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "My Orders", href: "/orders" },
    { label: "Account Details", href: "/profile" },
    { label: "Prescription History", href: "/prescriptions" },
    { label: "Wishlist", href: "/wishlist" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/saverx", label: "Facebook", color: "hover:bg-blue-600" },
  { icon: Instagram, href: "https://instagram.com/saverx", label: "Instagram", color: "hover:bg-pink-600" },
  { icon: Linkedin, href: "https://linkedin.com/company/saverx", label: "LinkedIn", color: "hover:bg-blue-700" },
  { icon: Twitter, href: "https://twitter.com/saverx", label: "Twitter", color: "hover:bg-sky-500" },
  { icon: Youtube, href: "https://youtube.com/saverx", label: "YouTube", color: "hover:bg-red-600" },
]

/* const paymentMethods = [
  { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
  { name: "Visa", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" },
  { name: "Mastercard", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" },
  {
    name: "American Express",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg",
  },
] */

export default function Footer() {
  const [email, setEmail] = useState("")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState("idle")

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email || !acceptTerms) return

    setSubscribeStatus("loading")
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubscribeStatus("success")
      setEmail("")
      setAcceptTerms(false)
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    } catch (error) {
      setSubscribeStatus("error")
    }
  }

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 text-white">
      {/* Main Footer Content */}
      <div className="mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section with Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-400 to-cyan-400 p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z" />
                  <circle cx="12" cy="15" r="2" />
                </svg>
              </div>
              <span className="text-2xl font-bold">SaveRx</span>
            </div>

            {/* Tagline */}
            <p className="text-slate-300 leading-relaxed">Stay tuned for latest updates and new features</p>

            {/* Newsletter Signup */}
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="flex-1 h-12 px-4 bg-white text-gray-900 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
                  required
                />
                <CustomButton
                  type="submit"
                  disabled={!email || !acceptTerms || subscribeStatus === "loading"}
                  className="h-12 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-l-none rounded-r-lg border-0 shadow-lg"
                >
                  {subscribeStatus === "loading" ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  ) : (
                    <>
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Subscribe
                    </>
                  )}
                </CustomButton>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter-terms"
                  checked={acceptTerms}
                  onCheckedChange={setAcceptTerms}
                  className="data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-1"
                />
                <label htmlFor="newsletter-terms" className="text-sm text-slate-300 leading-relaxed">
                  I accept{" "}
                  <a href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                    terms and conditions
                  </a>{" "}
                  &{" "}
                  <a href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                    privacy policy
                  </a>
                </label>
              </div>

              {/* Success Message */}
              {subscribeStatus === "success" && (
                <p className="text-green-400 text-sm">Successfully subscribed to our newsletter!</p>
              )}
            </form>
          </div>

          {/* Information Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Information</h3>
            <ul className="space-y-3">
              {footerLinks.information.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Account</h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">About / Contacts</h3>
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <address className="text-slate-300 text-sm not-italic leading-relaxed">
                  123 Healthcare Blvd.
                  <br />
                  Medical District, NY 10001
                  <br />
                  United States
                </address>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:support@saverx.com"
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm"
                >
                  support@saverx.com
                </a>
              </div>

              {/* Social Media */}
              <div className="flex space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-slate-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-300 text-sm">
                Copyright © 2024 <span className="text-blue-400 font-semibold">SaveRx</span>. All Rights Reserved
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
