import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  UserCircleIcon, 
  BellIcon, 
  LockClosedIcon, 
  SwatchIcon,
  DeviceTabletIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

const SettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState({
    // Account
    name: 'Anita Sharma',
    email: 'anita.sharma@example.com',
    bio: 'Passionate eco-creator turning waste into wonderful products',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: true,
    taskReminders: true,
    communityUpdates: false,
    
    // Privacy
    profileVisibility: 'public',
    showEmail: false,
    allowMessages: true,
    
    // Theme
    theme: 'light',
    language: 'english'
  });

  const [profileImage, setProfileImage] = useState('👩');

  const handleSettingChange = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const saveSettings = () => {
    console.log('Settings saved:', settings);
    // Handle settings save
  };

  const exportData = () => {
    console.log('Exporting user data...');
    // Handle data export
  };

  const deactivateAccount = () => {
    if (confirm('Are you sure you want to deactivate your account? This action cannot be undone.')) {
      console.log('Account deactivation requested');
      // Handle account deactivation
    }
  };

  const settingsSections = [
    {
      id: 'account',
      title: 'Account Information',
      icon: UserCircleIcon,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-[#B4E197] rounded-full flex items-center justify-center text-4xl cursor-pointer">
              {profileImage}
            </div>
            <div>
              <button className="px-4 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] transition-colors duration-200">
                Change Photo
              </button>
              <p className="text-sm text-[#888888] mt-1">
                Click to upload new profile picture
              </p>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => handleSettingChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleSettingChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-[#333333] mb-2">
                Bio
              </label>
              <textarea
                value={settings.bio}
                onChange={(e) => handleSettingChange('bio', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
              />
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
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser notifications' },
            { key: 'taskReminders', label: 'Task Reminders', desc: 'Daily task completion reminders' },
            { key: 'communityUpdates', label: 'Community Updates', desc: 'New posts and features' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
              <div>
                <h4 className="font-medium text-[#333333]">{item.label}</h4>
                <p className="text-sm text-[#888888]">{item.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings[item.key as keyof typeof settings] as boolean}
                  onChange={(e) => handleSettingChange(item.key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
              </label>
            </div>
          ))}
        </div>
      )
    },
    {
      id: 'privacy',
      title: 'Privacy & Security',
      icon: LockClosedIcon,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#f5fff7] rounded-xl">
            <h4 className="font-medium text-[#333333] mb-2">Profile Visibility</h4>
            <div className="space-y-2">
              {[
                { value: 'public', label: 'Public - Anyone can see your profile' },
                { value: 'private', label: 'Private - Only you can see your profile' },
                { value: 'community', label: 'Community - Only RE:BORN members' }
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="profileVisibility"
                    value={option.value}
                    checked={settings.profileVisibility === option.value}
                    onChange={(e) => handleSettingChange('profileVisibility', e.target.value)}
                    className="text-[#4CAF50] focus:ring-[#4CAF50]"
                  />
                  <span className="text-sm text-[#333333]">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
              <div>
                <h4 className="font-medium text-[#333333]">Show Email Address</h4>
                <p className="text-sm text-[#888888]">Make your email visible to other users</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.showEmail}
                  onChange={(e) => handleSettingChange('showEmail', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
              </label>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-[#f5fff7] rounded-xl">
              <div>
                <h4 className="font-medium text-[#333333]">Allow Messages</h4>
                <p className="text-sm text-[#888888]">Let other users send you messages</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.allowMessages}
                  onChange={(e) => handleSettingChange('allowMessages', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#4CAF50]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4CAF50]"></div>
              </label>
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <button
              onClick={exportData}
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200 mb-3"
            >
              Export My Data
            </button>
            <button
              onClick={deactivateAccount}
              className="w-full px-4 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-200"
            >
              Deactivate Account
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'preferences',
      title: 'App Preferences',
      icon: PaintBrushIcon,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-[#f5fff7] rounded-xl">
            <h4 className="font-medium text-[#333333] mb-3">Theme</h4>
            <div className="flex gap-4">
              {[
                { value: 'light', label: '☀️ Light', desc: 'Default theme' },
                { value: 'dark', label: '🌙 Dark', desc: 'Easy on the eyes' }
              ].map((theme) => (
                <label key={theme.value} className="flex-1 cursor-pointer">
                  <input
                    type="radio"
                    name="theme"
                    value={theme.value}
                    checked={settings.theme === theme.value}
                    onChange={(e) => handleSettingChange('theme', e.target.value)}
                    className="sr-only peer"
                  />
                  <div className="p-4 border-2 border-gray-200 rounded-xl peer-checked:border-[#4CAF50] peer-checked:bg-[#f5fff7] transition-colors duration-200">
                    <div className="text-2xl mb-2">{theme.label}</div>
                    <p className="text-sm text-[#888888]">{theme.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-[#f5fff7] rounded-xl">
            <h4 className="font-medium text-[#333333] mb-3">Language</h4>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
            >
              <option value="english">🇺🇸 English</option>
              <option value="hindi">🇮🇳 Hindi</option>
              <option value="spanish">🇪🇸 Spanish</option>
              <option value="french">🇫🇷 French</option>
            </select>
          </div>
        </div>
      )
    }
  ];

  const [activeSection, setActiveSection] = useState('account');

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-3xl font-serif font-bold text-[#333333] mb-2">
          ⚙️ Settings
        </h1>
        <p className="text-[#888888]">
          Customize your RE:BORN experience
        </p>
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
            {settingsSections.map((section) => (
              <motion.button
                key={section.id}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                  activeSection === section.id
                    ? 'bg-[#4CAF50] text-white'
                    : 'hover:bg-[#f5fff7] text-[#333333]'
                }`}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium text-sm">{section.title}</span>
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
            {settingsSections.map((section) => (
              activeSection === section.id && (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <section.icon className="w-6 h-6 text-[#4CAF50]" />
                    <h2 className="text-2xl font-semibold text-[#333333]">
                      {section.title}
                    </h2>
                  </div>
                  {section.content}
                </motion.div>
              )
            ))}
            
            {/* Save Button */}
            <div className="flex justify-end pt-6 border-t border-gray-200 mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={saveSettings}
                className="px-8 py-3 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] transition-colors duration-300 shadow-lg"
              >
                Save Changes
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPanel;