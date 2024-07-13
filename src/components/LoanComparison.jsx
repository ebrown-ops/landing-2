import { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const loanTypes = [
  { name: 'Term Loan', rate: '6-12%', term: '1-5 years', amount: '$25k-$500k' },
  { name: 'Line of Credit', rate: '7-25%', term: '6 months-5 years', amount: '$10k-$250k' },
  { name: 'SBA Loan', rate: '5-8%', term: '5-25 years', amount: '$50k-$5M' },
  { name: 'Equipment Financing', rate: '8-30%', term: '1-5 years', amount: 'Up to 100% of equipment value' },
  { name: 'Invoice Factoring', rate: '1-5% per month', term: 'Until invoice is paid', amount: '80-90% of invoice value' },
];

export default function LoanComparison() {
  const [selectedLoans, setSelectedLoans] = useState([loanTypes[0], loanTypes[1]]);

  const handleLoanSelect = (index, loanName) => {
    const newLoan = loanTypes.find(loan => loan.name === loanName);
    setSelectedLoans(prev => {
      const newLoans = [...prev];
      newLoans[index] = newLoan;
      return newLoans;
    });
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between mb-4">
          {[0, 1].map(index => (
            <Select key={index} onValueChange={(value) => handleLoanSelect(index, value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select loan type" />
              </SelectTrigger>
              <SelectContent>
                {loanTypes.map(loan => (
                  <SelectItem key={loan.name} value={loan.name}>{loan.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          ))}
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>{selectedLoans[0].name}</TableHead>
              <TableHead>{selectedLoans[1].name}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Interest Rate</TableCell>
              <TableCell>{selectedLoans[0].rate}</TableCell>
              <TableCell>{selectedLoans[1].rate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Term Length</TableCell>
              <TableCell>{selectedLoans[0].term}</TableCell>
              <TableCell>{selectedLoans[1].term}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Loan Amount</TableCell>
              <TableCell>{selectedLoans[0].amount}</TableCell>
              <TableCell>{selectedLoans[1].amount}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}