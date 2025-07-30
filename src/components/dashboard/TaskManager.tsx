import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PlusIcon, CheckIcon, CalendarIcon } from '@heroicons/react/24/outline';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Upload plastic bottle creation',
      description: 'Document your latest upcycling project',
      status: 'today',
      points: 10,
      aiSuggested: false,
      deadline: '2024-01-15'
    },
    {
      id: 2,
      title: 'Take daily mood check-in',
      description: 'Rate your emotional state and get personalized tips',
      status: 'today',
      points: 5,
      aiSuggested: true,
      deadline: '2024-01-15'
    },
    {
      id: 3,
      title: 'Complete cardboard craft tutorial',
      description: 'Follow the step-by-step guide for making storage boxes',
      status: 'inprogress',
      points: 15,
      aiSuggested: false,
      deadline: '2024-01-16'
    },
    {
      id: 4,
      title: 'Share creation on community',
      description: 'Post your tire planter project to inspire others',
      status: 'completed',
      points: 8,
      aiSuggested: false,
      deadline: '2024-01-14'
    }
  ]);

  const [newTask, setNewTask] = useState('');

  const moveTask = (taskId: number, newStatus: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks(prev => [...prev, {
        id: Date.now(),
        title: newTask,
        description: 'Custom task',
        status: 'today',
        points: 5,
        aiSuggested: false,
        deadline: new Date(Date.now() + 86400000).toISOString().split('T')[0]
      }]);
      setNewTask('');
    }
  };

  const taskCategories = [
    { id: 'today', title: 'Today', color: 'bg-blue-100 text-blue-600' },
    { id: 'inprogress', title: 'In Progress', color: 'bg-yellow-100 text-yellow-600' },
    { id: 'completed', title: 'Completed', color: 'bg-green-100 text-green-600' }
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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">My Activities</h1>
          <p className="text-[#888888] mt-2">Manage your eco-journey tasks and goals</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] transition-colors duration-200"
        >
          <PlusIcon className="w-5 h-5" />
          Suggest Task (AI)
        </motion.button>
      </motion.div>

      {/* Add New Task */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
      >
        <div className="flex gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={addTask}
            className="px-6 py-3 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] transition-colors duration-200"
          >
            Add Task
          </motion.button>
        </div>
      </motion.div>

      {/* Kanban Board */}
      <div className="grid lg:grid-cols-3 gap-6">
        {taskCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-[#333333]">{category.title}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                {tasks.filter(task => task.status === category.id).length}
              </span>
            </div>

            <div className="space-y-4">
              {tasks
                .filter(task => task.status === category.id)
                .map((task, taskIndex) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: taskIndex * 0.1 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="bg-[#f5fff7] rounded-xl p-4 border border-gray-100 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-[#333333] text-sm">
                        {task.title}
                      </h3>
                      {task.aiSuggested && (
                        <span className="px-2 py-1 bg-[#4CAF50] text-white text-xs rounded-full">
                          AI
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-[#888888] mb-3">
                      {task.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-[#888888]">
                        <CalendarIcon className="w-4 h-4" />
                        {task.deadline}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[#4CAF50] font-medium">
                          +{task.points} XP
                        </span>
                        {task.status !== 'completed' && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => moveTask(task.id, task.status === 'today' ? 'inprogress' : 'completed')}
                            className="w-6 h-6 bg-[#4CAF50] text-white rounded-full flex items-center justify-center"
                          >
                            <CheckIcon className="w-3 h-3" />
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;