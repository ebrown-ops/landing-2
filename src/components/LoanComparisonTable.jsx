import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoanComparisonTable({ options }) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Loan Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              {options.map((option, index) => (
                <TableHead key={index}>{option.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Loan Amount</TableCell>
              {options.map((option, index) => (
                <TableCell key={index}>${option.amount.toLocaleString()}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Interest Rate</TableCell>
              {options.map((option, index) => (
                <TableCell key={index}>{option.interestRate}%</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Term Length</TableCell>
              {options.map((option, index) => (
                <TableCell key={index}>{option.term} months</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Monthly Payment</TableCell>
              {options.map((option, index) => (
                <TableCell key={index}>${option.monthlyPayment.toFixed(2)}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Total Repayment</TableCell>
              {options.map((option, index) => (
                <TableCell key={index}>${(option.monthlyPayment * option.term).toFixed(2)}</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}