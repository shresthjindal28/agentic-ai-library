'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiCpu, FiSearch, FiFilter, FiStar, FiCode, FiZap } from 'react-icons/fi';
import Navbar from '@/components/Navbar';

interface Agent {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  rating: number;
  downloads: number;
  tags: string[];
}

const mockAgents: Agent[] = [
  {
    id: 'conversation-chain',
    name: 'Conversation Chain',
    description: 'A conversational AI agent that maintains context across multiple interactions.',
    category: 'Conversational',
    difficulty: 'Beginner',
    rating: 4.8,
    downloads: 1250,
    tags: ['conversation', 'context', 'chat']
  },
  {
    id: 'structured-output',
    name: 'Structured Output',
    description: 'Generate structured data outputs in JSON, XML, or custom formats.',
    category: 'Data Processing',
    difficulty: 'Intermediate',
    rating: 4.6,
    downloads: 890,
    tags: ['json', 'xml', 'structured', 'parsing']
  },
  {
    id: 'web-scraper',
    name: 'Web Scraper Agent',
    description: 'Intelligent web scraping with content extraction and data cleaning.',
    category: 'Web Automation',
    difficulty: 'Advanced',
    rating: 4.9,
    downloads: 2100,
    tags: ['scraping', 'web', 'automation', 'extraction']
  },
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    description: 'Automated code review with suggestions for improvements and best practices.',
    category: 'Development',
    difficulty: 'Intermediate',
    rating: 4.7,
    downloads: 1680,
    tags: ['code', 'review', 'quality', 'suggestions']
  },
  {
    id: 'sentiment-analyzer',
    name: 'Sentiment Analyzer',
    description: 'Analyze sentiment and emotions in text with detailed insights.',
    category: 'Text Analysis',
    difficulty: 'Beginner',
    rating: 4.5,
    downloads: 950,
    tags: ['sentiment', 'emotion', 'analysis', 'nlp']
  },
  {
    id: 'document-qa',
    name: 'Document Q&A',
    description: 'Question-answering system for documents with context-aware responses.',
    category: 'Document Processing',
    difficulty: 'Advanced',
    rating: 4.8,
    downloads: 1420,
    tags: ['qa', 'documents', 'context', 'search']
  }
];

const categories = ['All', 'Conversational', 'Data Processing', 'Web Automation', 'Development', 'Text Analysis', 'Document Processing'];
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [filteredAgents, setFilteredAgents] = useState(mockAgents);

  useEffect(() => {
    let filtered = mockAgents;

    if (searchTerm) {
      filtered = filtered.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(agent => agent.category === selectedCategory);
    }

    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(agent => agent.difficulty === selectedDifficulty);
    }

    setFilteredAgents(filtered);
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

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
              AI Agent Library
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and integrate powerful AI agents into your applications. 
              From conversational bots to data processors, find the perfect agent for your needs.
            </p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <FiFilter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none bg-white"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>
                      {difficulty === 'All' ? 'All Levels' : difficulty}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-600">
              Showing {filteredAgents.length} of {mockAgents.length} agents
            </p>
          </motion.div>

          {/* Agents Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <Link href={`/agents/${agent.id}`}>
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                          <FiCpu className="text-indigo-600" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-lg">
                            {agent.name}
                          </h3>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(agent.difficulty)}`}>
                            {agent.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {agent.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {agent.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {agent.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{agent.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <FiStar className="text-yellow-400 mr-1" size={14} />
                        <span>{agent.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <FiZap className="mr-1" size={14} />
                        <span>{agent.downloads.toLocaleString()} uses</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredAgents.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <FiSearch className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No agents found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}