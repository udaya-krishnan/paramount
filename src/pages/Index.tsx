import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MapPin, Star, ChevronRight, Utensils, ShoppingBag, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import OutletCard from "@/components/OutletCard";
import DishCard from "@/components/DishCard";
import TestimonialCard from "@/components/TestimonialCard";
import { outlets, dishes, testimonials } from "@/data/paramount";
import heroBg from "@/assets/hero-bg.jpg";
import foodSpread from "@/assets/food-spread.jpg";

const Index = () => {
  const popularDishes = dishes.filter((d) => d.popular);
  const featuredOutlets = outlets.slice(0, 3);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Paramount Restaurant dining experience" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-accent font-medium text-sm md:text-base uppercase tracking-[0.3em] mb-4">
              Est. Kerala
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary-foreground mb-4">
              PARAMOUNT
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-2">
              We Serve Happiness
            </p>
            <p className="text-primary-foreground/60 max-w-lg mx-auto mb-8">
              A multi-brand food & retail experience trusted by thousands across Kerala.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:09946666541">
                <Button size="lg" className="gap-2 text-base px-8">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
              <Link to="/menu">
                <Button size="lg" variant="outline" className="gap-2 text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  View Menu
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto"
          >
            {[
              { value: "5+", label: "Outlets" },
              { value: "4.0", label: "Rating ⭐" },
              { value: "965+", label: "Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-warm-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={foodSpread}
                alt="Paramount food spread"
                className="rounded-xl shadow-2xl w-full aspect-square object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                A Legacy of <span className="text-primary">Taste & Trust</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                From a single restaurant to a flourishing multi-brand food and retail group, Paramount has been serving happiness to families across Kerala. Our commitment to quality, authentic flavors, and warm hospitality has made us a household name.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Utensils, label: "Restaurants" },
                  { icon: ShoppingBag, label: "Supermarkets" },
                  { icon: Coffee, label: "Cafés" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-2 p-3 bg-card rounded-lg border border-border">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="text-xs font-medium text-foreground">{label}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button variant="outline" className="gap-2">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Outlets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Our Brands"
            title="Featured Outlets"
            description="Discover the diverse range of food and retail experiences under the Paramount umbrella."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOutlets.map((outlet, i) => (
              <OutletCard key={outlet.id} outlet={outlet} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/businesses">
              <Button variant="outline" size="lg" className="gap-2">
                View All Businesses <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-20 bg-warm-section">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Menu Highlights"
            title="Signature Dishes"
            description="Our most loved dishes that keep customers coming back for more."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {popularDishes.map((dish, i) => (
              <DishCard key={dish.id} dish={dish} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/menu">
              <Button size="lg" className="gap-2">
                Full Menu <ChevronRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            subtitle="Customer Love"
            title="What People Say"
            description="Real reviews from our valued customers across all Paramount outlets."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
              Ready to Experience Paramount?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
              Visit us today or call ahead to reserve your table. We're here to serve happiness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:09946666541">
                <Button size="lg" className="gap-2 px-8">
                  <Phone className="w-5 h-5" /> Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/919946666541"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
