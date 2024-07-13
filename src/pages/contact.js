import Head from 'next/head';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>Contact SBG Funding - Get in Touch with Our Team</title>
        <meta name="description" content="Contact SBG Funding for any questions about our small business funding solutions. Our team is here to help you find the right financial product for your needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Header /> */}

      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
          Have questions about our funding solutions? Get in touch with our team, and we'll be happy to assist you.
        </p>
      </main>

      {/* <Footer /> */}
    </div>
  );
}