import { Link } from 'react-router-dom';
import { GraduationCap, Briefcase, Plane, Users, Globe, Building } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'study',
      title: 'Study Visa Assistance',
      icon: GraduationCap,
      desc: 'Comprehensive support for students aiming to study in top international universities.',
      eligibility: 'Valid passport, acceptance letter, proof of funds, language proficiency.',
      steps: ['Profile Evaluation', 'University Selection', 'Application Submission', 'Visa Interview Prep'],
    },
    {
      id: 'work',
      title: 'Work Visa Processing',
      icon: Briefcase,
      desc: 'Expert guidance for professionals seeking international employment opportunities.',
      eligibility: 'Job offer (if applicable), relevant experience, skill assessment.',
      steps: ['Skill Assessment', 'Employer Sponsorship', 'Documentation', 'Visa Lodgment'],
    },
    {
      id: 'tourist',
      title: 'Tourist Visa Services',
      icon: Plane,
      desc: 'Hassle-free processing for short-term visits, holidays, and family reunions.',
      eligibility: 'Valid passport, travel itinerary, proof of funds, ties to home country.',
      steps: ['Itinerary Planning', 'Document Collection', 'Application Filing', 'Biometrics'],
    },
    {
      id: 'business',
      title: 'Business Visa',
      icon: Users,
      desc: 'Streamlined visa services for corporate travel, meetings, and conferences.',
      eligibility: 'Business invitation, company letter, proof of business activities.',
      steps: ['Invitation Verification', 'Corporate Documentation', 'Fast-track Processing', 'Approval'],
    },
    {
      id: 'pr',
      title: 'Permanent Residency (PR)',
      icon: Globe,
      desc: 'End-to-end support for points-based immigration and PR pathways (e.g., Express Entry).',
      eligibility: 'Age, education, work experience, language skills (varies by country).',
      steps: ['Eligibility Check', 'Language Testing', 'Expression of Interest', 'Final Application'],
    },
    {
      id: 'investor',
      title: 'Investor Visa',
      icon: Building,
      desc: 'Specialized services for high-net-worth individuals seeking citizenship by investment.',
      eligibility: 'Minimum investment capital, clean background, source of funds verification.',
      steps: ['Investment Consultation', 'Due Diligence', 'Fund Transfer', 'Citizenship/Residency Grant'],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Visa & Immigration Services</h1>
          <p className="text-lg text-slate-600">
            We offer a wide range of visa services tailored to your specific needs, ensuring a smooth and successful application process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <service.icon className="h-12 w-12 text-[#00A8A8] mb-6" />
                <h2 className="text-2xl font-bold text-[#0B3C5D] mb-4">{service.title}</h2>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-slate-800 mb-2">Eligibility:</h3>
                  <p className="text-sm text-slate-600">{service.eligibility}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Process Steps:</h3>
                  <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
                    {service.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 bg-slate-50 border-t border-slate-100 mt-auto">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-[#0B3C5D] text-white py-3 rounded-lg font-semibold hover:bg-[#00A8A8] transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
