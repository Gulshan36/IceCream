import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

interface Product {
  name: string;
  price: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  products: Product[];
}

interface ProductCarouselProps {
  category: Category;
  onClose: () => void;
  categoryColor: string;
}

const ProductCarousel = ({ category, onClose, categoryColor }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { addToCart } = useCart();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000); // 5 seconds

    return () => {
      clearInterval(autoplay);
    };
  }, [emblaApi]);

  return (
    <div className={`w-full ${categoryColor} rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl animate-scale-in border-4 border-white/20 backdrop-blur-sm relative`}>
      {/* Decorative leaf elements */}
      <div className="absolute top-4 right-4 md:top-8 md:right-16 opacity-20 pointer-events-none">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="animate-float">
          <path d="M60 20C60 20 40 40 40 60C40 70 45 80 60 80C75 80 80 70 80 60C80 40 60 20 60 20Z" fill="white" fillOpacity="0.3"/>
          <path d="M60 20C60 20 50 35 45 50" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
          <path d="M60 20C60 20 70 35 75 50" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
        </svg>
      </div>
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-16 opacity-20 pointer-events-none rotate-180">
        <svg width="100" height="100" viewBox="0 0 120 120" fill="none" className="animate-float" style={{ animationDelay: '1s' }}>
          <path d="M60 20C60 20 40 40 40 60C40 70 45 80 60 80C75 80 80 70 80 60C80 40 60 20 60 20Z" fill="white" fillOpacity="0.3"/>
          <path d="M60 20C60 20 50 35 45 50" stroke="white" strokeWidth="2" strokeOpacity="0.3"/>
        </svg>
      </div>
      
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute right-3 top-3 md:right-4 md:top-4 z-50 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/30 shadow-lg transition-all"
      >
        <X className="w-5 h-5 md:w-6 md:h-6" />
      </Button>

      {/* Carousel */}
      <div className="relative overflow-hidden">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {category.products.map((product, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-8 md:p-12 lg:p-16 min-h-[400px] md:min-h-[500px]">
                  {/* Left Content */}
                  <div className="flex flex-col justify-center space-y-4 md:space-y-6 text-white">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg">
                      {product.name}
                    </h2>
                    <div className="flex gap-2">
                      {Array.from({ length: category.products.length }).map((_, i) => (
                        <div 
                          key={i}
                          className={`h-1 rounded-full transition-all ${
                            i === index ? "w-12 bg-white" : "w-3 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 w-fit shadow-lg">
                        <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                          {product.price}
                        </p>
                      </div>
                      <Button
                        onClick={() => addToCart({
                          id: `${category.name}-${product.name}`,
                          name: product.name,
                          price: parseInt(product.price.replace(/[^0-9]/g, '')),
                          image: product.image,
                          category: category.name,
                        })}
                        className="bg-white hover:bg-white/90 text-primary rounded-full shadow-lg font-semibold"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>

                  {/* Right Product Image */}
                  <div className="flex items-center justify-center p-4">
                    <div className="relative w-full max-w-sm md:max-w-md">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl md:rounded-3xl blur-xl"></div>
                      <div className="relative bg-gradient-to-br from-white/15 to-white/5 rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md border border-white/20">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-auto object-contain animate-float drop-shadow-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/30 shadow-xl transition-all"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/30 shadow-xl transition-all"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30 shadow-lg">
          {category.products.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex 
                  ? "bg-white w-8 shadow-md" 
                  : "bg-white/50 hover:bg-white/70 w-2"
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* Counter */}
        <div className="absolute bottom-6 md:bottom-8 right-4 md:right-8 text-white text-xs md:text-sm font-semibold bg-white/20 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/30 shadow-lg">
          {selectedIndex + 1} / {category.products.length}
        </div>
      </div>
    </div>
  );
};

export default ProductCarousel;
