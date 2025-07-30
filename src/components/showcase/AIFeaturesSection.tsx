import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  SparklesIcon, 
  BookOpenIcon, 
  DocumentTextIcon, 
  ChartBarIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: SparklesIcon,
    title: 'Smart Idea Generator',
    description: 'Upload any waste item and receive creative upcycling ideas',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    icon: BookOpenIcon,
    title: 'Tutorial Recommender',
    description: 'Step-by-step guides based on your available materials',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: DocumentTextIcon,
    title: 'Auto-Fill Listing',
    description: 'Generate product titles, descriptions, and pricing automatically',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: ChartBarIcon,
    title: 'Eco Impact Tracker',
    description: 'Shows how much waste you\'ve saved and environmental impact',
    color: 'bg-purple-100 text-purple-600'
  }
];

const AIFeaturesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="text-center space-y-6">
                <div className="text-6xl">🔄</div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl">
                    <div className="w-12 h-12 bg-[#B4E197] rounded-full flex items-center justify-center text-2xl">📤</div>
                    <span className="text-[#333333] font-medium">Photo Upload</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl">
                    <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-2xl">🤖</div>
                    <span className="text-[#333333] font-medium">AI Suggests</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl">
                    <div className="w-12 h-12 bg-[#B4E197] rounded-full flex items-center justify-center text-2xl">🛠️</div>
                    <span className="text-[#333333] font-medium">DIY Flow</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-[#f5fff7] rounded-xl">
                    <div className="w-12 h-12 bg-[#4CAF50] rounded-full flex items-center justify-center text-2xl">🛒</div>
                    <span className="text-[#333333] font-medium">Product Listed</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333]">
                🧠 Your Personal Eco-Crafting Assistant
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${feature.color}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-[#333333]">
                        {feature.title}
                      </h3>
                      <p className="text-[#888888] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;