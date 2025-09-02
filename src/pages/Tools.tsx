import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Calculator, TrendingUp, PiggyBank, Target, Info, BarChart3, PieChart } from "lucide-react";

interface CalculatorResult {
  title: string;
  value: string;
  description: string;
}

const tools = [
  {
    id: 'sip',
    name: 'SIP Calculator',
    description: 'Calculate returns from Systematic Investment Plans',
    icon: TrendingUp,
    color: 'from-primary to-primary-light'
  },
  {
    id: 'emi',
    name: 'EMI Calculator', 
    description: 'Calculate your loan EMI and payment schedule',
    icon: Calculator,
    color: 'from-secondary to-secondary-light'
  },
  {
    id: 'ppf',
    name: 'PPF Calculator',
    description: 'Calculate Public Provident Fund maturity amount',
    icon: PiggyBank,
    color: 'from-accent to-warning'
  },
  {
    id: 'retirement',
    name: 'Retirement Planner',
    description: 'Plan your retirement corpus with inflation adjustment',
    icon: Target,
    color: 'from-primary-dark to-secondary'
  }
];

export default function Tools() {
  const [activeCalculator, setActiveCalculator] = useState('sip');
  const [sipInputs, setSipInputs] = useState({
    monthlyAmount: '5000',
    expectedReturn: '12',
    timePeriod: '10'
  });
  const [emiInputs, setEmiInputs] = useState({
    loanAmount: '500000',
    interestRate: '8.5',
    tenureYears: '20'
  });
  const [ppfInputs, setPpfInputs] = useState({
    yearlyInvestment: '150000',
    currentAge: '30',
    expectedReturn: '7.1'
  });
  const [retirementInputs, setRetirementInputs] = useState({
    currentAge: '30',
    retirementAge: '60',
    monthlyExpenses: '50000',
    expectedReturn: '10',
    inflationRate: '6'
  });

  const calculateSIP = () => {
    const P = parseFloat(sipInputs.monthlyAmount);
    const r = parseFloat(sipInputs.expectedReturn) / 100 / 12;
    const n = parseFloat(sipInputs.timePeriod) * 12;
    
    const maturityAmount = P * (((Math.pow(1 + r, n)) - 1) / r) * (1 + r);
    const totalInvestment = P * n;
    const totalGains = maturityAmount - totalInvestment;
    
    return [
      {
        title: 'Maturity Amount',
        value: `₹${maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Total amount at maturity'
      },
      {
        title: 'Total Investment',
        value: `₹${totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Amount you invested'
      },
      {
        title: 'Total Gains',
        value: `₹${totalGains.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Wealth gained through SIP'
      }
    ];
  };

  const calculateEMI = () => {
    const P = parseFloat(emiInputs.loanAmount);
    const r = parseFloat(emiInputs.interestRate) / 100 / 12;
    const n = parseFloat(emiInputs.tenureYears) * 12;
    
    const emi = P * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;
    
    return [
      {
        title: 'Monthly EMI',
        value: `₹${emi.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Amount to pay every month'
      },
      {
        title: 'Total Amount',
        value: `₹${totalAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Total amount payable'
      },
      {
        title: 'Total Interest',
        value: `₹${totalInterest.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Interest paid over tenure'
      }
    ];
  };

  const calculatePPF = () => {
    const P = parseFloat(ppfInputs.yearlyInvestment);
    const r = parseFloat(ppfInputs.expectedReturn) / 100;
    const n = 15; // PPF lock-in period
    
    let maturityAmount = 0;
    for (let i = 0; i < n; i++) {
      maturityAmount += P * Math.pow(1 + r, n - i);
    }
    
    const totalInvestment = P * n;
    const totalGains = maturityAmount - totalInvestment;
    
    return [
      {
        title: 'Maturity Amount',
        value: `₹${maturityAmount.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Amount after 15 years'
      },
      {
        title: 'Total Investment',
        value: `₹${totalInvestment.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Total invested over 15 years'
      },
      {
        title: 'Tax-Free Gains',
        value: `₹${totalGains.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Tax-free wealth created'
      }
    ];
  };

  const calculateRetirement = () => {
    const currentAge = parseFloat(retirementInputs.currentAge);
    const retirementAge = parseFloat(retirementInputs.retirementAge);
    const monthlyExpenses = parseFloat(retirementInputs.monthlyExpenses);
    const expectedReturn = parseFloat(retirementInputs.expectedReturn) / 100;
    const inflationRate = parseFloat(retirementInputs.inflationRate) / 100;
    
    const yearsToRetirement = retirementAge - currentAge;
    const futureExpenses = monthlyExpenses * Math.pow(1 + inflationRate, yearsToRetirement);
    const requiredCorpus = (futureExpenses * 12 * 25); // 25 years post retirement
    const monthlySIP = requiredCorpus * (expectedReturn / 12) / (Math.pow(1 + expectedReturn / 12, yearsToRetirement * 12) - 1);
    
    return [
      {
        title: 'Required Corpus',
        value: `₹${(requiredCorpus / 10000000).toFixed(1)} Cr`,
        description: 'Corpus needed at retirement'
      },
      {
        title: 'Monthly SIP Needed',
        value: `₹${monthlySIP.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'SIP amount to achieve goal'
      },
      {
        title: 'Future Monthly Expense',
        value: `₹${futureExpenses.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`,
        description: 'Expenses adjusted for inflation'
      }
    ];
  };

  const getResults = (): CalculatorResult[] => {
    switch (activeCalculator) {
      case 'sip': return calculateSIP();
      case 'emi': return calculateEMI();
      case 'ppf': return calculatePPF();
      case 'retirement': return calculateRetirement();
      default: return [];
    }
  };

  const renderCalculatorInputs = () => {
    switch (activeCalculator) {
      case 'sip':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="monthlyAmount" className="flex items-center gap-2">
                Monthly Investment Amount (₹)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Amount you plan to invest every month</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="monthlyAmount"
                type="number"
                value={sipInputs.monthlyAmount}
                onChange={(e) => setSipInputs({...sipInputs, monthlyAmount: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="expectedReturn" className="flex items-center gap-2">
                Expected Annual Return (%)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Expected yearly return rate from your investment</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="expectedReturn"
                type="number"
                step="0.1"
                value={sipInputs.expectedReturn}
                onChange={(e) => setSipInputs({...sipInputs, expectedReturn: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="timePeriod" className="flex items-center gap-2">
                Investment Period (Years)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>How long you plan to continue the SIP</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="timePeriod"
                type="number"
                value={sipInputs.timePeriod}
                onChange={(e) => setSipInputs({...sipInputs, timePeriod: e.target.value})}
              />
            </div>
          </div>
        );
      
      case 'emi':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="loanAmount" className="flex items-center gap-2">
                Loan Amount (₹)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Total loan amount you want to borrow</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="loanAmount"
                type="number"
                value={emiInputs.loanAmount}
                onChange={(e) => setEmiInputs({...emiInputs, loanAmount: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="interestRate" className="flex items-center gap-2">
                Interest Rate (% per annum)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Annual interest rate charged by the lender</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="interestRate"
                type="number"
                step="0.1"
                value={emiInputs.interestRate}
                onChange={(e) => setEmiInputs({...emiInputs, interestRate: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="tenureYears" className="flex items-center gap-2">
                Tenure (Years)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Duration for which you want to take the loan</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="tenureYears"
                type="number"
                value={emiInputs.tenureYears}
                onChange={(e) => setEmiInputs({...emiInputs, tenureYears: e.target.value})}
              />
            </div>
          </div>
        );
      
      case 'ppf':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="yearlyInvestment" className="flex items-center gap-2">
                Yearly Investment (₹)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Amount you plan to invest annually (max ₹1.5 lakh)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="yearlyInvestment"
                type="number"
                value={ppfInputs.yearlyInvestment}
                onChange={(e) => setPpfInputs({...ppfInputs, yearlyInvestment: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="currentAge" className="flex items-center gap-2">
                Current Age
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current age in years</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="currentAge"
                type="number"
                value={ppfInputs.currentAge}
                onChange={(e) => setPpfInputs({...ppfInputs, currentAge: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="expectedReturn" className="flex items-center gap-2">
                Expected Return Rate (%)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Current PPF interest rate is around 7.1%</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="expectedReturn"
                type="number"
                step="0.1"
                value={ppfInputs.expectedReturn}
                onChange={(e) => setPpfInputs({...ppfInputs, expectedReturn: e.target.value})}
              />
            </div>
          </div>
        );
      
      case 'retirement':
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="currentAge" className="flex items-center gap-2">
                Current Age
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current age in years</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="currentAge"
                type="number"
                value={retirementInputs.currentAge}
                onChange={(e) => setRetirementInputs({...retirementInputs, currentAge: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="retirementAge" className="flex items-center gap-2">
                Retirement Age
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Age at which you plan to retire</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="retirementAge"
                type="number"
                value={retirementInputs.retirementAge}
                onChange={(e) => setRetirementInputs({...retirementInputs, retirementAge: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="monthlyExpenses" className="flex items-center gap-2">
                Current Monthly Expenses (₹)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Your current monthly living expenses</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="monthlyExpenses"
                type="number"
                value={retirementInputs.monthlyExpenses}
                onChange={(e) => setRetirementInputs({...retirementInputs, monthlyExpenses: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="expectedReturn" className="flex items-center gap-2">
                Expected Return (%)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Expected annual return from your investments</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="expectedReturn"
                type="number"
                step="0.1"
                value={retirementInputs.expectedReturn}
                onChange={(e) => setRetirementInputs({...retirementInputs, expectedReturn: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="inflationRate" className="flex items-center gap-2">
                Inflation Rate (%)
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Expected annual inflation rate (usually 5-7%)</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="inflationRate"
                type="number"
                step="0.1"
                value={retirementInputs.inflationRate}
                onChange={(e) => setRetirementInputs({...retirementInputs, inflationRate: e.target.value})}
              />
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  const results = getResults();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Financial <span className="gradient-text">Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Make informed financial decisions with our comprehensive calculators and planning tools.
              </p>
            </div>
          </div>
        </section>
        
        {/* Tools Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {tools.map((tool) => (
                <Card 
                  key={tool.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                    activeCalculator === tool.id ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                  onClick={() => setActiveCalculator(tool.id)}
                >
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mx-auto mb-4`}>
                      <tool.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription className="text-sm">{tool.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            
            {/* Calculator Interface */}
            <div className="max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {tools.find(t => t.id === activeCalculator)?.name}
                  </CardTitle>
                  <CardDescription>
                    {tools.find(t => t.id === activeCalculator)?.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Input Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Calculator Inputs</h3>
                      {renderCalculatorInputs()}
                    </div>
                    
                    {/* Results Section */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Results</h3>
                      <div className="space-y-4">
                        {results.map((result, index) => (
                          <Card key={index} className="bg-gradient-to-r from-primary/5 to-secondary/5">
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-medium text-sm text-muted-foreground">
                                  {result.title}
                                </h4>
                                {index === 0 ? <BarChart3 className="h-4 w-4 text-primary" /> :
                                 index === 1 ? <PieChart className="h-4 w-4 text-secondary" /> :
                                 <TrendingUp className="h-4 w-4 text-accent" />}
                              </div>
                              <div className="text-2xl font-bold text-primary mb-1">
                                {result.value}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {result.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                      
                      {/* Visual Chart Placeholder */}
                      <Card className="mt-6">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-center h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg">
                            <div className="text-center">
                              <BarChart3 className="h-12 w-12 text-primary mx-auto mb-2" />
                              <p className="text-muted-foreground">
                                Interactive chart visualization
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
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