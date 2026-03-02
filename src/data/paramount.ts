export interface Outlet {
  id: string;
  name: string;
  category: string;
  description: string;
  address: string;
  phone: string;
  hours: string;
  rating: number;
  reviews: number;
  priceRange: string;
  features: string[];
  mapUrl: string;
}

export interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  price: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export const outlets: Outlet[] = [
  {
    id: "restaurant-supermarket",
    name: "Paramount Restaurant & Supermarket",
    category: "Restaurant & Retail",
    description: "Our flagship location combining fine dining with a fully-stocked supermarket. Enjoy authentic Kerala cuisine and shop for the freshest groceries under one roof.",
    address: "Kadambazhipuram Junction, Kadampazhipuram, Kerala 678633",
    phone: "099466 66541",
    hours: "Opens at 11:00 AM",
    rating: 4.0,
    reviews: 965,
    priceRange: "₹200–400",
    features: ["All you can eat", "Vegetarian options", "Family friendly", "High chairs available"],
    mapUrl: "https://maps.app.goo.gl/uUkTmM43x22h52xh8",
  },

  {
  id: "bakes-restaurant-sreekrishnapuram",
  name: "Paramount Bakes & Restaurant",
  category: "Bakery & Restaurant",
  description:
    "A popular dine-in and takeaway spot offering freshly baked items, Mandhi, biryani, and a wide range of restaurant dishes. Known for good food quality, pleasant ambience, and generous portions.",
  address: "WC47+GCG, Sreekrishnapuram, Kerala 679513",
  phone: "099466 66972",
  hours: "Open · Closes 11:00 PM",
  rating: 3.7,
  reviews: 479,
  priceRange: "₹200–400",
  features: [
    "Dine-in",
    "Drive-through",
    "No-contact delivery",
    "Takeaway",
    "Family friendly",
  ],
  mapUrl: "https://maps.app.goo.gl/uuidoT8YmnNEpWVe6",
},
  {
  id: "paramount-bakes-cafe-kadambazhipuram",
  name: "Paramount Bakes & Cafe",
  category: "Bakery & Cake Shop",
  description:
    "A well-loved bakery and café offering fresh cream cakes, shakes, fruits, falooda, and a wide variety of bakery items. Known for friendly service, great taste, and a pleasant atmosphere.",
  address: "Kadambazhipuram Junction, Palakkad, Kadampazhipuram, Kerala 678633",
  phone: "099478 49568",
  hours: "Open · Closes 10:00 PM",
  rating: 4.2,
  reviews: 300,
  priceRange: "₹1–200",
  features: [
    "Dine-in",
    "Takeaway",
    "No-contact delivery",
    "Cakes & desserts",
    "Shakes & beverages",
  ],
  mapUrl: "https://maps.app.goo.gl/WzSXUVECoNkjFd9V6",
},
  {
  id: "paramount-daily-fresh-market-kadambazhipuram",
  name: "Paramount Daily Fresh Market",
  category: "Market",
  description:
    "A neatly maintained all-in-one fresh market offering vegetables, fruits, fish, chicken, beef, mutton, groceries, and a kiosk serving fast food, juices, and shakes. Popular evening hangout spot.",
  address: "VCFR+V3V, Kadambazhipuram Junction, Kadampazhipuram, Kerala 678633",
  phone: "",
  hours: "",
  rating: 3.6,
  reviews: 54,
  priceRange: "",
  features: [
    "Vegetables & fruits",
    "Fish & meat stalls",
    "Grocery items",
    "Fast food kiosk",
    "Juices & shakes",
  ],
  mapUrl: "https://maps.app.goo.gl/zdnbm3JPTmNBZWhq7",
},
  {
  id: "paramount-bakes-restaurant-mangode",
  name: "Paramount Bakes & Restaurant",
  category: "Restaurant & Bakery",
  description:
    "Highway-side restaurant and bakery offering a wide variety of meals, bakery items, snacks, and beverages. Popular for porotta dishes, fried chicken, and good seating with dine-in, drive-through, and delivery options.",
  address:
    "Kozhikode - Malappuram - Palakkad Hwy, Mangode, Kerala 679503",
  phone: "099466 66073",
  hours: "Open · Closes at 11:00 PM",
  rating: 3.8,
  reviews: 567,
  priceRange: "₹200–400",
  features: [
    "Dine-in",
    "Drive-through",
    "Takeaway",
    "No-contact delivery",
    "Bakery items",
    "Highway location",
    "Parking available",
    "Family seating"
  ],
  mapUrl: "https://maps.app.goo.gl/TdoDRrLHcgzWXsmA7"
},
];

export const dishes: Dish[] = [
  { id: "1", name: "Kerala Porotta", category: "Bread", description: "Flaky, layered flatbread – the soul of Kerala meals", price: "₹30", popular: true },
  { id: "2", name: "Chicken Alfaham", category: "Grilled", description: "Tender Arabic-style grilled chicken with smoky flavors", price: "₹220", popular: true },
  { id: "3", name: "Kabab Chicken Shawayi", category: "Grilled", description: "Marinated chicken grilled to perfection over open flame", price: "₹240" },
  { id: "4", name: "Tandoori Chicken", category: "Grilled", description: "Classic tandoor-roasted chicken with aromatic spices", price: "₹260", popular: true },
  { id: "5", name: "Chicken Fry", category: "Fried", description: "Crispy, spice-coated chicken fried golden brown", price: "₹180" },
  { id: "6", name: "Chicken Tikka", category: "Grilled", description: "Boneless chicken marinated in yogurt and spices, chargrilled", price: "₹230" },
  { id: "7", name: "Beef Biryani", category: "Biryani", description: "Fragrant basmati rice layered with tender beef and spices", price: "₹200", popular: true },
  { id: "8", name: "Beef Chilli", category: "Starters", description: "Spicy Indo-Chinese style beef tossed with peppers", price: "₹190" },
  { id: "9", name: "Duck Roast", category: "Kerala Special", description: "Traditional Kerala-style slow-roasted duck in rich masala", price: "₹350", popular: true },
  { id: "10", name: "Chatti Paththiri", category: "Kerala Special", description: "Layered crepe pastry with sweet or savory fillings", price: "₹120" },
  { id: "11", name: "Burger", category: "Snacks", description: "Juicy loaded burger with fresh ingredients", price: "₹150" },
];

export const testimonials: Testimonial[] = [
  { id: "1", name: "Arun Kumar", rating: 5, text: "Best biryani in Palakkad! The flavors are authentic and the portions are generous. Paramount never disappoints.", date: "2 weeks ago" },
  { id: "2", name: "Sreelakshmi R", rating: 4, text: "Love the family-friendly atmosphere. The Kerala Porotta and Chicken Fry combo is unbeatable. Great service too!", date: "1 month ago" },
  { id: "3", name: "Mohammed Fasil", rating: 5, text: "The Duck Roast is a masterpiece. Been coming here for years and the quality has only gotten better. Truly paramount!", date: "3 weeks ago" },
  { id: "4", name: "Priya Menon", rating: 4, text: "Paramount Bakes has the freshest cakes in town. The café ambiance is perfect for a relaxed evening with family.", date: "1 month ago" },
  { id: "5", name: "Rajesh Nair", rating: 5, text: "From supermarket to restaurant, everything under one roof. The Alfaham chicken is a must-try! Consistent quality across all branches.", date: "2 months ago" },
];
