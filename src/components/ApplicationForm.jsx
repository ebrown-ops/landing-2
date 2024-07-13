import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Tooltip } from "@/components/ui/tooltip";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, Upload } from "lucide-react";
import PersonalInfoStep from './steps/PersonalInfoStep';
import BusinessInfoStep from './steps/BusinessInfoStep';
import LoanInfoStep from './steps/LoanInfoStep';
import SummaryStep from './steps/SummaryStep';
import DocumentUpload from './DocumentUpload';

const steps = ['Personal', 'Business', 'Loan', 'Documents', 'Summary'];

const schema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  businessType: z.string().min(2, 'Please select a business type'),
  annualRevenue: z.string().min(1, 'Please enter your annual revenue'),
  yearsInBusiness: z.number().min(0, 'Years in business must be 0 or greater').or(z.string().regex(/^\d+$/, 'Must be a number').transform(Number)),
  loanAmount: z.number().min(1000, 'Loan amount must be at least $1,000'),
  loanPurpose: z.string().min(2, 'Please select a loan purpose'),
  documents: z.array(z.any()).optional(),
});

const faqItems = [
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
  }
];

export default function ApplicationForm({ onSubmitSuccess }) {
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
      documents: [],
    },
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('applicationProgress');
    if (savedProgress) {
      const parsedProgress = JSON.parse(savedProgress);
      form.reset(parsedProgress);
      setCurrentStep(parsedProgress.currentStep || 0);
    }
  }, []);

  const saveProgress = (data) => {
    localStorage.setItem('applicationProgress', JSON.stringify({ ...data, currentStep }));
  };

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
      localStorage.removeItem('applicationProgress');
      onSubmitSuccess();
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
    const currentStepFields = Object.keys(form.getValues()).filter(field => 
      form.getValues()[field] !== '' && form.getValues()[field] !== 0
    );
    
    form.trigger(currentStepFields).then((isStepValid) => {
      if (isStepValid) {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        saveProgress(form.getValues());
      } else {
        toast({
          title: "Validation Error",
          description: "Please fill out all required fields correctly before proceeding.",
          variant: "destructive",
        });
      }
    });
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
    saveProgress(form.getValues());
  };

  const handleFileUpload = (files) => {
    form.setValue('documents', files);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="mb-8">
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full" />
        </div>
        <div className="flex justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: index <= currentStep ? 1 : 0.8 }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {index + 1}
              </motion.div>
              <span className="mt-2 text-xs font-medium text-center">{step}</span>
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">
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
            {currentStep === 3 && <DocumentUpload onUpload={handleFileUpload} />}
            {currentStep === 4 && <SummaryStep form={form} />}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button type="button" onClick={prevStep} disabled={currentStep === 0}>
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting} className="bg-green-600 hover:bg-green-700">
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full mt-8">
          <AccordionItem value="faq">
            <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
            <AccordionContent>
              {faqItems.map((item, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold">{item.question}</h4>
                  <p className="text-sm text-gray-600">{item.answer}</p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="mt-4">
          <Button type="button" onClick={() => saveProgress(form.getValues())} variant="outline">
            Save Progress
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            You can return to this application later by using the same device and browser.
          </p>
        </div>
      </form>
    </Form>
  );
}

function InfoTooltip({ content }) {
  return (
    <Tooltip content={content}>
      <Info className="h-4 w-4 text-gray-500 ml-1 cursor-help" />
    </Tooltip>
  );
}