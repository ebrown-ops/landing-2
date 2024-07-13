import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ApplicationForm from '@/components/ApplicationForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import Testimonials from '@/components/Testimonials';
import LoanCalculator from '@/components/LoanCalculator';
import Support from '@/components/Support';
import ErrorBoundary from '@/components/ErrorBoundary';
import Notification from '@/components/Notification';
import SuccessStories from '@/components/SuccessStories';
import BlogPosts from '@/components/BlogPosts';
import Chatbot from '@/components/Chatbot';
import ReferralProgram from '@/components/ReferralProgram';
import ProgressTracker from '@/components/ProgressTracker';
import TestimonialSubmission from '@/components/TestimonialSubmission';
import LoanComparison from '@/components/LoanComparison';
import LiveChat from '@/components/LiveChat';
import CustomerReviews from '@/components/CustomerReviews';
import BusinessGrowthCalculator from '@/components/BusinessGrowthCalculator';
import NewsletterSignup from '@/components/NewsletterSignup';
import ResourceCenter from '@/components/ResourceCenter';
import ScheduleConsultation from '@/components/ScheduleConsultation';

export default function Home() {
  const [showApplication, setShowApplication] = useState(false);
  const [notification, setNotification] = useState(null);
  const [applicationStep, setApplicationStep] = useState(0);

  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <Head>
          <title>SBG Funding - Small Business Loans Made Simple</title>
          <meta name="description" content="Get the capital you need to grow your business with SBG Funding. Fast approvals, flexible terms, and expert support for small businesses." />
          <link rel="icon" href="/favicon.ico" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "name": "SBG Funding",
              "description": "Small business loans and funding solutions",
              "url": "https://www.sbgfunding.com",
              "sameAs": [
                "https://www.facebook.com/sbgfunding",
                "https://www.linkedin.com/company/sbg-funding"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "17 State Street, 21st Floor",
                "addressLocality": "New York",
                "addressRegion": "NY",
                "postalCode": "10004",
                "addressCountry": "US"
              },
              "telephone": "+1-844-284-2725",
              "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
            })}
          </script>
        </Head>

        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}

        <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>

        <Header />

        <main id="main-content" className="container mx-auto px-4 py-12">
          {!showApplication ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Small Business Funding Made Simple</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">Get the capital you need to grow your business, fast and hassle-free. SBG Funding is your trusted partner in business success.</p>
              <Button 
                size="lg" 
                onClick={() => {
                  setShowApplication(true);
                  showNotification("Application form loaded. Good luck!", "info");
                }} 
                className="gradient-bg text-white"
              >
                Apply Now
              </Button>
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
                  <ApplicationForm 
                    onSubmitSuccess={() => {
                      showNotification("Application submitted successfully!", "success");
                      setApplicationStep(1);
                    }} 
                  />
                </CardContent>
              </Card>
              <div className="mt-8">
                <ProgressTracker currentStep={applicationStep} />
              </div>
            </motion.div>
          )}

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Estimate Your Loan</h2>
            <LoanCalculator />
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Compare Loan Options</h2>
            <LoanComparison />
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Business Growth</h2>
            <BusinessGrowthCalculator />
          </section>
        </main>

        <SuccessStories />
        <CustomerReviews />
        <Testimonials />
        <TestimonialSubmission />
        <BlogPosts />
        <FAQ />
        <ResourceCenter />
        <ReferralProgram />
        <ScheduleConsultation />
        <NewsletterSignup />
        <CTA setShowApplication={setShowApplication} />
        <Support />
        <Chatbot />
        <LiveChat />

        <Footer />
      </div>
    </ErrorBoundary>
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