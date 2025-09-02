import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
];

export const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold gradient-text">FinRef</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/learning" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Learning Hub
            </Link>
            <Link to="/tools" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tools
            </Link>
            <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">
                  {languages.find(lang => lang.code === selectedLanguage)?.native}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => setSelectedLanguage(language.code)}
                  className={selectedLanguage === language.code ? 'bg-accent' : ''}
                >
                  <span className="font-medium">{language.native}</span>
                  <span className="ml-2 text-sm text-muted-foreground">({language.name})</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center space-x-2">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Log In
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};