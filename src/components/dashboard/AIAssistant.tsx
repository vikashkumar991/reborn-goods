import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your RE:BORN AI assistant. I can help you turn waste into wonderful products! What would you like to create today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "How are you feeling today? 😊",
    "I have plastic bottles, what can I make?",
    "Give me motivation to start crafting",
    "Show me beginner-friendly projects",
    "Help me price my upcycled product"
  ];

  const sendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: Date.now() + 1,
        text: getAIResponse(message),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('plastic bottle') || lowerMessage.includes('bottles')) {
      return "Great! Plastic bottles are versatile! Here are some ideas:\n\n🌱 **Garden Planters** - Cut and decorate for herbs\n💡 **LED Lamps** - Add fairy lights inside\n🗂️ **Storage Containers** - Perfect for organizing\n🎨 **Bird Feeders** - Cut openings and add perches\n\nWhich one interests you most? I can provide step-by-step instructions!";
    }
    
    if (lowerMessage.includes('feeling') || lowerMessage.includes('mood')) {
      return "I'm glad you're checking in! 😊 Creating something beautiful from waste can be incredibly therapeutic. It gives us a sense of purpose and accomplishment.\n\nHow are you feeling about your eco-journey today? Are you excited to create, or do you need some motivation to get started?";
    }
    
    if (lowerMessage.includes('motivation') || lowerMessage.includes('motivate')) {
      return "You're doing something amazing! 🌟 Every item you upcycle:\n\n✨ Saves the environment\n💰 Can earn you money\n🧠 Boosts creativity\n❤️ Inspires others\n\nRemember: Small actions create BIG impact. Your next creation could inspire someone else to start their eco-journey. What would you like to work on today?";
    }
    
    if (lowerMessage.includes('beginner') || lowerMessage.includes('easy') || lowerMessage.includes('start')) {
      return "Perfect for beginners! Let's start simple:\n\n🥫 **Tin Can Planters** (30 min)\n📦 **Cardboard Organizers** (45 min)\n👕 **T-shirt Tote Bags** (1 hour)\n🧻 **Toilet Roll Organizers** (20 min)\n\nAll these need basic supplies you likely have at home. Which one sounds fun to you?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('sell') || lowerMessage.includes('cost')) {
      return "Great question! Pricing your upcycled products:\n\n💡 **Consider:**\n- Material cost (even if free, factor time saved)\n- Time spent (₹50-200/hour based on complexity)\n- Uniqueness factor\n- Local market demand\n\n📊 **Quick Formula:**\nMaterials + (Hours × ₹100) + 30% profit margin\n\nWhat type of product are you planning to sell?";
    }
    
    return "That's an interesting question! I'm here to help you with:\n\n🔄 **Upcycling Ideas** - Turn any waste into products\n📚 **Step-by-step Tutorials** - Detailed guides\n💰 **Pricing Help** - Value your creations\n😊 **Emotional Support** - Stay motivated\n🌱 **Impact Tracking** - See your eco-contribution\n\nWhat would you like help with today?";
  };

  return (
    <div className="h-[calc(100vh-200px)] flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-t-xl shadow-lg border border-gray-100 p-6 border-b-0"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-2xl">
            🤖
          </div>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#333333]">Your AI Assistant</h1>
            <p className="text-[#888888]">Ask me anything about upcycling and eco-crafting!</p>
          </div>
        </div>
      </motion.div>

      {/* Chat Messages */}
      <div className="flex-1 bg-white border border-gray-100 border-t-0 border-b-0 p-6 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.sender === 'user' 
                ? 'bg-[#4CAF50] text-white' 
                : 'bg-[#f5fff7] text-[#333333] border border-gray-100'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-2 ${
                message.sender === 'user' ? 'text-white/70' : 'text-[#888888]'
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
        ))}
        
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="bg-[#f5fff7] border border-gray-100 px-4 py-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-[#4CAF50] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Quick Prompts */}
      <div className="bg-white border border-gray-100 border-t-0 border-b-0 p-4">
        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => sendMessage(prompt)}
              className="px-3 py-2 bg-[#f5fff7] text-[#333333] text-sm rounded-full hover:bg-[#B4E197] transition-colors duration-200"
            >
              {prompt}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white rounded-b-xl shadow-lg border border-gray-100 p-6 border-t-0">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask me about upcycling, get motivated, or share your feelings..."
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
              onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputMessage)}
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-[#888888] hover:text-[#4CAF50] transition-colors duration-200"
            >
              <SpeakerWaveIcon className="w-5 h-5" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => sendMessage(inputMessage)}
            disabled={!inputMessage.trim()}
            className="px-6 py-3 bg-[#4CAF50] text-white rounded-xl hover:bg-[#45a049] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;