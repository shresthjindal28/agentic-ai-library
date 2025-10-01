import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const DeveloperExperience = () => {
  const pythonCode = `from ai_agent_lib import AIAgentClient

# Initialize the client with your API key
client = AIAgentClient(api_key="YOUR_API_KEY")

# Create an instance of the code generation agent
code_agent = client.create_agent("code-assistant")

# Run the agent with your prompt
response = code_agent.run(
    prompt="Create a React component that displays a user profile",
    options={"language": "typescript", "framework": "react"}
)

# Use the generated code in your application
print(response.code)`;

  const javascriptCode = `import { AIAgentClient } from 'ai-agent-lib';

// Initialize the client with your API key
const client = new AIAgentClient({
  apiKey: 'YOUR_API_KEY'
});

// Create an instance of the data analysis agent
const dataAgent = client.createAgent('data-analyst');

// Process data with the agent
async function analyzeData(dataset) {
  const result = await dataAgent.run({
    data: dataset,
    task: 'Find patterns and generate visualizations',
    format: 'json'
  });
  
  return result;
}`;

  const features = [
    'Comprehensive SDK support for multiple languages',
    'Detailed documentation with examples',
    'Robust error handling and rate limiting',
    'Streaming responses for real-time applications',
    'Type definitions for TypeScript and Python',
    'Customizable agent parameters'
  ];

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
            Developer-First Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Built by developers, for developers
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Simple, Powerful API</h3>
            
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center px-4 py-2 bg-gray-800">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">Python Example</div>
              </div>
              <SyntaxHighlighter 
                language="python" 
                style={atomDark}
                customStyle={{ margin: 0, padding: '1rem' }}
              >
                {pythonCode}
              </SyntaxHighlighter>
            </div>

            <div className="mt-8 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="flex items-center px-4 py-2 bg-gray-800">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400">JavaScript Example</div>
              </div>
              <SyntaxHighlighter 
                language="javascript" 
                style={atomDark}
                customStyle={{ margin: 0, padding: '1rem' }}
              >
                {javascriptCode}
              </SyntaxHighlighter>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Everything You Need</h3>
            
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <FiCheck className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <a 
                href="/docs/api" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                View API Documentation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperExperience;