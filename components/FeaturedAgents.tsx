"use client"

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiMessageSquare, FiSearch, FiArrowRight, FiCpu, FiActivity } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FeaturedAgents = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for agent cards
    const cards = document.querySelectorAll('.agent-card');
    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          y: 50,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power3.out"
        }
      );
    });

    // Floating animation for neural particles
    const particles = document.querySelectorAll('.neural-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: `random(-20, 20)`,
        x: `random(-15, 15)`,
        rotation: `random(-180, 180)`,
        duration: `random(4, 8)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3
      });
    });

    // Pulse animation for stats
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach((stat, index) => {
      gsap.to(stat, {
        scale: 1.1,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.5
      });
    });
  }, []);
  const agents = [
    {
      id: 'code-assistant',
      name: 'Code Generation Agent',
      description: 'Advanced neural network that writes, reviews, and refactors code across multiple languages with AI-powered best practices.',
      icon: <FiCode className="h-7 w-7" />,
      color: 'cyan',
      link: '/agents/code-assistant',
      stats: { accuracy: '98%', speed: '2.3s' }
    },
    {
      id: 'data-analyst',
      name: 'Data Analysis Agent',
      description: 'Intelligent data processor that visualizes and extracts deep insights from structured and unstructured datasets.',
      icon: <FiDatabase className="h-7 w-7" />,
      color: 'purple',
      link: '/agents/data-analyst',
      stats: { accuracy: '95%', speed: '1.8s' }
    },
    {
      id: 'customer-support',
      name: 'Customer Support Bot',
      description: 'Empathetic AI assistant that handles complex inquiries and provides personalized solutions 24/7 with human-like understanding.',
      icon: <FiMessageSquare className="h-7 w-7" />,
      color: 'blue',
      link: '/agents/customer-support',
      stats: { accuracy: '97%', speed: '0.9s' }
    },
    {
      id: 'research-assistant',
      name: 'Research Assistant',
      description: 'Cognitive AI that finds, analyzes, and synthesizes information from multiple sources for comprehensive research insights.',
      icon: <FiSearch className="h-7 w-7" />,
      color: 'green',
      link: '/agents/research-assistant',
      stats: { accuracy: '96%', speed: '3.1s' }
    }
  ];

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      glow: 'shadow-cyan-400/25',
      gradient: 'from-cyan-400/10 to-cyan-600/10'
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      glow: 'shadow-purple-400/25',
      gradient: 'from-purple-400/10 to-purple-600/10'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      glow: 'shadow-blue-400/25',
      gradient: 'from-blue-400/10 to-blue-600/10'
    },
    green: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-500/30',
      glow: 'shadow-green-400/25',
      gradient: 'from-green-400/10 to-green-600/10'
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Neural Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="neural-particle absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* AI Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <RiBrainLine className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
              Neural Agents
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2 animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Featured AI Agents
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our most advanced pre-built neural agents, engineered for seamless integration 
            and powered by cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent, index) => {
            const colors = colorClasses[agent.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group"
              >
                <Link href={agent.link}>
                  <div className="agent-card relative p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl hover:border-cyan-400/30 transition-all duration-500 h-full cursor-pointer overflow-hidden">
                    {/* Neural Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with Neural Ring */}
                      <div className="relative mb-6">
                        <div className={`inline-flex p-4 rounded-2xl ${colors.bg} ${colors.border} border transition-all duration-500 group-hover:scale-110 group-hover:${colors.glow} shadow-lg`}>
                          <div className={colors.text}>
                            {agent.icon}
                          </div>
                        </div>
                        {/* Pulse Ring */}
                        <div className={`absolute inset-0 rounded-2xl ${colors.border} border opacity-0 group-hover:opacity-100 animate-ping`} />
                      </div>

                      {/* Agent Info */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {agent.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {agent.description}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between items-center mb-6 p-3 bg-black/30 rounded-lg border border-gray-800/50">
                        <div className="text-center">
                          <div className={`stat-number text-sm font-bold ${colors.text}`}>{agent.stats.accuracy}</div>
                          <div className="text-xs text-gray-500">Accuracy</div>
                        </div>
                        <div className="w-px h-8 bg-gray-700" />
                        <div className="text-center">
                          <div className={`stat-number text-sm font-bold ${colors.text}`}>{agent.stats.speed}</div>
                          <div className="text-xs text-gray-500">Avg Speed</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center ${colors.text} text-sm font-semibold group-hover:text-cyan-300 transition-colors duration-300`}>
                          <FiActivity className="w-4 h-4 mr-2" />
                          <span>Initialize Agent</span>
                        </div>
                        <FiArrowRight className={`w-5 h-5 ${colors.text} group-hover:translate-x-2 group-hover:text-cyan-300 transition-all duration-300`} />
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/agents">
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 hover:border-cyan-400/50 text-gray-300 hover:text-white font-bold rounded-2xl backdrop-blur-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 flex items-center mx-auto overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="relative z-10 flex items-center">
                <HiOutlineCpuChip className="w-6 h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                <span>Explore All Neural Agents</span>
                <FiArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedAgents;