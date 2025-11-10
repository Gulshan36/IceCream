import { useState, useRef, useEffect } from "react";
import { IceCream, Coffee, Cake, Candy, Lollipop, PartyPopper, Tent } from "lucide-react";
import ProductCarousel from "./ProductCarousel";

// Import product images
import chocolateBar from "@/assets/products/chocolate-bar.png";
import vanillaBar from "@/assets/products/vanilla-bar.png";
import strawberryBar from "@/assets/products/strawberry-bar.png";
import mangoBar from "@/assets/products/mango-bar.png";
import orangeBar from "@/assets/products/orange-bar.png";
import chocolateCone from "@/assets/products/chocolate-cone.png";
import strawberryCone from "@/assets/products/strawberry-cone.png";
import vanillaCone from "@/assets/products/vanilla-cone.png";
import butterscotchCone from "@/assets/products/butterscotch-cone.png";
import chocoVanillaCone from "@/assets/products/choco-vanilla-cone.png";
import kesarPistaKulfi from "@/assets/products/kesar-pista-kulfi.png";
import mangoKulfi from "@/assets/products/mango-kulfi.png";
import malaiKulfi from "@/assets/products/malai-kulfi.png";
import roseKulfi from "@/assets/products/rose-kulfi.png";
import pistaKulfi from "@/assets/products/pista-kulfi.png";
import familyCup from "@/assets/products/family-cup.png";
import twistPop from "@/assets/products/twist-pop.png";
import iceSandwich from "@/assets/products/ice-sandwich.png";
import iceCreamCake from "@/assets/products/ice-cream-cake.png";

const categories = [
  {
    id: "bar-baar",
    name: "Bar Baar",
    icon: IceCream,
    color: "bg-gradient-to-br from-orange-400 to-red-500",
    products: [
      { name: "Chocolate Bar", price: "₹50", image: chocolateBar },
      { name: "Vanilla Bar", price: "₹45", image: vanillaBar },
      { name: "Strawberry Bar", price: "₹50", image: strawberryBar },
      { name: "Mango Bar", price: "₹55", image: mangoBar },
      { name: "Orange Bar", price: "₹55", image: orangeBar },
    ]
  },
  {
    id: "cone-masti",
    name: "Cone-Masti",
    icon: IceCream,
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
    products: [
      { name: "Chocolate Cone", price: "₹60", image: chocolateCone },
      { name: "Strawberry Cone", price: "₹60", image: strawberryCone },
      { name: "Vanilla Cone", price: "₹55", image: vanillaCone },
      { name: "Butterscotch Cone", price: "₹65", image: butterscotchCone },
      { name: "Choco-Vanilla Cone", price: "₹65", image: chocoVanillaCone },
    ]
  },
  {
    id: "kulfi-baaz",
    name: "Kulfi-Baaz",
    icon: Lollipop,
    color: "bg-gradient-to-br from-green-400 to-teal-500",
    products: [
      { name: "Kesar Pista Kulfi", price: "₹70", image: kesarPistaKulfi },
      { name: "Mango Kulfi", price: "₹65", image: mangoKulfi },
      { name: "Malai Kulfi", price: "₹60", image: malaiKulfi },
      { name: "Rose Kulfi", price: "₹70", image: roseKulfi },
      { name: "Pista Kulfi", price: "₹70", image: pistaKulfi },
    ]
  },
  {
    id: "cup-masti",
    name: "Cup-Masti",
    icon: Coffee,
    color: "bg-gradient-to-br from-purple-400 to-pink-500",
    products: [
      { name: "Family Cup", price: "₹100", image: familyCup },
      { name: "Solo Cup", price: "₹50", image: vanillaCone },
      { name: "Party Cup", price: "₹80", image: familyCup },
      { name: "Premium Cup", price: "₹120", image: familyCup },
    ]
  },
  {
    id: "novelties",
    name: "Novelties",
    icon: PartyPopper,
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    products: [
      { name: "Twist Pop", price: "₹40", image: twistPop },
      { name: "Ice Sandwich", price: "₹45", image: iceSandwich },
      { name: "Candy Pop", price: "₹35", image: twistPop },
      { name: "Fruity Bar", price: "₹50", image: strawberryBar },
    ]
  },
  {
    id: "party-sharty",
    name: "Party Sharty",
    icon: PartyPopper,
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    products: [
      { name: "Party Pack", price: "₹500", image: familyCup },
      { name: "Mega Pack", price: "₹800", image: familyCup },
      { name: "Family Pack", price: "₹600", image: familyCup },
      { name: "Kids Pack", price: "₹400", image: familyCup },
    ]
  },
  {
    id: "tub-shub",
    name: "Tub Shub",
    icon: Coffee,
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    products: [
      { name: "500ml Tub", price: "₹200", image: familyCup },
      { name: "1L Tub", price: "₹350", image: familyCup },
      { name: "2L Tub", price: "₹600", image: familyCup },
      { name: "Family Tub", price: "₹450", image: familyCup },
    ]
  },
  {
    id: "cake-pastry",
    name: "Cake & Pastry",
    icon: Cake,
    color: "bg-gradient-to-br from-amber-400 to-yellow-500",
    products: [
      { name: "Ice Cream Cake", price: "₹800", image: iceCreamCake },
      { name: "Pastry", price: "₹120", image: iceCreamCake },
      { name: "Mini Cake", price: "₹400", image: iceCreamCake },
      { name: "Premium Cake", price: "₹1200", image: iceCreamCake },
    ]
  },
  {
    id: "candies",
    name: "Candies",
    icon: Candy,
    color: "bg-gradient-to-br from-red-400 to-pink-500",
    products: [
      { name: "Candy Mix", price: "₹30", image: twistPop },
      { name: "Lollipop", price: "₹20", image: twistPop },
      { name: "Gummy Bears", price: "₹40", image: twistPop },
      { name: "Toffee Mix", price: "₹35", image: twistPop },
    ]
  },
  {
    id: "chocobar",
    name: "Chocobar",
    icon: IceCream,
    color: "bg-gradient-to-br from-rose-400 to-red-500",
    products: [
      { name: "Dark Chocobar", price: "₹55", image: chocolateBar },
      { name: "Milk Chocobar", price: "₹50", image: chocolateBar },
      { name: "White Chocobar", price: "₹60", image: vanillaBar },
      { name: "Nuts Chocobar", price: "₹65", image: chocolateBar },
    ]
  },
  {
    id: "sorbet",
    name: "Sorbet",
    icon: Lollipop,
    color: "bg-gradient-to-br from-orange-400 to-pink-500",
    products: [
      { name: "Mango Sorbet", price: "₹80", image: mangoBar },
      { name: "Lemon Sorbet", price: "₹75", image: vanillaBar },
      { name: "Berry Sorbet", price: "₹85", image: strawberryBar },
      { name: "Orange Sorbet", price: "₹80", image: orangeBar },
    ]
  },
  {
    id: "kids-carnival",
    name: "Kids Carnival",
    icon: Tent,
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    products: [
      { name: "Fun Pack", price: "₹150", image: familyCup },
      { name: "Cartoon Pop", price: "₹40", image: twistPop },
      { name: "Rainbow Cup", price: "₹60", image: familyCup },
      { name: "Kids Special", price: "₹100", image: twistPop },
    ]
  },
];

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(categories[0]);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only scroll if user has manually selected a category
    if (selectedCategory && carouselRef.current && hasUserInteracted) {
      carouselRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedCategory, hasUserInteracted]);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-lg">
            Our Products
          </h2>
          <div className="w-20 h-1 bg-white/80 mx-auto rounded-full shadow-lg"></div>
          <p className="text-white/90 text-sm md:text-base mt-3">Select a category to explore our delicious products</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4 md:gap-6 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedCategory?.id === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category);
                  setHasUserInteracted(true);
                }}
                className={`group flex flex-col items-center gap-2 transition-all duration-300 ${
                  isSelected ? "scale-105" : "hover:scale-105"
                }`}
              >
                <div 
                  className={`relative w-16 h-16 md:w-20 md:h-20 rounded-2xl ${category.color} flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 ${
                    isSelected 
                      ? "ring-4 ring-white/50 shadow-2xl" 
                      : "hover:ring-2 hover:ring-white/30"
                  }`}
                >
                  <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                  {isSelected && (
                    <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                  )}
                </div>
                <span className={`text-xs md:text-sm font-semibold text-white text-center transition-all ${
                  isSelected ? "scale-105" : ""
                }`}>
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Inline Product Carousel */}
        <div ref={carouselRef} className="relative">
        {selectedCategory && (
            <ProductCarousel
              category={selectedCategory}
              onClose={() => setSelectedCategory(null)}
              categoryColor={selectedCategory.color}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
