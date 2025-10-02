import { motion } from 'framer-motion';
import { FiCheckCircle, FiCode, FiPackage, FiZap, FiCpu, FiActivity } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP animations for step cards
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
      gsap.fromTo(card, 
        { 
          y: 60,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: index * 0.3,
          ease: "power3.out"
        }
      );
    });

    // Floating animation for data particles
    const particles = document.querySelectorAll('.data-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: `random(-25, 25)`,
        x: `random(-20, 20)`,
        rotation: `random(-360, 360)`,
        duration: `random(5, 10)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.4
      });
    });

    // Code block typing animation
    const codeBlocks = document.querySelectorAll('.code-block');
    codeBlocks.forEach((block, index) => {
      gsap.fromTo(block, 
        { 
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: index * 0.5 + 1,
          ease: "power2.out"
        }
      );
    });
  }, []);
  const steps = [
    {
      id: 1,
      title: 'Select Neural Agent',
      description: 'Browse our advanced AI library and choose the neural agent that perfectly matches your computational needs.',
      icon: <RiRobot2Line className="h-8 w-8" />,
      color: 'cyan',
      code: 'agent = library.select("code-assistant")'
    },
    {
      id: 2,
      title: 'Initialize Connection',
      description: 'Establish a secure neural link with just a few lines of code using our advanced API integration.',
      icon: <FiCode className="h-8 w-8" />,
      color: 'purple',
      code: 'agent.initialize(api_key="your_key")'
    },
    {
      id: 3,
      title: 'Deploy Intelligence',
      description: 'Launch your AI-powered application with confidence and watch it scale intelligently as demand grows.',
      icon: <FiZap className="h-8 w-8" />,
      color: 'blue',
      code: 'app.deploy(agent, auto_scale=True)'
    },
    {
      id: 4,
      title: 'Experience Results',
      description: 'Monitor real-time performance as your application delivers intelligent responses and adaptive solutions.',
      icon: <FiActivity className="h-8 w-8" />,
      color: 'green',
      code: 'monitor.track(performance=True)'
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="data-particle absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * 40 - 20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* AI Process Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HiOutlineCpuChip className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
              Neural Process
            </span>
            <div className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Deploy intelligent AI agents in minutes with our streamlined neural integration process
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent mt-1" />
          </div>
          
          {/* Neural Connection Nodes */}
          <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between transform -translate-y-1/2 px-16">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-cyan-400/50 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              />
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              return (
                <motion.div
                  key={step.id}
                  className="relative z-10 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -12, scale: 1.02 }}
                >
                  <div className="step-card relative p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl hover:border-cyan-400/30 transition-all duration-500 h-full overflow-hidden">
                    {/* Neural Pattern Overlay */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        {step.id}
                      </div>

                      {/* Icon container with enhanced effects */}
                      <div className="relative mb-6">
                        <div className={`flex items-center justify-center w-20 h-20 rounded-2xl ${colors.bg} ${colors.border} border transition-all duration-500 group-hover:scale-110 group-hover:${colors.glow} shadow-lg`}>
                          <div className={colors.text}>
                            {step.icon}
                          </div>
                        </div>
                        {/* Pulse Ring */}
                        <div className={`absolute inset-0 rounded-2xl ${colors.border} border opacity-0 group-hover:opacity-100 animate-ping`} />
                        {/* Rotating Ring */}
                        <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 opacity-0 group-hover:opacity-100 animate-spin" style={{ animationDuration: '3s' }} />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Code Preview */}
                      <div className="code-block w-full p-3 bg-black/50 rounded-lg border border-gray-800/50 group-hover:border-cyan-400/30 transition-colors duration-300">
                        <code className={`text-xs font-mono ${colors.text} group-hover:text-cyan-300 transition-colors duration-300`}>
                          {step.code}
                        </code>
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-4 w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${colors.gradient.replace('/10', '/50')}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        />
                      </div>
                    </div>

                    {/* Scan Line Effect */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative p-8 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 border border-cyan-400/20 rounded-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl" />
            <div className="relative z-10">
              <RiBrainLine className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Ready to Deploy Intelligence?</h3>
              <p className="text-gray-300 mb-6">Join thousands of developers building the future with AI agents</p>
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Building Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;