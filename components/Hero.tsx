'use client';

import { SignUpButton } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiPlay, FiStar, FiZap, FiCode, FiTrendingUp, FiCpu, FiActivity } from 'react-icons/fi';
import {  RiBrainLine } from 'react-icons/ri';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const lightTextRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: RiBrainLine, title: 'Neural Networks', description: 'Advanced AI reasoning capabilities' },
    { icon: FiCpu, title: 'Edge Computing', description: 'Lightning-fast local processing' },
    { icon: FiActivity, title: 'Real-time Learning', description: 'Adaptive intelligence that evolves' }
  ];

  const backgroundTexts = [
    'ARTIFICIAL INTELLIGENCE',
    'MACHINE LEARNING',
    'NEURAL NETWORKS',
    'DEEP LEARNING',
    'AUTONOMOUS AGENTS',
    'COGNITIVE COMPUTING',
    'PREDICTIVE ANALYTICS',
    'NATURAL LANGUAGE',
    'COMPUTER VISION',
    'REINFORCEMENT LEARNING'
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  useEffect(() => {
    // Enhanced GSAP animations for floating particles
    const particles = document.querySelectorAll('.floating-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: `random(-30, 30)`,
        x: `random(-20, 20)`,
        rotation: `random(-180, 180)`,
        duration: `random(3, 6)`,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.2
      });
    });

    // Neural network lines animation
    const lines = document.querySelectorAll('.neural-line');
    lines.forEach((line, index) => {
      gsap.fromTo(line, 
        { 
          scaleX: 0,
          opacity: 0 
        },
        {
          scaleX: 1,
          opacity: 0.3,
          duration: 2,
          delay: index * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        }
      );
    });

    // Background text reveal animation
    const bgTexts = document.querySelectorAll('.bg-text');
    bgTexts.forEach((text, index) => {
      gsap.fromTo(text,
        {
          opacity: 0,
          y: 50,
          rotationX: -90
        },
        {
          opacity: 0.1,
          y: 0,
          rotationX: 0,
          duration: 1.5,
          delay: index * 0.2,
          ease: "back.out(1.7)"
        }
      );
    });

    // Glitch effect for main heading
    const heading = document.querySelector('.glitch-text');
    if (heading) {
      gsap.to(heading, {
        textShadow: "2px 0 #ff00ff, -2px 0 #00ffff",
        duration: 0.1,
        repeat: -1,
        yoyo: true,
        repeatDelay: 3,
        ease: "power2.inOut"
      });
    }

    // Typewriter effect for subtitle
    const subtitle = document.querySelector('.typewriter-text');
    if (subtitle) {
      const text = subtitle.textContent || '';
      subtitle.textContent = '';
      
      gsap.to(subtitle, {
        duration: text.length * 0.05,
        ease: "none",
        onUpdate: function() {
          const progress = this.progress();
          const currentLength = Math.floor(progress * text.length);
          subtitle.textContent = text.substring(0, currentLength);
        }
      });
    }

    // Floating animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
      gsap.to(card, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: index * 0.3
      });
    });

    // Pulse animation for stats numbers
    const statsNumbers = document.querySelectorAll('.stat-number');
    statsNumbers.forEach((number, index) => {
      gsap.fromTo(number,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: "back.out(1.7)"
        }
      );
    });

    // Continuous rotation for AI particles
    const aiParticles = document.querySelectorAll('.ai-particle');
    aiParticles.forEach((particle) => {
      gsap.to(particle, {
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: "none"
      });
    });

  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* AI-themed Background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]" />
        
        {/* Interactive light effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,255,255,0.06), transparent 40%)`
          }}
        />
      </div>

      {/* Background Text Elements */}
      <div ref={lightTextRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundTexts.map((text, index) => (
          <div
            key={index}
            className="bg-text absolute text-6xl md:text-8xl font-black text-cyan-400 select-none"
            style={{
              left: `${(index * 23) % 100}%`,
              top: `${(index * 17) % 100}%`,
              transform: `rotate(${(index * 15) % 360}deg)`,
              filter: `blur(${Math.abs(mousePosition.x - (index * 23) % 100) > 200 ? '2px' : '0px'})`,
              opacity: Math.abs(mousePosition.x - (index * 23) % 100) < 300 ? 0.08 : 0.02
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* Floating AI Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="floating-particle ai-particle absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {[...Array(8)].map((_, i) => (
          <line
            key={i}
            className="neural-line"
            x1={`${i * 12.5}%`}
            y1="0%"
            x2={`${100 - i * 12.5}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 text-sm text-cyan-300 backdrop-blur-sm"
           >
             <RiBrainLine className="w-4 h-4 mr-2 animate-pulse" />
             <span className="font-medium">Next-Gen AI Agent Library</span>
             <div className="ml-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
           </motion.div> */}

          {/* Main Heading with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-8xl font-black leading-tight relative"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                INTELLIGENT
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent opacity-50 animate-pulse">
                INTELLIGENT
              </span>
            </span>
            <br />
            <span className="relative inline-block mt-4">
              <span className="text-white font-light">AI AGENTS</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 blur-lg animate-pulse" />
            </span>
          </motion.h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Deploy <span className="text-cyan-400 font-medium">autonomous AI agents</span> that think, learn, and adapt. 
            <br />
            The future of intelligent automation is here.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
          >
            <SignUpButton mode="modal">
              <motion.button
                className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <span className="relative z-10 flex items-center">
                   <RiBrainLine className="mr-3 w-5 h-5" />
                   Initialize AI Agent
                   <FiArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-200" />
                 </span>
                 <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              </motion.button>
            </SignUpButton>

            <Link href="/agents">
              <motion.button
                className="group px-10 py-5 border-2 border-cyan-400/30 hover:border-cyan-400/60 text-cyan-300 hover:text-white font-bold rounded-2xl backdrop-blur-sm hover:bg-cyan-400/5 transition-all duration-300 flex items-center relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay className="mr-3 w-5 h-5" />
                <span>Neural Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
            </Link>
          </motion.div>

          {/* AI Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 max-w-5xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-400/20 rounded-3xl hover:border-cyan-400/40 transition-all duration-500 group cursor-pointer backdrop-blur-sm overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
              >
                <div className="flex flex-col items-center text-center space-y-6 relative z-10">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${
                    hoveredFeature === index 
                      ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-400 scale-110' 
                      : 'bg-gray-800/50 text-gray-400'
                  }`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{feature.description}</p>
                </div>
                
                {/* Animated background */}
                <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${
                  hoveredFeature === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_70%)]" />
                </div>

                {/* Circuit pattern */}
                <div className="absolute top-4 right-4 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 64 64" className="w-full h-full">
                    <path d="M8 8h48v48H8z" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="16" cy="16" r="2" fill="currentColor"/>
                    <circle cx="48" cy="16" r="2" fill="currentColor"/>
                    <circle cx="16" cy="48" r="2" fill="currentColor"/>
                    <circle cx="48" cy="48" r="2" fill="currentColor"/>
                    <path d="M16 16h32M16 48h32M16 16v32M48 16v32" stroke="currentColor" strokeWidth="1"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI Stats with Glowing Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-12 pt-20 text-center"
          >
            {[
              { value: '50K+', label: 'AI Agents Deployed', color: 'from-cyan-400 to-blue-500' },
              { value: '99.9%', label: 'Neural Uptime', color: 'from-purple-400 to-pink-500' },
              { value: '10ms', label: 'Response Time', color: 'from-green-400 to-cyan-500' }
            ].map((stat, index) => (
              <div key={index} className="space-y-3 group">
                <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative`}>
                  {stat.value}
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent opacity-50 animate-pulse`}>
                    {stat.value}
                  </div>
                </div>
                <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
                <div className={`w-16 h-0.5 mx-auto bg-gradient-to-r ${stat.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade with circuit pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>
    </div>
  );
}
