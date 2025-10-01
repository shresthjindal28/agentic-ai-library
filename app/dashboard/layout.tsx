'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { 
  FiHome, 
  FiCpu, 
  FiBook, 
  FiSettings, 
  FiUser, 
  FiMenu, 
  FiX,
  FiLogOut,
  FiChevronRight,
  FiChevronDown
} from 'react-icons/fi';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [docsExpanded, setDocsExpanded] = useState(false);
  const router = useRouter();

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: <FiHome />, href: '/dashboard' },
    { id: 'agents', label: 'My Agents', icon: <FiCpu />, href: '/dashboard/agents' },
    { 
      id: 'docs', 
      label: 'Documentation', 
      icon: <FiBook />, 
      href: '#',
      isExpandable: true,
      subItems: [
        { id: 'getting-started', label: 'Getting Started', href: '/dashboard/docs/getting-started' },
        { id: 'api-reference', label: 'API Reference', href: '/dashboard/docs/api-reference' },
        { id: 'examples', label: 'Examples', href: '/dashboard/docs/examples' },
      ]
    },
    { id: 'profile', label: 'Profile', icon: <FiUser />, href: '/dashboard/profile' },
    { id: 'settings', label: 'Settings', icon: <FiSettings />, href: '/dashboard/settings' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDocsExpand = () => {
    setDocsExpanded(!docsExpanded);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <motion.div 
        className={`bg-white shadow-lg fixed inset-y-0 left-0 z-30 transform lg:relative lg:translate-x-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:w-20'
        }`}
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar header */}
          <div className="flex items-center justify-between h-16 px-4 border-b">
            {isSidebarOpen && (
              <Link href="/dashboard" className="flex items-center">
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  AI Library
                </span>
              </Link>
            )}
            <button 
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
            >
              {isSidebarOpen ? <FiChevronRight /> : <FiMenu />}
            </button>
          </div>

          {/* Sidebar content */}
          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-2 space-y-1">
              {sidebarItems.map((item) => (
                <div key={item.id}>
                  {item.isExpandable ? (
                    <div>
                      <button
                        onClick={toggleDocsExpand}
                        className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          activeSection === item.id
                            ? 'bg-indigo-50 text-indigo-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <span className="inline-flex items-center justify-center mr-3">
                          {item.icon}
                        </span>
                        {isSidebarOpen && (
                          <>
                            <span className="flex-1">{item.label}</span>
                            {docsExpanded ? <FiChevronDown /> : <FiChevronRight />}
                          </>
                        )}
                      </button>
                      {docsExpanded && isSidebarOpen && (
                        <div className="ml-8 mt-1 space-y-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.href}
                              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                        activeSection === item.id
                          ? 'bg-indigo-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveSection(item.id)}
                    >
                      <span className="inline-flex items-center justify-center mr-3">
                        {item.icon}
                      </span>
                      {isSidebarOpen && <span>{item.label}</span>}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Sidebar footer */}
          <div className="p-4 border-t">
            <div className="flex items-center justify-between">
              {isSidebarOpen && (
                <div className="flex items-center">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8"
                      }
                    }}
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">User Name</p>
                    <p className="text-xs text-gray-500">user@example.com</p>
                  </div>
                </div>
              )}
              {!isSidebarOpen && (
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile sidebar backdrop */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top navbar */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={toggleMobileMenu}
                  className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100"
                >
                  <FiMenu className="h-6 w-6" />
                </button>
                <h1 className="ml-2 lg:ml-0 text-lg font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center">
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8"
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}