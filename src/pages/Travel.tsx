import { Plane, Shield, Car, Home, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Travel() {
  const services = [
    {
      title: 'Flight Booking Support',
      icon: Plane,
      desc: 'We help you find the best routes, airlines, and deals for your international travel.',
    },
    {
      title: 'Travel Insurance',
      icon: Shield,
      desc: 'Comprehensive coverage for medical emergencies, trip cancellations, and lost baggage.',
    },
    {
      title: 'Airport Pickup',
      icon: Car,
      desc: 'Reliable and safe transportation from the airport to your destination upon arrival.',
    },
    {
      title: 'Accommodation Assistance',
      icon: Home,
      desc: 'Guidance in finding short-term or long-term housing options that fit your budget.',
    },
    {
      title: 'Documentation Guidance',
      icon: FileText,
      desc: 'Ensure all your travel documents, permits, and declarations are in perfect order.',
    },
    {
      title: 'Interview Preparation',
      icon: Users,
      desc: 'Mock interviews and tips to help you confidently face immigration and visa officers.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Travel Assistance</h1>
          <p className="text-lg text-slate-600">
            Beyond visas, we provide end-to-end travel support to ensure your journey is comfortable, safe, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <service.icon className="h-12 w-12 text-[#F4B400] mb-6" />
              <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">{service.title}</h2>
              <p className="text-slate-600 mb-6">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#0B3C5D] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need Help Planning Your Trip?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Our travel experts are ready to assist you with every detail of your international journey.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-[#F4B400] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
          >
            Get Travel Support
          </Link>
        </div>

      </div>
    </div>
  );
}
