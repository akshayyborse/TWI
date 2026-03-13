import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { WishlistProvider } from "@/contexts/WishlistContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Sustainability from "./pages/Sustainability";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Contact from "./pages/Contact";
import FAQs from "./pages/FAQs";
import Shipping from "./pages/Shipping";
import SizeGuide from "./pages/SizeGuide";
import Lookbook from "./pages/Lookbook";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/men" element={<CategoryPage />} />
                  <Route path="/women" element={<CategoryPage />} />
                  <Route path="/kids" element={<CategoryPage />} />
                  <Route path="/:gender" element={<CategoryPage />} />
                  <Route path="/profile" element={<Profile />} />

                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/sustainability" element={<Sustainability />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="/press" element={<Press />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/shipping" element={<Shipping />} />
                  <Route path="/size-guide" element={<SizeGuide />} />
                  <Route path="/lookbook" element={<Lookbook />} />

                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
