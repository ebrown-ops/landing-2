import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import PersonalInfoStep from './steps/PersonalInfoStep';
import BusinessInfoStep from './steps/BusinessInfoStep';
import LoanInfoStep from './steps/LoanInfoStep';

const steps = ['Personal Information', 'Business Information', 'Loan Details'];

const schema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  businessName: z.string().min(2, 'Business name is required'),
  businessType: z.string().min(2, 'Business type is required'),
  annualRevenue: z.string().min(1, 'Annual revenue is required'),
  yearsInBusiness: z.number().min(0, 'Years in business is required'),
  loanAmount: z.number().min(1000, 'Loan amount must be at least $1,000'),
  loanPurpose: z.string().min(2, 'Loan purpose is required'),
});

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      businessName: '',
      businessType: '',
      annualRevenue: '',
      yearsInBusiness: 0,
      loanAmount: 1000,
      loanPurpose: '',
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log(data);
      toast({
        title: "Application Submitted",
        description: "We've received your application and will be in touch soon.",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    form.trigger();
    if (form.formState.isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: index <= currentStep ? 1 : 0.8 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </motion.div>
              <span className="ml-2 text-sm font-medium hidden md:inline">{step}</span>
              {index < steps.length - 1 && <Separator className="w-12 mx-2 hidden md:block" />}
            </div>
          ))}
        </div>

        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentStep === 0 && <PersonalInfoStep form={form} />}
          {currentStep === 1 && <BusinessInfoStep form={form} />}
          {currentStep === 2 && <LoanInfoStep form={form} />}
        </motion.div>

        <div className="flex justify-between mt-8">
          <Button type="button" onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
}