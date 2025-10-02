import { motion } from 'framer-motion';
import { HiCheck as CheckIcon } from 'react-icons/hi';
import { FiCpu, FiActivity, FiZap } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import Link from 'next/link';

const Pricing = () => {
  const tiers = [
    {
      name: 'Neural Starter',
      id: 'tier-free',
      price: '$0',
      description: 'Perfect for exploring AI agent capabilities',
      features: [
        '5,000 neural computations per day',
        'Access to 3 basic AI agents',
        'Public API access with rate limiting',
        'Community support & documentation',
        'Basic analytics dashboard'
      ],
      cta: 'Start Neural Journey',
      mostPopular: false,
      icon: <RiRobot2Line className="w-6 h-6" />,
      color: 'cyan',
      badge: 'Free Forever'
    },
    {
      name: 'AI Developer',
      id: 'tier-developer',
      price: '$49',
      description: 'Advanced AI capabilities for serious developers',
      features: [
        '100,000 neural computations per month',
        'Access to all standard AI agents',
        'Advanced API key management',
        'Priority email support',
        'Real-time usage analytics',
        'Webhook integrations',
        'Custom agent parameters'
      ],
      cta: 'Upgrade to AI Pro',
      mostPopular: true,
      icon: <RiBrainLine className="w-6 h-6" />,
      color: 'purple',
      badge: 'Most Popular'
    },
    {
      name: 'Neural Enterprise',
      id: 'tier-enterprise',
      price: 'Custom',
      description: 'Enterprise-grade AI infrastructure and support',
      features: [
        'Unlimited neural computations',
        'Access to all premium AI agents',
        'Custom neural agent development',
        'Dedicated AI support team',
        'SLA guarantees & uptime monitoring',
        'On-premise deployment options',
        'Advanced security & compliance',
        'White-label solutions'
      ],
      cta: 'Contact AI Specialists',
      mostPopular: false,
      icon: <HiOutlineCpuChip className="w-6 h-6" />,
      color: 'blue',
      badge: 'Enterprise'
    },
  ];

  const colorClasses = {
    cyan: {
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      border: 'border-cyan-500/30',
      glow: 'shadow-cyan-400/25',
      gradient: 'from-cyan-400/10 to-cyan-600/10',
      button: 'from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500'
    },
    purple: {
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      border: 'border-purple-500/30',
      glow: 'shadow-purple-400/25',
      gradient: 'from-purple-400/10 to-purple-600/10',
      button: 'from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-400',
      border: 'border-blue-500/30',
      glow: 'shadow-blue-400/25',
      gradient: 'from-blue-400/10 to-blue-600/10',
      button: 'from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500'
    }
  };

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Pricing Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15],
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
          {/* Pricing Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-400/30 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiZap className="w-5 h-5 text-purple-400 mr-2" />
            <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
              Neural Pricing
            </span>
            <div className="w-2 h-2 bg-purple-400 rounded-full ml-2 animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Simple, Intelligent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Choose the AI plan that scales with your neural computing needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {tiers.map((tier, index) => {
            const colors = colorClasses[tier.color as keyof typeof colorClasses];
            return (
              <motion.div
                key={tier.id}
                className={`relative group ${tier.mostPopular ? 'md:-mt-8' : ''}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className={`relative p-8 bg-gray-900/50 backdrop-blur-xl border ${tier.mostPopular ? 'border-purple-400/50' : 'border-gray-800/50'} rounded-2xl hover:border-cyan-400/30 transition-all duration-500 h-full overflow-hidden`}>
                  {/* Neural Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Popular Badge */}
                  {tier.mostPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-xs font-bold text-white shadow-lg">
                        {tier.badge}
                      </div>
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${colors.bg} ${colors.border} border`}>
                          <div className={colors.text}>
                            {tier.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                          {!tier.mostPopular && (
                            <span className="text-xs text-gray-400 uppercase tracking-wider">{tier.badge}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-black text-white">{tier.price}</span>
                        {tier.price !== 'Custom' && (
                          <span className="ml-2 text-lg font-semibold text-gray-400">/month</span>
                        )}
                      </div>
                      <p className="mt-2 text-gray-400 leading-relaxed">{tier.description}</p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-4 mb-8 flex-1">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex}
                          className="flex items-start group/item"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                        >
                          <div className="flex-shrink-0 mr-3">
                            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 group-hover/item:bg-green-500/30 transition-colors duration-300">
                              <CheckIcon className="h-3 w-3 text-green-400" />
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                            {feature}
                          </p>
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        href={tier.name === 'Neural Enterprise' ? '/contact' : '/signup'} 
                        className={`block w-full py-4 px-6 rounded-xl text-center font-bold transition-all duration-300 ${
                          tier.mostPopular
                            ? `bg-gradient-to-r ${colors.button} text-white shadow-lg hover:shadow-purple-400/25`
                            : `bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50`
                        }`}
                      >
                        {tier.cta}
                      </Link>
                    </motion.div>

                    {/* Neural Activity Indicator */}
                    <div className="mt-6 flex items-center justify-center space-x-2">
                      <FiActivity className={`w-4 h-4 ${colors.text}`} />
                      <span className="text-xs text-gray-400">Neural Activity: Active</span>
                      <div className={`w-2 h-2 ${colors.bg} rounded-full animate-pulse`} />
                    </div>
                  </div>

                  {/* Scan Line Effect */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced FAQ Section */}
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
              <FiCpu className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Need Custom Neural Solutions?</h3>
              <p className="text-gray-300 mb-6">Our AI specialists can design custom neural architectures for your specific use case</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule AI Consultation
                </motion.button>
                <motion.button
                  className="px-8 py-3 bg-gray-800/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Pricing FAQ
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;