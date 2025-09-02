import { Shield, CheckCircle, Lock, Award } from "lucide-react";

const trustIndicators = [
  {
    icon: Shield,
    text: "SEBI-Compliant Content",
    description: "All content reviewed for regulatory compliance"
  },
  {
    icon: CheckCircle,
    text: "Expert Reviewed & Verified",
    description: "Validated by certified financial professionals"
  },
  {
    icon: Lock,
    text: "Secure & Private",
    description: "Your data is protected with bank-grade security"
  },
  {
    icon: Award,
    text: "Award-Winning Platform",
    description: "Recognized for financial education excellence"
  }
];

export const TrustBar = () => {
  return (
    <section className="py-8 bg-subtle/50 border-y">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustIndicators.map((indicator, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors pulse-subtle">
                <indicator.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="text-sm font-semibold text-foreground mb-1">
                {indicator.text}
              </div>
              <div className="text-xs text-muted-foreground max-w-[200px] hidden md:block">
                {indicator.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};