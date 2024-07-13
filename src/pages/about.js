import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>About SBG Funding - Small Business Loans Made Simple</title>
        <meta name="description" content="Learn about SBG Funding's mission to provide simple, fast, and flexible funding solutions for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">About SBG Funding</h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              SBG Funding is a leading provider of small business loans and funding solutions. Our mission is to empower entrepreneurs and small business owners by providing them with the capital they need to grow and succeed.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Founded in 2013, we've helped thousands of businesses across various industries secure the funding they need to take their operations to the next level. Our team of experienced financial experts is dedicated to finding the right funding solution for each unique business.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-6">
              <li>Simplicity: We believe in making the funding process as straightforward as possible.</li>
              <li>Flexibility: We offer customized funding solutions to meet the diverse needs of small businesses.</li>
              <li>Speed: We understand that time is crucial in business, so we provide fast approvals and quick funding.</li>
              <li>Transparency: We're committed to clear communication and honest business practices.</li>
              <li>Support: Our team is here to guide you through every step of the funding process.</li>
            </ul>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At SBG Funding, we're more than just a lender – we're your partner in growth. Let us help you turn your business dreams into reality.
            </p>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}