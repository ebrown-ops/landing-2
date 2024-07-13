import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What types of businesses do you fund?",
    answer: "We fund a wide range of small to medium-sized businesses across various industries. Whether you're a startup or an established company, we have funding options tailored to your needs."
  },
  {
    question: "How quickly can I get approved?",
    answer: "Our streamlined process allows for quick approvals. Many of our clients receive approval within 24 hours of submitting a complete application."
  },
  {
    question: "What documents do I need to apply?",
    answer: "Typically, you'll need to provide recent bank statements, tax returns, and financial statements. The exact requirements may vary based on the type and amount of funding you're seeking."
  },
  {
    question: "What are your interest rates?",
    answer: "Our interest rates vary depending on factors such as your business's financial health, the loan amount, and the term length. We strive to offer competitive rates tailored to each business's situation."
  },
  {
    question: "Do you require collateral?",
    answer: "While some of our funding options may require collateral, we also offer unsecured loans for qualified businesses. We'll work with you to find the best solution for your needs."
  }
];

export default function FAQ() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}