"use client";

import { getAgentById } from "@/lib/agents";
import CodeBlock from "@/components/CodeBlock";
import Sidebar from "@/components/Sidebar";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AgentPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const agent = getAgentById(id);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.5,
      ease: "power3.out",
    });
    const sections = sectionsRef.current.filter(Boolean) as HTMLDivElement[];
    gsap.from(sections, {
      opacity: 0,
      y: 12,
      duration: 0.5,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, []);

  if (!agent) {
    return (
      <div className="flex h-screen bg-gray-900 text-gray-200">
        <Sidebar />
        <div className="flex-1 p-8">Agent not found.</div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-900 text-gray-200">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div ref={headerRef} className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">{agent.name}</h1>
          <UserButton afterSignOutUrl="/" />
        </div>

        <p className="text-base sm:text-lg mb-6 text-gray-300">{agent.description}</p>

        <div
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Implementation (LangChain)</h2>
          <CodeBlock code={agent.code} language="typescript" />
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Step-by-step Guide</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Install dependencies: <code className="text-gray-100">npm install langchain openai</code></li>
            <li>Configure keys: set <code className="text-gray-100">OPENAI_API_KEY</code> in your environment.</li>
            <li>Compose the chain: use the exported agent factory from this page.</li>
            <li>Run the agent: pass inputs and handle outputs as shown below.</li>
          </ol>
        </div>

        <div
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">How to Use</h2>
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: agent.explanation }} />
          </div>
        </div>
      </div>
    </div>
  );
}