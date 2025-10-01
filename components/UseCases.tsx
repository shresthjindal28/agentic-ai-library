import { motion } from 'framer-motion';
import { FiFileText, FiMessageCircle, FiSearch, FiSettings } from 'react-icons/fi';
import Image from 'next/image';

const UseCases = () => {
  const cases = [
    {
      id: 'workflows',
      title: 'Automated Workflows',
      description: 'Streamline repetitive tasks and business processes with intelligent automation.',
      icon: <FiSettings className="h-8 w-8" />,
      color: 'blue',
      image: '/images/workflow-automation.svg'
    },
    {
      id: 'research',
      title: 'AI-Powered Research',
      description: 'Accelerate discovery and analysis with agents that process vast amounts of information.',
      icon: <FiSearch className="h-8 w-8" />,
      color: 'purple',
      image: '/images/ai-research.svg'
    },
    {
      id: 'content',
      title: 'Dynamic Content Creation',
      description: 'Generate high-quality text, code, and creative content tailored to your needs.',
      icon: <FiFileText className="h-8 w-8" />,
      color: 'green',
      image: '/images/content-creation.svg'
    },
    {
      id: 'chatbots',
      title: 'Intelligent Chatbots',
      description: 'Deploy conversational agents that understand context and provide helpful responses.',
      icon: <FiMessageCircle className="h-8 w-8" />,
      color: 'orange',
      image: '/images/chatbot.svg'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    green: 'bg-green-100 text-green-600 border-green-200',
    orange: 'bg-orange-100 text-orange-600 border-orange-200'
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
            What You Can Build
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Explore real-world applications powered by our AI agents
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              className={`bg-white rounded-lg border-2 ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ')[2]} overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="p-6">
                <div className={`inline-flex items-center justify-center p-3 rounded-md ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ').slice(0, 2).join(' ')}`}>
                  {useCase.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">{useCase.title}</h3>
                <p className="mt-2 text-base text-gray-500">{useCase.description}</p>
              </div>
              <div className="h-48 bg-gray-100 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  {/* Placeholder for actual images */}
                  <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
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
          <a 
            href="/use-cases" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
          >
            Explore All Use Cases
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCases;