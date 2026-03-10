import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <Helmet>
        <title>Privacy Policy | AbroadVerse</title>
        <meta name="description" content="Privacy Policy for AbroadVerse. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Privacy Policy</h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Data Security and Privacy" 
            className="w-full h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-[#0B3C5D] prose-a:text-[#00A8A8]">
            <p className="lead text-xl text-slate-600 mb-8">
              At AbroadVerse, a division of Thorpoint Consulting Services, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or use our services.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 my-12 not-prose">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Database className="h-8 w-8 text-[#00A8A8] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Data Collection</h3>
                <p className="text-slate-600 text-sm">We only collect information necessary to provide you with our immigration and travel services.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Lock className="h-8 w-8 text-[#00A8A8] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Secure Storage</h3>
                <p className="text-slate-600 text-sm">Your personal and financial data is encrypted and stored securely using industry-standard protocols.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Eye className="h-8 w-8 text-[#00A8A8] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Transparency</h3>
                <p className="text-slate-600 text-sm">We are fully transparent about how your data is used and who it is shared with.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Shield className="h-8 w-8 text-[#00A8A8] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Your Rights</h3>
                <p className="text-slate-600 text-sm">You have the right to access, modify, or delete your personal data at any time.</p>
              </div>
            </div>

            <h2>1. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Website, or otherwise when you contact us.</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, date of birth, nationality, and passport details.</li>
              <li><strong>Immigration Data:</strong> Educational background, employment history, financial records, and family details required for visa processing.</li>
              <li><strong>Automatically Collected Data:</strong> IP address, browser type, operating system, and usage data collected via cookies.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below:</p>
            <ul>
              <li>To facilitate your visa and immigration application processes.</li>
              <li>To communicate with you regarding your inquiries, applications, and our services.</li>
              <li>To send administrative information to you, such as updates to our terms, conditions, and policies.</li>
              <li>To protect our Services and ensure legal compliance.</li>
            </ul>

            <h2>3. Information Sharing and Disclosure</h2>
            <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may share your data with:</p>
            <ul>
              <li><strong>Government Authorities:</strong> Immigration departments, embassies, and consulates as required for your application.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who perform services for us or on our behalf (e.g., payment processing, data analysis, email delivery).</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

            <h2>5. Your Privacy Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including the right to request access, correction, or deletion of your data. To exercise these rights, please contact us using the information provided below.</p>

            <h2>6. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at <strong>info@abroadverse.com</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
