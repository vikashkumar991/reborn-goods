import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, PlayCircleIcon, PauseCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

const EmotionalSupport: React.FC = () => {
  const [currentMood, setCurrentMood] = useState('');
  const [moodNotes, setMoodNotes] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [journalEntry, setJournalEntry] = useState('');

  const moods = [
    { emoji: '😊', label: 'Happy', color: 'bg-green-100 text-green-600' },
    { emoji: '😐', label: 'Neutral', color: 'bg-gray-100 text-gray-600' },
    { emoji: '😢', label: 'Sad', color: 'bg-blue-100 text-blue-600' },
    { emoji: '😠', label: 'Angry', color: 'bg-red-100 text-red-600' },
    { emoji: '😰', label: 'Anxious', color: 'bg-yellow-100 text-yellow-600' },
    { emoji: '😴', label: 'Tired', color: 'bg-purple-100 text-purple-600' }
  ];

  const resources = [
    {
      id: 1,
      type: 'video',
      title: '5-Minute Breathing Exercise',
      description: 'Calm your mind with guided breathing',
      duration: '5 min',
      emoji: '🧘'
    },
    {
      id: 2,
      type: 'audio',
      title: 'Nature Sounds - Forest',
      description: 'Relaxing forest ambience',
      duration: '30 min',
      emoji: '🌲'
    },
    {
      id: 3,
      type: 'article',
      title: 'Finding Purpose in Creativity',
      description: 'How crafting can boost mental health',
      duration: '3 min read',
      emoji: '📖'
    },
    {
      id: 4,
      type: 'exercise',
      title: 'Gratitude Practice',
      description: 'Daily gratitude journaling guide',
      duration: '10 min',
      emoji: '🙏'
    }
  ];

  const moodHistory = [
    { date: '2024-01-15', mood: '😊', notes: 'Completed a great upcycling project!' },
    { date: '2024-01-14', mood: '😐', notes: 'Regular day, feeling okay' },
    { date: '2024-01-13', mood: '😢', notes: 'Feeling a bit overwhelmed' },
    { date: '2024-01-12', mood: '😊', notes: 'Had a productive crafting session' }
  ];

  const submitMoodCheckin = () => {
    if (currentMood) {
      console.log('Mood check-in:', { mood: currentMood, notes: moodNotes });
      // Reset form
      setCurrentMood('');
      setMoodNotes('');
    }
  };

  const saveJournalEntry = () => {
    if (journalEntry.trim()) {
      console.log('Journal entry saved:', journalEntry);
      setJournalEntry('');
    }
  };

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
          🧠 Emotional Support Zone
        </h1>
        <p className="text-[#888888]">
          Take care of your mental wellbeing while you create and inspire
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Mood Check-in */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">
            How are you feeling today?
          </h2>
          
          {/* Mood Selector */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {moods.map((mood) => (
              <motion.button
                key={mood.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentMood(mood.label)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  currentMood === mood.label
                    ? 'border-[#4CAF50] bg-[#f5fff7]'
                    : 'border-gray-200 hover:border-[#B4E197]'
                }`}
              >
                <div className="text-3xl mb-2">{mood.emoji}</div>
                <div className="text-sm font-medium text-[#333333]">{mood.label}</div>
              </motion.button>
            ))}
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <textarea
              value={moodNotes}
              onChange={(e) => setMoodNotes(e.target.value)}
              placeholder="Tell us more about how you're feeling... (optional)"
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
            />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={submitMoodCheckin}
              disabled={!currentMood}
              className="w-full py-3 bg-[#4CAF50] text-white font-semibold rounded-xl hover:bg-[#45a049] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              Submit Check-in ✨
            </motion.button>
          </div>
        </motion.div>

        {/* Relaxation Resources */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">
            Relaxation Resources
          </h2>
          
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2, scale: 1.02 }}
                className="p-4 bg-[#f5fff7] rounded-xl border border-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{resource.emoji}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#333333] mb-1">
                      {resource.title}
                    </h3>
                    <p className="text-sm text-[#888888] mb-2">
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#4CAF50] font-medium">
                        {resource.duration}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center"
                      >
                        <PlayCircleIcon className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Quick Chat with AI */}
          <div className="mt-6 p-4 bg-gradient-to-r from-[#B4E197] to-[#4CAF50] rounded-xl text-white">
            <h3 className="font-semibold mb-2">Need someone to talk to?</h3>
            <p className="text-sm opacity-90 mb-3">
              Chat with our AI for emotional support and encouragement
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-white text-[#4CAF50] rounded-lg font-medium"
            >
              Start Chat 💬
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Journaling Space */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <PencilIcon className="w-6 h-6 text-[#4CAF50]" />
            <h2 className="text-xl font-semibold text-[#333333]">
              Daily Journal
            </h2>
          </div>
          
          <div className="space-y-4">
            <textarea
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              placeholder="Write about your thoughts, feelings, or experiences today..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300 resize-none"
            />
            
            <div className="flex justify-between items-center">
              <span className="text-sm text-[#888888]">
                {journalEntry.length}/500 characters
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={saveJournalEntry}
                disabled={!journalEntry.trim()}
                className="px-6 py-2 bg-[#4CAF50] text-white rounded-lg hover:bg-[#45a049] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Save Entry
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Mood History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
        >
          <h2 className="text-xl font-semibold text-[#333333] mb-6">
            Mood History
          </h2>
          
          <div className="space-y-4">
            {moodHistory.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-4 p-3 bg-[#f5fff7] rounded-lg"
              >
                <div className="text-2xl">{entry.mood}</div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#333333] mb-1">
                    {entry.date}
                  </p>
                  <p className="text-sm text-[#888888]">
                    {entry.notes}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-[#f5fff7] rounded-lg text-center">
            <p className="text-sm text-[#888888] mb-2">
              Your emotional journey matters 💚
            </p>
            <p className="text-xs text-[#888888]">
              Keep tracking your mood to see patterns and celebrate progress
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmotionalSupport;