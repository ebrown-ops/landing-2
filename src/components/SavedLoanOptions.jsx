import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

export default function SavedLoanOptions() {
  const [savedOptions, setSavedOptions] = useState([]);
  const { toast } = useToast();

  useEffect(() => {
    const savedData = localStorage.getItem('savedLoanOptions');
    if (savedData) {
      setSavedOptions(JSON.parse(savedData));
    }
  }, []);

  const removeSavedOption = (index) => {
    const updatedOptions = savedOptions.filter((_, i) => i !== index);
    setSavedOptions(updatedOptions);
    localStorage.setItem('savedLoanOptions', JSON.stringify(updatedOptions));
    toast({
      title: "Loan Option Removed",
      description: "The selected loan option has been removed from your saved list.",
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Saved Loan Options</CardTitle>
      </CardHeader>
      <CardContent>
        {savedOptions.length === 0 ? (
          <p className="text-center text-gray-500">You haven't saved any loan options yet.</p>
        ) : (
          <motion.div className="space-y-4">
            {savedOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md"
              >
                <h3 className="font-semibold">{option.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Amount: ${option.amount}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Term: {option.term} months</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Interest Rate: {option.interestRate}%</p>
                <Button 
                  onClick={() => removeSavedOption(index)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  Remove
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}