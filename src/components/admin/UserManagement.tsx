import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, EyeIcon, PencilIcon, TrashIcon, UserIcon } from '@heroicons/react/24/outline';

const UserManagement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Anita Sharma',
      email: 'anita.sharma@example.com',
      status: 'active',
      points: 430,
      lastLogin: '2024-01-15',
      role: 'user',
      avatar: '👩',
      joinDate: '2024-01-01',
      tasksCompleted: 23,
      productsUploaded: 5
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@example.com',
      status: 'active',
      points: 680,
      lastLogin: '2024-01-14',
      role: 'user',
      avatar: '👨',
      joinDate: '2023-12-15',
      tasksCompleted: 45,
      productsUploaded: 8
    },
    {
      id: 3,
      name: 'Maya Patel',
      email: 'maya.patel@example.com',
      status: 'inactive',
      points: 120,
      lastLogin: '2024-01-10',
      role: 'user',
      avatar: '👩',
      joinDate: '2024-01-05',
      tasksCompleted: 12,
      productsUploaded: 2
    },
    {
      id: 4,
      name: 'Suresh Reddy',
      email: 'suresh.reddy@example.com',
      status: 'active',
      points: 890,
      lastLogin: '2024-01-15',
      role: 'admin',
      avatar: '👨',
      joinDate: '2023-11-20',
      tasksCompleted: 67,
      productsUploaded: 12
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || user.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers(prev => 
      prev.includes(userId) 
        ? prev.filter(id => id !== userId)
        : [...prev, userId]
    );
  };

  const selectAllUsers = () => {
    setSelectedUsers(selectedUsers.length === filteredUsers.length ? [] : filteredUsers.map(u => u.id));
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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">User Management</h1>
          <p className="text-[#888888] mt-2">Manage and monitor all platform users</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] transition-colors duration-200"
        >
          <UserIcon className="w-5 h-5" />
          Add User
        </motion.button>
      </motion.div>

      {/* Filters and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          {/* Search */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#888888]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users by name or email..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            
            <button className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200">
              Export CSV
            </button>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedUsers.length > 0 && (
          <div className="mt-4 p-4 bg-[#f5fff7] rounded-lg flex items-center justify-between">
            <span className="text-sm font-medium text-[#333333]">
              {selectedUsers.length} users selected
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-2 bg-[#4CAF50] text-white text-sm rounded-lg hover:bg-[#45a049] transition-colors duration-200">
                Activate
              </button>
              <button className="px-3 py-2 bg-yellow-500 text-white text-sm rounded-lg hover:bg-yellow-600 transition-colors duration-200">
                Deactivate
              </button>
              <button className="px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Send Email
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Users Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#f5fff7]">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                    onChange={selectAllUsers}
                    className="rounded border-gray-300 text-[#4CAF50] focus:ring-[#4CAF50]"
                  />
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">User</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">Points</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">Activity</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">Last Login</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#333333]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user, index) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="hover:bg-[#f5fff7] transition-colors duration-200"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => toggleUserSelection(user.id)}
                      className="rounded border-gray-300 text-[#4CAF50] focus:ring-[#4CAF50]"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#B4E197] rounded-full flex items-center justify-center text-lg">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-[#333333]">{user.name}</p>
                        <p className="text-sm text-[#888888]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {user.status}
                    </span>
                    {user.role === 'admin' && (
                      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        Admin
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold text-[#4CAF50]">{user.points}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="text-[#333333]">{user.tasksCompleted} tasks</p>
                      <p className="text-[#888888]">{user.productsUploaded} products</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#888888]">
                    {user.lastLogin}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-green-500 hover:bg-green-50 rounded-lg transition-colors duration-200"
                      >
                        <PencilIcon className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <p className="text-sm text-[#888888]">
            Showing {filteredUsers.length} of {users.length} users
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-[#f5fff7] transition-colors duration-200">
              Previous
            </button>
            <button className="px-3 py-2 bg-[#4CAF50] text-white rounded-lg text-sm hover:bg-[#45a049] transition-colors duration-200">
              1
            </button>
            <button className="px-3 py-2 border border-gray-200 rounded-lg text-sm hover:bg-[#f5fff7] transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserManagement;