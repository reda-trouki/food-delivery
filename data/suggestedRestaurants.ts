export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  priceRange: string;
  image: string;
  isOpen: boolean;
}

export const suggestedRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Medina Burger",
    cuisine: "Burgers • Fast Food",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: "Free",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    isOpen: true,
  },
  {
    id: "2",
    name: "Gucciano Lab",
    cuisine: "Italian • Pizza",
    rating: 4.9,
    deliveryTime: "25-35 min",
    deliveryFee: "12 MAD",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    isOpen: true,
  },
  {
    id: "3",
    name: "Hysushi Marrakech",
    cuisine: "Japanese • Sushi",
    rating: 4.8,
    deliveryTime: "30-40 min",
    deliveryFee: "15 MAD",
    priceRange: "$$$",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    isOpen: true,
  },
  {
    id: "4",
    name: "Fluffy",
    cuisine: "American • Moroccan",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: "Free",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    isOpen: true,
  },
  {
    id: "5",
    name: "Zola Turkish Cuisine",
    cuisine: "Turkish • Mediterranean",
    rating: 5.0,
    deliveryTime: "30-40 min",
    deliveryFee: "10 MAD",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947",
    isOpen: true,
  },
  {
    id: "6",
    name: "Al Khayma",
    cuisine: "Moroccan • Traditional",
    rating: 4.9,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    isOpen: true,
  },
  {
    id: "7",
    name: "Mozaik' Art",
    cuisine: "Brunch • Coffee",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: "10 MAD",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
    isOpen: true,
  },
  {
    id: "8",
    name: "Zushi",
    cuisine: "Japanese • Thai",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "15 MAD",
    priceRange: "$$$",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754",
    isOpen: true,
  },
  {
    id: "9",
    name: "Snack Adam",
    cuisine: "Fast Food • Sandwiches",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "8 MAD",
    priceRange: "$",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    isOpen: true,
  },
  {
    id: "10",
    name: "La Cantine des Gazelles",
    cuisine: "Moroccan • Mediterranean",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: "Free",
    priceRange: "$$",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554",
    isOpen: true,
  },
];