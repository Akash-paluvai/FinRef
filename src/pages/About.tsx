import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Shield, Award, Globe, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Democratizing financial education for every Indian, regardless of language or background."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "SEBI-compliant content reviewed by certified financial experts for accuracy."
  },
  {
    icon: Globe,
    title: "Inclusive Access",
    description: "Available in 22+ Indian languages to ensure no one is left behind."
  },
  {
    icon: Users,
    title: "Community First",
    description: "Building a supportive community of informed investors across India."
  }
];

const team = [
  {
    name: "Dr. Priya Sharma",
    role: "Chief Financial Officer",
    credentials: "CFA, SEBI Certified",
    experience: "15+ years in financial planning",
    image: "👩‍💼"
  },
  {
    name: "Rajesh Kumar",
    role: "Head of Education",
    credentials: "MBA Finance, FRM",
    experience: "12+ years in investment education",
    image: "👨‍🏫"
  },
  {
    name: "Anita Desai",
    role: "Regional Language Lead",
    credentials: "Linguistic Expert",
    experience: "Expert in Indian regional languages",
    image: "👩‍💻"
  },
  {
    name: "Suresh Nair",
    role: "Technology Director",
    credentials: "M.Tech, Financial Tech",
    experience: "10+ years in fintech solutions",
    image: "👨‍💻"
  }
];

const milestones = [
  {
    year: "2020",
    title: "Foundation",
    description: "FinRef was founded with a vision to make financial education accessible to all Indians."
  },
  {
    year: "2021",
    title: "Multi-language Launch",
    description: "Expanded content to 10+ regional languages, reaching diverse communities."
  },
  {
    year: "2022",
    title: "SEBI Compliance",
    description: "Achieved full SEBI compliance and expert content verification."
  },
  {
    year: "2023",
    title: "1M+ Learners",
    description: "Reached over 1 million learners across India with financial education."
  },
  {
    year: "2024",
    title: "Advanced Tools",
    description: "Launched comprehensive financial calculators and planning tools."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">FinRef</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering Indians with financial knowledge, one learner at a time. 
                We believe everyone deserves access to quality financial education in their native language.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>1M+ Learners</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>22+ Languages</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>SEBI Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>Expert Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To democratize financial education in India by providing accessible, 
                    accurate, and culturally relevant learning resources in every Indian language. 
                    We aim to empower millions to make informed financial decisions and build 
                    a secure future.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Award className="h-6 w-6 text-secondary" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To create a financially literate India where language is never a barrier 
                    to understanding money management, investments, and wealth building. 
                    We envision a nation of informed investors who can confidently navigate 
                    their financial journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-subtle">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at FinRef
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story - Timeline */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our mission to democratize financial education
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                        <span className="text-white font-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <Card className="flex-1">
                      <CardHeader>
                        <CardTitle className="text-xl">{milestone.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Expert Team */}
        <section className="py-16 bg-subtle">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Industry professionals and certified experts ensuring content quality and accuracy
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 text-4xl">
                      {member.image}
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="font-medium text-primary">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Badge variant="secondary" className="text-xs">
                      {member.credentials}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {member.experience}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Trust Indicators */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Trust FinRef?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our commitment to accuracy, compliance, and your financial success
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-success to-secondary flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>SEBI Compliant</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    All our content is compliant with SEBI guidelines and regulations, 
                    ensuring accuracy and legal adherence.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Expert Reviewed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Every piece of content is reviewed and verified by certified 
                    financial experts and professionals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-warning flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Community Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built with feedback from our community of over 1 million learners 
                    across India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}