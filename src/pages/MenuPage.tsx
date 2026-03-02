import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import DishCard from "@/components/DishCard";
import { dishes } from "@/data/paramount";

const categories = ["All", ...Array.from(new Set(dishes.map((d) => d.category)))];

const MenuPage = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? dishes : dishes.filter((d) => d.category === filter);

  return (
    <Layout>
      <section className="relative py-24 bg-warm-section">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Menu</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-2">
              Signature <span className="text-primary">Specialties</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully crafted menu featuring the finest Kerala and Arabic cuisine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((dish, i) => (
              <DishCard key={dish.id} dish={dish} index={i} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            Prices may vary by location. Contact your nearest outlet for the full menu.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default MenuPage;
