import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Globe, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B3C5D] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-8 w-8 text-[#00A8A8]" />
              <span className="font-bold text-2xl text-white">AbroadVerse</span>
            </div>
            <p className="text-slate-300 mb-6">
              Your Gateway to Global Opportunities. Immigration, visa, and travel assistance made simple.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-[#00A8A8] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-300 hover:text-[#00A8A8] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-300 hover:text-[#00A8A8] transition-colors"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-slate-300 hover:text-[#00A8A8] transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F4B400]">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Visa Services</Link></li>
              <li><Link to="/travel" className="text-slate-300 hover:text-white transition-colors">Travel Assistance</Link></li>
              <li><Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F4B400]">Visa Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Study Visa</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Work Visa</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Tourist Visa</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">Business Visa</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white transition-colors">PR & Immigration</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#F4B400]">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#00A8A8] shrink-0" />
                <span className="text-slate-300">+91 8287875519</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#00A8A8] shrink-0" />
                <span className="text-slate-300">info@abroadverse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AbroadVerse &ndash; A Division of Thorpoint Consulting Services. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
