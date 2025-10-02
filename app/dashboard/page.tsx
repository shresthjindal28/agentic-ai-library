'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCpu, 
  FiUsers, 
  FiActivity, 
  FiClock,
  FiArrowUp,
  FiArrowDown
} from 'react-icons/fi';

export default function DashboardPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  // Sample data for dashboard
  const stats = [
    { 
      id: 'agents', 
      name: 'Active Agents', 
      value: '12', 
      icon: <FiCpu />, 
      change: '+3', 
      trend: 'up',
      color: 'blue'
    },
    { 
      id: 'users', 
      name: 'Team Members', 
      value: '8', 
      icon: <FiUsers />, 
      change: '+2', 
      trend: 'up',
      color: 'indigo'
    },
    { 
      id: 'requests', 
      name: 'API Requests', 
      value: '1,254', 
      icon: <FiActivity />, 
      change: '+12%', 
      trend: 'up',
      color: 'purple'
    },
    { 
      id: 'uptime', 
      name: 'Avg. Response Time', 
      value: '235ms', 
      icon: <FiClock />, 
      change: '-18ms', 
      trend: 'down',
      color: 'green'
    },
  ];

  const recentActivity = [
    { id: 1, event: 'Agent &quot;Conversation Chain&quot; was updated', time: '2 minutes ago' },
    { id: 2, event: 'New team member joined', time: '1 hour ago' },
    { id: 3, event: 'API key was created', time: '3 hours ago' },
    { id: 4, event: 'Documentation was updated', time: '1 day ago' },
    { id: 5, event: 'New agent &quot;Structured Output&quot; was created', time: '2 days ago' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening with your agents.</p>
      </div>

      {/* Stats Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
            variants={item}
          >
            <div className="flex items-center">
              <div className={`flex items-center justify-center h-12 w-12 rounded-md bg-${stat.color}-100 text-${stat.color}-600`}>
                {stat.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  <p className={`ml-2 flex items-center text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.trend === 'up' ? <FiArrowUp className="mr-1 h-4 w-4" /> : <FiArrowDown className="mr-1 h-4 w-4" />}
                    {stat.change}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <motion.div 
        className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0 h-3 w-3 rounded-full bg-indigo-500 mt-1.5"></div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Documentation and Resources */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Documentation</h2>
          <p className="text-gray-600 mb-4">Get started with our comprehensive guides and API references.</p>
          <ul className="space-y-2">
            <li>
              <a href="/dashboard/docs/getting-started" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Getting Started Guide
              </a>
            </li>
            <li>
              <a href="/dashboard/docs/api-reference" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                API Reference
              </a>
            </li>
            <li>
              <a href="/dashboard/docs/examples" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                Example Projects
              </a>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a 
              href="/dashboard/agents/new" 
              className="block w-full py-2 px-4 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium text-center transition-colors duration-200"
            >
              Create New Agent
            </a>
            <a 
              href="/dashboard/settings/api-keys" 
              className="block w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md text-sm font-medium text-center transition-colors duration-200"
            >
              Manage API Keys
            </a>
            <a 
              href="/dashboard/docs/examples" 
              className="block w-full py-2 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-md text-sm font-medium text-center transition-colors duration-200"
            >
              View Example Projects
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}