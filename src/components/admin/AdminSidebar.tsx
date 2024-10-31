import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, FileText, Users, Settings, Edit } from 'lucide-react';

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, name: 'Dashboard', path: '/admin/dashboard' },
    { icon: Edit, name: 'Content', path: '/admin/content' },
    { icon: Calendar, name: 'Events', path: '/admin/events' },
    { icon: FileText, name: 'Resources', path: '/admin/resources' },
    { icon: Users, name: 'Users', path: '/admin/users' },
    { icon: Settings, name: 'Settings', path: '/admin/settings' },
  ];

  return (
    <div className="bg-[#0B3954] text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link to="/admin/dashboard" className="flex items-center space-x-2 px-4">
        <LayoutDashboard className="h-8 w-8" />
        <span className="text-2xl font-semibold">Admin</span>
      </Link>

      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                location.pathname === item.path
                  ? 'bg-white/10 text-white'
                  : 'text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default AdminSidebar;