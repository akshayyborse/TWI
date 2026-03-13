import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { products, Product } from "@/data/products";

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchOverlay = ({ isOpen, onClose }: SearchOverlayProps) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = "auto";
            setQuery("");
            setResults([]);
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    useEffect(() => {
        if (query.trim().length > 1) {
            const filtered = products.filter((product) =>
                product.name.toLowerCase().includes(query.toLowerCase()) ||
                product.category.toLowerCase().includes(query.toLowerCase()) ||
                product.gender.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 6);
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-md flex flex-col"
                    onKeyDown={handleKeyDown}
                >
                    <div className="container mx-auto px-6 lg:px-12 pt-8 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-12">
                            <span className="font-display text-xl font-medium tracking-wide">TWILOOK</span>
                            <button
                                onClick={onClose}
                                className="p-2 text-foreground hover:rotate-90 transition-transform duration-300"
                                aria-label="Close search"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Search Input */}
                        <div className="relative max-w-4xl mx-auto w-full mb-12">
                            <div className="flex items-center border-b-2 border-foreground/10 focus-within:border-primary transition-colors py-4">
                                <Search className="text-muted-foreground mr-4" size={24} />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder="SEARCH FOR PRODUCTS, CATEGORIES..."
                                    className="bg-transparent border-none outline-none w-full text-2xl lg:text-4xl font-display uppercase tracking-widest placeholder:text-muted-foreground/30"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Results */}
                        <div className="max-w-4xl mx-auto w-full flex-1 overflow-y-auto pb-12">
                            {query.length > 1 ? (
                                results.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <p className="text-xs tracking-fashion text-muted-foreground uppercase">Top Results</p>
                                            <div className="space-y-4">
                                                {results.map((product) => (
                                                    <Link
                                                        key={product.id}
                                                        to={`/product/${product.id}`}
                                                        onClick={onClose}
                                                        className="flex items-center gap-4 group"
                                                    >
                                                        <div className="w-16 h-20 bg-muted overflow-hidden flex-shrink-0">
                                                            <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors">{product.name}</h4>
                                                            <p className="text-xs text-muted-foreground uppercase">{product.category}</p>
                                                            <p className="text-xs font-medium mt-1">${product.price}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-xs tracking-fashion text-muted-foreground uppercase">Popular Searches</p>
                                            <div className="flex flex-wrap gap-2">
                                                {["Dresses", "Men", "Sale", "New Arrivals", "Women"].map((tag) => (
                                                    <button
                                                        key={tag}
                                                        onClick={() => setQuery(tag)}
                                                        className="px-4 py-2 border text-xs font-medium hover:bg-foreground hover:text-background transition-colors tracking-fashion uppercase"
                                                    >
                                                        {tag}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center py-20">
                                        <p className="text-muted-foreground italic">No products found for "{query}"</p>
                                    </div>
                                )
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 text-center md:text-left">
                                    <div className="space-y-4">
                                        <h5 className="text-xs tracking-fashion font-bold">COLLECTIONS</h5>
                                        <ul className="space-y-2">
                                            <li><Link to="/products" onClick={onClose} className="text-muted-foreground hover:text-foreground">New Arrivals</Link></li>
                                            <li><Link to="/products" onClick={onClose} className="text-muted-foreground hover:text-foreground">Bestsellers</Link></li>
                                            <li><Link to="/lookbook" onClick={onClose} className="text-muted-foreground hover:text-foreground">Lookbook 2024</Link></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h5 className="text-xs tracking-fashion font-bold">SHOP BY GENDER</h5>
                                        <ul className="space-y-2">
                                            <li><Link to="/women" onClick={onClose} className="text-muted-foreground hover:text-foreground">Women</Link></li>
                                            <li><Link to="/men" onClick={onClose} className="text-muted-foreground hover:text-foreground">Men</Link></li>
                                            <li><Link to="/kids" onClick={onClose} className="text-muted-foreground hover:text-foreground">Kids</Link></li>
                                        </ul>
                                    </div>
                                    <div className="space-y-4">
                                        <h4 className="text-xs tracking-fashion font-bold">CONTACT</h4>
                                        <p className="text-sm text-muted-foreground">Need help finding something?</p>
                                        <Link to="/contact" onClick={onClose} className="text-xs font-medium underline flex items-center justify-center md:justify-start gap-1">
                                            GET IN TOUCH <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SearchOverlay;
