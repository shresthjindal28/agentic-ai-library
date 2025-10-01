import { motion } from 'framer-motion';
import { FiCheckCircle, FiCode, FiPackage, FiZap } from 'react-icons/fi';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose Your Agent',
      description: 'Browse our library and select the AI agent that best fits your needs.',
      icon: <FiPackage className="h-8 w-8" />,
      color: 'blue'
    },
    {
      id: 2,
      title: 'Integrate with API',
      description: 'Add a simple API call to your application with just a few lines of code.',
      icon: <FiCode className="h-8 w-8" />,
      color: 'indigo'
    },
    {
      id: 3,
      title: 'Deploy Your App',
      description: 'Launch your AI-powered application with confidence and scale as needed.',
      icon: <FiZap className="h-8 w-8" />,
      color: 'purple'
    },
    {
      id: 4,
      title: 'Enjoy the Results',
      description: 'Watch as your application delivers intelligent responses and solutions.',
      icon: <FiCheckCircle className="h-8 w-8" />,
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600'
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Get started with AI agents in minutes, not months
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-1/2 w-full h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid gap-8 md:grid-cols-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${colorClasses[step.color as keyof typeof colorClasses]} mb-4`}>
                      {step.icon}
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold mb-4">
                      {step.id}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-base text-gray-500 text-center">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;