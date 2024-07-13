import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const successStories = [
  {
    name: "Sarah Johnson",
    business: "Bloom Cafe",
    story: "With SBG Funding's help, I was able to open a second location for my cafe. The quick approval process and flexible terms were exactly what I needed to expand my business.",
    loanAmount: "$75,000",
    result: "100% increase in revenue within the first year"
  },
  {
    name: "Michael Chen",
    business: "TechGrow Solutions",
    story: "As a tech startup, we needed capital to scale quickly. SBG Funding understood our unique needs and provided the perfect funding solution to help us grow our team and infrastructure.",
    loanAmount: "$250,000",
    result: "Tripled our client base and expanded to 3 new markets"
  },
  {
    name: "Emily Rodriguez",
    business: "Green Earth Landscaping",
    story: "SBG Funding helped me purchase new equipment that allowed us to take on larger projects. Their support was instrumental in growing my small landscaping business into a thriving company.",
    loanAmount: "$100,000",
    result: "Increased efficiency by 40% and doubled our workforce"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{story.name}</CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{story.business}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{story.story}</p>
                  <p className="font-semibold">Loan Amount: {story.loanAmount}</p>
                  <p className="text-green-600 dark:text-green-400 font-semibold mt-2">Result: {story.result}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}