import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Cybersecurity Analyst",
      company: "TechCorp",
      content: "The phishing simulator was incredibly realistic. It helped me identify attack patterns I never would have recognized in traditional training. The hands-on approach made all the difference.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "IT Security Manager",
      company: "FinanceFirst",
      content: "Our team's incident response time improved by 40% after completing the ransomware scenarios. The real-world simulations prepare you for actual emergencies.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Security Researcher",
      company: "CyberLabs",
      content: "Finally, a training platform that bridges theory and practice. The ethical hacking lab is comprehensive and mirrors real penetration testing workflows perfectly.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-primary">Students Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of cybersecurity professionals who have transformed 
            their careers through our practical training approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-smooth group">
              <CardContent className="p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current" />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-primary/10 border border-primary/20 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-current" />
              ))}
            </div>
            <div className="text-lg font-semibold">4.9/5 Average Rating</div>
            <div className="text-muted-foreground">from 2,500+ reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;