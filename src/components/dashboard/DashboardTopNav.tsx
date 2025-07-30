import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  BellIcon, 
  UserCircleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const DashboardTopNav: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [notifications] = useState(3);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#888888]" />
            <input
              type="text"
              placeholder="Search products, tutorials, or creators..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
          >
            <BellIcon className="w-6 h-6 text-[#888888]" />
            {notifications > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center"
              >
                {notifications}
              </motion.div>
            )}
          </motion.button>

          {/* User Menu */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
            >
              <div className="w-8 h-8 bg-[#B4E197] rounded-full flex items-center justify-center">
                <span className="text-lg">👩</span>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-[#333333]">Anita Sharma</div>
                <div className="text-xs text-[#888888]">Eco Creator</div>
              </div>
              <ChevronDownIcon className="w-4 h-4 text-[#888888]" />
            </motion.button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50"
              >
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-[#f5fff7] transition-colors duration-200">
                  View Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-[#333333] hover:bg-[#f5fff7] transition-colors duration-200">
                  Help Center
                </a>
                <hr className="my-2 border-gray-100" />
                <a href="#" className="block px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors duration-200">
                  Logout
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardTopNav;