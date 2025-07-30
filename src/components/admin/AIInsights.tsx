import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CogIcon, ChartBarIcon, SparklesIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const AIInsights: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');

  const aiMetrics = {
    totalInteractions: 3247,
    successRate: 94.2,
    averageResponseTime: 1.3,
    userSatisfaction: 4.6
  };

  const taskSuggestions = [
    {
      id: 1,
      suggestion: 'Weekend eco-challenge: Create something from kitchen waste',
      confidence: 92,
      category: 'Challenge',
      userFeedback: 'positive',
      adoptionRate: 78,
      impact: 'High engagement, 156 users participated'
    },
    {
      id: 2,
      suggestion: 'Daily mood check-in with personalized tips',
      confidence: 88,
      category: 'Wellness',
      userFeedback: 'positive',
      adoptionRate: 85,
      impact: 'Improved user retention by 23%'
    },
    {
      id: 3,
      suggestion: 'Cardboard craft workshop for beginners',
      confidence: 76,
      category: 'Learning',
      userFeedback: 'mixed',
      adoptionRate: 45,
      impact: 'Moderate engagement, needs refinement'
    },
    {
      id: 4,
      suggestion: 'Share your creation story challenge',
      confidence: 84,
      category: 'Community',
      userFeedback: 'positive',
      adoptionRate: 67,
      impact: 'Increased community interaction by 34%'
    }
  ];

  const contentRecommendations = [
    {
      id: 1,
      type: 'Tutorial',
      title: 'Plastic bottle to bird feeder transformation',
      reason: 'High search volume for bird-related projects',
      priority: 'High',
      estimatedImpact: '200+ users interested'
    },
    {
      id: 2,
      type: 'Motivational',
      title: 'Overcoming creative blocks in upcycling',
      reason: 'Users reporting lack of inspiration',
      priority: 'Medium',
      estimatedImpact: 'Address 15% of support requests'
    },
    {
      id: 3,
      type: 'Educational',
      title: 'Environmental impact calculator for projects',
      reason: 'Users want to see their eco-contribution',
      priority: 'High',
      estimatedImpact: 'Increase task completion by 25%'
    }
  ];

  const userBehaviorInsights = [
    {
      insight: 'Peak Activity Hours',
      description: 'Users are most active between 2-4 PM and 7-9 PM',
      recommendation: 'Schedule AI suggestions and notifications during these times',
      impact: 'Potential 30% increase in engagement'
    },
    {
      insight: 'Emotional Patterns',
      description: 'Users report higher happiness after completing creative tasks',
      recommendation: 'Prioritize creative challenges over administrative tasks',
      impact: 'Improved user satisfaction and retention'
    },
    {
      insight: 'Material Preferences',
      description: 'Plastic and cardboard projects have highest completion rates',
      recommendation: 'Focus AI suggestions on these materials',
      impact: 'Higher task completion rates'
    },
    {
      insight: 'Support Requests',
      description: '23% of users need help with project pricing',
      recommendation: 'Enhance AI pricing guidance feature',
      impact: 'Reduce support tickets by 40%'
    }
  ];

  const promptTuning = [
    {
      category: 'Task Generation',
      currentPrompt: 'Generate creative upcycling tasks based on user materials',
      performance: 87,
      suggestions: ['Add difficulty levels', 'Include time estimates', 'Consider user skill level']
    },
    {
      category: 'Emotional Support',
      currentPrompt: 'Provide encouraging responses to user mood check-ins',
      performance: 92,
      suggestions: ['Personalize based on user history', 'Add actionable advice']
    },
    {
      category: 'Product Recommendations',
      currentPrompt: 'Suggest products based on available materials',
      performance: 78,
      suggestions: ['Include market demand data', 'Add profitability estimates']
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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">AI Insights & Analytics</h1>
          <p className="text-[#888888] mt-2">Monitor AI performance and optimize suggestions</p>
        </div>
        
        <select
          value={selectedTimeframe}
          onChange={(e) => setSelectedTimeframe(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
        >
          <option value="day">Last 24 Hours</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="quarter">Last Quarter</option>
        </select>
      </motion.div>

      {/* AI Performance Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid md:grid-cols-4 gap-6"
      >
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
                            <CogIcon className="w-8 h-8 text-[#4CAF50]" />
            <span className="px-2 py-1 bg-green-100 text-green-600 text-xs rounded-full font-medium">
              Active
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{aiMetrics.totalInteractions.toLocaleString()}</h3>
          <p className="text-sm text-[#888888]">Total Interactions</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <ChartBarIcon className="w-8 h-8 text-blue-500" />
            <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">
              Excellent
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{aiMetrics.successRate}%</h3>
          <p className="text-sm text-[#888888]">Success Rate</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">⚡</div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-xs rounded-full font-medium">
              Fast
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{aiMetrics.averageResponseTime}s</h3>
          <p className="text-sm text-[#888888]">Avg Response Time</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-2xl">⭐</div>
            <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
              High
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#333333]">{aiMetrics.userSatisfaction}/5</h3>
          <p className="text-sm text-[#888888]">User Satisfaction</p>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Task Suggestions Performance */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">AI Task Suggestions Performance</h2>
          
          <div className="space-y-4">
            {taskSuggestions.map((task, index) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#333333] mb-1">{task.suggestion}</h3>
                    <div className="flex items-center gap-4 text-sm text-[#888888] mb-2">
                      <span>Confidence: {task.confidence}%</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
                        {task.category}
                      </span>
                    </div>
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    task.userFeedback === 'positive' ? 'bg-green-100 text-green-600' :
                    task.userFeedback === 'mixed' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {task.userFeedback}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#888888]">Adoption Rate:</span>
                    <span className="font-medium text-[#333333]">{task.adoptionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-[#4CAF50] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${task.adoptionRate}%` }}
                    />
                  </div>
                  <p className="text-sm text-[#888888] italic">{task.impact}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Recommendations */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
                            <SparklesIcon className="w-6 h-6 text-[#4CAF50]" />
            <h2 className="text-xl font-semibold text-[#333333]">Content Recommendations</h2>
          </div>
          
          <div className="space-y-4">
            {contentRecommendations.map((rec, index) => (
              <motion.div
                key={rec.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 border border-gray-200 rounded-xl hover:bg-[#f5fff7] transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-600 text-xs rounded-full font-medium">
                        {rec.type}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        rec.priority === 'High' ? 'bg-red-100 text-red-600' :
                        rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {rec.priority} Priority
                      </span>
                    </div>
                    <h3 className="font-semibold text-[#333333] mb-2">{rec.title}</h3>
                    <p className="text-sm text-[#888888] mb-2">{rec.reason}</p>
                    <p className="text-sm text-[#4CAF50] font-medium">{rec.estimatedImpact}</p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-[#4CAF50] text-white text-xs rounded-full hover:bg-[#45a049] transition-colors duration-200">
                    Create Content
                  </button>
                  <button className="px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-full hover:bg-gray-300 transition-colors duration-200">
                    Schedule Later
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* User Behavior Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <h2 className="text-xl font-semibold text-[#333333] mb-6">User Behavior Insights</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {userBehaviorInsights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 bg-[#f5fff7] rounded-xl border border-gray-100"
            >
              <h3 className="font-semibold text-[#333333] mb-2">{insight.insight}</h3>
              <p className="text-sm text-[#888888] mb-3">{insight.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#4CAF50]">Recommendation:</p>
                <p className="text-sm text-[#333333]">{insight.recommendation}</p>
                <p className="text-sm text-blue-600 font-medium">{insight.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Prompt Tuning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
      >
        <h2 className="text-xl font-semibold text-[#333333] mb-6">AI Prompt Optimization</h2>
        
        <div className="space-y-6">
          {promptTuning.map((prompt, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 border border-gray-200 rounded-xl"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[#333333]">{prompt.category}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-[#888888]">Performance:</span>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    prompt.performance >= 90 ? 'bg-green-100 text-green-600' :
                    prompt.performance >= 80 ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {prompt.performance}%
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-[#888888] mb-3 italic">"{prompt.currentPrompt}"</p>
              
              <div className="space-y-2">
                <p className="text-sm font-medium text-[#333333]">Optimization Suggestions:</p>
                <ul className="list-disc list-inside space-y-1">
                  {prompt.suggestions.map((suggestion, idx) => (
                    <li key={idx} className="text-sm text-[#888888]">{suggestion}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-2 mt-4">
                <button className="px-3 py-1 bg-[#4CAF50] text-white text-xs rounded-full hover:bg-[#45a049] transition-colors duration-200">
                  Apply Changes
                </button>
                <button className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors duration-200">
                  Test Prompt
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AIInsights;