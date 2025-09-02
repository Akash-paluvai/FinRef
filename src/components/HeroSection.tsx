import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Hero Content */}
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Learn Investing.{" "}
            <span className="gradient-text">The Right Way.</span>
            <br />
            <span className="text-secondary">In Your Language.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Free, expert-reviewed lessons and tools to help you build a secure financial future. 
            Available in 22+ Indian languages.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="hero" className="text-lg px-8 py-6 group">
              Start Learning for Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 group">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">23+</div>
              <div className="text-sm text-muted-foreground">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Lessons</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Learners</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};