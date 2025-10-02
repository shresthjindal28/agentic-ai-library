'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton, SignInButton, SignUpButton, useUser } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiBook, FiGithub, FiArrowRight, FiActivity } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  // Effect to handle scroll state for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [pathname]);

  const navLinks = [
    { href: '/', label: 'Home', icon: <FiHome /> },
    { href: '/agents', label: 'Agents', icon: <RiRobot2Line /> },
    { href: '/docs', label: 'Docs', icon: <FiBook /> },
  ];

  const NavLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return (
      <Link href={href} legacyBehavior>
        <a
          className={`relative flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
            isActive 
              ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' 
              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
          }`}
        >
          <span className="mr-2 transition-transform duration-300 group-hover:scale-110">{icon}</span>
          {label}
          {isActive && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 rounded-lg border border-cyan-400/30"
              layoutId="navbar-active-bg"
              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) => {
    const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
    return (
      <Link href={href} legacyBehavior>
        <a className={`flex items-center w-full p-4 text-base font-medium rounded-xl transition-all duration-300 group ${
            isActive 
              ? 'text-cyan-400 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30' 
              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5'
        }`}>
            <span className="mr-3 text-xl transition-transform duration-300 group-hover:scale-110">{icon}</span>
            {label}
        </a>
      </Link>
    );
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/5' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      {/* Neural network background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* AI Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-300">
              <RiBrainLine className="w-7 h-7 text-white" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              {/* Pulse effect */}
              <div className="absolute inset-0 bg-cyan-400/20 rounded-xl animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors duration-300">
                AI AGENTS
              </span>
              <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                Neural Library
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          {/* Desktop Auth & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            {isSignedIn ? (
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/shresthjindal28/agentic-ai-library"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-cyan-400/10 group"
                  title="GitHub Repository"
                >
                  <FiGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <div className="relative">
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: 'w-10 h-10 border-2 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-400/25',
                        userButtonPopoverCard: 'bg-gray-900 border border-cyan-400/30 shadow-2xl shadow-cyan-400/10 mt-2',
                      },
                    }}
                  />
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-full animate-pulse" />
                </div>
              </div>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="px-6 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-cyan-400/10">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <motion.button
                    className="relative flex items-center px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 overflow-hidden group"
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center">
                      <FiActivity className="w-4 h-4 mr-2" />
                      Initialize
                      <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                    <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                  </motion.button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 focus:outline-none transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Mobile menu background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <MobileNavLink key={link.href} {...link} />
              ))}
              
              <div className="pt-6 mt-6 border-t border-cyan-400/20">
                {isSignedIn ? (
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 rounded-xl border border-cyan-400/20">
                     <div className="flex flex-col">
                       <p className="text-base font-bold text-cyan-400">
                         Welcome back
                       </p>
                       <p className="text-sm text-gray-400">
                         {user?.firstName}
                       </p>
                     </div>
                    <UserButton
                      afterSignOutUrl="/"
                      appearance={{ 
                        elements: { 
                          userButtonAvatarBox: 'w-10 h-10 border-2 border-cyan-400/30 shadow-lg' 
                        } 
                      }}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col space-y-3">
                    <SignInButton mode="modal">
                      <button className="w-full text-center py-3 px-4 border-2 border-cyan-400/30 rounded-xl text-sm font-medium text-gray-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 group">
                        <FiActivity className="w-4 h-4 mr-2" />
                        Initialize Agent
                        <FiArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;