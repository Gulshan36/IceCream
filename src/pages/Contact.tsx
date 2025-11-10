import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, MessageSquare, Instagram, Facebook, Twitter, Send, MapPinIcon, PhoneCall, IceCream } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon. Thank you for reaching out!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <MessageSquare className="w-16 h-16 text-primary relative z-10" />
            </div>
          </div>
          
          <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none px-4 py-1 text-sm">
            हम यहाँ हैं आपके लिए! 💬
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-foreground">हमसे जुड़ें!</span> Questions, feedback, or bulk orders? 
            <br className="hidden md:block" />
            We're here to serve you with a smile! 🍦
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-3 rounded-full">
                  <PhoneCall className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-foreground">कॉल करें</h3>
              <p className="text-sm text-muted-foreground">Quick response</p>
              <p className="text-lg font-semibold text-pink-600 dark:text-pink-400">+91 98765 43210</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-foreground">ईमेल करें</h3>
              <p className="text-sm text-muted-foreground">24h reply time</p>
              <p className="text-sm font-semibold text-purple-600 dark:text-purple-400">hello@namastebharat.com</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center space-y-3">
              <div className="flex justify-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 rounded-full">
                  <MapPinIcon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-foreground">विजिट करें</h3>
              <p className="text-sm text-muted-foreground">Visit our store</p>
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">Gopalganj Main Market</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card 
            className="overflow-hidden border-2 hover:shadow-xl transition-shadow"
            style={{ 
              background: "linear-gradient(135deg, rgba(236, 72, 153, 0.05) 0%, rgba(168, 85, 247, 0.05) 100%)",
              borderImage: "linear-gradient(135deg, #ec4899, #a855f7) 1"
            }}
          >
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Send Message</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">हमें अपना संदेश भेजें - Fill the form below</p>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="name" 
                      placeholder="आपका नाम / Your name" 
                      required 
                      className="rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      required
                      className="rounded-xl border-2 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    required 
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="विषय / Subject of your message" 
                    className="rounded-xl border-2 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="अपना संदेश लिखें / Write your message here..." 
                    rows={5}
                    required 
                    className="rounded-xl border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white font-semibold" 
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card 
              className="overflow-hidden"
              style={{ 
                background: "var(--gradient-card)",
                boxShadow: "var(--shadow-soft)"
              }}
            >
              <CardContent className="p-8 space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      123 Ice Cream Lane<br />
                      New Delhi, India 110001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">
                      +91 98765 43210<br />
                      Mon-Sun: 10 AM - 10 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">
                      hello@namastebharat.com<br />
                      support@namastebharat.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="overflow-hidden"
              style={{ 
                background: "var(--gradient-card)",
                boxShadow: "var(--shadow-soft)"
              }}
            >
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-foreground">10 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday - Sunday</span>
                    <span className="font-medium text-foreground">9 AM - 11 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
