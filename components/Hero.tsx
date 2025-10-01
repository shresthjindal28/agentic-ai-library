'use client';

import { SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiCode, FiCpu, FiSend, FiZap, FiShield } from 'react-icons/fi';

const Hero = () => {
  const [prompt, setPrompt] = useState('');
  const [agentResponse, setAgentResponse] = useState<string[]>([
    "Initializing AI agent...",
    "Loading language model...",
    "Agent ready. How can I help you today?"
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isLoading) return;

    setIsLoading(true);
    setAgentResponse(prev => [...prev, `> User: ${prompt}`]);

    setTimeout(() => {
      let response = '';

      if (prompt.toLowerCase().includes('weather')) {
        response =
          'I can fetch real-time weather data using our Weather API agent. Example:\n\nconst weather = await agent.run("weather", { location: "New York" });';
      } else if (
        prompt.toLowerCase().includes('code') ||
        prompt.toLowerCase().includes('function')
      ) {
        response =
          'Here’s a sample function to help you get started:\n\nasync function processData(input) {\n  const result = await agent.analyze(input);\n  return result.summary;\n}';
      } else if (
        prompt.toLowerCase().includes('api') ||
        prompt.toLowerCase().includes('integrate')
      ) {
        response =
          'Integration is simple with our SDK:\n\nimport { Agent } from "ai-lib";\n\nconst agent = new Agent("YOUR_API_KEY");\nconst result = await agent.run("task");';
      } else {
        response =
          'I can help you build and deploy AI agents for various tasks. Would you like to see examples of our pre-built agents or learn how to create custom ones?';
      }

      setAgentResponse(prev => [...prev, response]);
      setPrompt('');
      setIsLoading(false);
    }, 1500);
  };

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
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: 0.5,
            }}
          />
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative z-10">
          {/* Left Side: Text */}
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
                Build, Integrate, and
              </motion.span>
              <motion.span
                className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Deploy AI Agents Instantly
              </motion.span>
            </motion.h1>

            <motion.p
              className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Access a curated library of pre-built autonomous agents for any
              task. Seamlessly integrate powerful AI capabilities into your
              applications with just a few lines of code.
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
                    Get Started for Free
                    <FiArrowRight className="ml-2" />
                  </motion.button>
                </SignUpButton>

                <Link href="/agents">
                  <motion.button
                    className="inline-flex items-center justify-center px-6 py-3 border border-indigo-200 text-base font-medium rounded-lg text-indigo-700 bg-white hover:bg-indigo-50 shadow-sm hover:shadow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore the Library
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
                  <FiZap className="h-6 w-6" />
                </div>
                <p className="ml-3 text-sm text-gray-600">Instant Deployment</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-md bg-green-100 text-green-600">
                  <FiShield className="h-6 w-6" />
                </div>
                <p className="ml-3 text-sm text-gray-600">Enterprise Security</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Terminal Simulation */}
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
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="flex flex-col h-96 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                  <div className="flex items-center p-4 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-400">
                      Try an AI Agent
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 font-mono text-sm">
                    {agentResponse.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.3 }}
                        className={`mb-2 ${
                          line.startsWith('>') ? 'text-blue-300' : 'text-green-400'
                        }`}
                      >
                        {line.startsWith('>') ? line : `> ${line}`}
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        className="flex items-center text-green-400"
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        &gt; Processing...
                      </motion.div>
                    )}
                  </div>

                  <form
                    onSubmit={handlePromptSubmit}
                    className="p-4 border-t border-gray-700"
                  >
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={prompt}
                        onChange={e => setPrompt(e.target.value)}
                        placeholder="Ask about weather data, code generation, or API integration..."
                        className="flex-1 bg-gray-800 text-white placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                      />
                      <motion.button
                        type="submit"
                        className="ml-2 bg-blue-600 text-white p-2 rounded-lg disabled:opacity-50"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isLoading || !prompt.trim()}
                      >
                        <FiSend className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </form>
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
