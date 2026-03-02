import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { outlets } from "@/data/paramount";

const categories = ["All", ...Array.from(new Set(outlets.map((o) => o.category)))];

const Locations = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? outlets : outlets.filter((o) => o.category === filter);

  return (
    <Layout>
      <section className="relative py-24 bg-warm-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Find Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2">
              Our <span className="text-primary">Locations</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find the nearest Paramount outlet and visit us today.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filtered.map((outlet, i) => (
              <motion.div
                key={outlet.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 md:p-8 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">{outlet.category}</span>
                      <div className="flex items-center gap-1 text-sm text-primary font-medium">
                        <Star className="w-3.5 h-3.5 fill-primary" />
                        {outlet.rating} ({outlet.reviews})
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-card-foreground mb-3">{outlet.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{outlet.description}</p>
                    <div className="grid sm:grid-cols-3 gap-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{outlet.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span>{outlet.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{outlet.hours}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {outlet.features.map((f) => (
                        <span key={f} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{f}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:min-w-[160px]">
                    <a href={`tel:${outlet.phone.replace(/\s/g, "")}`}>
                      <Button className="w-full gap-2">
                        <Phone className="w-4 h-4" /> Call
                      </Button>
                    </a>
                    <a
                      href={`https://www.google.com/maps/search/${encodeURIComponent(outlet.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        <ExternalLink className="w-4 h-4" /> Directions
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
