import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    business: "Bloom Cafe",
    quote: "SBG Funding helped me expand my cafe to a second location. Their quick approval process and flexible terms were exactly what I needed."
  },
  {
    name: "Michael Chen",
    business: "TechGrow Solutions",
    quote: "As a tech startup, we needed capital to scale quickly. SBG Funding understood our unique needs and provided the perfect funding solution."
  },
  {
    name: "Emily Rodriguez",
    business: "Green Earth Landscaping",
    quote: "The team at SBG Funding was incredibly supportive. They guided me through the entire process and helped my business secure the equipment we needed."
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.business}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}