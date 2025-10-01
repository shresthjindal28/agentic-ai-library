'use client';

import { SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiCpu, FiDatabase } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.div 
            className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
        </div>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative z-10">
          <motion.div 
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Build intelligent
              </motion.span>
              <motion.span 
                className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                AI agents with ease
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Explore our library of pre-built AI agents powered by LangChain. Learn how to create, customize, and deploy intelligent agents for your applications.
            </motion.p>
            
            <motion.div 
              className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <SignUpButton mode="modal">
                  <motion.button 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get started
                    <FiArrowRight className="ml-2" />
                  </motion.button>
                </SignUpButton>
                
                <Link href="/agents">
                  <motion.button 
                    className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-lg text-indigo-700 bg-white hover:bg-indigo-50 shadow-sm hover:shadow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse agents
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            {/* Feature highlights */}
            <motion.div 
              className="mt-12 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-blue-100 text-blue-600">
                  <FiCpu className="h-6 w-6" />
                </div>
                <p className="ml-3 text-sm text-gray-600">Advanced AI Models</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-indigo-100 text-indigo-600">
                  <FiCode className="h-6 w-6" />
                </div>
                <p className="ml-3 text-sm text-gray-600">Easy Integration</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-purple-100 text-purple-600">
                  <FiDatabase className="h-6 w-6" />
                </div>
                <p className="ml-3 text-sm text-gray-600">Scalable Architecture</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative mx-auto w-full">
              <motion.div 
                className="relative block w-full bg-white rounded-2xl overflow-hidden shadow-xl"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <div className="flex flex-col h-72 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="ml-4 text-xs text-gray-400">AI Agent Terminal</div>
                    </div>
                    
                    <div className="font-mono text-sm text-green-400">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                      >
                        &gt; Initializing AI agent...
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8 }}
                      >
                        &gt; Loading language model...
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.4 }}
                      >
                        &gt; Agent ready. How can I help you today?
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3.0 }}
                        className="flex items-center"
                      >
                        <span className="mr-2">_</span>
                        <motion.div 
                          className="h-4 w-2 bg-green-400"
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;