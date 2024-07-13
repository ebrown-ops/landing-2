import Head from 'next/head';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    title: "Term Loans",
    description: "Fixed-term loans with competitive interest rates for established businesses looking to expand or refinance.",
  },
  {
    title: "Line of Credit",
    description: "Flexible funding option that allows you to draw funds as needed, paying interest only on what you use.",
  },
  {
    title: "Equipment Financing",
    description: "Loans specifically designed to help you purchase or lease new equipment for your business.",
  },
  {
    title: "Invoice Factoring",
    description: "Turn your unpaid invoices into immediate cash flow by selling them at a discount.",
  },
  {
    title: "Merchant Cash Advance",
    description: "Get an advance on your future credit card sales, with repayment based on a percentage of daily sales.",
  },
  {
    title: "SBA Loans",
    description: "Government-backed loans with favorable terms for small businesses that meet specific criteria.",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Head>
        <title>SBG Funding Products - Small Business Funding Solutions</title>
        <meta name="description" content="Explore SBG Funding's range of small business funding solutions, including term loans, lines of credit, equipment financing, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Funding Solutions</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto">
            At SBG Funding, we offer a variety of funding options tailored to meet the unique needs of your business. Explore our products below to find the right solution for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}