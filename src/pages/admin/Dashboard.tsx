import React from 'react';
import { Users, Calendar, FileText, ArrowUp } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Members',
      value: '245',
      change: '+12%',
      icon: Users,
    },
    {
      title: 'Upcoming Events',
      value: '8',
      change: '+3%',
      icon: Calendar,
    },
    {
      title: 'Resources',
      value: '156',
      change: '+18%',
      icon: FileText,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-[#0B3954]/10 p-3 rounded-lg">
                  <Icon className="h-6 w-6 text-[#0B3954]" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-green-600">
                <ArrowUp className="h-4 w-4 mr-1" />
                {stat.change} from last month
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <div className="mt-4 bg-white shadow rounded-lg">
          <div className="p-6">
            <p className="text-gray-500">No recent activity to display.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;