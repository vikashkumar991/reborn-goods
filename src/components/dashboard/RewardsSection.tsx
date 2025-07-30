import React from 'react';
import { motion } from 'framer-motion';
import { GiftIcon, StarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const RewardsSection: React.FC = () => {
  const currentPoints = 430;
  const nextRewardAt = 500;
  const progress = (currentPoints / nextRewardAt) * 100;

  const availableRewards = [
    {
      id: 1,
      name: 'Nykaa Beauty Voucher',
      points: 200,
      image: '💄',
      brand: 'Nykaa',
      discount: '₹300 OFF'
    },
    {
      id: 2,
      name: 'BookMyShow Tickets',
      points: 150,
      image: '🎬',
      brand: 'BookMyShow',
      discount: '2 Free Tickets'
    },
    {
      id: 3,
      name: 'Amazon Gift Card',
      points: 300,
      image: '🛒',
      brand: 'Amazon',
      discount: '₹500 Voucher'
    },
    {
      id: 4,
      name: 'Eco-Friendly Kit',
      points: 400,
      image: '🌱',
      brand: 'RE:BORN',
      discount: 'Craft Supplies'
    },
    {
      id: 5,
      name: 'Swiggy Food Credits',
      points: 250,
      image: '🍕',
      brand: 'Swiggy',
      discount: '₹400 OFF'
    },
    {
      id: 6,
      name: 'Premium Membership',
      points: 500,
      image: '⭐',
      brand: 'RE:BORN',
      discount: '3 Months Free'
    }
  ];

  const rewardHistory = [
    {
      id: 1,
      name: 'BookMyShow Tickets',
      date: '2024-01-10',
      points: 150,
      status: 'redeemed'
    },
    {
      id: 2,
      name: 'Amazon Gift Card',
      date: '2024-01-05',
      points: 300,
      status: 'redeemed'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Singh', points: 1250, avatar: '👩' },
    { rank: 2, name: 'Rajesh Kumar', points: 980, avatar: '👨' },
    { rank: 3, name: 'Anita Sharma', points: 430, avatar: '👩', isCurrentUser: true },
    { rank: 4, name: 'Maya Patel', points: 380, avatar: '👩' },
    { rank: 5, name: 'Suresh Reddy', points: 320, avatar: '👨' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-serif font-bold text-[#333333] mb-2">
          🏅 Your Rewards
        </h1>
        <p className="text-[#888888]">
          Earn points by completing tasks and redeem amazing rewards
        </p>
      </motion.div>

      {/* Current Points & Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-gradient-to-r from-[#4CAF50] to-[#45a049] rounded-2xl p-8 text-white"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold">{currentPoints} Points</h2>
            <p className="opacity-90">Keep going! You're doing great!</p>
          </div>
          <div className="text-6xl opacity-50">
            🏆
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm opacity-90">
            <span>Progress to next reward</span>
            <span>{nextRewardAt - currentPoints} points to go</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-white h-3 rounded-full"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Available Rewards */}
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <h2 className="text-xl font-semibold text-[#333333] mb-6">Available Rewards</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {availableRewards.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-[#f5fff7] rounded-xl p-4 border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{reward.image}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#333333] mb-1">
                        {reward.name}
                      </h3>
                      <p className="text-sm text-[#4CAF50] font-medium mb-2">
                        {reward.discount}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#888888]">
                          by {reward.brand}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#4CAF50]">
                            {reward.points} pts
                          </span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            disabled={currentPoints < reward.points}
                            className={`px-3 py-1 text-xs rounded-full font-medium transition-colors duration-200 ${
                              currentPoints >= reward.points
                                ? 'bg-[#4CAF50] text-white hover:bg-[#45a049]'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {currentPoints >= reward.points ? 'Redeem' : 'Need More'}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reward History */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <h2 className="text-xl font-semibold text-[#333333] mb-6">Reward History</h2>
            
            <div className="space-y-3">
              {rewardHistory.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between p-3 bg-[#f5fff7] rounded-lg">
                  <div>
                    <p className="font-medium text-[#333333]">{reward.name}</p>
                    <p className="text-sm text-[#888888]">{reward.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-[#4CAF50]">-{reward.points} pts</p>
                    <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full">
                      Redeemed
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Leaderboard */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <AcademicCapIcon className="w-6 h-6 text-[#4CAF50]" />
            <h2 className="text-xl font-semibold text-[#333333]">Leaderboard</h2>
          </div>
          
          <div className="space-y-3">
            {leaderboard.map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-200 ${
                  user.isCurrentUser ? 'bg-[#4CAF50] text-white' : 'bg-[#f5fff7]'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  user.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                  user.rank === 2 ? 'bg-gray-300 text-gray-700' :
                  user.rank === 3 ? 'bg-amber-600 text-white' :
                  user.isCurrentUser ? 'bg-white text-[#4CAF50]' : 'bg-[#B4E197] text-[#333333]'
                }`}>
                  {user.rank}
                </div>
                <div className="w-8 h-8 bg-[#B4E197] rounded-full flex items-center justify-center">
                  {user.avatar}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${user.isCurrentUser ? 'text-white' : 'text-[#333333]'}`}>
                    {user.name}
                  </p>
                  <p className={`text-sm ${user.isCurrentUser ? 'text-white/80' : 'text-[#888888]'}`}>
                    {user.points} points
                  </p>
                </div>
                {user.rank <= 3 && (
                  <div className="text-xl">
                    {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 p-3 bg-[#f5fff7] rounded-lg text-center">
            <p className="text-sm text-[#888888]">
              Complete more tasks to climb the leaderboard! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RewardsSection;