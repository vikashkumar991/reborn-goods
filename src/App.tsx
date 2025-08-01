import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Showcase from './pages/Showcase';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AdminLogin from './pages/AdminLogin';

const AppContent = () => {
  const { currentUser, logout } = useAuth();
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar isLoggedIn={!!currentUser} onLogout={logout} />
      <div className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Showcase />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;