import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "5 Tips for Securing Small Business Funding",
    excerpt: "Learn the key strategies to improve your chances of getting approved for a small business loan.",
    date: "2023-05-15",
    readTime: "5 min read"
  },
  {
    title: "Understanding Different Types of Business Loans",
    excerpt: "Explore various funding options available to small businesses and find out which one suits your needs best.",
    date: "2023-06-02",
    readTime: "7 min read"
  },
  {
    title: "How to Create a Winning Business Plan for Lenders",
    excerpt: "Discover the essential elements of a business plan that will impress potential lenders and increase your chances of securing funding.",
    date: "2023-06-20",
    readTime: "6 min read"
  }
];

export default function BlogPosts() {
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date} • {post.readTime}</p>
                  <p className="mb-4">{post.excerpt}</p>
                  <Button variant="outline" className="mt-auto">Read More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}