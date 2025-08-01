import { Mail, Shield, Terminal, Clock, Users, Star, ArrowRight, PlayCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import phishingImage from "@/assets/phishing-module.jpg";
import ransomwareImage from "@/assets/ransomware-module.jpg";
import hackingImage from "@/assets/hacking-module.jpg";

const Modules = () => {
  const modules = [
    {
      id: "phishing",
      icon: Mail,
      title: "Phishing Inbox Simulator",
      shortDescription: "Master phishing detection through realistic email simulations",
      fullDescription: "Experience real-world phishing attacks in a safe environment. Learn to identify sophisticated social engineering techniques, analyze suspicious emails, and develop the intuition needed to protect yourself and your organization from email-based threats.",
      image: phishingImage,
      difficulty: "Beginner",
      duration: "45 minutes",
      participants: "2,847",
      rating: 4.8,
      skills: ["Email Security", "Social Engineering", "Threat Recognition", "Incident Reporting"],
      learningOutcomes: [
        "Identify common phishing indicators",
        "Analyze email headers and content",
        "Recognize social engineering tactics",
        "Implement proper reporting procedures"
      ],
      prerequisites: ["Basic email knowledge", "Understanding of cybersecurity basics"],
      color: "destructive"
    },
    {
      id: "ransomware",
      icon: Shield,
      title: "Ransomware Response Scenario",
      shortDescription: "Learn incident response through immersive ransomware simulation",
      fullDescription: "Navigate a full-scale ransomware attack from initial detection to complete recovery. Practice critical decision-making under pressure while learning industry-standard incident response procedures and recovery strategies.",
      image: ransomwareImage,
      difficulty: "Intermediate",
      duration: "90 minutes",
      participants: "1,923",
      rating: 4.9,
      skills: ["Incident Response", "Digital Forensics", "Recovery Procedures", "Crisis Management"],
      learningOutcomes: [
        "Execute incident response plans",
        "Coordinate with stakeholders",
        "Implement containment strategies",
        "Manage recovery processes"
      ],
      prerequisites: ["Basic networking knowledge", "Understanding of malware types"],
      color: "primary"
    },
    {
      id: "hacking",
      icon: Terminal,
      title: "Ethical Hacking Lab",
      shortDescription: "Master penetration testing in controlled environments",
      fullDescription: "Develop ethical hacking skills through hands-on penetration testing exercises. Learn vulnerability assessment, exploitation techniques, and security auditing in purpose-built environments that mirror real-world systems.",
      image: hackingImage,
      difficulty: "Advanced",
      duration: "120 minutes",
      participants: "1,156",
      rating: 4.7,
      skills: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "Exploit Development"],
      learningOutcomes: [
        "Conduct vulnerability assessments",
        "Perform penetration testing",
        "Document security findings",
        "Recommend remediation strategies"
      ],
      prerequisites: ["Linux command line", "Networking fundamentals", "Basic scripting"],
      color: "accent"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-accent/10 text-accent border-accent/20";
      case "Intermediate": return "bg-primary/10 text-primary border-primary/20";
      case "Advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Training <span className="gradient-cyber bg-clip-text text-transparent">Modules</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Comprehensive hands-on modules designed to simulate real-world cybersecurity 
              threats and prepare you for actual security incidents in your career.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-sm px-4 py-2">
                <PlayCircle className="w-4 h-4 mr-2" />
                Interactive Simulations
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Real-World Scenarios
              </Badge>
              <Badge variant="outline" className="text-sm px-4 py-2">
                <Users className="w-4 h-4 mr-2" />
                Expert-Designed
              </Badge>
            </div>
          </div>
        </section>

        {/* Modules List */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {modules.map((module, index) => (
                <div key={module.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Module Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative h-80 rounded-2xl overflow-hidden">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <Badge className={getDifficultyColor(module.difficulty)}>
                          {module.difficulty}
                        </Badge>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span className="text-sm">{module.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span className="text-sm">{module.participants}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-current text-accent" />
                            <span className="text-sm">{module.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Module Content */}
                  <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                        <module.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold">{module.title}</h2>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {module.fullDescription}
                    </p>

                    {/* Skills */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Skills You'll Develop:</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Learning Outcomes:</h3>
                      <ul className="space-y-2">
                        {module.learningOutcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prerequisites */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Prerequisites:</h3>
                      <div className="flex flex-wrap gap-2">
                        {module.prerequisites.map((prereq, prereqIndex) => (
                          <Badge key={prereqIndex} variant="outline" className="text-sm">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/register">
                        <Button variant="hero" size="lg" className="w-full sm:w-auto">
                          Start Module
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        Preview Content
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join thousands of professionals who have advanced their careers through our 
              practical, hands-on cybersecurity training modules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="lg">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="lg">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Modules;