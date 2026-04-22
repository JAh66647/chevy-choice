import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'Weekly',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const createBooking = useMutation(api.service_bookings.createBooking)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await createBooking(formData)
      setSubmitted(true)
      setTimeout(() => {
        setIsModalOpen(false)
        setSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: 'Weekly',
          message: ''
        })
      }, 3000)
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#4d7ea8] font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-[#4d7ea8]/5 border-b border-[#4d7ea8]/10">
        <div className="text-2xl font-bold tracking-tight text-[#4d7ea8]">
          Chevys Choice <span className="text-[#4d7ea8]/70 text-sm block md:inline md:ml-2 italic">Cleaning Services</span>
        </div>
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-[#4d7ea8]/80 transition-colors">Services</a>
          <a href="#about" className="hover:text-[#4d7ea8]/80 transition-colors">About</a>
          <a href="#contact" className="hover:text-[#4d7ea8]/80 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 px-6 bg-[#4d7ea8]/5 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#4d7ea8] mb-6 drop-shadow-sm">
            Chevys Choice
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#4d7ea8]/80 font-medium">
            Professional & Eco-Friendly Cleaning Solutions for Your Home.
          </p>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4d7ea8] text-white px-12 py-5 rounded-full font-bold text-xl hover:brightness-110 transition-all shadow-xl hover:shadow-[#4d7ea8]/20 cursor-pointer w-full md:w-auto"
            >
              Book Now
            </button>
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-[#4d7ea8]/60">or call</span>
              <a 
                href="tel:9295426700" 
                className="text-[#4d7ea8] hover:underline underline-offset-4"
              >
                929-542-6700
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#4d7ea8] underline decoration-[#4d7ea8]/20 underline-offset-8">
          Our Flexible Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Weekly", desc: "Keep your home consistently fresh and organized with our routine weekly visits." },
            { title: "Bi-Weekly", desc: "The perfect balance for busy families looking to maintain a tidy home." },
            { title: "Monthly", desc: "A deep clean once a month to ensure your living space stays sparkling." }
          ].map((service) => (
            <div key={service.title} className="bg-[#4d7ea8]/5 p-8 rounded-3xl border border-[#4d7ea8]/10 hover:scale-105 transition-transform">
              <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center mb-6 shadow-sm text-[#4d7ea8] font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#4d7ea8]">{service.title}</h3>
              <p className="text-[#4d7ea8]/80 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="bg-[#4d7ea8] py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 italic">"Honest - Reliable - Responsible"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
              <span className="block text-4xl mb-4">🌿</span>
              <h4 className="font-bold text-xl">Eco-Friendly</h4>
              <p className="mt-2 text-white/80">Environmental friendly cleaning products for your safety.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
              <span className="block text-4xl mb-4">🤝</span>
              <h4 className="font-bold text-xl">Honest</h4>
              <p className="mt-2 text-white/80">Transparent pricing and trustworthy professionals.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
              <span className="block text-4xl mb-4">⭐</span>
              <h4 className="font-bold text-xl">Reliable</h4>
              <p className="mt-2 text-white/80">Always on time and ready to exceed expectations.</p>
            </div>
            <div className="p-4 border border-white/20 rounded-xl bg-white/10 backdrop-blur-sm">
              <span className="block text-4xl mb-4">🏠</span>
              <h4 className="font-bold text-xl">Responsible</h4>
              <p className="mt-2 text-white/80">Caring for your home like it's our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="bg-white border-4 border-[#4d7ea8]/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#4d7ea8]/5 -mr-16 -mt-16 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#4d7ea8]">Contact Us</h2>
            <div className="space-y-6 text-gray-800">
              <div>
                <p className="text-sm uppercase tracking-widest text-[#4d7ea8] font-bold mb-1">Owner</p>
                <p className="text-2xl font-bold">Tanisha Walker</p>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-[#4d7ea8] font-bold mb-1">Phone</p>
                  <a href="tel:9295426700" className="text-2xl font-semibold hover:text-[#4d7ea8] transition-colors">929-542-6700</a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-[#4d7ea8] font-bold mb-1">Email</p>
                  <a href="mailto:hotytea.tt@gmail.com" className="text-2xl font-semibold hover:text-[#4d7ea8] transition-colors">hotytea.tt@gmail.com</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-[#4d7ea8]/10 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-[#4d7ea8]/70 font-medium italic">Environmental Friendly Cleaning Service</p>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4d7ea8] text-white px-8 py-3 rounded-full font-bold hover:brightness-110 transition-colors shadow-md cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4d7ea8]/20 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="p-8 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-[#4d7ea8]">Book Your Service</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Request Sent!</h3>
                  <p className="text-gray-600">We'll get back to you shortly at {formData.email}.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-[#4d7ea8] mb-1">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4d7ea8]/20 focus:border-[#4d7ea8] text-gray-800"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-[#4d7ea8] mb-1">Email</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4d7ea8]/20 focus:border-[#4d7ea8] text-gray-800"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#4d7ea8] mb-1">Phone</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4d7ea8]/20 focus:border-[#4d7ea8] text-gray-800"
                        placeholder="929-542-6700"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4d7ea8] mb-1">Service Frequency</label>
                    <select 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4d7ea8]/20 focus:border-[#4d7ea8] text-gray-800 bg-white"
                      value={formData.serviceType}
                      onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                    >
                      <option>Weekly</option>
                      <option>Bi-Weekly</option>
                      <option>Monthly</option>
                      <option>One-Time Deep Clean</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#4d7ea8] mb-1">Message (Optional)</label>
                    <textarea 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4d7ea8]/20 focus:border-[#4d7ea8] text-gray-800 h-24"
                      placeholder="Tell us about your home..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#4d7ea8] text-white py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Request'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-10 text-center text-[#4d7ea8]/40 text-sm">
        <p>© {new Date().getFullYear()} Chevys Choice Cleaning Services. All rights reserved.</p>
      </footer>
    </div>
  )
}
