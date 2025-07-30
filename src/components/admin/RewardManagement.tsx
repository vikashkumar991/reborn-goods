import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, PencilIcon, TrashIcon, EyeIcon } from '@heroicons/react/24/outline';

const RewardManagement: React.FC = () => {
  const [showAddReward, setShowAddReward] = useState(false);
  const [newReward, setNewReward] = useState({
    name: '',
    description: '',
    points: '',
    type: 'coupon',
    brand: '',
    stock: '',
    expiry: ''
  });

  const rewards = [
    {
      id: 1,
      name: 'Nykaa Beauty Voucher',
      description: '₹300 OFF on beauty products',
      points: 200,
      type: 'coupon',
      brand: 'Nykaa',
      stock: 50,
      claimed: 12,
      status: 'active',
      expiry: '2024-06-30',
      emoji: '💄'
    },
    {
      id: 2,
      name: 'BookMyShow Tickets',
      description: '2 free movie tickets',
      points: 150,
      type: 'voucher',
      brand: 'BookMyShow',
      stock: 100,
      claimed: 45,
      status: 'active',
      expiry: '2024-12-31',
      emoji: '🎬'
    },
    {
      id: 3,
      name: 'Amazon Gift Card',
      description: '₹500 Amazon shopping voucher',
      points: 300,
      type: 'gift_card',
      brand: 'Amazon',
      stock: 25,
      claimed: 8,
      status: 'active',
      expiry: '2024-09-30',
      emoji: '🛒'
    },
    {
      id: 4,
      name: 'Eco-Friendly Kit',
      description: 'Complete upcycling craft supplies',
      points: 400,
      type: 'physical',
      brand: 'RE:BORN',
      stock: 0,
      claimed: 20,
      status: 'out_of_stock',
      expiry: '2024-08-31',
      emoji: '🌱'
    },
    {
      id: 5,
      name: 'Premium Membership',
      description: '3 months premium features',
      points: 500,
      type: 'digital',
      brand: 'RE:BORN',
      stock: 999,
      claimed: 67,
      status: 'active',
      expiry: '2024-12-31',
      emoji: '⭐'
    }
  ];

  const partners = [
    { id: 1, name: 'Nykaa', verified: true },
    { id: 2, name: 'BookMyShow', verified: true },
    { id: 3, name: 'Amazon', verified: true },
    { id: 4, name: 'RE:BORN', verified: true },
    { id: 5, name: 'Swiggy', verified: false }
  ];

  const addReward = () => {
    if (newReward.name && newReward.points) {
      console.log('Adding new reward:', newReward);
      setNewReward({
        name: '',
        description: '',
        points: '',
        type: 'coupon',
        brand: '',
        stock: '',
        expiry: ''
      });
      setShowAddReward(false);
    }
  };

  const toggleRewardStatus = (rewardId: number) => {
    console.log('Toggling reward status:', rewardId);
  };

  const restockReward = (rewardId: number, quantity: number) => {
    console.log('Restocking reward:', rewardId, 'Quantity:', quantity);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-serif font-bold text-[#333333]">Reward Management</h1>
          <p className="text-[#888888] mt-2">Manage rewards and partner brands</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAddReward(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] transition-colors duration-200"
        >
          <PlusIcon className="w-5 h-5" />
          Add Reward
        </motion.button>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add/Edit Reward Form */}
        {showAddReward && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#333333]">Add New Reward</h2>
              <button
                onClick={() => setShowAddReward(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Reward Name
                </label>
                <input
                  type="text"
                  value={newReward.name}
                  onChange={(e) => setNewReward(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter reward name..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Description
                </label>
                <textarea
                  value={newReward.description}
                  onChange={(e) => setNewReward(prev => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe the reward..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Points Required
                </label>
                <input
                  type="number"
                  value={newReward.points}
                  onChange={(e) => setNewReward(prev => ({ ...prev, points: e.target.value }))}
                  placeholder="Points needed..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Type
                </label>
                <select
                  value={newReward.type}
                  onChange={(e) =>  setNewReward(prev => ({ ...prev, type: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="coupon">Coupon</option>
                  <option value="voucher">Voucher</option>
                  <option value="gift_card">Gift Card</option>
                  <option value="physical">Physical Product</option>
                  <option value="digital">Digital Good</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Partner Brand
                </label>
                <select
                  value={newReward.brand}
                  onChange={(e) => setNewReward(prev => ({ ...prev, brand: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="">Select brand...</option>
                  {partners.map(partner => (
                    <option key={partner.id} value={partner.name}>
                      {partner.name} {partner.verified ? '✓' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    value={newReward.stock}
                    onChange={(e) => setNewReward(prev => ({ ...prev, stock: e.target.value }))}
                    placeholder="Stock..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333333] mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={newReward.expiry}
                    onChange={(e) => setNewReward(prev => ({ ...prev, expiry: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={addReward}
                className="w-full py-3 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-colors duration-300"
              >
                Add Reward
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Rewards List */}
        <div className={`${showAddReward ? 'lg:col-span-2' : 'lg:col-span-3'} space-y-6`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <h2 className="text-xl font-semibold text-[#333333] mb-6">Active Rewards</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-xl p-4 hover:bg-[#f5fff7] transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{reward.emoji}</div>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      reward.status === 'active' ? 'bg-green-100 text-green-600' :
                      reward.status === 'out_of_stock' ? 'bg-red-100 text-red-600' :
                      'bg-gray-100 text-gray-600'
                    }`}>
                      {reward.status.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h3 className="font-semibold text-[#333333]">{reward.name}</h3>
                    <p className="text-sm text-[#888888]">{reward.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#4CAF50] font-semibold">{reward.points} pts</span>
                      <span className="text-[#888888]">by {reward.brand}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Stock:</span>
                      <span className={`font-medium ${reward.stock === 0 ? 'text-red-500' : 'text-[#333333]'}`}>
                        {reward.stock}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Claimed:</span>
                      <span className="font-medium text-[#333333]">{reward.claimed}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#888888]">Expires:</span>
                      <span className="font-medium text-[#333333]">{reward.expiry}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      <EyeIcon className="w-4 h-4 mx-auto" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-3 py-2 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors duration-200"
                    >
                      <PencilIcon className="w-4 h-4 mx-auto" />
                    </motion.button>
                    {reward.stock === 0 && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => restockReward(reward.id, 50)}
                        className="flex-1 px-3 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition-colors duration-200"
                      >
                        Restock
                      </motion.button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partner Brands */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <h2 className="text-xl font-semibold text-[#333333] mb-6">Partner Brands</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#B4E197] rounded-full flex items-center justify-center text-lg">
                      🏢
                    </div>
                    <div>
                      <p className="font-medium text-[#333333]">{partner.name}</p>
                      <p className={`text-sm ${partner.verified ? 'text-green-600' : 'text-yellow-600'}`}>
                        {partner.verified ? 'Verified' : 'Pending'}
                      </p>
                    </div>
                  </div>
                  {partner.verified && (
                    <div className="text-green-500 text-xl">✓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RewardManagement;