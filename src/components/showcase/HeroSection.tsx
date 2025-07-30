import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
  {
    title: '♻️ Turn Waste into Wonder',
    subtitle: 'Convert unused materials into sellable eco-products with AI-powered guidance.',
    primaryCTA: 'Get Started',
    secondaryCTA: 'Browse Creations',
    animation: '🔄'
  },
  {
    title: '👥 Join the Reborn Creators',
    subtitle: 'Design. Craft. Sell. Share your upcycled creations with the world.',
    primaryCTA: 'Join Community',
    secondaryCTA: 'Learn More',
    animation: '🤝'
  },
  {
    title: '🛍️ Buy Unique Eco-Friendly Products',
    subtitle: 'Support sustainability by purchasing from our handmade marketplace.',
    primaryCTA: 'Shop Now',
    secondaryCTA: 'View Products',
    animation: '🛒'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const animationRef = useRef<{ x: number; y: number; duration: number }[]>([]);

  useEffect(() => {
    // Initialize window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Initialize animation parameters
    animationRef.current = [...Array(6)].map(() => ({
      x: Math.random() * window.innerHeight,
      y: Math.random() * window.innerHeight,
      duration: 20 + Math.random() * 10
    }));

    // Set up slide interval
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearInterval(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen bg-gradient-to-br from-[#f5fff7] via-[#e6f5ea] to-[#B4E197] overflow-hidden">
      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {windowSize.height > 0 && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-20"
            initial={{ x: -100, y: animationRef.current[i]?.y || 0 }}
            animate={{
              x: windowSize.width + 100,
              y: animationRef.current[i]?.y || 0,
              rotate: 360
            }}
            transition={{
              duration: animationRef.current[i]?.duration || 20,
              repeat: Infinity,
              delay: i * 3
            }}
          >
            🍃
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h1 className="text-5xl lg:text-7xl font-serif font-bold text-[#333333] leading-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-[#888888] leading-relaxed max-w-2xl">
                    {slides[currentSlide].subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-[#4CAF50] text-white font-semibold rounded-full shadow-lg hover:bg-[#45a049] transition-colors duration-300"
                    >
                      {slides[currentSlide].primaryCTA}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 border-2 border-[#4CAF50] text-[#4CAF50] font-semibold rounded-full hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
                    >
                      {slides[currentSlide].secondaryCTA}
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-96 bg-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-8xl"
                  >
                    {slides[currentSlide].animation}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-[#333333] hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </motion.button>
          
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#4CAF50] scale-125' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-[#333333] hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;