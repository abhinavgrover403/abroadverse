import { useState, useEffect } from 'react';
import { Download, Search, Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  countryOfInterest: string;
  message: string;
  createdAt: string;
}

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/leads')
      .then(res => res.json())
      .then(data => {
        setLeads(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredLeads = leads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.countryOfInterest.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Phone', 'Country', 'Message', 'Date'];
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(l => `"${l.id}","${l.name}","${l.email}","${l.phone}","${l.countryOfInterest}","${l.message.replace(/"/g, '""')}","${l.createdAt}"`)
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `leads_export_${format(new Date(), 'yyyy-MM-dd')}.csv`;
    link.click();
  };

  if (loading) return <div>Loading leads...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search leads..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#00A8A8] focus:border-[#00A8A8] outline-none"
          />
        </div>
        <button 
          onClick={exportCSV}
          className="flex items-center gap-2 bg-[#0B3C5D] text-white px-4 py-2 rounded-lg hover:bg-[#00A8A8] transition-colors whitespace-nowrap"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-600 text-sm uppercase tracking-wider border-b border-slate-200">
              <th className="px-6 py-4 font-medium">Contact Details</th>
              <th className="px-6 py-4 font-medium">Interest</th>
              <th className="px-6 py-4 font-medium">Message</th>
              <th className="px-6 py-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {filteredLeads.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-800 mb-1">{lead.name}</div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                      <Mail className="h-3 w-3" /> {lead.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Phone className="h-3 w-3" /> {lead.phone || 'N/A'}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium border border-blue-100">
                      <MapPin className="h-3 w-3" />
                      {lead.countryOfInterest}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-slate-600 line-clamp-2 max-w-xs" title={lead.message}>
                      {lead.message}
                    </p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Calendar className="h-4 w-4" />
                      {format(new Date(lead.createdAt), 'MMM d, yyyy')}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
