import { MessageCircle, Phone, Mail } from "lucide-react"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion"
import { CustomButton } from "../CustomButton"

const faqData = [
  {
    id: "prescription-upload",
    question: "How do I upload my prescription?",
    answer:
      "You can easily upload your prescription by clicking the 'Upload Prescription' button on our homepage or in your account dashboard. Simply take a clear photo of your prescription or upload a scanned copy. Our licensed pharmacists will verify it within 30 minutes and prepare your medications for delivery.",
  },
  {
    id: "delivery-time",
    question: "What are your delivery hours and how fast is delivery?",
    answer:
      "We offer 24/7 delivery service for emergency medications. Standard delivery takes 2-4 hours within city limits, while express delivery is available within 1-2 hours for urgent prescriptions. Our delivery hours are Monday to Sunday, 6 AM to 11 PM for regular orders, with emergency service available round the clock.",
  },
  {
    id: "payment-methods",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including credit cards (Visa, MasterCard, American Express), debit cards, digital wallets (PayPal, Apple Pay, Google Pay), bank transfers, and cash on delivery. We also accept insurance claims and HSA/FSA cards for eligible medications.",
  },
  {
    id: "medication-authenticity",
    question: "Are all medications genuine and FDA approved?",
    answer:
      "All our medications are sourced directly from licensed pharmaceutical manufacturers and distributors. Every product is FDA approved and comes with proper batch numbers and expiry dates. We maintain strict quality control measures and proper storage conditions to ensure medication efficacy and safety.",
  },
  {
    id: "consultation-service",
    question: "Do you provide pharmacist consultation services?",
    answer:
      "Yes, we offer free consultation with licensed pharmacists via phone, video call, or chat. Our pharmacists are available to answer questions about drug interactions, side effects, dosage instructions, and general health queries. You can schedule a consultation or get immediate assistance during business hours.",
  },
  {
    id: "prescription-refills",
    question: "How do prescription refills work?",
    answer:
      "Setting up prescription refills is simple! You can enable auto-refill for your regular medications through your account dashboard. We'll automatically prepare your refills and notify you before delivery. You can also manually request refills through our app or website, and we'll process them within 2 hours.",
  },
  {
    id: "insurance-coverage",
    question: "Do you accept insurance and what about coverage?",
    answer:
      "We work with most major insurance providers including Medicare, Medicaid, and private insurance plans. Simply provide your insurance information during checkout, and we'll process the claim automatically. If you're unsure about coverage, our team can verify your benefits before you place an order.",
  },
  {
    id: "emergency-medications",
    question: "What if I need emergency medications outside business hours?",
    answer:
      "Our 24/7 emergency service ensures you can get critical medications anytime. Call our emergency hotline or use the 'Emergency Order' feature in our app. Our on-call pharmacist will verify your prescription and arrange immediate delivery for life-saving medications, typically within 1 hour.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base text-gray-500 mb-2 uppercase tracking-wide">Support</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Questions</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about SaveRx services, prescriptions, delivery, and more. Can't find what
            you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <Accordion type="single" collapsible>
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="mb-4">
                <AccordionTrigger className="font-bold text-gray-900 text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Support Section */}
        <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Still have{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                questions?
              </span>
            </h3>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our friendly support team is here to help you 24/7. Get in touch with us through any of these channels.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Live Chat */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Live Chat</h4>
              <p className="text-gray-600 text-sm mb-4">Chat with our support team in real-time</p>
              <CustomButton
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full"
                size="sm"
              >
                Start Chat
              </CustomButton>
            </div>

            {/* Phone Support */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-100 to-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Phone Support</h4>
              <p className="text-gray-600 text-sm mb-4">Call us for immediate assistance</p>
              <CustomButton
                variant="outline"
                className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 w-full"
                size="sm"
              >
                Call Now
              </CustomButton>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-sky-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Email Support</h4>
              <p className="text-gray-600 text-sm mb-4">Send us an email for detailed inquiries</p>
              <CustomButton variant="outline" className="border-sky-600 text-sky-600 hover:bg-sky-50 w-full" size="sm">
                Send Email
              </CustomButton>
            </div>
          </div>

          {/* Emergency Contact */}
          {/* <div className="text-center">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 md:p-6 mb-6">
              <h4 className="font-bold text-red-800 text-lg mb-2">Emergency Prescription Service</h4>
              <p className="text-red-700 text-sm mb-3">
                For urgent medication needs outside business hours, call our 24/7 emergency hotline
              </p>
              <CustomButton className="bg-red-600 hover:bg-red-700 text-white font-semibold" size="sm">
                Emergency: 1-800-SAVERX-911
              </CustomButton>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
