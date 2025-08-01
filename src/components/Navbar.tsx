import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { useAuth } from '../contexts/AuthContext';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const navigate = useNavigate();
  const { isAdmin } = useAuth();

  const handleLoginClick = () => {
    if (isLoggedIn) {
      onLogout();
    } else {
      navigate('/login');
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Left side - Logo */}
      <Link to="/" className="flex items-center">
        <Logo size="medium" />
      </Link>

      {/* Right side - Navigation */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-gray-700 hover:text-[#4CAF50] transition-colors">
          Products
        </Link>
        
        {!isLoggedIn && (
          <>
            <Link to="/admin-login" className="text-gray-700 hover:text-[#4CAF50] transition-colors">
              Admin
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-[#4CAF50] transition-colors">
              Sign Up
            </Link>
          </>
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLoginClick}
          className={`px-4 py-2 rounded-full ${isLoggedIn ? 'bg-white text-[#4CAF50] border border-[#4CAF50]' : 'bg-[#4CAF50] text-white'}`}
        >
          {isLoggedIn ? 'Logout' : 'Login'}
        </motion.button>

        {isLoggedIn && (
          <>
            {isAdmin() ? (
              <Link to="/admin">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#2E7D32] text-white rounded-full"
                >
                  Admin Dashboard
                </motion.button>
              </Link>
            ) : (
              <Link to="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-[#4CAF50] text-white rounded-full"
                >
                  Dashboard
                </motion.button>
              </Link>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;