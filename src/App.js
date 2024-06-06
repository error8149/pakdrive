import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Footer from './components/Footer';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContext } from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='font-poppins overflow-x-hidden'>
      {!user && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
      {!user && <Footer />}
    </div>
  );
};

export default App;
