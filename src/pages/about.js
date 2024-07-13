import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>About SBG Funding - Small Business Loans Made Simple</title>
        <meta name="description" content="Learn about SBG Funding's mission to provide simple, fast, and flexible funding solutions for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">About SBG Funding</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            SBG Funding is a leading provider of small business loans and funding solutions. Our mission is to empower entrepreneurs and small business owners by providing them with the capital they need to grow and succeed.
          </p>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}