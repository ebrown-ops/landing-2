import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Understanding Business Loans",
    description: "Learn about different types of business loans and which one might be right for your company.",
    link: "/resources/understanding-business-loans"
  },
  {
    title: "Improving Your Credit Score",
    description: "Discover strategies to boost your credit score and increase your chances of loan approval.",
    link: "/resources/improving-credit-score"
  },
  {
    title: "Creating a Strong Business Plan",
    description: "Tips and tricks for crafting a compelling business plan that will impress lenders.",
    link: "/resources/creating-business-plan"
  },
  {
    title: "Managing Cash Flow",
    description: "Learn effective techniques for managing your business's cash flow and financial health.",
    link: "/resources/managing-cash-flow"
  }
];

export default function ResourceCenter() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Business Funding Resources
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="mb-4 flex-grow">{resource.description}</p>
                  <Button variant="outline" className="mt-auto" asChild>
                    <a href={resource.link}>Learn More</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}