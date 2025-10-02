"use client";

import { motion } from "framer-motion";

export default function GettingStartedPage() {
  return (
    <motion.div
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-6">Getting Started</h1>

      <div className="prose prose-indigo max-w-none">
        <p className="lead text-lg text-gray-600 mb-8">
          Welcome to the AI Agent Library! This guide will help you get started
          with creating and deploying your first AI agent.
        </p>

        <p className="text-gray-600 mb-6">
          Let&apos;s get you started with building your first AI agent.
        </p>

        <h2>Installation</h2>
        <p>To use the AI Agent Library, you need to install our package:</p>

        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>npm install ai-agent-library</code>
        </pre>

        <h2>Creating Your First Agent</h2>
        <p>Creating an agent is simple. Here&apos;s a basic example:</p>

        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`import { ConversationChain } from 'ai-agent-library';

// Initialize the agent
const agent = new ConversationChain({
  llm: new OpenAI({ temperature: 0.7 }),
  memory: new BufferMemory()
});

// Use the agent
const response = await agent.call({
  input: "Hello, who are you?"
});

console.log(response.output);`}</code>
        </pre>

        <h2>Agent Types</h2>
        <p>The library provides several types of agents:</p>

        <ul>
          <li>
            <strong>Conversation Chain</strong> - A simple conversational agent
            that maintains memory of the conversation.
          </li>
          <li>
            <strong>Retrieval QA</strong> - Question answering with document
            retrieval capabilities.
          </li>
          <li>
            <strong>Summarization</strong> - Text summarization agent for
            condensing large documents.
          </li>
          <li>
            <strong>Agent Executor</strong> - Agent with tools and reasoning
            capabilities.
          </li>
          <li>
            <strong>Structured Output</strong> - Generate structured data from
            natural language.
          </li>
        </ul>

        <h2>Configuration</h2>
        <p>You can configure your agents with various options:</p>

        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto">
          <code>{`// Advanced configuration
const agent = new AgentExecutor({
  llm: new OpenAI({ 
    temperature: 0.5,
    model: "gpt-4"
  }),
  tools: [
    new Calculator(),
    new WebSearch()
  ],
  memory: new BufferMemory(),
  verbose: true
});`}</code>
        </pre>

        <h2>Next Steps</h2>
        <p>Now that you&apos;ve created your first agent, you can:</p>

        <ul>
          <li>
            Explore the{" "}
            <a
              href="/dashboard/docs/api-reference"
              className="text-indigo-600 hover:text-indigo-800"
            >
              API Reference
            </a>{" "}
            for detailed documentation
          </li>
          <li>
            Check out{" "}
            <a
              href="/dashboard/docs/examples"
              className="text-indigo-600 hover:text-indigo-800"
            >
              Examples
            </a>{" "}
            for more complex use cases
          </li>
          <li>
            Join our community on{" "}
            <a
              href="https://github.com"
              className="text-indigo-600 hover:text-indigo-800"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
