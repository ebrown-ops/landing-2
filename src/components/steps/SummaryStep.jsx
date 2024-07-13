import { useFormContext } from 'react-hook-form';

export default function SummaryStep() {
  const { getValues } = useFormContext();
  const formData = getValues();

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Application Summary</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SummaryItem label="First Name" value={formData.firstName} />
        <SummaryItem label="Last Name" value={formData.lastName} />
        <SummaryItem label="Email" value={formData.email} />
        <SummaryItem label="Phone" value={formData.phone} />
        <SummaryItem label="Business Name" value={formData.businessName} />
        <SummaryItem label="Business Type" value={formData.businessType} />
        <SummaryItem label="Annual Revenue" value={`$${formData.annualRevenue}`} />
        <SummaryItem label="Years in Business" value={formData.yearsInBusiness} />
        <SummaryItem label="Loan Amount" value={`$${formData.loanAmount}`} />
        <SummaryItem label="Loan Purpose" value={formData.loanPurpose} />
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Please review your information above. If everything is correct, click "Submit Application" to proceed.
      </p>
    </div>
  );
}

function SummaryItem({ label, value }) {
  return (
    <div className="border-b pb-2">
      <span className="font-medium">{label}:</span> {value}
    </div>
  );
}