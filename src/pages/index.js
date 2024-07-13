import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ApplicationForm from '@/components/ApplicationForm';

export default function Home() {
  const [showApplication, setShowApplication] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SBG Funding</h1>
          <nav className="hidden md:block">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!showApplication ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Small Business Funding Made Simple</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Get the capital you need to grow your business, fast and hassle-free. SBG Funding is your trusted partner in business success.</p>
            <Button size="lg" onClick={() => setShowApplication(true)} className="gradient-bg text-white">Apply Now</Button>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Fast Approval</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get approved in as little as 24 hours with our streamlined process.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Flexible Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Customize your loan terms to fit your business needs and cash flow.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Expert Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our team of funding specialists is here to guide you every step of the way.</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle>Business Loan Application</CardTitle>
                <CardDescription>Fill out the form below to apply for funding</CardDescription>
              </CardHeader>
              <CardContent>
                <ApplicationForm />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">&copy; 2024 SBG Funding. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}