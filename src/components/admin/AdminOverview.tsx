import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, ClipboardDocumentListIcon, CubeIcon, HeartIcon, ArrowTrendingUpIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const AdminOverview: React.FC = () => {
  const stats = [
    {
      title: 'Total Active Users',
      value: '2,547',
      change: '+12%',
      changeType: 'positive',
      icon: UsersIcon,
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Tasks Completed Today',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: ClipboardDocumentListIcon,
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Products Pending Approval',
      value: '47',
      change: '-5%',
      changeType: 'negative',
      icon: CubeIcon,
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Mood Check-ins Today',
      value: '892',
      change: '+15%',
      changeType: 'positive',
      icon: HeartIcon,
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Rewards Redeemed',
      value: '156',
      change: '+22%',
      changeType: 'positive',
      icon: ArrowTrendingUpIcon,
      color: 'from-pink-400 to-pink-600'
    },
    {
      title: 'System Health',
      value: '99.9%',
      change: 'Stable',
      changeType: 'stable',
      icon: ExclamationTriangleIcon,
      color: 'from-indigo-400 to-indigo-600'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'user_join',
      message: 'New user "Maya Patel" joined the platform',
      time: '5 minutes ago',
      emoji: '👋'
    },
    {
      id: 2,
      type: 'product_upload',
      message: 'Product "Tire Garden Planter" submitted for approval',
      time: '12 minutes ago',
      emoji: '📦'
    },
    {
      id: 3,
      type: 'task_completed',
      message: '45 users completed their daily mood check-in',
      time: '30 minutes ago',
      emoji: '✅'
    },
    {
      id: 4,
      type: 'reward_redeemed',
      message: 'BookMyShow voucher redeemed by Anita Sharma',
      time: '1 hour ago',
      emoji: '🎁'
    },
    {
      id: 5,
      type: 'ai_interaction',
      message: 'AI provided 78 creative suggestions today',
      time: '2 hours ago',
      emoji: '🤖'
    }
  ];

  const systemAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Product approval queue has 47 pending items',
      action: 'Review Products'
    },
    {
      id: 2,
      type: 'info',
      message: 'Weekly backup completed successfully',
      action: 'View Details'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] rounded-2xl p-8 text-white"
      >
        <h1 className="text-3xl font-serif font-bold mb-2">
          Admin Dashboard 🛡️
        </h1>
        <p className="text-lg opacity-90">
          Monitor and manage the RE:BORN ecosystem
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                stat.changeType === 'positive' ? 'bg-green-100 text-green-600' :
                stat.changeType === 'negative' ? 'bg-red-100 text-red-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-[#333333]">{stat.value}</h3>
              <p className="text-sm font-medium text-[#888888]">{stat.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activities */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">Recent Activities</h2>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#f5fff7] transition-colors duration-200">
                <div className="text-2xl">{activity.emoji}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#333333] mb-1">{activity.message}</p>
                  <p className="text-xs text-[#888888]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-4 py-2 text-[#4CAF50] text-sm font-medium hover:text-[#45a049] transition-colors duration-200">
            View All Activities
          </button>
        </motion.div>

        {/* System Alerts & Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          {/* System Alerts */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-[#333333] mb-6">System Alerts</h2>
            
            <div className="space-y-3">
              {systemAlerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border ${
                  alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <p className="text-sm font-medium text-[#333333]">{alert.message}</p>
                    </div>
                    <button className={`px-3 py-1 text-xs rounded-full font-medium transition-colors duration-200 ${
                      alert.type === 'warning' ? 'bg-yellow-200 text-yellow-700 hover:bg-yellow-300' : 'bg-blue-200 text-blue-700 hover:bg-blue-300'
                    }`}>
                      {alert.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-[#333333] mb-6">Quick Actions</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '👥', label: 'Manage Users', color: 'bg-blue-500' },
                { icon: '📦', label: 'Review Products', color: 'bg-green-500' },
                { icon: '📊', label: 'View Analytics', color: 'bg-purple-500' },
                { icon: '🎁', label: 'Add Rewards', color: 'bg-pink-500' }
              ].map((action, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 ${action.color} text-white rounded-xl hover:opacity-90 transition-opacity duration-200`}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <div className="text-sm font-medium">{action.label}</div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminOverview;