"use client"

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedAgents from '@/components/FeaturedAgents';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import DeveloperExperience from '@/components/DeveloperExperience';
import SocialProof from '@/components/SocialProof';
import Pricing from '@/components/Pricing';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedAgents />
      <HowItWorks />
      <UseCases />
      <DeveloperExperience />
      <SocialProof />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
