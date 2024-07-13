import { useState } from 'react';
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
          <nav>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Products</Button>
            <Button variant="ghost">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {!showApplication ? (
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Small Business Funding Made Simple</h2>
            <p className="text-xl text-gray-600 mb-8">Get the capital you need to grow your business, fast and hassle-free.</p>
            <Button size="lg" onClick={() => setShowApplication(true)}>Apply Now</Button>
          </div>
        ) : (
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Business Loan Application</CardTitle>
              <CardDescription>Fill out the form below to apply for funding</CardDescription>
            </CardHeader>
            <CardContent>
              <ApplicationForm />
            </CardContent>
          </Card>
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