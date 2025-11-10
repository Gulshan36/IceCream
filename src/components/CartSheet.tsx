import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Trash2, Package, Tag, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CartSheet = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative text-gray-900 hover:bg-primary/10 hover:text-primary">
          <ShoppingCart className="w-5 h-5" />
          {getTotalItems() > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] font-bold border-2"
              style={{ 
                backgroundColor: '#ef4444', 
                color: 'white',
                borderColor: 'white',
                boxShadow: '0 2px 8px rgba(239, 68, 68, 0.6)'
              }}
            >
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 pt-6 pb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <SheetTitle className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-normal text-pink-100">Your Cart</p>
                <p className="text-lg font-bold">{getTotalItems()} Items</p>
              </div>
            </div>
            {getTotalItems() > 0 && (
              <Badge className="bg-white text-purple-600 hover:bg-white/90 font-bold">
                ₹{getTotalPrice()}
              </Badge>
            )}
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-hidden flex flex-col">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-2xl opacity-20"></div>
                <ShoppingCart className="w-20 h-20 text-muted-foreground relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Cart is Empty</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                खाली कार्ट! Add some delicious ice cream to get started!
              </p>
              <Button 
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                onClick={() => window.location.href = '/menu'}
              >
                Browse Menu
              </Button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={item.id}>
                      <div className="flex gap-3 group">
                        {/* Product Image */}
                        <div className="relative w-20 h-20 flex-shrink-0 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl flex items-center justify-center p-2 overflow-hidden border-2 border-transparent group-hover:border-primary/30 transition-all">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-contain drop-shadow-md"
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-sm text-foreground truncate">{item.name}</h4>
                              <div className="flex items-center gap-2 mt-0.5">
                                <Badge variant="secondary" className="text-[10px] px-2 py-0 h-5">
                                  {item.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground">₹{item.price}</span>
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}
                              className="h-8 w-8 flex-shrink-0 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-full -mt-1"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-full p-1 border border-gray-200 dark:border-gray-700">
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="h-7 w-7 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </Button>
                              <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="h-7 w-7 rounded-full hover:bg-white dark:hover:bg-gray-800 hover:shadow-sm"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </Button>
                            </div>
                            <div className="text-right">
                              <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                                ₹{item.price * item.quantity}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {index < items.length - 1 && (
                        <Separator className="mt-3" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cart Summary Footer */}
              <div className="mt-auto border-t bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
                <div className="px-6 py-4 space-y-3">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Subtotal ({getTotalItems()} items)
                    </span>
                    <span className="font-semibold text-foreground">₹{getTotalPrice()}</span>
                  </div>
                  
                  {/* Delivery Info */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Delivery
                    </span>
                    <span className="font-semibold text-green-600 dark:text-green-400">FREE</span>
                  </div>
                  
                  <Separator />
                  
                  {/* Total */}
                  <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-foreground">Total Amount</span>
                    <div className="text-right">
                      <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        ₹{getTotalPrice()}
                      </p>
                      <p className="text-[10px] text-muted-foreground">Inclusive of all taxes</p>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Button 
                    className="w-full h-12 text-base font-bold rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 shadow-lg hover:shadow-xl transition-all"
                    size="lg"
                  >
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  
                  {/* Assurance Text */}
                  <p className="text-center text-xs text-muted-foreground">
                    🎉 Free delivery within 10km radius
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
