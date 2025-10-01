"use client"


import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Agent = {
  id: string;
  name: string;
  description: string;
};

const agents: Agent[] = [
  { id: 'conversation-chain', name: 'Conversation Chain', description: 'Simple conversational agent' },
  { id: 'retrieval-qa', name: 'Retrieval QA', description: 'Question answering with document retrieval' },
  { id: 'summarization', name: 'Summarization', description: 'Text summarization agent' },
  { id: 'agent-executor', name: 'Agent Executor', description: 'Agent with tools and reasoning' },
  { id: 'structured-output', name: 'Structured Output', description: 'Generate structured data' },
];

export default function Sidebar() {
  const pathname = usePathname();
  
  return (
    <div className="w-64 h-full bg-gray-100 dark:bg-gray-900 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">AI Agents</h2>
      <ul className="space-y-2">
        {agents.map((agent) => (
          <li key={agent.id}>
            <Link 
              href={`/agents/${agent.id}`}
              className={`block p-2 rounded-md ${
                pathname === `/agents/${agent.id}` 
                  ? 'bg-blue-500 text-white' 
                  : 'hover:bg-gray-200 dark:hover:bg-gray-800'
              }`}
            >
              <div className="font-medium">{agent.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{agent.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}