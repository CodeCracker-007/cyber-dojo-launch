import { useState } from "react";
import { User, Trophy, Clock, Target, Mail, Shield, Terminal, Play, ArrowRight, BarChart3 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useState({
    name: "Alex Chen",
    email: "alex.chen@company.com",
    company: "TechCorp Inc.",
    role: "Security Analyst",
    joinDate: "March 2024",
    avatar: "AC"
  });

  const modules = [
    {
      id: "phishing",
      icon: Mail,
      title: "Phishing Inbox Simulator",
      progress: 85,
      status: "In Progress",
      timeSpent: "38 min",
      score: 92,
      lastAccessed: "2 hours ago",
      color: "destructive"
    },
    {
      id: "ransomware",
      icon: Shield,
      title: "Ransomware Response Scenario",
      progress: 100,
      status: "Completed",
      timeSpent: "90 min",
      score: 88,
      lastAccessed: "3 days ago",
      color: "primary"
    },
    {
      id: "hacking",
      icon: Terminal,
      title: "Ethical Hacking Lab",
      progress: 0,
      status: "Not Started",
      timeSpent: "0 min",
      score: null,
      lastAccessed: "Never",
      color: "accent"
    }
  ];

  const achievements = [
    { title: "First Module Complete", description: "Completed your first training module", earned: true },
    { title: "Phishing Expert", description: "Scored 90+ on phishing simulation", earned: true },
    { title: "Quick Learner", description: "Completed a module in under 1 hour", earned: true },
    { title: "Security Specialist", description: "Complete all three modules", earned: false },
    { title: "Perfect Score", description: "Score 100% on any module", earned: false }
  ];

  const recentActivity = [
    { action: "Completed", module: "Phishing Email #15", time: "2 hours ago", score: 95 },
    { action: "Started", module: "Social Engineering Detection", time: "1 day ago", score: null },
    { action: "Achieved", module: "Quick Learner Badge", time: "3 days ago", score: null },
    { action: "Scored", module: "Ransomware Response", time: "3 days ago", score: 88 }
  ];

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-accent";
    if (progress > 50) return "bg-primary";
    return "bg-destructive";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-accent/10 text-accent border-accent/20";
      case "In Progress": return "bg-primary/10 text-primary border-primary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  const overallProgress = Math.round(modules.reduce((acc, module) => acc + module.progress, 0) / modules.length);
  const completedModules = modules.filter(m => m.progress === 100).length;
  const totalScore = Math.round(modules.filter(m => m.score).reduce((acc, module) => acc + (module.score || 0), 0) / modules.filter(m => m.score).length);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Header */}
        <section className="py-8 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">
                  Welcome back, <span className="text-primary">{user.name}</span>!
                </h1>
                <p className="text-muted-foreground">
                  Continue your cybersecurity training journey and master new skills.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">{user.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{user.name}</div>
                  <div className="text-sm text-muted-foreground">{user.role}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Overview */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{overallProgress}%</div>
                      <div className="text-sm text-muted-foreground">Overall Progress</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{completedModules}/3</div>
                      <div className="text-sm text-muted-foreground">Modules Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Target className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{totalScore || 0}%</div>
                      <div className="text-sm text-muted-foreground">Average Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">128</div>
                      <div className="text-sm text-muted-foreground">Minutes Trained</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Training Modules */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Your Training Modules</h2>
                  <Link to="/modules">
                    <Button variant="outline" size="sm">
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div className="space-y-6">
                  {modules.map((module) => (
                    <Card key={module.id} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/40 transition-smooth">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <module.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{module.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                Last accessed: {module.lastAccessed}
                              </p>
                            </div>
                          </div>
                          <Badge className={getStatusColor(module.status)}>
                            {module.status}
                          </Badge>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{module.progress}%</span>
                            </div>
                            <Progress value={module.progress} className="h-2" />
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <span className="text-muted-foreground">
                                Time: {module.timeSpent}
                              </span>
                              {module.score && (
                                <span className="text-muted-foreground">
                                  Score: {module.score}%
                                </span>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              {module.progress === 100 ? (
                                <Button variant="outline" size="sm">
                                  Review
                                </Button>
                              ) : (
                                <Button variant="default" size="sm">
                                  <Play className="mr-2 h-4 w-4" />
                                  {module.progress === 0 ? "Start" : "Continue"}
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Achievements */}
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Trophy className="h-5 w-5 text-accent" />
                      <span>Achievements</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <div key={index} className={`flex items-start space-x-3 p-3 rounded-lg ${achievement.earned ? 'bg-accent/10' : 'bg-muted/10'}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${achievement.earned ? 'bg-accent' : 'bg-muted'}`}>
                            <Trophy className={`h-3 w-3 ${achievement.earned ? 'text-background' : 'text-muted-foreground'}`} />
                          </div>
                          <div>
                            <div className={`text-sm font-medium ${achievement.earned ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {achievement.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {achievement.description}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          <div className="flex-1">
                            <div className="text-sm">
                              <span className="font-medium">{activity.action}</span>{" "}
                              {activity.module}
                              {activity.score && (
                                <span className="text-accent ml-1">({activity.score}%)</span>
                              )}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Next Challenge?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Continue building your cybersecurity expertise with our advanced training modules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/modules">
                <Button variant="hero" size="lg">
                  Browse All Modules
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                View Learning Path
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;