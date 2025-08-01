import { Users, Target, Lightbulb, Award, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Alex Chen",
      role: "Founder & CEO",
      background: "Former CISO at Fortune 500 companies with 15+ years in cybersecurity",
      expertise: "Strategic Leadership, Risk Management"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Curriculum",
      background: "Ethical hacker and security researcher with CISSP and CEH certifications",
      expertise: "Penetration Testing, Security Training"
    },
    {
      name: "Marcus Thompson",
      role: "CTO",
      background: "Full-stack developer with expertise in secure application development",
      expertise: "Platform Development, Security Architecture"
    },
    {
      name: "Dr. Emily Zhang",
      role: "Learning Experience Designer",
      background: "PhD in Educational Psychology with focus on adult learning and skill acquisition",
      expertise: "Instructional Design, Learning Analytics"
    }
  ];

  const timeline = [
    {
      year: "2022",
      title: "Foundation",
      description: "CyberGuard was founded with the mission to bridge the cybersecurity skills gap through practical training."
    },
    {
      year: "2023",
      title: "Platform Launch",
      description: "Launched our first three training modules with initial cohort of 100 students."
    },
    {
      year: "2024",
      title: "Scale & Growth",
      description: "Expanded to serve 10,000+ students with enterprise partnerships and advanced modules."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "International expansion with localized content and enterprise AI-powered assessments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              About <span className="gradient-cyber bg-clip-text text-transparent">CyberGuard</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're on a mission to prepare the next generation of cyber defenders through 
              immersive, practical training that bridges the gap between academic theory 
              and real-world cybersecurity challenges.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Target className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To make cybersecurity education practical, accessible, and effective by providing 
                    hands-on training experiences that mirror real-world security challenges. We believe 
                    that the best way to learn cybersecurity is by doing, not just reading about it.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lightbulb className="h-8 w-8 text-accent" />
                    <h2 className="text-3xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To become the global standard for practical cybersecurity education, empowering 
                    individuals and organizations worldwide with the skills and confidence needed to 
                    defend against evolving cyber threats in an increasingly digital world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Cybersecurity experts, educators, and technologists working together 
                to revolutionize how cybersecurity skills are taught and learned.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {member.background}
                    </p>
                    <div className="bg-secondary/30 rounded-lg p-3">
                      <p className="text-xs font-medium text-accent">{member.expertise}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="gradient-cyber bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From a small team with a big vision to a leading cybersecurity 
                training platform trusted by thousands of professionals worldwide.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <Card className="bg-card/50 backdrop-blur-sm border-border">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <Award className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-primary">{item.year}</div>
                              <div className="text-lg font-semibold">{item.title}</div>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking to advance your cybersecurity career or help others 
              develop critical security skills, we'd love to have you as part of our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button variant="hero" size="lg">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/#contact">
                <Button variant="outline" size="lg">
                  Contact Us
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

export default About;