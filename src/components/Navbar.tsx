import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LoginModal from './LoginModal';
import Logo from './Logo';

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const navigate = useNavigate();

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      onLogout();
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <>
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
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
            className={`px-4 py-2 rounded-full ${isLoggedIn ? 'bg-white text-[#4CAF50] border border-[#4CAF50]' : 'bg-[#4CAF50] text-white'}`}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </motion.button>

          {isLoggedIn && (
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
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
};

export default Navbar;