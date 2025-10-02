import { motion } from 'framer-motion';

const SocialProof = () => {
  const companies = [
    { id: 1, name: 'Acme Corp', logo: '/logos/placeholder1.svg' },
    { id: 2, name: 'Globex', logo: '/logos/placeholder2.svg' },
    { id: 3, name: 'Initech', logo: '/logos/placeholder3.svg' },
    { id: 4, name: 'Massive Dynamic', logo: '/logos/placeholder4.svg' },
    { id: 5, name: 'Stark Industries', logo: '/logos/placeholder5.svg' },
    { id: 6, name: 'Cyberdyne Systems', logo: '/logos/placeholder6.svg' }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The AI Agent Library has transformed our development workflow. We've reduced our time-to-market by 40% while improving quality.",
      author: "Sarah Chen",
      role: "CTO, TechForward",
      image: "/testimonials/placeholder1.jpg"
    },
    {
      id: 2,
      quote: "Implementing these agents into our product suite was seamless. The documentation is excellent and the support team is responsive.",
      author: "Michael Rodriguez",
      role: "Lead Developer, DataSphere",
      image: "/testimonials/placeholder2.jpg"
    }
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
            Trusted by Innovators
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Join the growing community of companies using our AI agents
          </p>
        </motion.div>

        <motion.div 
          className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {companies.map((company) => (
            <div key={company.id} className="col-span-1 flex justify-center items-center">
              <div className="h-16 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                {/* Placeholder for company logos */}
                <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
                  {company.name}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex-shrink-0">
                  {/* Placeholder for testimonial author image */}
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;