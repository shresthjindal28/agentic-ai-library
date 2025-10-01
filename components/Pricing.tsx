import { motion } from 'framer-motion';
import { HiCheck as CheckIcon } from 'react-icons/hi';
import Link from 'next/link';

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      id: 'tier-free',
      price: '$0',
      description: 'Perfect for trying out our AI agents',
      features: [
        '5 agent calls per day',
        'Access to 3 basic agents',
        'Public API access',
        'Community support'
      ],
      cta: 'Start for Free',
      mostPopular: false,
    },
    {
      name: 'Developer',
      id: 'tier-developer',
      price: '$49',
      description: 'Everything you need for small to medium projects',
      features: [
        '1,000 agent calls per month',
        'Access to all standard agents',
        'API key management',
        'Email support',
        'Usage analytics',
        'Webhook integrations'
      ],
      cta: 'Subscribe Now',
      mostPopular: true,
    },
    {
      name: 'Enterprise',
      id: 'tier-enterprise',
      price: 'Custom',
      description: 'Dedicated support and infrastructure for large teams',
      features: [
        'Unlimited agent calls',
        'Access to all premium agents',
        'Custom agent development',
        'Dedicated support',
        'SLA guarantees',
        'On-premise deployment options',
        'Advanced security features'
      ],
      cta: 'Contact Sales',
      mostPopular: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the plan that works best for your needs
          </p>
        </motion.div>

        <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={`relative p-8 bg-white border rounded-lg shadow-sm flex flex-col ${
                tier.mostPopular ? 'ring-2 ring-indigo-600' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 px-4 py-1 bg-indigo-600 rounded-full text-xs font-semibold text-white tracking-wide uppercase">
                  Most popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{tier.price}</span>
                  {tier.price !== 'Custom' && <span className="ml-1 text-xl font-semibold text-gray-500">/month</span>}
                </p>
                <p className="mt-2 text-sm text-gray-500">{tier.description}</p>
              </div>
              <ul className="space-y-4 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-5 w-5 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-sm text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href={tier.name === 'Enterprise' ? '/contact' : '/signup'} className={`block w-full py-3 px-4 rounded-md shadow text-center text-sm font-medium ${
                  tier.mostPopular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                }`}>
                  {tier.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;