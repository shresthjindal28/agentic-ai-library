import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';
import { FiCpu, FiActivity, FiZap, FiMail } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Neural Hub', href: '/', icon: <RiBrainLine className="w-4 h-4" /> },
      { name: 'AI Agents', href: '/agents', icon: <RiRobot2Line className="w-4 h-4" /> },
      { name: 'Use Cases', href: '/use-cases', icon: <FiCpu className="w-4 h-4" /> },
      { name: 'Documentation', href: '/documentation', icon: <FiActivity className="w-4 h-4" /> },
      { name: 'Neural Pricing', href: '/pricing', icon: <FiZap className="w-4 h-4" /> },
      { name: 'AI Blog', href: '/blog', icon: <HiOutlineCpuChip className="w-4 h-4" /> },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'AI Ethics', href: '/ethics' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/ai-agent-library',
        icon: FaGithub,
        color: 'hover:text-gray-300'
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/ai-agent-library',
        icon: FaDiscord,
        color: 'hover:text-purple-400'
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/ai_agent_lib',
        icon: FaTwitter,
        color: 'hover:text-cyan-400'
      },
    ],
  };

  return (
    <footer className="relative bg-black border-t border-cyan-400/20 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Neural Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl shadow-lg">
                <RiBrainLine className="w-7 h-7 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl opacity-20 animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Library
                </h3>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Neural Network</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Empowering developers with intelligent AI agents and neural computing capabilities for the next generation of applications.
            </p>
            
            {/* Neural Activity Indicator */}
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <FiActivity className="w-4 h-4 text-cyan-400" />
              <span>Neural Status:</span>
              <span className="text-green-400 font-semibold">Active</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <FiCpu className="w-5 h-5 text-cyan-400 mr-2" />
              Neural Navigation
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {navigation.main.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className="group flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 py-2"
                  >
                    <div className="text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-bold text-white mb-6 flex items-center">
              <FiMail className="w-5 h-5 text-purple-400 mr-2" />
              Neural Updates
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Stay connected with the latest AI developments and neural network innovations.
            </p>
            <div className="space-y-3">
              <motion.button
                className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-xl text-cyan-300 hover:text-white hover:border-cyan-400/60 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe to Neural Feed
              </motion.button>
              <motion.button
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-300 hover:text-white hover:border-gray-600/50 transition-all duration-300 text-sm font-medium"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Join AI Community
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {navigation.social.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center w-12 h-12 bg-gray-800/50 border border-gray-700/50 rounded-xl text-gray-400 ${item.color} transition-all duration-300 hover:border-cyan-400/30 hover:bg-gray-700/50`}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800/50 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            
            {/* Legal Links */}
            <motion.div
              className="flex flex-wrap justify-center md:justify-start space-x-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {navigation.legal.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="text-center md:text-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} AI Agent Library. 
                <span className="text-cyan-400 ml-1">Neural Intelligence Unleashed.</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Powered by Advanced Neural Networks
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scan Line Effect */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-pulse" />
      </div>
    </footer>
  );
};

export default Footer;