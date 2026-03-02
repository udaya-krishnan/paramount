import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Dish } from "@/data/paramount";

const DishCard = ({ dish, index }: { dish: Dish; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group bg-card rounded-lg border border-border p-5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-display font-semibold text-card-foreground">{dish.name}</h3>
            {dish.popular && (
              <span className="flex items-center gap-1 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                <Star className="w-3 h-3 fill-primary" />
                Popular
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground mt-1">{dish.description}</p>
          <span className="inline-block text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded mt-2">
            {dish.category}
          </span>
        </div>
        <span className="text-lg font-bold text-primary whitespace-nowrap">{dish.price}</span>
      </div>
    </motion.div>
  );
};

export default DishCard;
