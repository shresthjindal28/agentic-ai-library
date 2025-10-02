import { getAgentById } from '@/lib/agents';
import CodeBlock from '@/components/CodeBlock';
import Sidebar from '@/components/Sidebar';
import { UserButton } from '@clerk/nextjs';
import { notFound } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default async function AgentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const agent = getAgentById(id);
  
  if (!agent) {
    notFound();
  }

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">{agent.name}</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        
        <p className="text-lg mb-6">{agent.description}</p>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Implementation</h2>
          <CodeBlock code={agent.code} language="typescript" />
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How to Use</h2>
          <div className="prose dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: agent.explanation }} />
          </div>
        </div>
      </div>
    </div>
  );
}