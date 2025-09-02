import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, HelpCircle, BookOpen, Shield, Globe, Target, Calculator, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    id: 'general',
    name: 'General',
    icon: HelpCircle,
    color: 'from-primary to-primary-light'
  },
  {
    id: 'learning',
    name: 'Learning',
    icon: BookOpen,
    color: 'from-secondary to-secondary-light'
  },
  {
    id: 'security',
    name: 'Security',
    icon: Shield,
    color: 'from-success to-secondary'
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Globe,
    color: 'from-accent to-warning'
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: Calculator,
    color: 'from-primary-dark to-secondary'
  }
];

const faqs = [
  {
    category: 'general',
    question: "What is FinRef and how does it work?",
    answer: "FinRef is a comprehensive financial education platform designed specifically for Indians. We provide expert-curated learning modules, interactive tools, and calculators in 22+ Indian languages. Our content is SEBI-compliant and reviewed by certified financial experts to ensure accuracy and reliability."
  },
  {
    category: 'general',
    question: "Is FinRef completely free to use?",
    answer: "Yes! FinRef is completely free to use. All our learning modules, calculators, and tools are available without any charges. We believe financial education should be accessible to everyone, regardless of economic background."
  },
  {
    category: 'general',
    question: "Do I need to create an account to access content?",
    answer: "While you can browse most content without an account, creating a free account allows you to track your learning progress, save modules for later, take quizzes, and access personalized recommendations."
  },
  {
    category: 'learning',
    question: "How are the learning paths structured?",
    answer: "Our learning paths are structured in three levels: Beginner (for those new to investing), Intermediate (for those with basic knowledge), and Advanced (for experienced investors). Each path contains 12-25 modules with articles, videos, and interactive content."
  },
  {
    category: 'learning',
    question: "How long does it take to complete a learning path?",
    answer: "Beginner path takes 2-3 weeks, Intermediate takes 4-5 weeks, and Advanced takes 6-8 weeks if you study consistently. However, you can learn at your own pace - there are no time restrictions."
  },
  {
    category: 'learning',
    question: "Are there certificates upon completion?",
    answer: "Currently, we provide completion badges and progress tracking. We're working on introducing certificates for completed learning paths, which will be launched soon."
  },
  {
    category: 'security',
    question: "How do you ensure content accuracy?",
    answer: "All our content is reviewed by SEBI-certified financial experts and is compliant with regulatory guidelines. We regularly update our modules to reflect current market conditions and regulatory changes."
  },
  {
    category: 'security',
    question: "Is my personal data safe with FinRef?",
    answer: "Absolutely. We follow strict data protection protocols and never share your personal information with third parties. We use industry-standard encryption to protect your data and privacy."
  },
  {
    category: 'security',
    question: "Do you provide investment recommendations?",
    answer: "No, we do not provide specific investment recommendations or advice. Our content is purely educational, helping you understand concepts so you can make your own informed decisions."
  },
  {
    category: 'languages',
    question: "Which languages are currently supported?",
    answer: "We support 22+ Indian languages including Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Gujarati, Marathi, Punjabi, and more. We're continuously adding support for additional regional languages."
  },
  {
    category: 'languages',
    question: "How accurate are the translations?",
    answer: "Our translations are done by native speakers and financial experts who understand both the language and financial concepts. We ensure cultural and contextual accuracy, not just literal translations."
  },
  {
    category: 'languages',
    question: "Can I switch between languages while learning?",
    answer: "Yes! You can switch languages at any time using the language selector in the header. Your progress is saved regardless of the language you choose."
  },
  {
    category: 'tools',
    question: "Are the calculators accurate and reliable?",
    answer: "Yes, all our calculators use standard financial formulas and are regularly audited for accuracy. However, they provide estimates based on your inputs and should be used for planning purposes only."
  },
  {
    category: 'tools',
    question: "Can I save calculator results?",
    answer: "Currently, calculator results are not saved automatically. We recommend taking screenshots or noting down important calculations. We're working on adding a save feature for logged-in users."
  },
  {
    category: 'tools',
    question: "Do you plan to add more financial tools?",
    answer: "Yes! We're continuously expanding our tools section. Upcoming additions include tax calculators, goal-based planning tools, and portfolio analyzers. Stay tuned for updates!"
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Find answers to common questions about FinRef, our learning platform, and financial education resources.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search for questions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Category Filter */}
        <section className="py-8 bg-subtle">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className="flex items-center gap-2"
              >
                All Categories
                <Badge variant="secondary" className="ml-2">
                  {faqs.length}
                </Badge>
              </Button>
              
              {faqCategories.map((category) => {
                const categoryCount = faqs.filter(faq => faq.category === category.id).length;
                
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    <category.icon className="h-4 w-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-2">
                      {categoryCount}
                    </Badge>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => {
                    const category = faqCategories.find(cat => cat.id === faq.category);
                    
                    return (
                      <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg">
                        <Card>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                              {category && (
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                                  <category.icon className="h-4 w-4 text-white" />
                                </div>
                              )}
                              <span className="font-medium">{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4">
                            <p className="text-muted-foreground leading-relaxed pl-11">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              ) : (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No questions found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search or browse different categories.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("all");
                      }}
                    >
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
        
        {/* Contact Support */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our support team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg">
                  Browse Learning Hub
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Quick Links */}
        <section className="py-12 bg-subtle">
          <div className="container">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4">Popular Help Topics</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {faqCategories.map((category) => (
                <Card 
                  key={category.id}
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-3`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-medium">{category.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {faqs.filter(faq => faq.category === category.id).length} questions
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}