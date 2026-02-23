/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  MapPin, 
  Compass, 
  Palmtree, 
  Users, 
  ArrowRight, 
  Star, 
  Instagram, 
  Facebook, 
  Twitter,
  Mail,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Services', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const SERVICES = [
  {
    title: "Adventure Tours",
    description: "Push your limits with our curated high-adrenaline expeditions across the globe.",
    icon: <Compass className="w-8 h-8 text-ocean" />,
  },
  {
    title: "Luxury Vacations",
    description: "Experience the world's most exclusive resorts and personalized VIP treatment.",
    icon: <Star className="w-8 h-8 text-ocean" />,
  },
  {
    title: "Custom Itineraries",
    description: "Your dream trip, exactly how you want it. We handle every detail.",
    icon: <MapPin className="w-8 h-8 text-ocean" />,
  },
  {
    title: "Group Trips",
    description: "Connect with fellow travelers on our social and engaging group adventures.",
    icon: <Users className="w-8 h-8 text-ocean" />,
  },
];

const DESTINATIONS = [
  {
    name: "Amalfi Coast",
    country: "Italy",
    tagline: "Sun-drenched cliffs and azure waters.",
    image: "https://picsum.photos/seed/amalfi/800/1000",
  },
  {
    name: "Kyoto",
    country: "Japan",
    tagline: "Timeless temples and serene gardens.",
    image: "https://picsum.photos/seed/kyoto/800/1000",
  },
  {
    name: "Bali",
    country: "Indonesia",
    tagline: "Tropical paradise and spiritual soul.",
    image: "https://picsum.photos/seed/bali/800/1000",
  },
  {
    name: "Reykjavik",
    country: "Iceland",
    tagline: "Dramatic landscapes and northern lights.",
    image: "https://picsum.photos/seed/iceland/800/1000",
  },
];

const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    text: "Explore made our honeymoon absolutely perfect. The custom itinerary was flawless and every recommendation was a hit!",
    role: "Adventure Enthusiast",
  },
  {
    name: "Mark Thompson",
    text: "I've traveled with many companies, but the attention to detail at Explore is unmatched. Their luxury tours are truly world-class.",
    role: "Frequent Traveler",
  },
  {
    name: "Elena Rodriguez",
    text: "The group trip to Iceland was the best experience of my life. I made friends for life and saw things I never thought possible.",
    role: "Solo Traveler",
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className={`text-2xl font-display font-bold tracking-tighter ${scrolled ? 'text-stone-900' : 'text-white'}`}>
            EXPLORE<span className="text-ocean">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium transition-colors hover:text-ocean ${scrolled ? 'text-stone-600' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-ocean hover:bg-ocean-dark text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-ocean/20">
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={scrolled ? 'text-stone-900' : 'text-white'} />
            ) : (
              <Menu className={scrolled ? 'text-stone-900' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 md:hidden shadow-xl"
            >
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-medium text-stone-900 hover:text-ocean"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-ocean text-white px-6 py-3 rounded-xl font-semibold">
                  Book Your Trip
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/travel-hero/1920/1080" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Explore the World <br />
              <span className="text-ocean">Your Way.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              We craft immersive, authentic travel experiences that connect you with the soul of a destination. Adventure awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#destinations" 
                className="group bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-ocean hover:text-white flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#about" 
                className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/30 hover:bg-white/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/about-travel/800/1000" 
                  alt="About Explore" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-ocean text-white p-8 rounded-2xl shadow-xl hidden lg:block max-w-[240px]">
                <p className="text-sm font-medium italic opacity-90 mb-2">"Travel is the only thing you buy that makes you richer."</p>
                <div className="h-px w-12 bg-white/30 mb-2" />
                <p className="text-xs font-bold uppercase tracking-widest">Our Philosophy</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                Redefining the Art of <br /> Modern Exploration.
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Founded by a team of passionate explorers, Explore was born from a simple belief: that travel should be more than just visiting places—it should be about transformation.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                    <Compass className="text-ocean w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Our Mission</h4>
                    <p className="text-stone-600 text-sm">To provide authentic, sustainable, and deeply personal travel experiences that inspire wonder.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-ocean/10 rounded-xl flex items-center justify-center">
                    <Palmtree className="text-ocean w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900 mb-1">Our Vision</h4>
                    <p className="text-stone-600 text-sm">A world where every journey enriches both the traveler and the community they visit.</p>
                  </div>
                </div>
              </div>
              <button className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-ocean transition-colors">
                Discover Our Story
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">Tailored Travel Services</h2>
            <p className="text-stone-600 text-lg">From rugged adventures to refined relaxation, we offer a spectrum of services designed for every type of explorer.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-stone-100 group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Gallery */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Top Picks</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">Featured Destinations</h2>
            </div>
            <a href="#" className="text-ocean font-bold flex items-center gap-2 hover:underline">
              View All Destinations <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DESTINATIONS.map((dest, idx) => (
              <motion.div 
                key={dest.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 destination-card-overlay opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1 block">{dest.country}</span>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{dest.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section id="testimonials" className="py-24 bg-ocean text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-white/70 font-bold uppercase tracking-widest text-sm mb-4 block">Voices of Travelers</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold">What Our Explorers Say</h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-white text-white" />
                    ))}
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-light italic leading-relaxed mb-10">
                  "{TESTIMONIALS[currentTestimonial].text}"
                </p>
                <h4 className="text-xl font-bold mb-1">{TESTIMONIALS[currentTestimonial].name}</h4>
                <p className="text-white/70 text-sm uppercase tracking-widest">{TESTIMONIALS[currentTestimonial].role}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-4 mt-12">
              <button 
                onClick={prevTestimonial}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-ocean transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-3 rounded-full border border-white/20 hover:bg-white hover:text-ocean transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <span className="text-ocean font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8 leading-tight">Ready to Start Your Next Adventure?</h2>
              <p className="text-stone-600 text-lg mb-12">
                Have questions about a destination or want to start planning your custom itinerary? Our travel experts are here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-ocean">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-stone-900 font-bold text-lg">hello@explore.travel</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-ocean">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-stone-900 font-bold text-lg">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-stone-50 rounded-2xl flex items-center justify-center text-ocean">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-stone-900 font-bold text-lg">123 Wanderlust Way, SF, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-stone-50 p-10 rounded-3xl border border-stone-100 shadow-sm"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Destination Interest</label>
                  <select className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all appearance-none">
                    <option>Select a destination</option>
                    <option>Amalfi Coast, Italy</option>
                    <option>Kyoto, Japan</option>
                    <option>Bali, Indonesia</option>
                    <option>Reykjavik, Iceland</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your dream trip..."
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ocean/20 focus:border-ocean transition-all"
                  ></textarea>
                </div>
                <button className="w-full bg-ocean text-white py-4 rounded-xl font-bold text-lg hover:bg-ocean-dark transition-all shadow-lg shadow-ocean/20">
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <a href="#home" className="text-3xl font-display font-bold tracking-tighter">
                EXPLORE<span className="text-ocean">.</span>
              </a>
              <p className="text-stone-400 text-sm leading-relaxed">
                Crafting extraordinary journeys for the curious and the bold. We believe travel is the best way to understand the world and ourselves.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ocean transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ocean transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-ocean transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-stone-400 text-sm">
                {NAV_LINKS.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Destinations</h4>
              <ul className="space-y-4 text-stone-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Europe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Asia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Americas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Africa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Oceania</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">Newsletter</h4>
              <p className="text-stone-400 text-sm mb-6">Subscribe for travel inspiration and exclusive offers.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-ocean flex-grow"
                />
                <button className="bg-ocean px-4 py-2 rounded-lg text-sm font-bold hover:bg-ocean-dark transition-all">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
            <p>© {new Date().getFullYear()} Explore Travel Co. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
