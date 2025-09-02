import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, TrendingUp, Target, ArrowRight } from "lucide-react";

const learningPaths = [
  {
    icon: BookOpen,
    title: "Beginner",
    description: "New to investing? Start here.",
    details: "Learn the fundamentals of investing, understand basic concepts, and build a strong foundation.",
    modules: "15 modules",
    duration: "2-3 weeks",
    color: "from-primary to-primary-dark",
    features: ["Basic Investment Concepts", "Risk & Return", "Getting Started Guide"]
  },
  {
    icon: TrendingUp,
    title: "Intermediate",
    description: "Ready to dive deeper into strategies.",
    details: "Explore advanced investment strategies, portfolio management, and market analysis techniques.",
    modules: "20 modules", 
    duration: "4-5 weeks",
    color: "from-secondary to-secondary-light",
    features: ["Portfolio Diversification", "Market Analysis", "Tax Planning"]
  },
  {
    icon: Target,
    title: "Advanced",
    description: "Master sophisticated investment approaches.",
    details: "Advanced strategies, options trading, and comprehensive wealth management techniques.",
    modules: "25 modules",
    duration: "6-8 weeks", 
    color: "from-accent to-warning",
    features: ["Options Trading", "Advanced Analytics", "Wealth Management"]
  }
];

export const LearningPaths = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting or looking to advance your skills, we have the perfect path for your journey.
          </p>
        </div>

        {/* Learning Path Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {learningPaths.map((path, index) => (
            <Card 
              key={index} 
              className="relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${path.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${path.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <path.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{path.title}</CardTitle>
                <CardDescription className="text-base">{path.description}</CardDescription>
              </CardHeader>

              <CardContent className="relative space-y-6">
                <p className="text-muted-foreground">{path.details}</p>
                
                {/* Path Metadata */}
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="font-medium">{path.modules}</span>
                  <span className="font-medium">{path.duration}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2">
                  {path.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full group-hover:shadow-lg transition-shadow" 
                  variant="outline"
                  size="lg"
                >
                  Start {path.title} Path
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Not sure which path to choose?</p>
          <Button variant="ghost" className="text-primary hover:text-primary-dark">
            Take our quick assessment →
          </Button>
        </div>
      </div>
    </section>
  );
};