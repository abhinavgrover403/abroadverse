import { Helmet } from 'react-helmet-async';
import { FileSignature, Scale, AlertCircle, CheckSquare } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <Helmet>
        <title>Terms of Service | AbroadVerse</title>
        <meta name="description" content="Terms of Service and User Agreement for AbroadVerse immigration and travel services." />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D] mb-6">Terms of Service</h1>
          <p className="text-lg text-slate-600">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Legal Documents and Scales of Justice" 
            className="w-full h-64 object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-8 md:p-12 prose prose-slate max-w-none prose-headings:text-[#0B3C5D] prose-a:text-[#00A8A8]">
            <p className="lead text-xl text-slate-600 mb-8">
              Welcome to AbroadVerse. These Terms of Service ("Terms") govern your access to and use of our website, services, and applications. Please read these Terms carefully before using our services.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 my-12 not-prose">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <FileSignature className="h-8 w-8 text-[#F4B400] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Agreement</h3>
                <p className="text-slate-600 text-sm">By using our services, you agree to be bound by these terms and our privacy policy.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <CheckSquare className="h-8 w-8 text-[#F4B400] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Your Responsibilities</h3>
                <p className="text-slate-600 text-sm">You must provide accurate, complete, and current information for all applications.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <Scale className="h-8 w-8 text-[#F4B400] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">Governing Law</h3>
                <p className="text-slate-600 text-sm">These terms are governed by the laws of the jurisdiction in which we operate.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <AlertCircle className="h-8 w-8 text-[#F4B400] mb-4" />
                <h3 className="text-lg font-bold text-[#0B3C5D] mb-2">No Guarantees</h3>
                <p className="text-slate-600 text-sm">We do not guarantee visa approvals, as final decisions rest solely with government authorities.</p>
              </div>
            </div>

            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using the services provided by AbroadVerse (a division of Thorpoint Consulting Services), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>

            <h2>2. Description of Services</h2>
            <p>AbroadVerse provides consulting, advisory, and administrative support services related to international immigration, visas, and travel. We act as an intermediary and consultant to assist you in preparing and submitting your applications to the relevant government authorities.</p>

            <h2>3. User Obligations and Accuracy of Information</h2>
            <p>You agree to provide true, accurate, current, and complete information about yourself as prompted by our consultation and application forms. You are solely responsible for the authenticity of the documents provided to us. AbroadVerse is not liable for any visa rejection resulting from false, inaccurate, or incomplete information provided by you.</p>

            <h2>4. No Guarantee of Outcome</h2>
            <p>While we strive to provide the highest quality of service and maximize your chances of success, <strong>AbroadVerse does not guarantee the approval of any visa, permit, or immigration application.</strong> The final decision to grant or deny a visa rests entirely with the respective embassy, consulate, or government immigration department.</p>

            <h2>5. Fees and Payments</h2>
            <p>All consulting fees are clearly communicated prior to the commencement of any service. Fees paid to AbroadVerse are for our professional consulting services and do not include government application fees, medical examination fees, or third-party costs unless explicitly stated. Consulting fees are generally non-refundable once services have commenced, except as required by law or stated in a specific service agreement.</p>

            <h2>6. Intellectual Property Rights</h2>
            <p>The Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by AbroadVerse, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>

            <h2>7. Limitation of Liability</h2>
            <p>In no event shall AbroadVerse, Thorpoint Consulting Services, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>8. Changes to Terms</h2>
            <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.</p>

            <h2>9. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at <strong>info@abroadverse.com</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
