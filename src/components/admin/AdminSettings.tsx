import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  LockClosedIcon, 
  UsersIcon, 
  BellIcon,
  ChartBarIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const AdminSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('system');
  const [settings, setSettings] = useState({
    // System Settings
    maintenanceMode: false,
    autoBackup: true,
    backupFrequency: 'daily',
    maxFileSize: '10',
    sessionTimeout: '30',
    
    // User Management
    allowRegistration: true,
    emailVerification: true,
    maxUsersPerDay: '100',
    defaultUserRole: 'user',
    
    // Notifications
    systemAlerts: true,
    userNotifications: true,
    emailReports: true,
    reportFrequency: 'weekly',
    
    // AI Settings
    aiResponseTime: '2',
    aiConfidenceThreshold: '80',
    maxAISuggestions: '5',
    aiLearningMode: true,
    
    // Analytics
    trackUserBehavior: true,
    anonymizeData: true,
    dataRetention: '365',
    exportFormat: 'json'
  });

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = () => {
    console.log('Saving admin settings:', settings);
    // Handle settings save
  };

  const exportSystemData = () => {
    console.log('Exporting system data...');
    // Handle data export
  };

  const runSystemDiagnostics = () => {
    console.log('Running system diagnostics...');
    // Handle diagnostics
  };

  const settingsTabs = [
    {
      id: 'system',
      title: 'System Configuration',
      icon: CogIcon,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">General Settings</h3>
              
              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Maintenance Mode</h4>
                  <p className="text-sm text-[#888888]">Temporarily disable user access</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.maintenanceMode}
                    onChange={(e) => handleSettingChange('maintenanceMode', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Auto Backup</h4>
                  <p className="text-sm text-[#888888]">Automatically backup system data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.autoBackup}
                    onChange={(e) => handleSettingChange('autoBackup', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Backup Frequency
                </label>
                <select
                  value={settings.backupFrequency}
                  onChange={(e) => handleSettingChange('backupFrequency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Performance Settings</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Max File Size (MB)
                </label>
                <input
                  type="number"
                  value={settings.maxFileSize}
                  onChange={(e) => handleSettingChange('maxFileSize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  value={settings.sessionTimeout}
                  onChange={(e) => handleSettingChange('sessionTimeout', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div className="pt-4">
                <button
                  onClick={runSystemDiagnostics}
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                >
                  Run System Diagnostics
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'users',
      title: 'User Management',
      icon: UsersIcon,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Registration Settings</h3>
              
              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Allow Registration</h4>
                  <p className="text-sm text-[#888888]">Enable new user signups</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.allowRegistration}
                    onChange={(e) => handleSettingChange('allowRegistration', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Email Verification</h4>
                  <p className="text-sm text-[#888888]">Require email verification for new users</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailVerification}
                    onChange={(e) => handleSettingChange('emailVerification', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Max New Users Per Day
                </label>
                <input
                  type="number"
                  value={settings.maxUsersPerDay}
                  onChange={(e) => handleSettingChange('maxUsersPerDay', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Default Settings</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Default User Role
                </label>
                <select
                  value={settings.defaultUserRole}
                  onChange={(e) => handleSettingChange('defaultUserRole', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="user">User</option>
                  <option value="creator">Creator</option>
                  <option value="moderator">Moderator</option>
                </select>
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h4 className="font-medium text-yellow-800 mb-2">User Statistics</h4>
                <div className="space-y-1 text-sm text-yellow-700">
                  <p>Total Users: 2,547</p>
                  <p>Active Today: 342</p>
                  <p>New This Week: 89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: BellIcon,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">System Notifications</h3>
              
              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">System Alerts</h4>
                  <p className="text-sm text-[#888888]">Critical system notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.systemAlerts}
                    onChange={(e) => handleSettingChange('systemAlerts', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">User Notifications</h4>
                  <p className="text-sm text-[#888888]">User activity notifications</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.userNotifications}
                    onChange={(e) => handleSettingChange('userNotifications', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Email Reports</h4>
                  <p className="text-sm text-[#888888]">Automated email reports</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.emailReports}
                    onChange={(e) => handleSettingChange('emailReports', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Report Settings</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Report Frequency
                </label>
                <select
                  value={settings.reportFrequency}
                  onChange={(e) => handleSettingChange('reportFrequency', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <h4 className="font-medium text-blue-800 mb-2">Email Templates</h4>
                <div className="space-y-2">
                  <button className="w-full px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Edit Welcome Email
                  </button>
                  <button className="w-full px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors duration-200">
                    Edit Report Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'ai',
      title: 'AI Configuration',
      icon: ChartBarIcon,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">AI Performance</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Response Time Limit (seconds)
                </label>
                <input
                  type="number"
                  value={settings.aiResponseTime}
                  onChange={(e) => handleSettingChange('aiResponseTime', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Confidence Threshold (%)
                </label>
                <input
                  type="number"
                  value={settings.aiConfidenceThreshold}
                  onChange={(e) => handleSettingChange('aiConfidenceThreshold', e.target.value)}
                  min="0"
                  max="100"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Max Suggestions Per Request
                </label>
                <input
                  type="number"
                  value={settings.maxAISuggestions}
                  onChange={(e) => handleSettingChange('maxAISuggestions', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Learning & Adaptation</h3>
              
              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">AI Learning Mode</h4>
                  <p className="text-sm text-[#888888]">Allow AI to learn from user interactions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.aiLearningMode}
                    onChange={(e) => handleSettingChange('aiLearningMode', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-medium text-green-800 mb-2">AI Status</h4>
                <div className="space-y-1 text-sm text-green-700">
                  <p>Status: Active</p>
                  <p>Uptime: 99.9%</p>
                  <p>Avg Response: 1.3s</p>
                  <p>Success Rate: 94.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'analytics',
      title: 'Analytics & Data',
      icon: DatabaseIcon,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Data Collection</h3>
              
              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Track User Behavior</h4>
                  <p className="text-sm text-[#888888]">Collect user interaction data</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.trackUserBehavior}
                    onChange={(e) => handleSettingChange('trackUserBehavior', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
                <div>
                  <h4 className="font-medium text-[#333333]">Anonymize Data</h4>
                  <p className="text-sm text-[#888888]">Remove personal identifiers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.anonymizeData}
                    onChange={(e) => handleSettingChange('anonymizeData', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Data Retention (days)
                </label>
                <input
                  type="number"
                  value={settings.dataRetention}
                  onChange={(e) => handleSettingChange('dataRetention', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#333333]">Export & Backup</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#333333] mb-2">
                  Export Format
                </label>
                <select
                  value={settings.exportFormat}
                  onChange={(e) => handleSettingChange('exportFormat', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                >
                  <option value="json">JSON</option>
                  <option value="csv">CSV</option>
                  <option value="xml">XML</option>
                </select>
              </div>

              <div className="space-y-3">
                <button
                  onClick={exportSystemData}
                  className="w-full px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                >
                  Export System Data
                </button>
                <button className="w-full px-4 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors duration-200">
                  Download Analytics Report
                </button>
                <button className="w-full px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors duration-200">
                  Schedule Automated Export
                </button>
              </div>
            </div>
          </div>
        </div>
      )
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
          <h1 className="text-3xl font-serif font-bold text-[#333333]">Admin Settings</h1>
          <p className="text-[#888888] mt-2">Configure system settings and preferences</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={saveSettings}
          className="px-6 py-3 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-colors duration-300 shadow-lg"
        >
          Save All Settings
        </motion.button>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Settings Navigation */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-1"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-2">
            {settingsTabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-[#4CAF50] text-white'
                    : 'hover:bg-[#f5fff7] text-[#333333]'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{tab.title}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Settings Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            {settingsTabs.map((tab) => (
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <tab.icon className="w-6 h-6 text-[#4CAF50]" />
                    <h2 className="text-2xl font-semibold text-[#333333]">
                      {tab.title}
                    </h2>
                  </div>
                  {tab.content}
                </motion.div>
              )
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminSettings;