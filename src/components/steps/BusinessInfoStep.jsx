import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function BusinessInfoStep({ form }) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="businessName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Name</FormLabel>
            <FormControl>
              <Input placeholder="Acme Inc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="businessType"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Business Type</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectItem value="sole_proprietorship">Sole Proprietorship</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="llc">LLC</SelectItem>
                <SelectItem value="corporation">Corporation</SelectItem>
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="annualRevenue"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Annual Revenue</FormLabel>
            <FormControl>
              <Input type="number" placeholder="100000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="yearsInBusiness"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Years in Business</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}