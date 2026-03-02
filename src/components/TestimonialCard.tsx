import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/paramount";

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300"
    >
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-card-foreground/80 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-card-foreground text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.date}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < testimonial.rating
                  ? "fill-accent text-accent"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
