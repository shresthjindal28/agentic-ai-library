export interface Agent {
  id: string;
  name: string;
  description: string;
  code: string;
  explanation: string;
}

export const agents: Agent[] = [
  {
    id: 'conversation-chain',
    name: 'Conversation Chain',
    description: 'Simple conversational agent with memory',
    code: `import { ChatOpenAI } from "@langchain/openai";
import { ConversationChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";

// Initialize the language model
const model = new ChatOpenAI({
  temperature: 0.7,
  openAIApiKey: process.env.OPENAI_API_KEY,
});

// Create a buffer memory to store conversation history
const memory = new BufferMemory();

// Create a conversation chain
const chain = new ConversationChain({
  llm: model,
  memory: memory,
});

// Example usage
const response = await chain.invoke({ input: "Hi! I'm Bob." });
console.log(response.response); // "Hello Bob! How can I assist you today?"

const followUpResponse = await chain.invoke({ 
  input: "What's my name?" 
});
console.log(followUpResponse.response); // "Your name is Bob."`,
    explanation: `
## Conversation Chain Agent

The Conversation Chain agent is one of the simplest yet most useful agents in LangChain. It maintains a conversation with a user while remembering previous interactions.

### Key Components:

1. **ChatOpenAI**: The language model that powers the conversation.
2. **BufferMemory**: Stores the history of the conversation.
3. **ConversationChain**: Connects the language model with memory to create a conversational experience.

### How It Works:

1. The agent receives user input.
2. It combines this input with the conversation history stored in memory.
3. The language model generates a response based on both the current input and conversation history.
4. The response and input are stored in memory for future reference.

### Use Cases:

- Customer service chatbots
- Virtual assistants
- Interactive documentation
- Educational tools

### Configuration Options:

- **temperature**: Controls randomness in responses (0.0 to 1.0)
- **memory**: Can be replaced with other memory types like ConversationSummaryMemory for longer conversations
- **verbose**: Set to true for debugging and seeing the chain's internal workings

### Implementation Notes:

- Requires an OpenAI API key
- Memory persists only during the session unless explicitly saved
- For production use, consider implementing rate limiting and error handling
`
  },
  {
    id: 'retrieval-qa',
    name: 'Retrieval QA',
    description: 'Question answering with document retrieval',
    code: `import { ChatOpenAI } from "@langchain/openai";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "@langchain/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RetrievalQAChain } from "langchain/chains";

// Load documents from a URL
const loader = new CheerioWebBaseLoader(
  "https://docs.langchain.com/docs/introduction"
);
const docs = await loader.load();

// Split documents into chunks
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});
const splitDocs = await textSplitter.splitDocuments(docs);

// Create vector store from documents
const embeddings = new OpenAIEmbeddings();
const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);

// Create a retriever from the vector store
const retriever = vectorStore.asRetriever();

// Create the model and chain
const model = new ChatOpenAI({ temperature: 0 });
const chain = RetrievalQAChain.fromLLM(model, retriever);

// Ask a question
const response = await chain.invoke({
  query: "What is LangChain?",
});
console.log(response.text);`,
    explanation: `
## Retrieval QA Agent

The Retrieval QA agent combines document retrieval with question answering capabilities, allowing it to answer questions based on specific documents or knowledge bases.

### Key Components:

1. **Document Loader**: Loads documents from various sources (web pages, PDFs, etc.)
2. **Text Splitter**: Breaks documents into manageable chunks
3. **Embeddings**: Converts text into vector representations
4. **Vector Store**: Stores and retrieves document chunks based on semantic similarity
5. **RetrievalQAChain**: Combines retrieval with question answering

### How It Works:

1. Documents are loaded and split into chunks
2. Each chunk is converted to a vector embedding and stored
3. When a question is asked, the system finds the most relevant document chunks
4. The language model generates an answer based on the retrieved chunks

### Use Cases:

- Knowledge base question answering
- Documentation assistants
- Research tools
- Customer support systems with specific product knowledge

### Configuration Options:

- **chunkSize**: Controls how documents are split (smaller chunks for precise retrieval, larger for more context)
- **searchType**: Can be "similarity" (default), "mmr" (maximum marginal relevance), etc.
- **k**: Number of documents to retrieve for each query

### Implementation Notes:

- Requires an OpenAI API key for both the embeddings and the language model
- Vector stores can be persisted to databases for production use
- Consider using metadata filtering for more targeted retrieval
`
  },
  {
    id: 'agent-executor',
    name: 'Agent Executor',
    description: 'Agent with tools and reasoning',
    code: `import { ChatOpenAI } from "@langchain/openai";
import { initializeAgentExecutorWithOptions } from "langchain/agents";
import { Calculator } from "langchain/tools/calculator";
import { WebBrowser } from "langchain/tools/webbrowser";
import { OpenAIEmbeddings } from "@langchain/openai";

// Initialize the language model
const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-4",
  openAIApiKey: process.env.OPENAI_API_KEY,
});

// Define tools the agent can use
const tools = [
  new Calculator(),
  new WebBrowser({ embeddings: new OpenAIEmbeddings() }),
];

// Create the agent
const executor = await initializeAgentExecutorWithOptions(tools, model, {
  agentType: "openai-functions",
  verbose: true,
});

// Execute the agent with a task
const result = await executor.invoke({
  input: "What is the square root of 256, and can you find a recent news article about AI?",
});

console.log(result.output);`,
    explanation: `
## Agent Executor

The Agent Executor is a powerful component that enables an AI to use tools and make decisions about which tools to use based on user input. It implements a "reasoning" loop where the agent decides what actions to take.

### Key Components:

1. **Language Model**: The brain of the agent (typically GPT-4 or similar)
2. **Tools**: Functions the agent can call to interact with external systems
3. **Agent Type**: Determines the reasoning strategy (e.g., "openai-functions", "react-docstore")

### How It Works:

1. The agent receives a user query
2. It decides which tool(s) to use based on the query
3. It executes the tools and receives their outputs
4. It may decide to use additional tools based on previous results
5. Finally, it formulates a response to the user

### Use Cases:

- Complex task automation
- Research assistants
- Data analysis workflows
- Customer service agents that need to access multiple systems

### Available Tools:

- **Calculator**: Performs mathematical calculations
- **WebBrowser**: Searches and reads web content
- **DynamicTool**: Custom tools you can create
- Many others including database tools, API tools, etc.

### Implementation Notes:

- Requires a capable language model (GPT-4 recommended)
- Set verbose=true to see the agent's reasoning process
- Can be extended with custom tools for specific applications
- Consider implementing rate limiting and error handling for production use
`
  },
  {
    id: 'summarization',
    name: 'Summarization',
    description: 'Text summarization agent',
    code: `import { ChatOpenAI } from "@langchain/openai";
import { loadSummarizationChain } from "langchain/chains";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";

// Load document from a URL
const loader = new CheerioWebBaseLoader(
  "https://en.wikipedia.org/wiki/Artificial_intelligence"
);
const docs = await loader.load();

// Split the document into chunks
const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
});
const splits = await textSplitter.splitDocuments(docs);

// Initialize the language model
const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-3.5-turbo",
});

// Create a summarization chain
const chain = loadSummarizationChain(model, {
  type: "map_reduce",
  verbose: true,
});

// Run the chain
const result = await chain.invoke({
  input_documents: splits,
});

console.log(result.text);`,
    explanation: `
## Summarization Agent

The Summarization Agent processes long documents or text and creates concise summaries while preserving the key information and context.

### Key Components:

1. **Document Loader**: Loads content from various sources
2. **Text Splitter**: Breaks documents into manageable chunks
3. **Language Model**: Generates the summaries
4. **Summarization Chain**: Orchestrates the summarization process

### Summarization Types:

1. **map_reduce**: 
   - Summarizes each chunk independently
   - Then summarizes those summaries
   - Good for very long documents
   - More computationally efficient

2. **stuff**:
   - Puts all text into the prompt at once
   - Simple but limited by context window size
   - Best for short documents

3. **refine**:
   - Iteratively updates a summary with each chunk
   - Preserves more detail than map_reduce
   - Can be slower but often higher quality

### Use Cases:

- News article summarization
- Research paper digestion
- Meeting notes condensation
- Legal document summarization

### Configuration Options:

- **chunkSize**: Controls how documents are split
- **chunkOverlap**: How much overlap between chunks (helps maintain context)
- **temperature**: Controls randomness in summaries

### Implementation Notes:

- For very long documents, use map_reduce
- For highest quality on medium-length documents, use refine
- Consider custom prompts for domain-specific summarization
`
  },
  {
    id: 'structured-output',
    name: 'Structured Output',
    description: 'Generate structured data from text',
    code: `import { ChatOpenAI } from "@langchain/openai";
import { StructuredOutputParser } from "langchain/output_parsers";
import { PromptTemplate } from "langchain/prompts";
import { z } from "zod";

// Define the output schema using Zod
const outputSchema = z.object({
  name: z.string().describe("The person's full name"),
  age: z.number().describe("The person's age"),
  interests: z.array(z.string()).describe("The person's main interests"),
  isStudent: z.boolean().describe("Whether the person is a student"),
  contact: z.object({
    email: z.string().optional().describe("The person's email address"),
    phone: z.string().optional().describe("The person's phone number"),
  }),
});

// Create a parser based on the schema
const parser = StructuredOutputParser.fromZodSchema(outputSchema);

// Create a prompt template
const promptTemplate = new PromptTemplate({
  template: "Extract structured information from the following text:\\n{text}\\n{format_instructions}",
  inputVariables: ["text"],
  partialVariables: {
    format_instructions: parser.getFormatInstructions(),
  },
});

// Initialize the language model
const model = new ChatOpenAI({
  temperature: 0,
  modelName: "gpt-4",
});

// Format the prompt with user input
const input = await promptTemplate.format({
  text: "John Doe is a 25-year-old graduate student who loves playing guitar, hiking, and reading science fiction. You can reach him at john.doe@example.com or 555-123-4567.",
});

// Generate structured output
const response = await model.invoke(input);
const structuredOutput = await parser.parse(response.content);

console.log(JSON.stringify(structuredOutput, null, 2));`,
    explanation: `
## Structured Output Agent

The Structured Output Agent extracts or generates information in a specific structured format (like JSON) from unstructured text, making it ideal for data extraction and transformation tasks.

### Key Components:

1. **Output Schema**: Defines the structure of the output (using Zod in this example)
2. **Output Parser**: Ensures the language model's response conforms to the schema
3. **Prompt Template**: Guides the model to generate properly structured output

### How It Works:

1. Define a schema for the desired output structure
2. Create a parser based on that schema
3. Include format instructions in the prompt to the language model
4. Parse the model's response to ensure it matches the schema

### Use Cases:

- Extracting structured data from documents
- Converting natural language to API calls
- Creating structured database entries from text descriptions
- Standardizing information from various sources

### Schema Options:

- **Simple types**: strings, numbers, booleans
- **Complex types**: arrays, objects with nested properties
- **Validation**: required fields, optional fields, field constraints

### Implementation Notes:

- Use temperature=0 for most consistent structured output
- More complex schemas may require more capable models (e.g., GPT-4)
- Consider adding error handling for cases where parsing fails
- Can be combined with document loaders for batch processing
`
  }
];

export function getAgentById(id: string): Agent | undefined {
  return agents.find(agent => agent.id === id);
}

export function getAllAgents(): Agent[] {
  return agents;
}