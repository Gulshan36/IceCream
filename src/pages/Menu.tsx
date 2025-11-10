import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { IceCream, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { useFavorites } from "@/contexts/FavoritesContext";

// Import product images
import kesarPistaKulfi from "@/assets/products/kesar-pista-kulfi.png";
import mangoKulfi from "@/assets/products/mango-kulfi.png";
import roseKulfi from "@/assets/products/rose-kulfi.png";
import chocolateCone from "@/assets/products/chocolate-cone.png";
import strawberryCone from "@/assets/products/strawberry-cone.png";
import familyCup from "@/assets/products/family-cup.png";
import vanillaCone from "@/assets/products/vanilla-cone.png";
import butterscotchCone from "@/assets/products/butterscotch-cone.png";
import pistaKulfi from "@/assets/products/pista-kulfi.png";
import malaiKulfi from "@/assets/products/malai-kulfi.png";
import chocoVanillaCone from "@/assets/products/choco-vanilla-cone.png";
import chocolateBar from "@/assets/products/chocolate-bar.png";
import mangoBar from "@/assets/products/mango-bar.png";
import vanillaBar from "@/assets/products/vanilla-bar.png";
import strawberryBar from "@/assets/products/strawberry-bar.png";
import orangeBar from "@/assets/products/orange-bar.png";
import iceCreamCake from "@/assets/products/ice-cream-cake.png";
import iceSandwich from "@/assets/products/ice-sandwich.png";
import twistPop from "@/assets/products/twist-pop.png";

const Menu = () => {
  const categories = ["All", "Cones", "Cups", "Sundaes", "Family Packs"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTab, setActiveTab] = useState("all");
  const { addToCart } = useCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const menuItems = [
    {
      id: "kesar-pista-cone",
      name: "Kesar Pista Kulfi",
      category: "Cones",
      price: 120,
      image: kesarPistaKulfi,
      description: "Royal saffron with crunchy pistachios in a crispy cone"
    },
    {
      id: "mango-kulfi-cup",
      name: "Mango Kulfi Cup",
      category: "Cups",
      price: 100,
      image: mangoKulfi,
      description: "Authentic Indian mango delight served in a cup"
    },
    {
      id: "rose-falooda-sundae",
      name: "Rose Kulfi Sundae",
      category: "Sundaes",
      price: 180,
      image: roseKulfi,
      description: "Fragrant rose with vermicelli, nuts, and toppings"
    },
    {
      id: "chocolate-chip-cone",
      name: "Chocolate Cone",
      category: "Cones",
      price: 90,
      image: chocolateCone,
      description: "Classic chocolate with real chocolate chips"
    },
    {
      id: "strawberry-cup",
      name: "Strawberry Cone",
      category: "Cups",
      price: 80,
      image: strawberryCone,
      description: "Fresh strawberry ice cream in a convenient cup"
    },
    {
      id: "family-pack-variety",
      name: "Family Pack Variety",
      category: "Family Packs",
      price: 500,
      image: familyCup,
      description: "1L tub with 4 different flavors of your choice"
    },
    {
      id: "vanilla-cone",
      name: "Vanilla Cone",
      category: "Cones",
      price: 70,
      image: vanillaCone,
      description: "Classic vanilla in a crispy wafer cone"
    },
    {
      id: "butterscotch-sundae",
      name: "Butterscotch Cone",
      category: "Sundaes",
      price: 160,
      image: butterscotchCone,
      description: "Creamy butterscotch with caramel sauce and nuts"
    },
    {
      id: "pista-kulfi-cone",
      name: "Pista Kulfi",
      category: "Cones",
      price: 130,
      image: pistaKulfi,
      description: "Rich pistachio kulfi with real crushed pistachios"
    },
    {
      id: "malai-kulfi-cup",
      name: "Malai Kulfi Cup",
      category: "Cups",
      price: 110,
      image: malaiKulfi,
      description: "Creamy traditional malai kulfi in a cup"
    },
    {
      id: "choco-vanilla-cone",
      name: "Choco Vanilla Twist Cone",
      category: "Cones",
      price: 95,
      image: chocoVanillaCone,
      description: "Perfect blend of chocolate and vanilla in one cone"
    },
    {
      id: "chocolate-bar",
      name: "Chocolate Ice Bar",
      category: "Cups",
      price: 60,
      image: chocolateBar,
      description: "Rich chocolate ice cream on a stick"
    },
    {
      id: "mango-bar",
      name: "Mango Ice Bar",
      category: "Cups",
      price: 60,
      image: mangoBar,
      description: "Refreshing mango ice bar, perfect for summer"
    },
    {
      id: "vanilla-bar",
      name: "Vanilla Ice Bar",
      category: "Cups",
      price: 55,
      image: vanillaBar,
      description: "Classic vanilla ice cream bar"
    },
    {
      id: "strawberry-bar",
      name: "Strawberry Ice Bar",
      category: "Cups",
      price: 60,
      image: strawberryBar,
      description: "Fresh strawberry ice cream on a stick"
    },
    {
      id: "orange-bar",
      name: "Orange Ice Bar",
      category: "Cups",
      price: 55,
      image: orangeBar,
      description: "Tangy orange ice bar, refreshingly cool"
    },
    {
      id: "ice-cream-cake",
      name: "Ice Cream Cake",
      category: "Family Packs",
      price: 800,
      image: iceCreamCake,
      description: "Delicious 1kg ice cream cake for celebrations"
    },
    {
      id: "ice-sandwich",
      name: "Ice Cream Sandwich",
      category: "Sundaes",
      price: 85,
      image: iceSandwich,
      description: "Vanilla ice cream between two chocolate cookies"
    },
    {
      id: "twist-pop",
      name: "Twist Pop",
      category: "Cups",
      price: 50,
      image: twistPop,
      description: "Fun twisted ice pop with dual flavors"
    },
  ];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const favoriteItems = menuItems.filter(item => isFavorite(item.id));
  
  const displayItems = activeTab === "favorites" ? favoriteItems : filteredItems;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 md:p-12 mb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          
          <div className="relative text-center space-y-4 animate-fade-in">
            <div className="inline-block">
              <Badge className="mb-4 text-sm px-4 py-1.5 bg-gradient-to-r from-primary to-secondary border-0 text-white">
                Low Price Premium Quality
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Special Flavors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover our handcrafted collection of premium ice creams. Each flavor is made with 100% natural ingredients and lots of love! 🍦✨
            </p>
          </div>
        </div>

        {/* Tabs for All Products and Favorites */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 h-12 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm border border-primary/20">
            <TabsTrigger 
              value="all" 
              className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg transition-all"
            >
              <IceCream className="w-4 h-4 mr-2" />
              All Products
            </TabsTrigger>
            <TabsTrigger 
              value="favorites" 
              className="relative data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-secondary data-[state=active]:text-white rounded-lg transition-all"
            >
              <Heart className="w-4 h-4 mr-2" />
              My Favorites
              {favorites.length > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-white text-primary shadow-lg"
                >
                  {favorites.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Category Filter - Only show when on All Products tab */}
        {activeTab === "all" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></span>
              Browse by Category
              <span className="w-8 h-1 bg-gradient-to-r from-secondary to-accent rounded-full"></span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-2 font-semibold transition-all ${
                    activeCategory === category 
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105" 
                      : "hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Empty Favorites Message */}
        {activeTab === "favorites" && favoriteItems.length === 0 && (
          <div className="text-center py-20 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 w-24 h-24 rounded-full mx-auto flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-3">No Favorites Yet</h3>
            <p className="text-muted-foreground mb-8 text-lg">
              Start adding your favorite ice creams by clicking the heart icon!
            </p>
            <Button 
              onClick={() => setActiveTab("all")}
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <IceCream className="w-5 h-5 mr-2" />
              Browse Products
            </Button>
          </div>
        )}

        {/* Menu Grid */}
        {displayItems.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                {activeTab === "favorites" ? "Your Favorite Treats" : activeCategory === "All" ? "All Our Products" : activeCategory}
              </h2>
              <p className="text-muted-foreground mt-2">
                {displayItems.length} delicious {displayItems.length === 1 ? 'option' : 'options'} available
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {displayItems.map((item) => (
                <Card 
                  key={item.id}
                  className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative group border-2 border-transparent hover:border-primary/20"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,240,245,0.9) 100%)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
                  }}
                >
                  <CardContent className="p-5 space-y-4">
                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`absolute top-4 right-4 z-10 rounded-full transition-all ${
                      isFavorite(item.id) 
                        ? 'bg-red-500 hover:bg-red-600 text-white' 
                        : 'bg-white/80 hover:bg-white text-gray-600'
                    }`}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    <Heart 
                      className={`w-5 h-5 transition-all ${
                        isFavorite(item.id) ? 'fill-current' : ''
                      }`}
                    />
                  </Button>

                  <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center p-4 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain animate-float drop-shadow-lg"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="inline-block px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium">
                        {item.category}
                      </div>
                      {isFavorite(item.id) && (
                        <Badge variant="secondary" className="bg-red-100 text-red-700 text-xs">
                          Favorite
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-2xl font-bold text-primary">₹{item.price}</p>
                      <Button 
                        size="sm"
                        onClick={() => addToCart(item)}
                        className="rounded-full"
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
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
