import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAuth } from '../contexts/AuthContext';

const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await signup(formData.email, formData.password);
      navigate('/');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5fff7] flex">
      {/* Left Side - Illustration */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#B4E197] to-[#4CAF50] p-12 items-center justify-center relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-6xl"
              initial={{ 
                x: Math.random() * 600,
                y: Math.random() * 800,
                rotate: Math.random() * 360
              }}
              animate={{
                x: Math.random() * 600,
                y: Math.random() * 800,
                rotate: Math.random() * 360
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              {['🌱', '♻️', '🍃', '🌿', '🌳'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center text-white space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-8xl mb-8"
          >
            ♻️
          </motion.div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl lg:text-5xl font-serif font-bold leading-tight"
          >
            Join the Reborn Community
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl opacity-90 leading-relaxed max-w-md mx-auto"
          >
            Start your sustainable journey today and be part of the change.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Side - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Logo for Mobile */}
          <div className="lg:hidden text-center mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#4CAF50] mb-2">
              RE:BORN
            </h1>
            <p className="text-[#888888]">Join our eco-community today!</p>
          </div>

          {/* Signup Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif font-bold text-[#333333] mb-2">
                Create Account
              </h2>
              <p className="text-[#888888]">Join our sustainable community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-[#333333]">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-[#888888]" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-[#333333]">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <EnvelopeIcon className="h-5 w-5 text-[#888888]" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-[#333333]">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-[#888888]" />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password"
                    className="w-full pl-12 pr-12 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all duration-300"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#888888] hover:text-[#4CAF50] transition-colors duration-300"
                  >
                    {showPassword ? (
                      <EyeSlashIcon className="h-5 w-5" />
                    ) : (
                      <EyeIcon className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#4CAF50] border-gray-300 rounded focus:ring-[#4CAF50] focus:ring-2"
                    required
                  />
                  <span className="text-sm text-[#888888]">
                    I agree to the <a href="#" className="text-[#4CAF50] hover:underline">Terms of Service</a> and <a href="#" className="text-[#4CAF50] hover:underline">Privacy Policy</a>
                  </span>
                </label>
              </div>

              {/* Signup Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#4CAF50] to-[#45a049] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={loading || !formData.agreeToTerms}
              >
                <span className="relative z-10">{loading ? 'Creating Account...' : 'Create Account'}</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.button>
              
              {error && (
                <div className="mt-3 text-red-500 text-sm">
                  {error}
                </div>
              )}

              {/* Divider */}
              <div className="relative flex items-center">
                <div className="flex-grow border-t border-gray-200"></div>
                <span className="flex-shrink-0 px-4 text-sm text-[#888888]">or sign up with</span>
                <div className="flex-grow border-t border-gray-200"></div>
              </div>

              {/* Social Signup Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:border-[#4CAF50] hover:bg-[#f5fff7] transition-all duration-300"
                >
                  <span className="text-xl">🔍</span>
                  <span className="text-sm font-medium text-[#333333]">Google</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-200 rounded-xl hover:border-[#4CAF50] hover:bg-[#f5fff7] transition-all duration-300"
                >
                  <span className="text-xl">📘</span>
                  <span className="text-sm font-medium text-[#333333]">Facebook</span>
                </motion.button>
              </div>
            </form>

            {/* Login Link */}
            <div className="text-center mt-8">
              <span className="text-[#888888]">Already have an account? </span>
              <Link
                to="/login"
                className="text-[#4CAF50] hover:text-[#45a049] font-medium transition-colors duration-300"
              >
                Sign in here
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;