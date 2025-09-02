import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ChevronLeft, ChevronRight, CheckCircle, Clock, BookOpen, Target, Play, Users } from "lucide-react";

const mockModuleData = {
  1: {
    title: "What is Stock Market?",
    path: "Beginner",
    duration: "10 min read",
    content: `
      <h2>Understanding the Stock Market</h2>
      <p>The stock market is a collection of exchanges where shares of publicly traded companies are bought and sold. It serves as a platform for companies to raise capital and for investors to own a piece of those companies.</p>
      
      <h3>How Does the Stock Market Work?</h3>
      <p>When you buy a stock, you're purchasing a small ownership stake in a company. If the company performs well, the value of your stock may increase. Conversely, if the company struggles, your stock value may decrease.</p>
      
      <h3>Key Players in the Stock Market</h3>
      <ul>
        <li><strong>Companies:</strong> They issue shares to raise money for business expansion</li>
        <li><strong>Investors:</strong> People like you who buy and sell stocks</li>
        <li><strong>Stock Exchanges:</strong> Platforms like BSE and NSE where trading happens</li>
        <li><strong>Brokers:</strong> Intermediaries who execute your buy/sell orders</li>
      </ul>
      
      <h3>Why Invest in Stocks?</h3>
      <p>Historically, stocks have provided better returns than traditional savings accounts or fixed deposits over the long term. However, they also come with higher risk.</p>
    `,
    keyTakeaways: [
      "Stock market is where company shares are bought and sold",
      "Buying stocks means owning a piece of a company", 
      "Stock prices fluctuate based on company performance and market conditions",
      "Long-term investing in stocks has historically provided good returns"
    ],
    quiz: [
      {
        question: "What happens when you buy a stock?",
        options: [
          "You loan money to the company",
          "You become a part owner of the company", 
          "You get a guaranteed return",
          "You become an employee of the company"
        ],
        correct: 1,
        explanation: "When you buy a stock, you purchase shares which represent partial ownership in that company."
      },
      {
        question: "Which of these is NOT a key player in the stock market?",
        options: [
          "Stock exchanges",
          "Companies",
          "Insurance agents",
          "Brokers"
        ],
        correct: 2,
        explanation: "Insurance agents are not directly involved in stock market operations. The key players are companies, investors, stock exchanges, and brokers."
      }
    ]
  }
};

export default function Module() {
  const { id } = useParams();
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const moduleId = parseInt(id || "1");
  const module = mockModuleData[moduleId as keyof typeof mockModuleData] || mockModuleData[1];
  
  const handleQuizAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    setTimeout(() => {
      if (currentQuizIndex < module.quiz.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setSelectedAnswer(null);
        setShowExplanation(false);
      } else {
        setQuizComplete(true);
      }
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Breadcrumb Navigation */}
        <section className="py-6 bg-subtle">
          <div className="container">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/learning">Learning Hub</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/learning">{module.path}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{module.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </section>
        
        {/* Module Header */}
        <section className="py-12 bg-gradient-to-br from-subtle to-background">
          <div className="container max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {module.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{module.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Article</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>{module.path}</span>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="bg-card rounded-lg p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">30% Complete</span>
              </div>
              <Progress value={30} className="h-2" />
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container max-w-4xl">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Article Content */}
              <div className="lg:col-span-3">
                <Card className="mb-8">
                  <CardContent className="prose prose-lg max-w-none p-8">
                    <div dangerouslySetInnerHTML={{ __html: module.content }} />
                  </CardContent>
                </Card>
                
                {/* Interactive Quiz */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Knowledge Check
                    </CardTitle>
                    <CardDescription>
                      Test your understanding with this quick quiz
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!quizComplete ? (
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            Question {currentQuizIndex + 1} of {module.quiz.length}
                          </span>
                          <Progress value={((currentQuizIndex) / module.quiz.length) * 100} className="w-32 h-2" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-4">
                            {module.quiz[currentQuizIndex].question}
                          </h3>
                          
                          <div className="space-y-2">
                            {module.quiz[currentQuizIndex].options.map((option, index) => (
                              <Button
                                key={index}
                                variant={selectedAnswer === index 
                                  ? (index === module.quiz[currentQuizIndex].correct ? "success" : "destructive")
                                  : "outline"
                                }
                                className="w-full justify-start h-auto p-4 text-left"
                                onClick={() => !showExplanation && handleQuizAnswer(index)}
                                disabled={showExplanation}
                              >
                                <span className="mr-3 font-mono">
                                  {String.fromCharCode(65 + index)}.
                                </span>
                                {option}
                                {showExplanation && index === module.quiz[currentQuizIndex].correct && (
                                  <CheckCircle className="h-4 w-4 ml-auto text-success" />
                                )}
                              </Button>
                            ))}
                          </div>
                          
                          {showExplanation && (
                            <div className="mt-4 p-4 bg-subtle rounded-lg">
                              <p className="text-sm">
                                <strong>Explanation:</strong> {module.quiz[currentQuizIndex].explanation}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Quiz Complete! 🎉</h3>
                        <p className="text-muted-foreground mb-4">
                          Great job! You've completed the knowledge check.
                        </p>
                        <Button onClick={() => {
                          setCurrentQuizIndex(0);
                          setSelectedAnswer(null);
                          setShowExplanation(false);
                          setQuizComplete(false);
                        }}>
                          Retake Quiz
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Key Takeaways */}
                <Card className="mb-6 sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Key Takeaways</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.keyTakeaways.map((takeaway, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Module Navigation */}
        <section className="py-8 bg-subtle">
          <div className="container max-w-4xl">
            <div className="flex items-center justify-between">
              <Link to="/learning">
                <Button variant="outline" className="flex items-center gap-2">
                  <ChevronLeft className="h-4 w-4" />
                  Previous Lesson
                </Button>
              </Link>
              
              <Button className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark as Complete
              </Button>
              
              <Link to="/learning">
                <Button className="flex items-center gap-2">
                  Next Lesson
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}