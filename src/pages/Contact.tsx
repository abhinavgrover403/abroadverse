import { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryOfInterest: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', countryOfInterest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Contact Us</h1>
          <p className="text-lg text-slate-600">
            Have questions about your immigration journey? Our experts are here to help. Reach out to us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-8">Send Us a Message</h2>
            
            {status === 'success' ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p>Your message has been received. One of our experts will contact you shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none transition-colors"
                      placeholder="+91 8287875519"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">Country of Interest</label>
                    <select 
                      id="country" 
                      required
                      value={formData.countryOfInterest}
                      onChange={(e) => setFormData({...formData, countryOfInterest: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none transition-colors bg-white"
                    >
                      <option value="">Select a country</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="UK">United Kingdom</option>
                      <option value="USA">United States</option>
                      <option value="Germany">Germany</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none transition-colors resize-none"
                    placeholder="Tell us about your immigration goals..."
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-red-600 text-sm">Failed to send message. Please try again later.</div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full bg-[#0B3C5D] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#00A8A8] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-[#0B3C5D] mb-8">Our Office</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#00A8A8]/10 p-3 rounded-full shrink-0">
                    <Phone className="h-6 w-6 text-[#00A8A8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Phone</h4>
                    <p className="text-slate-600">+91 8287875519<br />Mon-Fri, 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#00A8A8]/10 p-3 rounded-full shrink-0">
                    <Mail className="h-6 w-6 text-[#00A8A8]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">info@abroadverse.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <a 
                  href="https://wa.me/918287875519" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#128C7E] transition-colors"
                >
                  <MessageCircle className="h-6 w-6" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
