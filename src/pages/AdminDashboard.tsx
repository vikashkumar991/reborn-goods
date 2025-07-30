import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AdminSidebar from '../components/admin/AdminSidebar';
import AdminTopNav from '../components/admin/AdminTopNav';
import AdminOverview from '../components/admin/AdminOverview';
import UserManagement from '../components/admin/UserManagement';
import TaskManagement from '../components/admin/TaskManagement';
import ProductManagement from '../components/admin/ProductManagement';
import RewardManagement from '../components/admin/RewardManagement';
import EmotionalLogs from '../components/admin/EmotionalLogs';
import AIInsights from '../components/admin/AIInsights';
import AdminSettings from '../components/admin/AdminSettings';

const AdminDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <AdminOverview />;
      case 'users':
        return <UserManagement />;
      case 'tasks':
        return <TaskManagement />;
      case 'products':
        return <ProductManagement />;
      case 'rewards':
        return <RewardManagement />;
      case 'emotional-logs':
        return <EmotionalLogs />;
      case 'ai-insights':
        return <AIInsights />;
      case 'settings':
        return <AdminSettings />;
      default:
        return <AdminOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fff7] flex">
      <AdminSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <AdminTopNav />
        
        <main className="p-6">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;