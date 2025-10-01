import { motion } from 'framer-motion';
import Link from 'next/link';

const FinalCTA = () => {
  return (
    <section className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Revolutionize Your Workflow?
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Join thousands of developers building the next generation of AI-powered applications.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link href="/signup" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 md:py-4 md:text-lg md:px-10">
                Sign Up Now
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link href="/documentation" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Read the Docs
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;