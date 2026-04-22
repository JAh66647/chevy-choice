import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Weekly',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Constructing the mailto link
    const subject = encodeURIComponent(`New Booking Request: ${formData.serviceType}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.serviceType}\n` +
      `Message: ${formData.message || 'No message provided'}`
    )
    
    // This opens the user's default email client
    window.location.href = `mailto:hotytea.tt@gmail.com,jahiemdowner347@gmail.com?subject=${subject}&body=${body}`
    
    alert("Thank you! Your email client will now open to send the request to Tanisha.")
    setIsModalOpen(false)
    setFormData({
      name: '',
      phone: '',
      serviceType: 'Weekly',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white text-[#4d7ea8] font-sans selection:bg-[#4d7ea8]/10">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 bg-[#4d7ea8]/5 border-b border-[#4d7ea8]/10">
        <div className="text-2xl font-black tracking-tight text-[#4d7ea8]">
          Chevys Choice 
          <span className="text-[#4d7ea8]/60 text-sm block italic font-medium">Cleaning Services</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 px-6 bg-[#4d7ea8]/5 flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-8xl font-black text-[#4d7ea8] mb-6 tracking-tighter">
            Chevys Choice
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-[#4d7ea8]/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Professional & Eco-Friendly Cleaning Solutions for Your Home. 
            <span className="block mt-2 italic">Honest, Reliable, and Responsible.</span>
          </p>
          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#4d7ea8] text-white px-12 py-5 rounded-full font-bold text-xl hover:brightness-110 transition-all shadow-xl shadow-[#4d7ea8]/20 cursor-pointer active:scale-95"
            >
              Book Now
            </button>
            <div className="flex items-center gap-2 text-xl font-bold">
              <span className="text-[#4d7ea8]/40">or call</span>
              <a 
                href="tel:9295426700" 
                className="text-[#4d7ea8] hover:underline underline-offset-4 decoration-2"
              >
                929-542-6700
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#4d7ea8]">Our Flexible Services</h2>
          <div className="h-1.5 w-24 bg-[#4d7ea8]/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Weekly", desc: "Keep your home consistently fresh and organized with our routine weekly visits." },
            { title: "Bi-Weekly", desc: "The perfect balance for busy families looking to maintain a tidy home." },
            { title: "Monthly", desc: "A deep clean once a month to ensure your living space stays sparkling." }
          ].map((service) => (
            <div key={service.title} className="bg-[#4d7ea8]/5 p-10 rounded-[2.5rem] border border-[#4d7ea8]/10 hover:border-[#4d7ea8]/30 transition-all group">
              <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm text-[#4d7ea8] text-xl font-bold group-hover:bg-[#4d7ea8] group-hover:text-white transition-colors">
                ✓
              </div>
              <h3 className="text-2xl font-black mb-4 text-[#4d7ea8]">{service.title} Service</h3>
              <p className="text-[#4d7ea8]/70 leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="bg-[#4d7ea8] py-24 px-6 text-white text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 italic opacity-90 tracking-tight">"Honest - Reliable - Responsible"</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 border border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🌿</div>
              <h4 className="font-black text-xl mb-2">Eco-Friendly</h4>
              <p className="text-white/70">Safe products for your home.</p>
            </div>
            <div className="p-8 border border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="font-black text-xl mb-2">Honest</h4>
              <p className="text-white/70">Trustworthy professionals.</p>
            </div>
            <div className="p-8 border border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">⭐</div>
              <h4 className="font-black text-xl mb-2">Reliable</h4>
              <p className="text-white/70">Always on time.</p>
            </div>
            <div className="p-8 border border-white/20 rounded-3xl bg-white/10 backdrop-blur-sm">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-black text-xl mb-2">Responsible</h4>
              <p className="text-white/70">We care for your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <div className="bg-white border-[6px] border-[#4d7ea8]/5 rounded-[3rem] p-10 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#4d7ea8]/5 -mr-32 -mt-32 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-12 text-[#4d7ea8] tracking-tighter">Contact Us</h2>
            <div className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#4d7ea8]/60 font-black mb-3">Owner</p>
                <p className="text-3xl md:text-4xl font-black text-gray-900">Tanisha Walker</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4d7ea8]/60 font-black mb-3">Phone</p>
                  <a href="tel:9295426700" className="text-2xl font-bold text-gray-800 hover:text-[#4d7ea8] transition-colors">929-542-6700</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#4d7ea8]/60 font-black mb-3">Email</p>
                  <a href="mailto:hotytea.tt@gmail.com" className="text-2xl font-bold text-gray-800 hover:text-[#4d7ea8] transition-colors break-words">hotytea.tt@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4d7ea8]/30 backdrop-blur-md transition-all">
          <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 relative">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[#4d7ea8]/40 hover:text-[#4d7ea8] transition-colors text-2xl"
            >
              ×
            </button>
            
            <div className="p-10">
              <h3 className="text-3xl font-black text-[#4d7ea8] mb-8 tracking-tight">Book Your Service</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-black text-[#4d7ea8] mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4d7ea8]/10 focus:border-[#4d7ea8] transition-all text-gray-900 font-medium"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-black text-[#4d7ea8] mb-2">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4d7ea8]/10 focus:border-[#4d7ea8] transition-all text-gray-900 font-medium"
                    placeholder="929-542-6700"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-black text-[#4d7ea8] mb-2">Service Frequency</label>
                  <select 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4d7ea8]/10 focus:border-[#4d7ea8] transition-all text-gray-900 font-bold"
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
                  <label className="block text-xs uppercase tracking-widest font-black text-[#4d7ea8] mb-2">Message (Optional)</label>
                  <textarea 
                    className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#4d7ea8]/10 focus:border-[#4d7ea8] transition-all text-gray-900 font-medium h-28 resize-none"
                    placeholder="Tell us about your home..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#4d7ea8] text-white py-5 rounded-2xl font-bold text-xl hover:brightness-110 transition-all shadow-lg shadow-[#4d7ea8]/20 mt-4 active:scale-[0.98]"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 text-center text-[#4d7ea8]/30 text-sm font-medium uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Chevys Choice Cleaning Services</p>
      </footer>
    </div>
  )
}
