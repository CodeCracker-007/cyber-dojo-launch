import { Code, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TechStackSection = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: Code,
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite"],
      description: "Modern, responsive user interface built for performance and accessibility."
    },
    {
      category: "Backend",
      icon: Database,
      technologies: ["Node.js", "Express", "MongoDB", "Redis"],
      description: "Scalable server architecture with real-time capabilities and data persistence."
    },
    {
      category: "Security",
      icon: Shield,
      technologies: ["JWT", "bcrypt", "HTTPS", "OWASP"],
      description: "Enterprise-grade security following industry best practices and standards."
    },
    {
      category: "Performance",
      icon: Zap,
      technologies: ["Docker", "CDN", "Caching", "Load Balancing"],
      description: "Optimized for speed and reliability with global content delivery."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with <span className="gradient-cyber bg-clip-text text-transparent">Modern Tech</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver secure, 
            scalable, and high-performance cybersecurity training experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="bg-card/30 backdrop-blur-sm border-border hover:border-primary/40 transition-smooth group">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:glow-primary transition-smooth">
                    <tech.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{tech.category}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-between py-2 px-3 bg-secondary/30 rounded-lg"
                    >
                      <span className="text-sm font-medium">{technology}</span>
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Open Source & Secure</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform is built with transparency and security in mind. All security implementations 
              follow OWASP guidelines and undergo regular security audits to ensure the highest standards 
              of protection for your learning environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;