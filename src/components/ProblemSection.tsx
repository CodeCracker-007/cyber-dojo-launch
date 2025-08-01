import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Skills Gap Crisis",
      description: "3.5 million unfilled cybersecurity jobs globally, with theoretical education failing to prepare professionals for real-world threats.",
      stat: "3.5M"
    },
    {
      icon: TrendingDown,
      title: "Rising Cyber Attacks",
      description: "Cyberattacks increase by 38% annually, but traditional training methods can't keep pace with evolving threat landscapes.",
      stat: "+38%"
    },
    {
      icon: Users,
      title: "Limited Practical Experience",
      description: "Most cybersecurity programs focus on theory without hands-on exposure to real attack scenarios and incident response.",
      stat: "85%"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-destructive">Problem</span> We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional cybersecurity education leaves a dangerous gap between classroom theory 
            and real-world cyber threats. Organizations struggle to find qualified professionals 
            who can handle actual security incidents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-smooth">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-6">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <div className="text-3xl font-bold text-destructive mb-2">{problem.stat}</div>
                <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-full px-6 py-3">
            <Target className="h-5 w-5 text-destructive" />
            <span className="text-destructive font-medium">
              The cybersecurity skills gap is costing organizations billions annually
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;