import Footer from "../../components/Layout.jsx/Footer"
import Header from "../../components/Layout.jsx/Header"
import BestSellersSection from "../../components/Sections/BestSellers"
import FAQSection from "../../components/Sections/FaqSection"
import FeaturedSection from "../../components/Sections/FeaturedSection"
import HeroSection from "../../components/Sections/HeroSection"
import NewsletterSection from "../../components/Sections/NewsletterSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="mx-auto px-4 py-16">
        <HeroSection />
        <FeaturedSection />
        <BestSellersSection />
        <FAQSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
