import { Globe, BarChart3, Calculator, BookOpen, Users, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Learn in Your Language",
    description: "Access content in 22+ Indian languages with native translations and cultural context.",
    gradient: "from-primary to-primary-light"
  },
  {
    icon: BarChart3,
    title: "Interactive Learning",
    description: "Engage with interactive charts, quizzes, and real-time market data for hands-on experience.",
    gradient: "from-secondary to-secondary-light"
  },
  {
    icon: Calculator,
    title: "Practical Tools",
    description: "Use SIP calculators, EMI planners, and retirement tools to make informed decisions.",
    gradient: "from-accent to-warning"
  },
  {
    icon: BookOpen,
    title: "Expert Content",
    description: "Learn from SEBI-registered advisors and certified financial professionals.",
    gradient: "from-primary-dark to-primary"
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join thousands of learners and get support from our active community.",
    gradient: "from-secondary-light to-secondary"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Bank-grade security with complete privacy protection for your learning journey.",
    gradient: "from-success to-secondary"
  }
];

export const FeaturesShowcase = () => {
  return (
    <section className="py-20 md:py-32 bg-subtle/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Choose <span className="gradient-text">FinRef</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to master investing, designed specifically for Indian investors.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md card-hover"
            >
              <CardContent className="p-8">
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Financial Journey?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of Indians who are already building their wealth with expert guidance and personalized learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-3 rounded-lg text-white font-semibold hover:scale-105 transition-transform">
              Get Started Now
            </button>
            <button className="px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-semibold">
              Explore Features
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};