import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const sizeClasses = {
    small: 'text-xl',
    medium: 'text-2xl',
    large: 'text-3xl'
  };

  return (
    <motion.div 
      className={`font-serif font-bold ${sizeClasses[size]} text-[#4CAF50] flex items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[#4CAF50]">RE:</span>
      <span className="text-[#2E7D32]">BORN</span>
    </motion.div>
  );
};

export default Logo;