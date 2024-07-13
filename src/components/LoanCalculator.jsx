import { useState } from 'react';
import { motion } from 'framer-motion';
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"
import { Info } from "lucide-react"

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTerm, setLoanTerm] = useState(12);
  const interestRate = 0.08; // 8% annual interest rate

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 12;
    const totalPayments = loanTerm;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    return payment.toFixed(2);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center">
          Loan Calculator
          <Tooltip content="Estimate your monthly payments based on loan amount and term.">
            <Info className="h-4 w-4 text-gray-500 ml-2 cursor-help" />
          </Tooltip>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Amount: ${loanAmount.toLocaleString()}
              <Tooltip content="The total amount you wish to borrow.">
                <Info className="h-4 w-4 text-gray-500 ml-2 inline cursor-help" />
              </Tooltip>
            </label>
            <Slider
              min={1000}
              max={500000}
              step={1000}
              value={[loanAmount]}
              onValueChange={(value) => setLoanAmount(value[0])}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Loan Term: {loanTerm} months
              <Tooltip content="The duration over which you'll repay the loan.">
                <Info className="h-4 w-4 text-gray-500 ml-2 inline cursor-help" />
              </Tooltip>
            </label>
            <Slider
              min={3}
              max={60}
              step={1}
              value={[loanTerm]}
              onValueChange={(value) => setLoanTerm(value[0])}
            />
          </div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-semibold">Estimated Monthly Payment</p>
            <p className="text-3xl font-bold text-blue-600">${calculateMonthlyPayment()}</p>
            <p className="text-sm text-gray-500 mt-2">
              Based on {interestRate * 100}% annual interest rate
              <Tooltip content="This is an estimated rate. Your actual rate may vary based on your credit score and other factors.">
                <Info className="h-4 w-4 text-gray-500 ml-2 inline cursor-help" />
              </Tooltip>
            </p>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}