import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, IceCream, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import ProductCategories from "@/components/ProductCategories";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";

// Import product images
import kesarPistaKulfi from "@/assets/products/kesar-pista-kulfi.png";
import mangoKulfi from "@/assets/products/mango-kulfi.png";
import roseKulfi from "@/assets/products/rose-kulfi.png";
import chocolateCone from "@/assets/products/chocolate-cone.png";
import butterscotchCone from "@/assets/products/butterscotch-cone.png";
import strawberryCone from "@/assets/products/strawberry-cone.png";
import vanillaCone from "@/assets/products/vanilla-cone.png";
import pistaKulfi from "@/assets/products/pista-kulfi.png";

const Home = () => {
  const { addToCart } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const featuredFlavors = [
    {
      id: "kesar-pista-home",
      name: "Kesar Pista Kulfi",
      description: "Royal saffron with crunchy pistachios",
      price: 120,
      category: "Featured",
      image: kesarPistaKulfi,
    },
    {
      id: "mango-kulfi-home",
      name: "Mango Kulfi",
      description: "Authentic Indian mango delight",
      price: 100,
      category: "Featured",
      image: mangoKulfi,
    },
    {
      id: "rose-kulfi-home",
      name: "Rose Kulfi",
      description: "Fragrant rose flavored kulfi",
      price: 140,
      category: "Featured",
      image: roseKulfi,
    },
    {
      id: "chocolate-cone-home",
      name: "Chocolate Cone",
      description: "Classic chocolate with real chocolate chips",
      price: 90,
      category: "Featured",
      image: chocolateCone,
    },
    {
      id: "butterscotch-cone-home",
      name: "Butterscotch Cone",
      description: "Creamy butterscotch with caramel sauce",
      price: 110,
      category: "Featured",
      image: butterscotchCone,
    },
    {
      id: "strawberry-cone-home",
      name: "Strawberry Cone",
      description: "Fresh strawberry ice cream delight",
      price: 80,
      category: "Featured",
      image: strawberryCone,
    },
    {
      id: "vanilla-cone-home",
      name: "Vanilla Cone",
      description: "Pure vanilla bean ice cream",
      price: 70,
      category: "Featured",
      image: vanillaCone,
    },
    {
      id: "pista-kulfi-home",
      name: "Pista Kulfi",
      description: "Rich pistachio flavored kulfi",
      price: 130,
      category: "Featured",
      image: pistaKulfi,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Product Categories */}
      <ProductCategories />

      {/* Featured Flavors */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-primary">
            <Star className="w-5 h-5 fill-primary" />
            <span className="text-sm font-medium uppercase tracking-wider">Featured</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground">Our Special Flavors</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hand-picked favorites that bring the taste of India to your palate
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredFlavors.map((flavor) => (
            <Card 
              key={flavor.id}
              className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 relative group"
              style={{ 
                background: "var(--gradient-card)",
                boxShadow: "var(--shadow-soft)"
              }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Favorite Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 z-10 rounded-full transition-all ${
                    isFavorite(flavor.id) 
                      ? 'bg-red-500 hover:bg-red-600 text-white' 
                      : 'bg-white/80 hover:bg-white text-gray-600'
                  }`}
                  onClick={() => toggleFavorite(flavor.id)}
                >
                  <Heart 
                    className={`w-5 h-5 transition-all ${
                      isFavorite(flavor.id) ? 'fill-current' : ''
                    }`}
                  />
                </Button>

                <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                  <img 
                    src={flavor.image} 
                    alt={flavor.name}
                    className="w-full h-full object-contain animate-float drop-shadow-lg"
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-foreground">{flavor.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{flavor.description}</p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2">
                    <p className="text-xl md:text-2xl font-bold text-primary">₹{flavor.price}</p>
                    <Button 
                      onClick={() => addToCart(flavor)}
                      className="rounded-full w-full sm:w-auto"
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link to="/menu">
              View Full Menu
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
