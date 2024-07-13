import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqData = [
  {
    question: "How long does the application process take?",
    answer: "Our streamlined application process typically takes about 10-15 minutes to complete. Once submitted, you can expect a decision within 24 hours."
  },
  {
    question: "What documents do I need to apply?",
    answer: "For the initial application, you only need to provide basic information about yourself and your business. If approved, we may request additional documents such as bank statements and tax returns."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we use bank-level encryption to protect your personal and business information. We never share your data without your explicit permission."
  },
  {
    question: "What types of businesses do you fund?",
    answer: "We fund a wide range of small to medium-sized businesses across various industries. Whether you're a startup or an established company, we have funding options tailored to your needs."
  },
  {
    question: "What are your interest rates?",
    answer: "Our interest rates vary depending on factors such as your business's financial health, the loan amount, and the term length. We strive to offer competitive rates tailored to each business's situation."
  }
];

export default function FAQSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const results = faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Search FAQs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Search for questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>
        <div className="space-y-4">
          {searchResults.map((result, index) => (
            <div key={index}>
              <h3 className="font-semibold">{result.question}</h3>
              <p className="text-sm text-gray-600">{result.answer}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}