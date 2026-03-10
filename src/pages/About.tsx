import { Users, Target, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">About AbroadVerse</h1>
          <p className="text-lg text-slate-600">
            A division of Thorpoint Consulting Services, dedicated to making your global immigration and travel dreams a reality.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <Target className="h-12 w-12 text-[#F4B400] mb-6" />
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              To simplify the complex process of international immigration and travel by providing transparent, ethical, and highly personalized consulting services to individuals and families worldwide.
            </p>
          </div>
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
            <Globe className="h-12 w-12 text-[#00A8A8] mb-6" />
            <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-relaxed">
              To be the world's most trusted and reliable immigration consultancy, recognized for our integrity, high success rates, and commitment to client success across borders.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'Honest and transparent advice at every step.' },
              { icon: Award, title: 'Excellence', desc: 'Striving for the highest standards in service.' },
              { icon: Users, title: 'Client-Centric', desc: 'Your success is our primary focus.' },
              { icon: Globe, title: 'Global Reach', desc: 'Expertise across multiple international borders.' },
            ].map((val, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <val.icon className="h-10 w-10 mx-auto text-[#00A8A8] mb-4" />
                <h3 className="text-xl font-bold text-slate-800 mb-2">{val.title}</h3>
                <p className="text-slate-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">Our Immigration Experts</h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Abhinav Grover" 
                className="w-full h-80 object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Abhinav Grover</h3>
                <p className="text-[#00A8A8] font-semibold mb-2">Consultant</p>
                <p className="text-sm text-slate-500 font-medium mb-6">LLM, MBA, B.E.</p>
                <p className="text-slate-600 text-base leading-relaxed">
                  With over 10+ years of extensive experience in consulting services, Abhinav leads the AbroadVerse team with a profound understanding of global immigration laws and business strategies. His multidisciplinary background in Law, Business Administration, and Engineering allows him to provide unparalleled, strategic guidance to individuals and enterprises navigating complex international pathways.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// Temporary inline import for Globe since it was missed in the top import
import { Globe } from 'lucide-react';
