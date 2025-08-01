import { Mail, Shield, Terminal, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import phishingImage from "@/assets/phishing-module.jpg";
import ransomwareImage from "@/assets/ransomware-module.jpg";
import hackingImage from "@/assets/hacking-module.jpg";

const ModulesPreview = () => {
  const modules = [
    {
      id: "phishing",
      icon: Mail,
      title: "Phishing Inbox Simulator",
      description: "Master the art of identifying phishing emails through realistic simulations. Practice with actual phishing templates used by cybercriminals.",
      image: phishingImage,
      difficulty: "Beginner",
      duration: "45 min",
      skills: ["Email Security", "Social Engineering", "Threat Recognition"],
      color: "destructive"
    },
    {
      id: "ransomware",
      icon: Shield,
      title: "Ransomware Response Scenario",
      description: "Experience a full ransomware attack simulation and learn proper incident response procedures in a controlled environment.",
      image: ransomwareImage,
      difficulty: "Intermediate",
      duration: "90 min",
      skills: ["Incident Response", "Forensics", "Recovery Procedures"],
      color: "primary"
    },
    {
      id: "hacking",
      icon: Terminal,
      title: "Ethical Hacking Lab",
      description: "Learn penetration testing techniques and vulnerability assessment through hands-on terminal exercises and real-world scenarios.",
      image: hackingImage,
      difficulty: "Advanced",
      duration: "120 min",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing"],
      color: "accent"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-accent";
      case "Intermediate": return "text-primary";
      case "Advanced": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Training <span className="text-primary">Modules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive hands-on modules designed to simulate real-world cybersecurity 
            threats and prepare you for actual security incidents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <Card key={module.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-smooth group overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className={`inline-flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium ${getDifficultyColor(module.difficulty)}`}>
                    <module.icon className="h-4 w-4" />
                    <span>{module.difficulty}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-muted-foreground">
                    {module.duration}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{module.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {module.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Skills You'll Learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {module.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to={`/modules/${module.id}`}>
                  <Button variant="default" className="w-full group">
                    Start Module
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/modules">
            <Button variant="outline" size="lg">
              View All Modules
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ModulesPreview;