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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5!2d76.3!3d10.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ4JzAwLjAiTiA3NsKwMTgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  },
  {
    id: "bakes-cafe",
    name: "Paramount Bakes & Café",
    category: "Bakery & Café",
    description: "Freshly baked goods, artisanal coffee, and a cozy ambiance. Perfect for morning treats, afternoon snacks, and everything in between.",
    address: "Near Kadampazhipuram, Kerala",
    phone: "099466 66542",
    hours: "Opens at 7:00 AM",
    rating: 4.2,
    reviews: 420,
    priceRange: "₹100–250",
    features: ["Fresh baked goods", "Coffee bar", "Takeaway", "Dine-in"],
    mapUrl: "",
  },
  {
    id: "daily-fresh",
    name: "Paramount Daily Fresh Market",
    category: "Fresh Market",
    description: "Your daily destination for farm-fresh vegetables, fruits, meats, and dairy. Quality and freshness guaranteed every single day.",
    address: "Kadampazhipuram, Kerala",
    phone: "099466 66543",
    hours: "Opens at 6:00 AM",
    rating: 4.3,
    reviews: 310,
    priceRange: "Varies",
    features: ["Farm fresh produce", "Daily delivery", "Bulk orders", "Home delivery"],
    mapUrl: "",
  },
  {
    id: "restaurant-cafe",
    name: "Paramount Restaurant & Café",
    category: "Restaurant & Café",
    description: "A blend of traditional Kerala flavors with modern café culture. From full meals to quick bites, we've got you covered.",
    address: "Kerala",
    phone: "099466 66544",
    hours: "Opens at 10:00 AM",
    rating: 4.1,
    reviews: 580,
    priceRange: "₹150–350",
    features: ["Vegetarian options", "Wi-Fi", "Family friendly", "Outdoor seating"],
    mapUrl: "",
  },
  {
    id: "biryani-outlets",
    name: "Paramount Biryani & Food Outlets",
    category: "Quick Service",
    description: "Specializing in aromatic biryanis and quick-service food. Our signature biryani recipes have won hearts across Kerala.",
    address: "Multiple Locations, Kerala",
    phone: "099466 66545",
    hours: "Opens at 11:30 AM",
    rating: 4.4,
    reviews: 720,
    priceRange: "₹150–300",
    features: ["Biryani specialist", "Quick service", "Takeaway", "Delivery"],
    mapUrl: "",
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
