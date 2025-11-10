import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, User, LogIn, Menu, Search, LogOut } from "lucide-react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import CartSheet from "./CartSheet";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isSignedIn, isLoaded } = useUser();
  
  const isActive = (path: string) => location.pathname === path;
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Our Products" },
    { path: "/about", label: "About Us" },
    { path: "/careers", label: "Careers" },
    { path: "/contact", label: "Contact Us" },
  ];
  
  return (
    <nav 
      className="sticky top-0 z-50 backdrop-blur-md bg-white/95 border-b border-primary/10 shadow-lg"
    >
      {/* Top bar with social and announcement */}
      <div className="bg-gradient-to-r from-primary via-secondary to-accent">
        <div className="container mx-auto px-4 sm:px-6 py-1">
          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-medium">🍦 Fresh Ice Cream Daily | Free Delivery Above ₹500</span>
              <span className="sm:hidden font-medium">🍦 Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden md:inline text-xs">Follow:</span>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Facebook">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="hover:scale-110 transition-transform" aria-label="YouTube">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-2.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="/logo.png" 
              alt="Namaste Bharat Ice Cream" 
              className="h-10 sm:h-12 w-auto object-contain rounded-xl transition-all duration-300 group-hover:scale-105 shadow-sm"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.classList.remove('hidden');
                  fallback.classList.add('flex');
                }
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden fallback-logo w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105">
              <div className="text-center">
                <div className="text-base sm:text-xl font-bold text-white drop-shadow-md">
                  नमस्ते
                </div>
                <div className="text-[8px] sm:text-[10px] font-semibold text-white/90">Bharat</div>
                <div className="text-[6px] sm:text-[7px] text-white/70 font-medium">ICE CREAM</div>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Namaste Bharat
              </h1>
              <p className="text-[10px] text-muted-foreground">Premium Ice Cream</p>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-1.5 text-sm font-semibold transition-all duration-300 rounded-lg group whitespace-nowrap ${
                  isActive(link.path)
                    ? 'text-primary bg-primary/10'
                    : 'text-gray-700 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-t-full"></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              </Link>
            ))}
          </div>
          
          {/* Desktop - Search & Actions */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Desktop Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary/50" />
              <Input
                type="text"
                placeholder="Search flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-1.5 h-9 w-44 text-sm border border-primary/20 text-gray-900 placeholder:text-gray-400 focus:border-primary rounded-full transition-all"
              />
            </form>
            
            {/* Auth Buttons */}
            <div className="flex items-center gap-1.5">
              {isLoaded && isSignedIn ? (
                <div className="flex items-center gap-1.5">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 ring-2 ring-primary/20 hover:ring-primary transition-all"
                      }
                    }}
                  />
                </div>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="h-9 px-3 text-xs border border-primary/30 text-primary hover:bg-primary hover:text-white rounded-full font-semibold transition-all"
                    >
                      <LogIn className="w-3.5 h-3.5 mr-1.5" />
                      Login
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button 
                      size="sm"
                      className="h-9 px-3 text-xs bg-gradient-to-r from-primary to-secondary text-white hover:shadow-md rounded-full font-semibold transition-all"
                    >
                      <User className="w-3.5 h-3.5 mr-1.5" />
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </div>
            
            <CartSheet />
          </div>

          {/* Mobile - Search, Cart & Menu */}
          <div className="flex lg:hidden items-center gap-1.5">
            {/* Mobile Search Bar */}
            <form onSubmit={handleSearch} className="relative flex-1 max-w-[150px]">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-primary/50" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8 pr-2 py-1.5 h-8 w-full text-xs rounded-full border border-primary/20 focus:border-primary placeholder:text-gray-400"
              />
            </form>
            
            <CartSheet />
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-8 w-8 border border-primary/20 text-primary hover:bg-primary hover:text-white rounded-full transition-all"
                >
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <SheetHeader>
                  <SheetTitle className="text-gray-900">Menu</SheetTitle>
                </SheetHeader>
                
                <div className="flex flex-col gap-6 mt-8">
                  {/* Navigation Links */}
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-primary ${
                          isActive(link.path) ? "text-primary" : "text-gray-900"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200" />

                  {/* Auth Buttons */}
                  <div className="flex flex-col gap-3">
                    {isLoaded && isSignedIn ? (
                      <div className="flex items-center justify-center pt-2">
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-10 h-10"
                            }
                          }}
                        />
                      </div>
                    ) : (
                      <>
                        <SignInButton mode="modal">
                          <Button 
                            variant="outline"
                            className="w-full rounded-full"
                            onClick={() => setIsOpen(false)}
                          >
                            <LogIn className="w-4 h-4 mr-2" />
                            Login
                          </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                          <Button 
                            className="w-full rounded-full"
                            onClick={() => setIsOpen(false)}
                          >
                            <User className="w-4 h-4 mr-2" />
                            Sign Up
                          </Button>
                        </SignUpButton>
                      </>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200" />

                  {/* Social Links */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-3">Follow Us</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href="#" 
                        className="text-gray-900 hover:text-primary transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-900 hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-900 hover:text-primary transition-colors"
                        aria-label="YouTube"
                      >
                        <Youtube className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
