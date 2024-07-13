import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export default function TestimonialSubmission() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    testimonial: ''
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the testimonial to your backend
    console.log('Testimonial submitted:', formData);
    toast({
      title: "Testimonial Submitted",
      description: "Thank you for sharing your experience with SBG Funding!",
    });
    setFormData({ name: '', businessName: '', testimonial: '' });
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Share Your Success Story</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="businessName"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="testimonial"
                  placeholder="Tell us about your experience with SBG Funding"
                  value={formData.testimonial}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <Button type="submit" className="w-full">Submit Testimonial</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}