import { useState, useEffect } from 'react';
import { Users, FileText, TrendingUp, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ leadsCount: 0, postsCount: 0, visitors: 0, successRate: '0%' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading dashboard...</div>;

  const cards = [
    { title: 'Total Inquiries', value: stats.leadsCount, icon: Users, color: 'bg-blue-500' },
    { title: 'Blog Posts', value: stats.postsCount, icon: FileText, color: 'bg-green-500' },
    { title: 'Monthly Visitors', value: stats.visitors, icon: Activity, color: 'bg-purple-500' },
    { title: 'Visa Success Rate', value: stats.successRate, icon: TrendingUp, color: 'bg-yellow-500' },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-center gap-4">
            <div className={`${card.color} p-4 rounded-lg text-white`}>
              <card.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 mb-1">{card.title}</p>
              <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <p className="text-slate-600 text-sm">No recent activity to display.</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <FileText className="h-5 w-5 text-[#00A8A8] mb-2" />
              <span className="font-medium text-slate-700">Write New Post</span>
            </button>
            <button className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
              <Users className="h-5 w-5 text-[#F4B400] mb-2" />
              <span className="font-medium text-slate-700">View Leads</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
