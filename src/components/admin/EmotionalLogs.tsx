import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const EmotionalLogs: React.FC = () => {
  const [timeFilter, setTimeFilter] = useState('week');
  const [demographicFilter, setDemographicFilter] = useState('all');

  const emotionalData = {
    overview: {
      totalCheckins: 1247,
      averageMood: 3.2,
      trendDirection: 'up',
      trendPercentage: 8
    },
    distribution: [
      { mood: 'Happy', emoji: '😊', count: 456, percentage: 36.6, color: 'bg-green-500' },
      { mood: 'Neutral', emoji: '😐', count: 398, percentage: 31.9, color: 'bg-gray-500' },
      { mood: 'Sad', emoji: '😢', count: 234, percentage: 18.8, color: 'bg-blue-500' },
      { mood: 'Anxious', emoji: '😰', count: 89, percentage: 7.1, color: 'bg-yellow-500' },
      { mood: 'Angry', emoji: '😠', count: 45, percentage: 3.6, color: 'bg-red-500' },
      { mood: 'Tired', emoji: '😴', count: 25, percentage: 2.0, color: 'bg-purple-500' }
    ],
    trends: [
      { date: '2024-01-09', happy: 45, neutral: 32, sad: 18, anxious: 8, angry: 3, tired: 2 },
      { date: '2024-01-10', happy: 48, neutral: 30, sad: 16, anxious: 7, angry: 4, tired: 3 },
      { date: '2024-01-11', happy: 52, neutral: 28, sad: 15, anxious: 6, angry: 2, tired: 1 },
      { date: '2024-01-12', happy: 49, neutral: 31, sad: 17, anxious: 9, angry: 3, tired: 2 },
      { date: '2024-01-13', happy: 55, neutral: 27, sad: 14, anxious: 5, angry: 2, tired: 1 },
      { date: '2024-01-14', happy: 58, neutral: 25, sad: 12, anxious: 6, angry: 3, tired: 2 },
      { date: '2024-01-15', happy: 61, neutral: 24, sad: 11, anxious: 4, angry: 2, tired: 1 }
    ]
  };

  const recentEntries = [
    {
      id: 1,
      user: 'Anita Sharma',
      mood: '😊',
      moodLabel: 'Happy',
      notes: 'Completed a great upcycling project today! Feeling accomplished.',
      timestamp: '2024-01-15 14:30',
      aiResponse: 'Wonderful to hear! Your creativity is inspiring others in the community.'
    },
    {
      id: 2,
      user: 'Rajesh Kumar',
      mood: '😐',
      moodLabel: 'Neutral',
      notes: 'Regular day, nothing special. Working on my cardboard organizer.',
      timestamp: '2024-01-15 12:15',
      aiResponse: 'Every step forward counts! Your cardboard project will help reduce waste.'
    },
    {
      id: 3,
      user: 'Maya Patel',
      mood: '😢',
      moodLabel: 'Sad',
      notes: 'Feeling overwhelmed with work and personal projects.',
      timestamp: '2024-01-15 10:45',
      aiResponse: 'It\'s okay to feel overwhelmed. Take small steps and remember your impact matters.'
    },
    {
      id: 4,
      user: 'Priya Singh',
      mood: '😰',
      moodLabel: 'Anxious',
      notes: 'Worried about whether my creations are good enough for the community.',
      timestamp: '2024-01-15 09:20',
      aiResponse: 'Your unique perspective adds value! Every creation teaches someone something new.'
    }
  ];

  const insights = [
    {
      title: 'Positive Trend',
      description: 'Happy mood reports increased by 15% this week',
      type: 'positive',
      icon: '📈'
    },
    {
      title: 'Peak Activity',
      description: 'Most check-ins happen between 2-4 PM',
      type: 'info',
      icon: '⏰'
    },
    {
      title: 'Support Needed',
      description: '12% of users reported feeling anxious or sad',
      type: 'warning',
      icon: '🤝'
    },
    {
      title: 'Community Impact',
      description: 'Users who share creations report 23% higher happiness',
      type: 'positive',
      icon: '🌟'
    }
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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">Emotional Logs</h1>
          <p className="text-[#888888] mt-2">Monitor community emotional wellbeing and trends</p>
        </div>
        
        <div className="flex items-center gap-4">
          <select
            value={timeFilter}
            onChange={(e) => setTimeFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
          >
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
          </select>
          
          <select
            value={demographicFilter}
            onChange={(e) => setDemographicFilter(e.target.value)}
            className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
          >
            <option value="all">All Users</option>
            <option value="age_18_25">Age 18-25</option>
            <option value="age_26_35">Age 26-35</option>
            <option value="age_36_plus">Age 36+</option>
          </select>
        </div>
      </motion.div>

      {/* Overview Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">📊</div>
            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
              +{emotionalData.overview.trendPercentage}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{emotionalData.overview.totalCheckins}</h3>
          <p className="text-sm text-[#888888]">Total Check-ins</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">😊</div>
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
              Avg
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{emotionalData.overview.averageMood}/5</h3>
          <p className="text-sm text-[#888888]">Average Mood Score</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">📈</div>
            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
              Trending
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#4CAF50]">+{emotionalData.overview.trendPercentage}%</h3>
          <p className="text-sm text-[#888888]">Positive Trend</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-3xl">🤝</div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">
              Support
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">12%</h3>
          <p className="text-sm text-[#888888]">Need Support</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mood Distribution */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">Mood Distribution</h2>
          
          <div className="space-y-4">
            {emotionalData.distribution.map((mood, index) => (
              <motion.div
                key={mood.mood}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="text-2xl">{mood.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[#333333]">{mood.mood}</span>
                    <span className="text-sm text-[#888888]">{mood.count} ({mood.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${mood.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-2 rounded-full ${mood.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI Insights */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">AI Insights</h2>
          
          <div className="space-y-4">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-4 rounded-xl border ${
                  insight.type === 'positive' ? 'bg-green-50 border-green-200' :
                  insight.type === 'warning' ? 'bg-yellow-50 border-yellow-200' :
                  'bg-blue-50 border-blue-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{insight.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#333333] mb-1">{insight.title}</h3>
                    <p className="text-sm text-[#888888]">{insight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Recent Entries */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <h2 className="text-xl font-semibold text-[#333333] mb-6">Recent Mood Entries</h2>
        
        <div className="space-y-4">
          {recentEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-4 border border-gray-200 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{entry.mood}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[#333333]">{entry.user}</span>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        entry.moodLabel === 'Happy' ? 'bg-green-100 text-green-600' :
                        entry.moodLabel === 'Neutral' ? 'bg-gray-100 text-gray-600' :
                        entry.moodLabel === 'Sad' ? 'bg-blue-100 text-blue-600' :
                        entry.moodLabel === 'Anxious' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {entry.moodLabel}
                      </span>
                    </div>
                    <span className="text-sm text-[#888888]">{entry.timestamp}</span>
                  </div>
                  
                  <p className="text-sm text-[#333333] mb-3 italic">"{entry.notes}"</p>
                  
                  <div className="p-3 bg-[#f5fff7] rounded-lg border-l-4 border-[#4CAF50]">
                    <p className="text-sm text-[#333333]">
                      <span className="font-medium text-[#4CAF50]">AI Response:</span> {entry.aiResponse}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="px-6 py-2 text-[#4CAF50] text-sm font-medium hover:text-[#45a049] transition-colors duration-200">
            View All Entries
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default EmotionalLogs;