import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: 'Anita Sharma',
    location: 'Jaipur',
    quote: 'I turned my broken chairs into art pieces and made ₹20,000 this month. Reborn gave me purpose and income.',
    rating: 5,
    tag: 'Top Seller',
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Delhi',
    quote: 'The AI suggestions are incredible! I never thought old tires could become beautiful planters.',
    rating: 5,
    tag: 'Plastic Crafter',
    avatar: '👨'
  },
  {
    id: 3,
    name: 'Maya Patel',
    location: 'Mumbai',
    quote: 'This platform changed my perspective on waste. Every broken item is now an opportunity.',
    rating: 5,
    tag: 'Eco Warrior',
    avatar: '👩'
  },
  {
    id: 4,
    name: 'Suresh Reddy',
    location: 'Hyderabad',
    quote: 'The step-by-step tutorials made crafting so easy. I\'ve sold 15 products already!',
    rating: 5,
    tag: 'Creative Maker',
    avatar: '👨'
  },
  {
    id: 5,
    name: 'Priya Singh',
    location: 'Bangalore',
    quote: 'Amazing community support! Everyone here believes in sustainable living and creativity.',
    rating: 5,
    tag: 'Community Leader',
    avatar: '👩'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-[#f5fff7]">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-[#333333] italic">
            People Reborn Their Trash — and Their Lives
          </h2>
          <div className="w-24 h-1 bg-[#B4E197] mx-auto rounded-full"></div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
              <AnimatePresence mode="wait">
                {visibleTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${currentIndex}`}
                    initial={{ x: 100, opacity: 0, scale: 0.9 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={{ x: -100, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                    className="bg-white p-8 rounded-2xl shadow-lg relative overflow-hidden"
                  >
                    {/* Floating Glow Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B4E197] to-[#4CAF50]"></div>
                    
                    <div className="space-y-6">
                      {/* Quote */}
                      <div className="relative">
                        <div className="text-4xl text-[#B4E197] opacity-50 absolute -top-2 -left-2">
                          "
                        </div>
                        <p className="text-[#333333] italic leading-relaxed pl-6">
                          {testimonial.quote}
                        </p>
                        <div className="text-4xl text-[#B4E197] opacity-50 absolute -bottom-4 -right-2">
                          "
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>

                      {/* User Info */}
                      <div className="text-center space-y-3">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-16 h-16 bg-[#B4E197] rounded-full flex items-center justify-center text-2xl mx-auto"
                        >
                          {testimonial.avatar}
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-[#333333] text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-[#888888] text-sm">{testimonial.location}</p>
                          <span className="inline-block mt-2 px-3 py-1 bg-[#4CAF50] text-white text-xs rounded-full">
                            {testimonial.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#4CAF50] scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg text-[#4CAF50] hover:bg-[#4CAF50] hover:text-white transition-all duration-300"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;