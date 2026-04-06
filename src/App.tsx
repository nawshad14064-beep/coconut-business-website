/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ShoppingBag, 
  Leaf, 
  Droplets, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter,
  ArrowRight,
  Star,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-emerald-900" : "text-white"}`}>
            Coco<span className="text-emerald-500">Pure</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? "text-gray-600" : "text-white/90"}`}>
          <a href="#home" className="hover:text-emerald-500 transition-colors">Home</a>
          <a href="#products" className="hover:text-emerald-500 transition-colors">Products</a>
          <a href="#about" className="hover:text-emerald-500 transition-colors">About</a>
          <a href="#contact" className="px-5 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20">
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-emerald-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className={isScrolled ? "text-emerald-900" : "text-white"} /> : <Menu className={isScrolled ? "text-emerald-900" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4 md:hidden"
        >
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Home</a>
          <a href="#products" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">Products</a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 font-medium">About</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-emerald-600 text-white py-3 rounded-xl text-center font-bold">Order Now</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543158266-0066955047b1?q=80&w=2070&auto=format&fit=crop" 
          alt="Coconut Palm Trees" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block py-1 px-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded-full text-emerald-400 font-semibold text-sm mb-6 uppercase tracking-widest">
            100% Organic & Fresh
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Pure Goodness From <span className="text-emerald-400">Nature's Heart</span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-lg">
            Experience the finest selection of premium coconut products, harvested sustainably and delivered fresh to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-600/30">
              Explore Products <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <Star className="text-white fill-current" />
            </div>
            <div>
              <p className="text-white font-bold text-xl">4.9/5</p>
              <p className="text-gray-300 text-sm">Customer Rating</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProductCard = ({ title, price, image, category, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group"
  >
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-700 uppercase tracking-wider">
          {category}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <div className="text-emerald-600">
          <Icon size={20} />
        </div>
      </div>
      <p className="text-gray-500 text-sm mb-4">Premium quality, sustainably sourced and processed with care.</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-emerald-900">{price}</span>
        <button className="p-3 bg-gray-50 text-emerald-600 rounded-xl hover:bg-emerald-600 hover:text-white transition-all">
          <ShoppingBag size={20} />
        </button>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  const products = [
    {
      title: "Virgin Coconut Oil",
      price: "$24.99",
      category: "Health",
      icon: Droplets,
      image: "https://images.unsplash.com/photo-1620706857370-e1b976fd0551?q=80&w=1964&auto=format&fit=crop"
    },
    {
      title: "Fresh King Coconut",
      price: "$5.50",
      category: "Beverage",
      icon: Leaf,
      image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop"
    },
    {
      title: "Desiccated Coconut",
      price: "$12.00",
      category: "Cooking",
      icon: ShoppingBag,
      image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-emerald-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Collection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
          >
            Nature's Finest Selection
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "100% Organic",
      desc: "Grown without synthetic pesticides or fertilizers.",
      icon: Leaf
    },
    {
      title: "Sustainably Sourced",
      desc: "Supporting local farmers and eco-friendly practices.",
      icon: CheckCircle2
    },
    {
      title: "Pure Extraction",
      desc: "Cold-pressed to preserve all natural nutrients.",
      icon: Droplets
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1596708059450-b8680573828f?q=80&w=1974&auto=format&fit=crop" 
              alt="Coconut Harvest" 
              className="relative z-10 rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 p-8 rounded-3xl shadow-xl z-20 hidden md:block">
              <p className="text-white text-4xl font-bold mb-1">15+</p>
              <p className="text-emerald-100 text-sm font-medium">Years of Excellence</p>
            </div>
          </div>

          <div>
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-8">The Gold Standard of Coconut Quality</h2>
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                    <f.icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                <Leaf className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Coco<span className="text-emerald-500">Pure</span>
              </span>
            </div>
            <p className="text-emerald-100/60 leading-relaxed">
              Bringing the purest essence of tropical coconuts to your lifestyle. Sustainable, organic, and premium.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Our Products</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-emerald-100/60">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" />
                <span>hello@cocopure.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-emerald-500" />
                <span>123 Tropical Way, Island City</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-emerald-100/60 mb-4">Subscribe for updates and recipes.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-emerald-600 p-1.5 rounded-lg hover:bg-emerald-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-emerald-100/40 text-sm">
          <p>© 2026 CocoPure Premium Products. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans text-gray-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        
        {/* Call to Action Section */}
        <section className="py-24 bg-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Experience the Purest Coconut Products?</h2>
            <p className="text-emerald-50 text-xl mb-10 opacity-90">
              Join thousands of happy customers who trust CocoPure for their daily health and culinary needs.
            </p>
            <button className="px-10 py-5 bg-white text-emerald-700 rounded-full font-bold text-xl hover:bg-emerald-50 transition-all shadow-2xl">
              Start Shopping Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
