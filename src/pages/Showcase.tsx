import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/showcase/HeroSection';
import AIFeaturesSection from '../components/showcase/AIFeaturesSection';
import ProductGallery from '../components/showcase/ProductGallery';
import TestimonialsSection from '../components/showcase/TestimonialsSection';
import ProcessTimeline from '../components/showcase/ProcessTimeline';
import CTASection from '../components/showcase/CTASection';
import Footer from '../components/showcase/Footer';

const Showcase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <HeroSection />
      <AIFeaturesSection />
      <ProductGallery />
      <TestimonialsSection />
      <ProcessTimeline />
      <CTASection />
      <Footer />
    </motion.div>
  );
};

export default Showcase;