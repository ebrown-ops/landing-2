import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>SBG Funding Products - Small Business Funding Solutions</title>
        <meta name="description" content="Explore SBG Funding's range of small business funding solutions, including term loans, lines of credit, equipment financing, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Funding Solutions</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          At SBG Funding, we offer a variety of funding options tailored to meet the unique needs of your business. Explore our products to find the right solution for you.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  );
}