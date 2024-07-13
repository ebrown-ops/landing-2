import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationForm from '@/components/ApplicationForm';
import Header from '@/components/Header';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />

      <main className="container mx-auto px-4 py-12">
        {!showApplication ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Small Business Funding Made Simple</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Get the capital you need to grow your business, fast and hassle-free. SBG Funding is your trusted partner in business success.</p>
            <Button size="lg" onClick={() => setShowApplication(true)} className="gradient-bg text-white">Apply Now</Button>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <FeatureCard title="Fast Approval" description="Get approved in as little as 24 hours with our streamlined process." />
              <FeatureCard title="Flexible Terms" description="Customize your loan terms to fit your business needs and cash flow." />
              <FeatureCard title="Expert Support" description="Our team of funding specialists is here to guide you every step of the way." />
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-4xl mx-auto">
              <CardContent className="p-6">
                <ApplicationForm />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>

      <Testimonials />
      <FAQ />
      <CTA setShowApplication={setShowApplication} />

      <footer className="bg-gray-100 dark:bg-gray-900 mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600 dark:text-gray-400">&copy; 2024 SBG Funding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}

function CTA({ setShowApplication }) {
  return (
    <section className="py-12 bg-blue-600 dark:bg-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Business?</h2>
        <p className="text-xl text-blue-100 mb-8">Apply now and get the funding you need to take your business to the next level.</p>
        <Button size="lg" onClick={() => setShowApplication(true)} className="bg-white text-blue-600 hover:bg-blue-50">
          Start Your Application
        </Button>
      </div>
    </section>
  );
}