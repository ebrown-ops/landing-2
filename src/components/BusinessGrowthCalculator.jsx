import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function BusinessGrowthCalculator() {
  const [currentRevenue, setCurrentRevenue] = useState('');
  const [growthRate, setGrowthRate] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [projectedRevenue, setProjectedRevenue] = useState(null);

  const calculateGrowth = () => {
    const revenue = parseFloat(currentRevenue);
    const growth = parseFloat(growthRate) / 100;
    const loan = parseFloat(loanAmount);

    if (isNaN(revenue) || isNaN(growth) || isNaN(loan)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    // Simple projection: current revenue + (growth * (revenue + loan))
    const projected = revenue + (growth * (revenue + loan));
    setProjectedRevenue(projected.toFixed(2));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Business Growth Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="current-revenue">Current Annual Revenue ($)</Label>
            <Input
              id="current-revenue"
              type="number"
              value={currentRevenue}
              onChange={(e) => setCurrentRevenue(e.target.value)}
              placeholder="e.g., 100000"
            />
          </div>
          <div>
            <Label htmlFor="growth-rate">Expected Annual Growth Rate (%)</Label>
            <Input
              id="growth-rate"
              type="number"
              value={growthRate}
              onChange={(e) => setGrowthRate(e.target.value)}
              placeholder="e.g., 10"
            />
          </div>
          <div>
            <Label htmlFor="loan-amount">Potential Loan Amount ($)</Label>
            <Input
              id="loan-amount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="e.g., 50000"
            />
          </div>
          <Button onClick={calculateGrowth} className="w-full">Calculate Projected Growth</Button>
          {projectedRevenue !== null && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-4 bg-green-100 dark:bg-green-900 rounded-md"
            >
              <p className="text-center font-semibold">
                Projected Annual Revenue: ${projectedRevenue}
              </p>
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}