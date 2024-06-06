import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo light.png';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-3 left-3 right-3 z-0 py-3 px-0 transition-all duration-300 ${scrolled ? 'bg-gray-900 rounded-3xl text-white' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-5 xl:px-2 md:px-2">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse no-underline">
          <img src={logo} alt="Pak drive Logo" className="h-12" />
          <span className="self-center text-[30px] font-poppins font-semibold whitespace-nowrap dark:text-purple-500">PAK DRIVE</span>
        </Link>
        {isLandingPage && (
          <div className="hidden md:flex items-center space-x-12 rtl:space-x-reverse">
            <button className="text-white font-poppins font-medium bg-transparent text-lg no-underline" onClick={() => handleScrollTo('features')}>Features</button>
            <button className="text-white font-poppins font-medium bg-transparent text-lg no-underline" onClick={() => handleScrollTo('pricing')}>Pricing</button>
            {!user && <Link to="/login" className="text-white font-poppins self-center font-semibold text-lg no-underline">Log in</Link>}
            {user && <button onClick={logout} className="text-white font-poppins self-center font-semibold text-lg no-underline">Logout</button>}
            <Link to="/signup">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-poppins font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            </Link>
          </div>
        )}
        <div className="flex items-center space-x-4 md:hidden">
          <button type="button" className="text-white bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-poppins font-medium rounded-lg text-lg px-4 py-2 text-center" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isLandingPage && (
          <div className={`absolute top-16 right-0 bg-gray-900 rounded-3xl text-white px-4 py-2 ${menuOpen ? 'block' : 'hidden'}`}>
            <button className="block text-white font-poppins font-medium bg-transparent text-lg no-underline" onClick={() => { handleScrollTo('features'); setMenuOpen(false); }}>Features</button>
            <button className="block text-white font-poppins font-medium bg-transparent text-lg no-underline" onClick={() => { handleScrollTo('pricing'); setMenuOpen(false); }}>Pricing</button>
            {!user && <Link to="/login" className="block text-white font-poppins self-center font-semibold text-lg no-underline">Log in</Link>}
            {user && <button onClick={() => { logout(); setMenuOpen(false); }} className="block text-white font-poppins self-center font-semibold text-lg no-underline">Logout</button>}
            <Link to="/signup">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-poppins font-medium rounded-lg text-lg px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
