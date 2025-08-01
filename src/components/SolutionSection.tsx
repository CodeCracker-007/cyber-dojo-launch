import { CheckCircle, Zap, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Zap,
      title: "Real-World Simulations",
      description: "Experience actual phishing attacks, ransomware scenarios, and security breaches in a safe, controlled environment.",
      features: ["Live attack simulations", "Realistic threat scenarios", "Safe practice environment"]
    },
    {
      icon: Users,
      title: "Hands-On Learning",
      description: "Interactive labs and practical exercises that mirror real cybersecurity incidents and response procedures.",
      features: ["Interactive terminals", "Incident response training", "Practical skill building"]
    },
    {
      icon: BarChart3,
      title: "Real-Time Feedback",
      description: "Instant performance analytics and detailed feedback to track progress and identify areas for improvement.",
      features: ["Performance tracking", "Skill assessments", "Progress analytics"]
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-cyber bg-clip-text text-transparent">Solution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bridge the gap between theory and practice with immersive cybersecurity training 
            that prepares professionals for real-world threats and scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-smooth group">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:glow-primary transition-smooth">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Cybersecurity Skills?</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through practical, 
            hands-on cybersecurity training that actually prepares you for the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/modules">
              <Button variant="hero" size="lg">
                Explore Training Modules
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;