import { ArrowRight, CheckCircle, Globe, Plane, GraduationCap, Briefcase, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AbroadVerse | Your Gateway to Global Opportunities</title>
        <meta name="description" content="Immigration, visa, and travel assistance made simple. Explore the world with confidence with AbroadVerse, a division of Thorpoint Consulting Services." />
        <meta property="og:title" content="AbroadVerse | Your Gateway to Global Opportunities" />
        <meta property="og:description" content="Immigration, visa, and travel assistance made simple. Explore the world with confidence with AbroadVerse." />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-[#0B3C5D] text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Airplane flying over clouds" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Start Your Global Journey with AbroadVerse
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-10">
              Immigration, visa, and travel assistance made simple. Explore the world with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-[#F4B400] text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-yellow-500 transition-colors text-center">
                Book Consultation
              </Link>
              <Link to="/services" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors text-center">
                Explore Visa Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-4">Our Core Services</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Comprehensive immigration and travel solutions tailored to your unique global aspirations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Study Visa', icon: GraduationCap, desc: 'Secure your future with top-tier international education opportunities.' },
              { title: 'Work Visa', icon: Briefcase, desc: 'Advance your career with global employment and work permit assistance.' },
              { title: 'Tourist Visa', icon: Plane, desc: 'Hassle-free tourist visas for your next international vacation.' },
              { title: 'Business Visa', icon: Users, desc: 'Expand your enterprise globally with expert business visa processing.' },
              { title: 'PR & Immigration', icon: Globe, desc: 'Navigate complex permanent residency pathways with our certified experts.' },
              { title: 'Travel Assistance', icon: CheckCircle, desc: 'End-to-end support including flights, insurance, and accommodation.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <service.icon className="h-12 w-12 text-[#00A8A8] mb-6" />
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <Link to="/services" className="text-[#0B3C5D] font-semibold flex items-center gap-2 hover:text-[#00A8A8] transition-colors">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D] mb-4">Top Destinations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">We specialize in immigration and visa services for the world's most sought-after countries.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Canada', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Australia', img: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'UK', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'USA', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'Germany', img: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
              { name: 'New Zealand', img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
            ].map((country) => (
              <div key={country.name} className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer">
                <img 
                  src={country.img} 
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <h3 className="text-white font-bold text-lg">{country.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0B3C5D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose AbroadVerse?</h2>
              <p className="text-slate-300 text-lg mb-8">
                As a division of Thorpoint Consulting Services, we bring decades of corporate excellence and unwavering trust to your immigration journey.
              </p>
              <ul className="space-y-6">
                {[
                  'Certified Immigration Experts',
                  '100% Transparent Process',
                  'High Visa Success Rate',
                  'Personalized 1-on-1 Guidance'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-[#00A8A8] shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Consultation" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -left-8 bg-white text-slate-800 p-8 rounded-xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-[#F4B400] mb-2">98%</div>
                <div className="font-semibold text-slate-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#00A8A8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-10">
            Get in touch with our experts today for a free initial consultation and profile evaluation.
          </p>
          <Link to="/contact" className="inline-block bg-white text-[#0B3C5D] px-10 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-colors shadow-lg">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
