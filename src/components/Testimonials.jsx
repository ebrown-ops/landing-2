import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Bloom Cafe",
    quote: "SBG Funding helped me expand my cafe to a second location. Their quick approval process and flexible terms were exactly what I needed."
  },
  {
    name: "Michael Chen",
    business: "TechGrow Solutions",
    quote: "As a tech startup, we needed capital to scale quickly. SBG Funding understood our unique needs and provided the perfect funding solution."
  },
  {
    name: "Emily Rodriguez",
    business: "Green Earth Landscaping",
    quote: "The team at SBG Funding was incredibly supportive. They guided me through the entire process and helped my business secure the equipment we needed."
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover-lift">
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.business}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}