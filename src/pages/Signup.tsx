import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Lock, Eye, EyeOff, ArrowRight, Shield } from "lucide-react";

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

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    preferredLanguage: "en",
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    // Handle signup logic here
    console.log("Signup attempt:", formData);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Signup Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-subtle to-background">
          <div className="container">
            <div className="max-w-md mx-auto">
              <Card className="shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">F</span>
                  </div>
                  <CardTitle className="text-2xl">Create Your Account</CardTitle>
                  <CardDescription>
                    Join thousands of Indians learning to invest smartly
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name Field */}
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Language Preference */}
                    <div className="space-y-2">
                      <Label htmlFor="language">Preferred Language</Label>
                      <Select 
                        value={formData.preferredLanguage} 
                        onValueChange={(value) => setFormData({...formData, preferredLanguage: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your preferred language" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((language) => (
                            <SelectItem key={language.code} value={language.code}>
                              {language.native} ({language.name})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a strong password"
                          value={formData.password}
                          onChange={(e) => setFormData({...formData, password: e.target.value})}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Confirm Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>
                    
                    {/* Terms & Conditions */}
                    <div className="space-y-3">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => 
                            setFormData({...formData, agreeToTerms: checked as boolean})
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="terms" className="text-sm leading-relaxed">
                          I agree to the{" "}
                          <Link to="/terms" className="text-primary hover:text-primary-dark underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-primary hover:text-primary-dark underline">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="marketing"
                          checked={formData.agreeToMarketing}
                          onCheckedChange={(checked) => 
                            setFormData({...formData, agreeToMarketing: checked as boolean})
                          }
                          className="mt-1"
                        />
                        <Label htmlFor="marketing" className="text-sm leading-relaxed">
                          I'd like to receive educational content and updates via email (optional)
                        </Label>
                      </div>
                    </div>
                    
                    {/* Submit Button */}
                    <Button type="submit" className="w-full" size="lg">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <Separator className="w-full" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          Or sign up with
                        </span>
                      </div>
                    </div>
                    
                    {/* Social Signup Options */}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="currentColor"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="currentColor"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" className="w-full">
                        <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </div>
                  
                  {/* Login Link */}
                  <div className="text-center mt-6">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link 
                        to="/login" 
                        className="text-primary hover:text-primary-dark font-medium transition-colors"
                      >
                        Sign in here
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Security Promise */}
              <Card className="mt-6 bg-gradient-to-r from-success/10 to-secondary/10 border-success/20">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 text-center">
                    <Shield className="h-5 w-5 text-success flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-medium text-success">100% Secure & Private</p>
                      <p className="text-muted-foreground">Your data is encrypted and never shared with third parties</p>
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