import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    icon: '📤',
    title: 'Upload Waste',
    description: 'Take a photo of any unused item or waste material',
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: '🤖',
    title: 'AI Suggests Products',
    description: 'Get creative upcycling ideas powered by artificial intelligence',
    color: 'from-green-400 to-green-600'
  },
  {
    icon: '🛠️',
    title: 'Make Product',
    description: 'Follow step-by-step tutorials to craft your eco-friendly product',
    color: 'from-yellow-400 to-yellow-600'
  },
  {
    icon: '🛒',
    title: 'Sell on Marketplace',
    description: 'List your creation and earn money while helping the environment',
    color: 'from-purple-400 to-purple-600'
  }
];

const ProcessTimeline: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333]">
            How It Works
          </h2>
          <p className="text-xl text-[#888888] max-w-3xl mx-auto">
            Transform waste into valuable products in just four simple steps
          </p>
          <div className="w-24 h-1 bg-[#B4E197] mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#B4E197] via-[#4CAF50] to-[#B4E197] transform -translate-y-1/2 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="w-full h-full bg-[#4CAF50] origin-left"
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="text-center group"
              >
                {/* Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-4xl shadow-lg relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  {step.icon}
                </motion.div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-[#333333] group-hover:text-[#4CAF50] transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-[#888888] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-[#4CAF50] text-white rounded-full flex items-center justify-center text-sm font-bold"
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-full shadow-lg hover:bg-[#45a049] transition-colors duration-300"
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;