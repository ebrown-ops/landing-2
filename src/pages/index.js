import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import logger from '@/utils/logger';

const DynamicMotion = dynamic(() => import('framer-motion').then((mod) => mod.motion), { ssr: false });

export default function Home() {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    logger.debug('Home component mounted');
  }, []);

  if (!router.isReady) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>SBG Funding - Small Business Loans Made Simple</title>
        <meta name="description" content="Get the capital you need to grow your business with SBG Funding. Fast approvals, flexible terms, and expert support for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        {typeof window !== 'undefined' && (
          <DynamicMotion 
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
          </DynamicMotion>
        )}
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  try {
    // Add any necessary data fetching here
    logger.debug('Generating static props for Home page');
    return {
      props: {}, // will be passed to the page component as props
    }
  } catch (error) {
    logger.error('Error in getStaticProps', error);
    return {
      props: {},
      revalidate: 60, // Attempt to regenerate the page after 60 seconds
    }
  }
}