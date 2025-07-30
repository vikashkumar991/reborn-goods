import React from 'react';
import { motion } from 'framer-motion';
import { 
  HomeIcon, 
  UsersIcon, 
  ClipboardDocumentListIcon,
  CubeIcon,
  GiftIcon,
  HeartIcon,
  CogIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

interface AdminSidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: HomeIcon, emoji: '📊' },
  { id: 'users', label: 'Users', icon: UsersIcon, emoji: '👥' },
  { id: 'tasks', label: 'Tasks', icon: ClipboardDocumentListIcon, emoji: '📋' },
  { id: 'products', label: 'Products', icon: CubeIcon, emoji: '📦' },
  { id: 'rewards', label: 'Rewards', icon: GiftIcon, emoji: '🎁' },
  { id: 'emotional-logs', label: 'Emotional Logs', icon: HeartIcon, emoji: '📈' },
      { id: 'ai-insights', label: 'AI Insights', icon: CogIcon, emoji: '🤖' },
      { id: 'settings', label: 'Settings', icon: CogIcon, emoji: '⚙️' },
];

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeSection,
  setActiveSection,
  collapsed,
  setCollapsed
}) => {
  return (
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0, width: collapsed ? 80 : 256 }}
      transition={{ duration: 0.3 }}
      className="fixed left-0 top-0 h-full bg-white shadow-xl z-30 flex flex-col"
    >
      {/* Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        {!collapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2"
          >
            <div className="text-2xl">🛡️</div>
            <span className="text-xl font-serif font-bold text-[#4CAF50]">ADMIN</span>
          </motion.div>
        )}
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-[#f5fff7] transition-colors duration-200"
        >
          {collapsed ? (
            <ChevronRightIcon className="w-5 h-5 text-[#888888]" />
          ) : (
            <ChevronLeftIcon className="w-5 h-5 text-[#888888]" />
          )}
        </motion.button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            whileHover={{ x: collapsed ? 0 : 5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection(item.id)}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
              activeSection === item.id
                ? 'bg-[#4CAF50] text-white shadow-lg'
                : 'hover:bg-[#f5fff7] text-[#888888] hover:text-[#333333]'
            }`}
          >
            <div className="text-xl flex-shrink-0">
              {activeSection === item.id ? item.emoji : <item.icon className="w-5 h-5" />}
            </div>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-medium truncate"
              >
                {item.label}
              </motion.span>
            )}
          </motion.button>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <motion.button
          whileHover={{ x: collapsed ? 0 : 5 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 p-3 rounded-xl text-red-500 hover:bg-red-50 transition-all duration-200"
        >
                          <ArrowRightIcon className="w-5 h-5 flex-shrink-0" />
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-medium"
            >
              Logout
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;