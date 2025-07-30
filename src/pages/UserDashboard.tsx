import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardSidebar from '../components/dashboard/DashboardSidebar';
import DashboardTopNav from '../components/dashboard/DashboardTopNav';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import TaskManager from '../components/dashboard/TaskManager';
import AIAssistant from '../components/dashboard/AIAssistant';
import UploadProduct from '../components/dashboard/UploadProduct';
import RewardsSection from '../components/dashboard/RewardsSection';
import EmotionalSupport from '../components/dashboard/EmotionalSupport';
import SettingsPanel from '../components/dashboard/SettingsPanel';

const UserDashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'activities':
        return <TaskManager />;
      case 'upload':
        return <UploadProduct />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'rewards':
        return <RewardsSection />;
      case 'support':
        return <EmotionalSupport />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fff7] flex">
      <DashboardSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
        <DashboardTopNav />
        
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

export default UserDashboard;