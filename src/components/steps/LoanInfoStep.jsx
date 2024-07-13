import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LoanInfoStep({ form }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="loanAmount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Loan Amount</FormLabel>
            <FormControl>
              <Input type="number" placeholder="50000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="loanPurpose"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Loan Purpose</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan purpose" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="working_capital">Working Capital</SelectItem>
                <SelectItem value="equipment">Equipment Purchase</SelectItem>
                <SelectItem value="expansion">Business Expansion</SelectItem>
                <SelectItem value="inventory">Inventory</SelectItem>
                <SelectItem value="refinancing">Debt Refinancing</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}