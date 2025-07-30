import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CTASection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const animationRef = useRef<{ x: number; y: number; rotate: number; duration: number; emoji: string }[]>([]);

  useEffect(() => {
    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Initialize animation parameters
    const emojis = ['🍃', '♻️', '🌱', '🛠️'];
    animationRef.current = [...Array(8)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      rotate: Math.random() * 360,
      duration: 20 + Math.random() * 10,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    }));

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#B4E197] via-[#e6f5ea] to-white overflow-hidden relative">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        {windowSize.height > 0 && [...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl"
            initial={{ 
              x: animationRef.current[i]?.x || 0,
              y: animationRef.current[i]?.y || 0,
              rotate: animationRef.current[i]?.rotate || 0
            }}
            animate={{
              x: (animationRef.current[i]?.x || 0) + 100,
              y: (animationRef.current[i]?.y || 0) + 100,
              rotate: (animationRef.current[i]?.rotate || 0) + 180
            }}
            transition={{
              duration: animationRef.current[i]?.duration || 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            {animationRef.current[i]?.emoji || '🍃'}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-serif font-bold text-[#333333]">
              ♻️ Ready to Turn Waste into Worth?
            </h2>
            <p className="text-xl lg:text-2xl text-[#888888] max-w-3xl mx-auto leading-relaxed">
              Join thousands of creators who are transforming waste into wonderful products while earning money and saving the planet.
            </p>
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(76, 175, 80, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-[#4CAF50] text-white text-xl font-bold rounded-full shadow-xl hover:bg-[#45a049] transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started Now</span>
              <motion.div
                className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"
                whileHover={{ opacity: 0.2 }}
              />
            </motion.button>

            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-[#4CAF50] text-lg font-semibold hover:text-[#45a049] transition-colors duration-300 underline decoration-2 underline-offset-4"
            >
              See Real User Creations
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { number: '10,000+', label: 'Waste Items Transformed' },
              { number: '₹5,00,000+', label: 'Earned by Creators' },
              { number: '2,500+', label: 'Happy Eco-Warriors' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              >
                <div className="text-3xl font-bold text-[#4CAF50] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#888888] font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;