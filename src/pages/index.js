import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>SBG Funding - Small Business Loans Made Simple</title>
        <meta name="description" content="Get the capital you need to grow your business with SBG Funding. Fast approvals, flexible terms, and expert support for small businesses." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Small Business Funding Made Simple
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center">
          Get the capital you need to grow your business, fast and hassle-free. SBG Funding is your trusted partner in business success.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  );
}