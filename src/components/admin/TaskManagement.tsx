import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, CheckIcon, XMarkIcon, CogIcon } from '@heroicons/react/24/outline';

const TaskManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    points: '',
    category: 'general'
  });

  const tasks = [
    {
      id: 1,
      title: 'Upload plastic bottle creation',
      description: 'Document your latest upcycling project with photos',
      status: 'pending',
      points: 10,
      category: 'upload',
      aiSuggested: false,
      submittedBy: 'System',
      submissionDate: '2024-01-15',
      assignedUsers: 23
    },
    {
      id: 2,
      title: 'Make tire planter tutorial',
      description: 'Create step-by-step guide for tire to planter conversion',
      status: 'approved',
      points: 25,
      category: 'tutorial',
      aiSuggested: true,
      submittedBy: 'AI System',
      submissionDate: '2024-01-14',
      assignedUsers: 45
    },
    {
      id: 3,
      title: 'Daily mood check-in',
      description: 'Rate your emotional state and get personalized tips',
      status: 'featured',
      points: 5,
      category: 'wellness',
      aiSuggested: true,
      submittedBy: 'AI System',
      submissionDate: '2024-01-13',
      assignedUsers: 156
    },
    {
      id: 4,
      title: 'Share creation story',
      description: 'Tell the community about your latest eco-friendly creation',
      status: 'rejected',
      points: 15,
      category: 'community',
      aiSuggested: false,
      submittedBy: 'Anita Sharma',
      submissionDate: '2024-01-12',
      assignedUsers: 0
    }
  ];

  const aiSuggestions = [
    {
      id: 1,
      title: 'Weekend eco-challenge',
      description: 'Create something amazing from household waste this weekend',
      confidence: 85,
      category: 'challenge'
    },
    {
      id: 2,
      title: 'Cardboard craft workshop',
      description: 'Join virtual workshop on cardboard upcycling techniques',
      confidence: 92,
      category: 'learning'
    }
  ];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'all') return true;
    if (activeTab === 'ai-suggested') return task.aiSuggested;
    return task.status === activeTab;
  });

  const addTask = () => {
    if (newTask.title && newTask.description) {
      console.log('Adding new task:', newTask);
      // Reset form
      setNewTask({ title: '', description: '', points: '', category: 'general' });
    }
  };

  const approveTask = (taskId: number) => {
    console.log('Approving task:', taskId);
  };

  const rejectTask = (taskId: number) => {
    console.log('Rejecting task:', taskId);
  };

  const featureTask = (taskId: number) => {
    console.log('Featuring task:', taskId);
  };

  const tabs = [
    { id: 'pending', label: 'Pending', count: tasks.filter(t => t.status === 'pending').length },
    { id: 'approved', label: 'Approved', count: tasks.filter(t => t.status === 'approved').length },
    { id: 'featured', label: 'Featured', count: tasks.filter(t => t.status === 'featured').length },
    { id: 'ai-suggested', label: 'AI Suggested', count: tasks.filter(t => t.aiSuggested).length },
    { id: 'all', label: 'All Tasks', count: tasks.length }
  ];

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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">Task Management</h1>
          <p className="text-[#888888] mt-2">Manage global tasks and AI suggestions</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] transition-colors duration-200"
        >
          <PlusIcon className="w-5 h-5" />
          Add Global Task
        </motion.button>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Add New Task */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">Create New Task</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Task Title
              </label>
              <input
                type="text"
                value={newTask.title}
                onChange={(e) => setNewTask(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Enter task title..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Description
              </label>
              <textarea
                value={newTask.description}
                onChange={(e) => setNewTask(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Describe the task..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Category
              </label>
              <select
                value={newTask.category}
                onChange={(e) => setNewTask(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              >
                <option value="general">General</option>
                <option value="upload">Upload</option>
                <option value="tutorial">Tutorial</option>
                <option value="wellness">Wellness</option>
                <option value="community">Community</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Reward Points
              </label>
              <input
                type="number"
                value={newTask.points}
                onChange={(e) => setNewTask(prev => ({ ...prev, points: e.target.value }))}
                placeholder="Points to award..."
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={addTask}
              className="w-full py-3 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-colors duration-300"
            >
              Create Task
            </motion.button>
          </div>
        </motion.div>

        {/* Task Management */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'bg-[#4CAF50] text-white'
                      : 'bg-[#f5fff7] text-[#333333] hover:bg-[#B4E197]'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            {/* Task List */}
            <div className="space-y-4">
              {filteredTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="p-4 border border-gray-200 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-[#333333]">{task.title}</h3>
                        {task.aiSuggested && (
                          <span className="px-2 py-1 bg-[#4CAF50] text-white text-xs rounded-full flex items-center gap-1">
                            <CogIcon className="w-3 h-3" />
                            AI
                          </span>
                        )}
                        <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                          task.status === 'approved' ? 'bg-green-100 text-green-600' :
                          task.status === 'pending' ? 'bg-yellow-100 text-yellow-600' :
                          task.status === 'featured' ? 'bg-purple-100 text-purple-600' :
                          'bg-red-100 text-red-600'
                        }`}>
                          {task.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#888888] mb-2">{task.description}</p>
                      <div className="flex items-center gap-4 text-xs text-[#888888]">
                        <span>Points: {task.points}</span>
                        <span>Category: {task.category}</span>
                        <span>Assigned: {task.assignedUsers} users</span>
                        <span>By: {task.submittedBy}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 ml-4">
                      {task.status === 'pending' && (
                        <>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => approveTask(task.id)}
                            className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                          >
                            <CheckIcon className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => rejectTask(task.id)}
                            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                          >
                            <XMarkIcon className="w-4 h-4" />
                          </motion.button>
                        </>
                      )}
                      {task.status === 'approved' && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => featureTask(task.id)}
                          className="px-3 py-1 bg-purple-500 text-white text-xs rounded-full hover:bg-purple-600 transition-colors duration-200"
                        >
                          Feature
                        </motion.button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center gap-2 mb-6">
                              <CogIcon className="w-6 h-6 text-[#4CAF50]" />
              <h2 className="text-xl font-semibold text-[#333333]">AI Task Suggestions</h2>
            </div>

            <div className="space-y-4">
              {aiSuggestions.map((suggestion, index) => (
                <motion.div
                  key={suggestion.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-[#f5fff7] rounded-xl border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-[#333333] mb-2">{suggestion.title}</h3>
                      <p className="text-sm text-[#888888] mb-3">{suggestion.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-[#888888]">
                          Confidence: {suggestion.confidence}%
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                          {suggestion.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-[#4CAF50] text-white text-xs rounded-full hover:bg-[#45a049] transition-colors duration-200"
                      >
                        Approve
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-3 py-1 bg-gray-500 text-white text-xs rounded-full hover:bg-gray-600 transition-colors duration-200"
                      >
                        Dismiss
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;