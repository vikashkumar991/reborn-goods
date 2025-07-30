import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, CogIcon, CloudArrowUpIcon, GiftIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    title: 'Tasks Today',
    value: '8',
    subtitle: '5 Completed',
    icon: ChartBarIcon,
    color: 'from-blue-400 to-blue-600',
    emoji: '📋'
  },
  {
    title: 'AI Interactions',
    value: '12',
    subtitle: 'This Week',
    icon: CogIcon,
    color: 'from-green-400 to-green-600',
    emoji: '🤖'
  },
  {
    title: 'Products Uploaded',
    value: '3',
    subtitle: 'Active Products',
    icon: CloudArrowUpIcon,
    color: 'from-purple-400 to-purple-600',
    emoji: '📦'
  },
  {
    title: 'Rewards Earned',
    value: '₹250',
    subtitle: 'In Coupons',
    icon: GiftIcon,
    color: 'from-yellow-400 to-yellow-600',
    emoji: '🏅'
  }
];

const recentActivities = [
  {
    id: 1,
    action: 'Uploaded new product',
    item: 'Plastic Bottle Lamp',
    time: '2 hours ago',
    status: 'pending',
    emoji: '💡'
  },
  {
    id: 2,
    action: 'Completed task',
    item: 'Take daily mood check-in',
    time: '4 hours ago',
    status: 'completed',
    emoji: '✅'
  },
  {
    id: 3,
    action: 'AI suggestion received',
    item: 'Old tire → Garden planter',
    time: '1 day ago',
    status: 'viewed',
    emoji: '🤖'
  }
];

const DashboardOverview: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-[#B4E197] to-[#4CAF50] rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-serif font-bold">
              Welcome back, Anita! 👋
            </h1>
            <p className="text-lg opacity-90">
              Ready to turn more waste into wonderful creations today?
            </p>
          </div>
          <div className="text-6xl opacity-50">
            ♻️
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}>
                {stat.emoji}
              </div>
              <stat.icon className="w-6 h-6 text-[#888888]" />
            </div>
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-[#333333]">{stat.value}</h3>
              <p className="text-sm font-medium text-[#888888]">{stat.title}</p>
              <p className="text-xs text-[#888888]">{stat.subtitle}</p>
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
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#333333]">Recent Activities</h2>
            <button className="text-[#4CAF50] text-sm hover:text-[#45a049] transition-colors duration-200">
              View All
            </button>
          </div>
          
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#f5fff7] transition-colors duration-200">
                <div className="text-2xl">{activity.emoji}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#333333]">{activity.action}</p>
                  <p className="text-sm text-[#4CAF50]">{activity.item}</p>
                  <p className="text-xs text-[#888888]">{activity.time}</p>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  activity.status === 'completed' 
                    ? 'bg-green-100 text-green-600'
                    : activity.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-600'
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {activity.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">Quick Actions</h2>
          
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl hover:bg-[#B4E197] transition-colors duration-200"
            >
              <div className="text-2xl">📤</div>
              <div className="text-left">
                <p className="font-medium text-[#333333]">Upload New Product</p>
                <p className="text-sm text-[#888888]">Turn waste into sellable items</p>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl hover:bg-[#B4E197] transition-colors duration-200"
            >
              <div className="text-2xl">🤖</div>
              <div className="text-left">
                <p className="font-medium text-[#333333]">Ask AI Assistant</p>
                <p className="text-sm text-[#888888]">Get creative upcycling ideas</p>
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl hover:bg-[#B4E197] transition-colors duration-200"
            >
              <div className="text-2xl">😊</div>
              <div className="text-left">
                <p className="font-medium text-[#333333]">Mood Check-in</p>
                <p className="text-sm text-[#888888]">Track your emotional wellbeing</p>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardOverview;