import { Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FinRef</span>
            </div>
            <p className="text-background/70 max-w-xs">
              Empowering Indians to invest wisely in their preferred language. Build your secure financial future today.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Learn Section */}
          <div>
            <h3 className="font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/learning/beginner" className="hover:text-background transition-colors">Beginner Path</a></li>
              <li><a href="/learning/intermediate" className="hover:text-background transition-colors">Intermediate Path</a></li>
              <li><a href="/learning/advanced" className="hover:text-background transition-colors">Advanced Path</a></li>
              <li><a href="/topics" className="hover:text-background transition-colors">Browse Topics</a></li>
              <li><a href="/quizzes" className="hover:text-background transition-colors">Practice Quizzes</a></li>
            </ul>
          </div>

          {/* Tools Section */}
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/tools/sip-calculator" className="hover:text-background transition-colors">SIP Calculator</a></li>
              <li><a href="/tools/emi-calculator" className="hover:text-background transition-colors">EMI Calculator</a></li>
              <li><a href="/tools/retirement-planner" className="hover:text-background transition-colors">Retirement Planner</a></li>
              <li><a href="/tools/ppf-calculator" className="hover:text-background transition-colors">PPF Calculator</a></li>
              <li><a href="/tools/tax-calculator" className="hover:text-background transition-colors">Tax Calculator</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="/about" className="hover:text-background transition-colors">About Us</a></li>
              <li><a href="/faq" className="hover:text-background transition-colors">FAQ</a></li>
              <li><a href="/contact" className="hover:text-background transition-colors">Contact</a></li>
              <li><a href="/help" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="/feedback" className="hover:text-background transition-colors">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-background/70 hover:text-background hover:bg-background/10">
                  <Globe className="h-4 w-4 mr-2" />
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {languages.map((language) => (
                  <DropdownMenuItem key={language.code}>
                    <span className="font-medium">{language.native}</span>
                    <span className="ml-2 text-sm text-muted-foreground">({language.name})</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-background/70 text-sm">
              <a href="/privacy" className="hover:text-background transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-background transition-colors">Terms of Service</a>
              <a href="/disclaimer" className="hover:text-background transition-colors">Disclaimer</a>
              <span>© 2024 FinRef. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};