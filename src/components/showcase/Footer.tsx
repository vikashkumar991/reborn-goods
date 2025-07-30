import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const footerLinks = {
    'About Reborn': ['Our Mission', 'How It Works', 'Impact Stories', 'Team'],
    'Quick Links': ['Browse Products', 'Start Creating', 'Join Community', 'AI Assistant'],
    'Help & Support': ['FAQ', 'Contact Us', 'Guidelines', 'Report Issue'],
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-[#4CAF50]">
                RE:BORN
              </h3>
              <p className="text-[#888888] leading-relaxed">
                Crafting Futures from Forgotten Things. Transform waste into wonder with AI-powered guidance.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-[#4CAF50]">
                <span>🔒</span>
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#4CAF50]">
                <span>🌱</span>
                <span>Eco-Friendly Verified</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#333333]">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#888888] hover:text-[#4CAF50] transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter & Social */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-100 pt-12 mt-12"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Newsletter */}
            <div className="flex-1 max-w-md">
              <h4 className="text-lg font-semibold text-[#333333] mb-4">
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:border-[#4CAF50] transition-colors duration-300"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#4CAF50] text-white rounded-full hover:bg-[#45a049] transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {['📧', '📱', '🐦', '📷'].map((emoji, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-[#F4F4F4] rounded-full flex items-center justify-center text-xl hover:bg-[#B4E197] transition-colors duration-300"
                >
                  {emoji}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center pt-8 text-[#888888] text-sm"
        >
          © 2025 RE:BORN. All rights reserved. Made with 💚 for a sustainable future.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;