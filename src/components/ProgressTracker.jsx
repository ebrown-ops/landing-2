import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  { name: 'Application Submitted', description: 'Your application has been received and is being reviewed.' },
  { name: 'Initial Review', description: 'Our team is reviewing your application and may contact you for additional information.' },
  { name: 'Underwriting', description: 'Your application is being evaluated by our underwriting team.' },
  { name: 'Final Decision', description: 'A final decision has been made on your application.' },
  { name: 'Funding', description: 'Your loan has been approved and funds are being disbursed.' }
];

export default function ProgressTracker({ currentStep = 0 }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentStep / (steps.length - 1)) * 100);
  }, [currentStep]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Application Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="mb-4" />
        <div className="space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex items-start ${index <= currentStep ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                index <= currentStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-400'
              }`}>
                {index + 1}
              </div>
              <div>
                <h3 className="font-semibold">{step.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}