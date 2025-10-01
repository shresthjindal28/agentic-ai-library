import Link from 'next/link';
import { FaGithub, FaDiscord, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Agents', href: '/agents' },
      { name: 'Use Cases', href: '/use-cases' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/ai-agent-library',
        icon: FaGithub,
      },
      {
        name: 'Discord',
        href: 'https://discord.gg/ai-agent-library',
        icon: FaDiscord,
      },
      {
        name: 'Twitter',
        href: 'https://twitter.com/ai_agent_lib',
        icon: FaTwitter,
      },
    ],
  };

  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <Link href={item.href} className="text-base text-gray-300 hover:text-white">
                {item.name}
              </Link>
            </div>
          ))}
        </nav>
        
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            {navigation.legal.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-400 hover:text-gray-300">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} AI Agent Library. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;