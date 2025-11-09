import { Heart, IceCream, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <IceCream className="w-8 h-8 text-primary" />
              <div>
                <span className="text-xl font-bold text-foreground block">नमस्ते भारत</span>
                <span className="text-xs text-muted-foreground">ICE CREAM</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              हर स्वाद में एक मुस्कान — A smile in every scoop 🍨✨
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Ice Cream Cones</li>
              <li className="text-sm text-muted-foreground">Kulfi</li>
              <li className="text-sm text-muted-foreground">Ice Cream Bars</li>
              <li className="text-sm text-muted-foreground">Family Packs</li>
              <li className="text-sm text-muted-foreground">Party Packs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>123 Ice Cream Street, Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@namastebharat.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>in India</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Namaste Bharat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
