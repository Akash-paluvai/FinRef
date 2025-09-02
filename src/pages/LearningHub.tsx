import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, BookOpen, Play, FileText, Clock, BarChart3, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const mockModules = [
  {
    id: 1,
    title: "What is Stock Market?",
    description: "Learn the basics of stock market, how it works, and why it's important for your financial future.",
    difficulty: "Beginner",
    format: "Article",
    duration: "10 min read",
    progress: 0,
    topic: "Stocks",
    image: "📈"
  },
  {
    id: 2,
    title: "Introduction to Mutual Funds",
    description: "Understand mutual funds, their types, benefits, and how to choose the right one for your goals.",
    difficulty: "Beginner", 
    format: "Video",
    duration: "15 min watch",
    progress: 45,
    topic: "Mutual Funds",
    image: "📊"
  },
  {
    id: 3,
    title: "SIP vs Lump Sum Investment",
    description: "Compare systematic investment plans with lump sum investments to make informed decisions.",
    difficulty: "Intermediate",
    format: "Interactive",
    duration: "12 min",
    progress: 100,
    topic: "Investment Planning",
    image: "💰"
  },
  {
    id: 4,
    title: "Tax Planning for Investments",
    description: "Learn about tax implications of different investments and how to optimize your tax savings.",
    difficulty: "Advanced",
    format: "Article",
    duration: "20 min read",
    progress: 0,
    topic: "Taxation",
    image: "🧾"
  },
  {
    id: 5,
    title: "Understanding IPOs",
    description: "Everything you need to know about Initial Public Offerings, risks, and how to evaluate them.",
    difficulty: "Intermediate",
    format: "Video",
    duration: "18 min watch",
    progress: 30,
    topic: "IPOs",
    image: "🚀"
  },
  {
    id: 6,
    title: "Portfolio Diversification",
    description: "Master the art of building a diversified portfolio to minimize risk and maximize returns.",
    difficulty: "Advanced",
    format: "Interactive",
    duration: "25 min",
    progress: 0,
    topic: "Portfolio Management",
    image: "🎯"
  }
];

const difficultyColors = {
  "Beginner": "from-secondary to-secondary-light",
  "Intermediate": "from-primary to-primary-light", 
  "Advanced": "from-accent to-warning"
};

const formatIcons = {
  "Article": FileText,
  "Video": Play,
  "Interactive": BarChart3
};

export default function LearningHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 6;
  
  // Filter modules based on search and filters
  const filteredModules = mockModules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         module.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTopic = selectedTopic === "all" || module.topic === selectedTopic;
    const matchesDifficulty = selectedDifficulty === "all" || module.difficulty === selectedDifficulty;
    const matchesFormat = selectedFormat === "all" || module.format === selectedFormat;
    
    return matchesSearch && matchesTopic && matchesDifficulty && matchesFormat;
  });
  
  const totalPages = Math.ceil(filteredModules.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedModules = filteredModules.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Learning Hub</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover expert-curated financial education modules designed to help you make informed investment decisions.
              </p>
            </div>
            
            {/* Search & Filter Bar */}
            <div className="bg-card rounded-xl p-6 shadow-lg max-w-4xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4">
                {/* Search Bar */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search for topics like 'Mutual Funds'..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                {/* Topic Filter */}
                <Select value={selectedTopic} onValueChange={setSelectedTopic}>
                  <SelectTrigger>
                    <SelectValue placeholder="Topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Topics</SelectItem>
                    <SelectItem value="Stocks">Stocks</SelectItem>
                    <SelectItem value="Mutual Funds">Mutual Funds</SelectItem>
                    <SelectItem value="Investment Planning">Investment Planning</SelectItem>
                    <SelectItem value="Taxation">Taxation</SelectItem>
                    <SelectItem value="IPOs">IPOs</SelectItem>
                    <SelectItem value="Portfolio Management">Portfolio Management</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Difficulty Filter */}
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                
                {/* Format Filter */}
                <Select value={selectedFormat} onValueChange={setSelectedFormat}>
                  <SelectTrigger>
                    <SelectValue placeholder="Format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Formats</SelectItem>
                    <SelectItem value="Article">Article</SelectItem>
                    <SelectItem value="Video">Video</SelectItem>
                    <SelectItem value="Interactive">Interactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredModules.length} modules
                </p>
                <Button variant="outline" size="sm" onClick={() => {
                  setSearchQuery("");
                  setSelectedTopic("all");
                  setSelectedDifficulty("all");
                  setSelectedFormat("all");
                }}>
                  <Filter className="h-4 w-4 mr-2" />
                  Clear Filters
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {paginatedModules.map((module) => {
                const FormatIcon = formatIcons[module.format as keyof typeof formatIcons];
                
                return (
                  <Card key={module.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <CardHeader className="relative">
                      {/* Module Icon/Image */}
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${difficultyColors[module.difficulty as keyof typeof difficultyColors]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-2xl`}>
                        {module.image}
                      </div>
                      
                      {/* Progress Bar for logged-in users */}
                      {module.progress > 0 && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-background/90 backdrop-blur-sm rounded-full p-1">
                            <Progress value={module.progress} className="w-12 h-2" />
                          </div>
                        </div>
                      )}
                      
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {module.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2">
                        {module.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      {/* Metadata Tags */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          {module.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <FormatIcon className="h-3 w-3" />
                          {module.format}
                        </Badge>
                        <Badge variant="outline" className="text-xs flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {module.duration}
                        </Badge>
                      </div>
                      
                      {/* Progress Status */}
                      {module.progress > 0 && (
                        <div className="text-sm text-muted-foreground">
                          {module.progress === 100 ? "✅ Completed" : `📖 ${module.progress}% complete`}
                        </div>
                      )}
                      
                      {/* CTA */}
                      <Link to={`/module/${module.id}`}>
                        <Button className="w-full group-hover:shadow-lg transition-shadow">
                          {module.progress === 0 ? "Start Learning" : 
                           module.progress === 100 ? "Review Module" : "Continue Learning"}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => (
                      <PaginationItem key={i + 1}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(i + 1);
                          }}
                          isActive={currentPage === i + 1}
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}