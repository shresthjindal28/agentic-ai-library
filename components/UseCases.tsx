import { motion } from 'framer-motion';
import { FiFileText, FiMessageCircle, FiSearch, FiSettings, FiArrowRight } from 'react-icons/fi';

const UseCases = () => {
  const cases = [
    {
      id: 'workflows',
      title: 'Automated Workflows',
      description: 'Streamline repetitive tasks and business processes with intelligent automation.',
      icon: <FiSettings className="h-8 w-8" />,
      color: 'blue'
    },
    {
      id: 'research',
      title: 'AI-Powered Research',
      description: 'Accelerate discovery and analysis with agents that process vast amounts of information.',
      icon: <FiSearch className="h-8 w-8" />,
      color: 'purple'
    },
    {
      id: 'content',
      title: 'Dynamic Content Creation',
      description: 'Generate high-quality text, code, and creative content tailored to your needs.',
      icon: <FiFileText className="h-8 w-8" />,
      color: 'green'
    },
    {
      id: 'chatbots',
      title: 'Intelligent Chatbots',
      description: 'Deploy conversational agents that understand context and provide helpful responses.',
      icon: <FiMessageCircle className="h-8 w-8" />,
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30'
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Powerful Use Cases</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how AI agents can transform your business processes and workflows
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative p-8 glass border border-gray-800/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300 h-full">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${colorClasses[useCase.color as keyof typeof colorClasses]} border transition-all duration-300 group-hover:scale-110`}>
                  {useCase.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {useCase.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {useCase.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                  <span>Learn more</span>
                  <FiArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            className="group px-8 py-4 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white font-semibold rounded-xl glass hover:bg-purple-500/5 transition-all duration-300 flex items-center mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Use Cases</span>
            <FiArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;