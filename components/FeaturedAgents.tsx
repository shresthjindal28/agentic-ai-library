"use client"

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiMessageSquare, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

const FeaturedAgents = () => {
  const agents = [
    {
      id: 'code-assistant',
      name: 'Code Generation Agent',
      description: 'Writes, reviews, and refactors code across multiple languages with best practices and patterns.',
      icon: <FiCode className="h-6 w-6" />,
      color: 'blue',
      link: '/agents/code-assistant'
    },
    {
      id: 'data-analyst',
      name: 'Data Analysis Agent',
      description: 'Processes, visualizes, and extracts insights from structured and unstructured data.',
      icon: <FiDatabase className="h-6 w-6" />,
      color: 'green',
      link: '/agents/data-analyst'
    },
    {
      id: 'customer-support',
      name: 'Customer Support Bot',
      description: 'Handles inquiries, troubleshoots issues, and provides personalized assistance 24/7.',
      icon: <FiMessageSquare className="h-6 w-6" />,
      color: 'purple',
      link: '/agents/customer-support'
    },
    {
      id: 'research-assistant',
      name: 'Research Assistant',
      description: 'Finds, summarizes, and synthesizes information from multiple sources for comprehensive insights.',
      icon: <FiSearch className="h-6 w-6" />,
      color: 'orange',
      link: '/agents/research-assistant'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600'
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Agents
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore our most popular AI agents ready to power your applications
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex-1">
                <div className={`inline-flex items-center justify-center p-3 rounded-md ${colorClasses[agent.color as keyof typeof colorClasses]}`}>
                  {agent.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{agent.name}</h3>
                <p className="mt-2 text-base text-gray-500">{agent.description}</p>
              </div>
              <div className="bg-gray-50 px-6 py-4">
                <Link href={agent.link} className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Learn more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link 
            href="/agents" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            View All Agents
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAgents;