import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    company: "Tech Innovations LLC",
    rating: 5,
    review: "SBG Funding was instrumental in helping us expand our operations. Their quick approval process and flexible terms were exactly what we needed."
  },
  {
    name: "Sarah Johnson",
    company: "Green Earth Landscaping",
    rating: 4,
    review: "The team at SBG Funding was incredibly supportive throughout the entire process. They helped us secure the equipment we needed to grow our business."
  },
  {
    name: "Michael Chen",
    company: "Artisan Bakery Co.",
    rating: 5,
    review: "As a small business owner, I was worried about the loan application process. SBG Funding made it simple and stress-free. Highly recommended!"
  }
];

export default function CustomerReviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What Our Customers Say</h2>
        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < reviews[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{reviews[activeIndex].review}"</p>
                <p className="font-semibold">{reviews[activeIndex].name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{reviews[activeIndex].company}</p>
              </CardContent>
            </Card>
          </motion.div>
          <button
            onClick={prevReview}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md"
            aria-label="Previous review"
          >
            &lt;
          </button>
          <button
            onClick={nextReview}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md"
            aria-label="Next review"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
}