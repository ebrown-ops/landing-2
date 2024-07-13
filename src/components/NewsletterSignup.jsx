import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Newsletter signup:', email);
    toast({
      title: "Newsletter Signup Successful",
      description: "Thank you for subscribing to our newsletter!",
    });
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">Subscribe to Our Newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              Stay updated with the latest news, funding tips, and exclusive offers.
            </p>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Subscribe</Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}