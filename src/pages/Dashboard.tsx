import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { BookOpen, Target, TrendingUp, Play, Clock, CheckCircle, Settings, User, Shield, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const learningStats = {
  overall: 35,
  beginner: { completed: 12, total: 20 },
  intermediate: { completed: 3, total: 15 },
  advanced: { completed: 0, total: 12 },
  quizAverage: 85
};

const savedModules = [
  {
    id: 1,
    title: "Tax Planning for Investments",
    difficulty: "Advanced",
    format: "Article",
    duration: "20 min read"
  },
  {
    id: 2,
    title: "Understanding IPOs",
    difficulty: "Intermediate", 
    format: "Video",
    duration: "18 min watch"
  },
  {
    id: 3,
    title: "Portfolio Rebalancing",
    difficulty: "Advanced",
    format: "Interactive", 
    duration: "25 min"
  }
];

const recentActivity = [
  {
    id: 1,
    title: "SIP vs Lump Sum Investment",
    action: "Completed",
    date: "2 hours ago",
    score: 90
  },
  {
    id: 2,
    title: "Introduction to Mutual Funds", 
    action: "In Progress",
    date: "Yesterday",
    progress: 45
  },
  {
    id: 3,
    title: "What is Stock Market?",
    action: "Started",
    date: "2 days ago", 
    progress: 10
  }
];

export default function Dashboard() {
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    email: "rahul.sharma@email.com",
    language: "English",
    notifications: true,
    twoFactor: false
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Welcome Section */}
        <section className="py-12 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Welcome back, <span className="gradient-text">{profile.name.split(' ')[0]}</span>! 👋
                </h1>
                <p className="text-xl text-muted-foreground">
                  Continue your financial learning journey
                </p>
              </div>
              
              {/* Continue Learning Card */}
              <Card className="mb-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Play className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Introduction to Mutual Funds</h3>
                        <p className="text-muted-foreground">45% complete • 8 min left</p>
                      </div>
                    </div>
                    <Link to="/module/2">
                      <Button size="lg" className="bg-gradient-to-r from-primary to-primary-dark">
                        Continue Learning
                      </Button>
                    </Link>
                  </div>
                  <Progress value={45} className="mt-4 h-2" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Dashboard Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="overview" className="space-y-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview" className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="saved" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Saved
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </TabsTrigger>
                  <TabsTrigger value="activity" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Activity
                  </TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  {/* Progress Overview */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Overall Progress</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold">{learningStats.overall}%</span>
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <Target className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <Progress value={learningStats.overall} className="h-2" />
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Beginner Path</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold">
                            {learningStats.beginner.completed}/{learningStats.beginner.total}
                          </span>
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                            <BookOpen className="h-6 w-6 text-secondary" />
                          </div>
                        </div>
                        <Progress 
                          value={(learningStats.beginner.completed / learningStats.beginner.total) * 100} 
                          className="h-2" 
                        />
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Intermediate Path</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold">
                            {learningStats.intermediate.completed}/{learningStats.intermediate.total}
                          </span>
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <Progress 
                          value={(learningStats.intermediate.completed / learningStats.intermediate.total) * 100} 
                          className="h-2" 
                        />
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-muted-foreground">Quiz Average</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold">{learningStats.quizAverage}%</span>
                          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                            <Target className="h-6 w-6 text-accent" />
                          </div>
                        </div>
                        <Progress value={learningStats.quizAverage} className="h-2" />
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your learning progress over the past week</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-center justify-between p-4 rounded-lg bg-subtle hover:bg-muted/50 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                activity.action === 'Completed' ? 'bg-success/10 text-success' :
                                activity.action === 'In Progress' ? 'bg-primary/10 text-primary' :
                                'bg-muted text-muted-foreground'
                              }`}>
                                {activity.action === 'Completed' ? <CheckCircle className="h-5 w-5" /> :
                                 activity.action === 'In Progress' ? <Play className="h-5 w-5" /> :
                                 <BookOpen className="h-5 w-5" />}
                              </div>
                              <div>
                                <h4 className="font-medium">{activity.title}</h4>
                                <p className="text-sm text-muted-foreground">{activity.date}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              {activity.action === 'Completed' ? (
                                <Badge variant="outline" className="text-success border-success">
                                  Score: {activity.score}%
                                </Badge>
                              ) : (
                                <Badge variant="outline">
                                  {activity.progress}% complete
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Saved Modules Tab */}
                <TabsContent value="saved" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>My Saved Modules</CardTitle>
                      <CardDescription>Modules you've bookmarked for later viewing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {savedModules.map((module) => (
                          <Card key={module.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                              <h3 className="font-medium mb-2">{module.title}</h3>
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="secondary" className="text-xs">
                                  {module.difficulty}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {module.format}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">{module.duration}</p>
                              <Link to={`/module/${module.id}`}>
                                <Button size="sm" className="w-full">
                                  Start Learning
                                </Button>
                              </Link>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Settings Tab */}
                <TabsContent value="settings" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Profile Settings */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="h-5 w-5" />
                          Profile
                        </CardTitle>
                        <CardDescription>Manage your personal information</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name" 
                            value={profile.name}
                            onChange={(e) => setProfile({...profile, name: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address</Label>
                          <Input 
                            id="email" 
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                          />
                        </div>
                        <Button>Update Profile</Button>
                      </CardContent>
                    </Card>
                    
                    {/* Security Settings */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Security
                        </CardTitle>
                        <CardDescription>Secure your account</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Two-Factor Authentication</Label>
                            <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                          </div>
                          <Switch 
                            checked={profile.twoFactor}
                            onCheckedChange={(checked) => setProfile({...profile, twoFactor: checked})}
                          />
                        </div>
                        <Button variant="outline" className="w-full">
                          Change Password
                        </Button>
                      </CardContent>
                    </Card>
                    
                    {/* Language Preferences */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Preferences
                        </CardTitle>
                        <CardDescription>Customize your experience</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <Label htmlFor="language">Default Language</Label>
                          <Input 
                            id="language" 
                            value={profile.language}
                            onChange={(e) => setProfile({...profile, language: e.target.value})}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <Label>Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">Receive learning reminders</p>
                          </div>
                          <Switch 
                            checked={profile.notifications}
                            onCheckedChange={(checked) => setProfile({...profile, notifications: checked})}
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* Activity Tab */}
                <TabsContent value="activity" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Learning Activity</CardTitle>
                      <CardDescription>Detailed view of your learning journey</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="border-l-2 border-primary/20 pl-4 pb-4">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium">{activity.title}</h4>
                              <span className="text-sm text-muted-foreground">{activity.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant={
                                activity.action === 'Completed' ? 'default' :
                                activity.action === 'In Progress' ? 'secondary' : 'outline'
                              }>
                                {activity.action}
                              </Badge>
                              {activity.action === 'Completed' && (
                                <span className="text-sm text-muted-foreground">
                                  Quiz Score: {activity.score}%
                                </span>
                              )}
                              {activity.progress && activity.action !== 'Completed' && (
                                <span className="text-sm text-muted-foreground">
                                  {activity.progress}% complete
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}