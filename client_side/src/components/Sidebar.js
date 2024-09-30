import React, { useEffect, useState } from 'react';
import { Home, Users, Briefcase, Calendar,Package, AlertTriangle, Shield , FilePlus, FileText, CheckSquare } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import '@fontsource/montserrat';

const Sidebar = () => {
  const [role, setRole] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Fetch the role from localStorage
    const userRole = localStorage.getItem('role');
    setRole(userRole);
  }, []);

  const adminMenu = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Schedule', icon: Calendar, path: '/dashboard/schedule' },
    { name: 'Create Alert', icon: AlertTriangle, path: '/dashboard/create-alert' },
    { name: 'Safety Protocols', icon: Shield, path: '/dashboard/safety-protocols' },
    { name: 'Report Incident', icon: FilePlus, path: '/dashboard/report-incident' },
    { name: 'Incident Management', icon: FileText, path: '/dashboard/incident-management' },
  ];

  const teacherMenu = [
    { name: 'Dashboard', icon: Home, path: '/dashboard/teacher' },
    { name: 'Attendance', icon: CheckSquare, path: '/dashboard/attendance' },
    { name: 'Resources', icon: Package, path: '/dashboard/resources' },
    { name: 'Create Alert', icon: AlertTriangle, path: '/dashboard/create-alert' },
    { name: 'Safety Protocols', icon: Shield, path: '/dashboard/safety-protocols' },
    { name: 'Report Incident', icon: FilePlus, path: '/dashboard/report-incident' },
    // Add more teacher-specific menu items here
  ];

  const studentMenu = [
    { name: 'Dashboard', icon: Home, path: '/dashboard/students' },
    { name: 'Profile', icon: Users, path: '/profile' },
    { name: 'Query', icon: Calendar, path: '/dashboard/query' },
    { name: 'Companies', icon: Briefcase, path: '/dashboard/companies' },
    { name: 'Safety Protocols', icon: Shield, path: '/dashboard/safety-protocols' },
    { name: 'Report Incident', icon: FilePlus, path: '/dashboard/report-incident' },
  ];

  const MenuList =
    role === 'admin' ? adminMenu :
    role === 'teacher' ? teacherMenu :
    studentMenu;

  return (
    <div className="fixed top-0 left-0 h-screen w-80 p-5 bg-[#E5E7EB] font-montserrat text-[#111827]">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">NSUT</h1>
        <h2 className="text-sm font-bold">Dwarka, New Delhi</h2>
      </div>
      <hr className="my-6 border border-[#D1D5DB]" />
      <div className="mt-3">
        {MenuList.map((menu, index) => (
          <Link to={menu.path} key={index}>
            <div
              className={`flex gap-2 mb-2 p-3 hover:bg-[#9CA3AF] hover:text-white rounded-lg cursor-pointer items-center ${
                location.pathname === menu.path ? 'bg-[#D1D5DB] text-[#111827]' : ''
              }`}
            >
              <menu.icon className="h-6 w-6 text-[#111827]" />
              <h2 className="text-lg font-bold">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
