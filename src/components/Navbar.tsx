import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, Youtube, Search } from "lucide-react";
import CartSheet from "./CartSheet";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Our Products" },
    { path: "/about", label: "About Us" },
    { path: "/about", label: "Careers" },
    { path: "/about", label: "Media & News" },
    { path: "/contact", label: "Contact Us" },
  ];
  
  return (
    <nav 
      className="sticky top-0 z-50 border-b border-white/10"
      style={{ background: "var(--gradient-navbar)" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "hsl(320 80% 55%)" }}>
                  नमस्ते
                </div>
                <div className="text-xs font-semibold text-primary">Bharat</div>
                <div className="text-[8px] text-muted-foreground">ICE CREAM</div>
              </div>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-white font-medium transition-opacity hover:opacity-80 group"
              >
                {link.label}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </Link>
            ))}
          </div>
          
          {/* Social Icons & Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <button 
              className="text-white hover:opacity-80 transition-opacity"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <div className="ml-2">
              <CartSheet />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
