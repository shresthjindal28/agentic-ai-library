'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBook, FiCode, FiZap, FiSettings, FiArrowRight, FiSearch, FiExternalLink } from 'react-icons/fi';
import Navbar from '@/components/Navbar';

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isExternal?: boolean;
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of integrating AI agents into your applications.',
    icon: <FiZap className="text-green-600" size={24} />,
    href: '/docs/getting-started'
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    description: 'Complete API documentation with examples and response formats.',
    icon: <FiCode className="text-blue-600" size={24} />,
    href: '/docs/api-reference'
  },
  {
    id: 'agent-development',
    title: 'Agent Development',
    description: 'Build custom AI agents with our comprehensive development guide.',
    icon: <FiSettings className="text-purple-600" size={24} />,
    href: '/docs/agent-development'
  },
  {
    id: 'examples',
    title: 'Examples & Tutorials',
    description: 'Step-by-step tutorials and real-world implementation examples.',
    icon: <FiBook className="text-orange-600" size={24} />,
    href: '/docs/examples'
  }
];

const quickLinks = [
  { title: 'Installation Guide', href: '/docs/installation' },
  { title: 'Authentication', href: '/docs/authentication' },
  { title: 'Rate Limits', href: '/docs/rate-limits' },
  { title: 'Error Handling', href: '/docs/error-handling' },
  { title: 'Best Practices', href: '/docs/best-practices' },
  { title: 'FAQ', href: '/docs/faq' }
];

const popularGuides = [
  {
    title: 'Building Your First Agent',
    description: 'Create a simple conversational agent in under 10 minutes.',
    readTime: '5 min read',
    href: '/docs/first-agent'
  },
  {
    title: 'Integrating with Webhooks',
    description: 'Set up real-time notifications and event handling.',
    readTime: '8 min read',
    href: '/docs/webhooks'
  },
  {
    title: 'Advanced Agent Patterns',
    description: 'Learn complex agent architectures and design patterns.',
    readTime: '12 min read',
    href: '/docs/advanced-patterns'
  }
];

export default function DocsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Documentation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Everything you need to build, deploy, and scale AI agents. 
              From quick start guides to advanced implementation patterns.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search documentation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm"
              />
            </div>
          </motion.div>

          {/* Main Documentation Sections */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {docSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
              >
                <Link href={section.href} className="block">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {section.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {section.title}
                        </h3>
                        <FiArrowRight className="text-gray-400" size={16} />
                      </div>
                      <p className="text-gray-600">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Popular Guides */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Guides</h2>
              <div className="space-y-4">
                {popularGuides.map((guide, index) => (
                  <motion.div
                    key={guide.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6"
                  >
                    <Link href={guide.href} className="block">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {guide.title}
                          </h3>
                          <p className="text-gray-600 mb-3">
                            {guide.description}
                          </p>
                          <span className="text-sm text-indigo-600 font-medium">
                            {guide.readTime}
                          </span>
                        </div>
                        <FiArrowRight className="text-gray-400 ml-4" size={16} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h2>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <nav className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.05 * index }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <span className="text-gray-700 group-hover:text-indigo-600">
                          {link.title}
                        </span>
                        <FiArrowRight className="text-gray-400 group-hover:text-indigo-600" size={14} />
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Help Section */}
              <motion.div
                className="mt-8 bg-indigo-50 rounded-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                  Need Help?
                </h3>
                <p className="text-indigo-700 mb-4">
                  Can&apos;t find what you&apos;re looking for? Our community is here to help.
                </p>
                <div className="space-y-2">
                  <a
                    href="https://github.com/shresthjindal28/agentic-ai-library/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    <span>Join Discussions</span>
                    <FiExternalLink className="ml-1" size={14} />
                  </a>
                  <a
                    href="https://github.com/shresthjindal28/agentic-ai-library/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                  >
                    <span>Report Issues</span>
                    <FiExternalLink className="ml-1" size={14} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}