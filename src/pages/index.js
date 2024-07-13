import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>SBG Funding - Small Business Loans Made Simple</title>
        <meta name="description" content="Get the capital you need to grow your business with SBG Funding. Fast approvals, flexible terms, and expert support for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Small Business Funding Made Simple
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the capital you need to grow your business, fast and hassle-free. SBG Funding is your trusted partner in business success.
          </p>
          <Button 
            size="lg" 
            onClick={() => setCount(count + 1)}
            className="gradient-bg text-white"
          >
            Click me: {count}
          </Button>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}