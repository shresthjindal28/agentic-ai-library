import { motion } from 'framer-motion';
import { FiCheck, FiCpu, FiActivity, FiCode } from 'react-icons/fi';
import { RiBrainLine, RiRobot2Line } from 'react-icons/ri';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const DeveloperExperience = () => {
  const pythonCode = `from ai_agent_lib import AIAgentClient

# Initialize the neural client with your API key
client = AIAgentClient(api_key="YOUR_API_KEY")

# Create an instance of the advanced code generation agent
code_agent = client.create_agent("neural-code-assistant")

# Run the agent with enhanced AI capabilities
response = code_agent.run(
    prompt="Create a React component with AI-powered features",
    options={
        "language": "typescript", 
        "framework": "react",
        "ai_features": ["auto-optimization", "smart-suggestions"]
    }
)

# Deploy intelligent code in your application
print(response.optimized_code)`;

  const javascriptCode = `import { AIAgentClient } from 'ai-agent-lib';

// Initialize the neural client with your API key
const client = new AIAgentClient({
  apiKey: 'YOUR_API_KEY',
  neuralMode: true
});

// Create an instance of the intelligent data analysis agent
const dataAgent = client.createAgent('neural-data-analyst');

// Process data with advanced AI capabilities
async function analyzeDataWithAI(dataset) {
  const result = await dataAgent.run({
    data: dataset,
    task: 'Deep pattern analysis with neural insights',
    format: 'json',
    aiFeatures: ['predictive-modeling', 'anomaly-detection']
  });
  
  return result.insights;
}`;

  const features = [
    'Advanced neural SDK support for multiple languages',
    'AI-powered documentation with intelligent examples',
    'Robust error handling with predictive diagnostics',
    'Real-time streaming responses with neural optimization',
    'Smart type definitions for TypeScript and Python',
    'Adaptive agent parameters with machine learning'
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Floating Code Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan-400/20 text-xs font-mono"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['<AI/>', '{...}', '[]', '()', 'fn', 'AI'][Math.floor(Math.random() * 6)]}
          </motion.div>
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
          {/* Developer Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FiCode className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-sm font-semibold text-cyan-400 tracking-wider uppercase">
              Developer Experience
            </span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full ml-2 animate-pulse" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Built for Developers
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of AI development with our neural-powered SDK and intelligent tooling
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Python Code Example */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiRobot2Line className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-gray-400 font-mono">neural_python_agent.py</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400">Neural Mode Active</span>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <SyntaxHighlighter 
                    language="python" 
                    style={atomDark}
                    customStyle={{ 
                      margin: 0, 
                      padding: '1.5rem',
                      background: 'transparent',
                      fontSize: '0.875rem'
                    }}
                  >
                    {pythonCode}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>

            {/* JavaScript Code Example */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RiBrainLine className="w-4 h-4 text-purple-400" />
                      <span className="text-sm text-gray-400 font-mono">neural_js_agent.js</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                    <span className="text-xs text-purple-400">AI Enhanced</span>
                  </div>
                </div>
                
                {/* Code Content */}
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <SyntaxHighlighter 
                    language="javascript" 
                    style={atomDark}
                    customStyle={{ 
                      margin: 0, 
                      padding: '1.5rem',
                      background: 'transparent',
                      fontSize: '0.875rem'
                    }}
                  >
                    {javascriptCode}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            {/* Features Section */}
            <div className="relative p-8 bg-gray-900/50 backdrop-blur-xl border border-gray-800/50 rounded-2xl">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] rounded-2xl opacity-50" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <HiOutlineCpuChip className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Neural-Powered Features</h3>
                </div>
                
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start group"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 mr-4">
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-400/30 group-hover:bg-cyan-500/30 transition-colors duration-300">
                          <FiCheck className="h-4 w-4 text-cyan-400" />
                        </div>
                      </div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {feature}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <motion.div 
              className="relative p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/30 rounded-2xl backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] rounded-2xl" />
              
              <div className="relative z-10 text-center">
                <FiActivity className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Ready to Build with AI?</h4>
                <p className="text-gray-300 mb-6">Explore our comprehensive API documentation and start building intelligent applications today.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a 
                    href="/docs/api" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-xl hover:from-cyan-400 hover:to-purple-500 shadow-lg hover:shadow-cyan-400/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FiCode className="w-5 h-5 mr-2" />
                    View API Docs
                  </motion.a>
                  
                  <motion.a 
                    href="/docs/examples" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800/50 text-gray-300 font-semibold rounded-xl hover:bg-gray-700/50 hover:text-white border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RiBrainLine className="w-5 h-5 mr-2" />
                    See Examples
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;