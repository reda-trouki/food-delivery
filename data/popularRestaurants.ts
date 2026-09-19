export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  deliveryFee: number;
  deliveryTime: string;
  distance: string;
  priceLevel: string;
  isOpen: boolean;
  isFavorite: boolean;
}

export const popularRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Casa Pizza",
    cuisine: "Italian",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80",
    rating: 4.8,
    deliveryFee: 15,
    deliveryTime: "20–30 min",
    distance: "1.2 km",
    priceLevel: "$$",
    isOpen: true,
    isFavorite: false,
  },
  {
    id: "2",
    name: "Burger House",
    cuisine: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
    rating: 4.7,
    deliveryFee: 12,
    deliveryTime: "15–25 min",
    distance: "0.8 km",
    priceLevel: "$$",
    isOpen: true,
    isFavorite: true,
  },
  {
    id: "3",
    name: "Chicken Time",
    cuisine: "Fast Food",
    image:
      "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=800&q=80",
    rating: 4.6,
    deliveryFee: 10,
    deliveryTime: "20–30 min",
    distance: "1.5 km",
    priceLevel: "$",
    isOpen: true,
    isFavorite: false,
  },
  {
    id: "4",
    name: "Pasta Bella",
    cuisine: "Italian",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    rating: 4.9,
    deliveryFee: 18,
    deliveryTime: "25–35 min",
    distance: "2.1 km",
    priceLevel: "$$$",
    isOpen: true,
    isFavorite: false,
  },
  {
    id: "5",
    name: "Taco Fiesta",
    cuisine: "Mexican",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
    rating: 4.7,
    deliveryFee: 14,
    deliveryTime: "20–30 min",
    distance: "1.7 km",
    priceLevel: "$$",
    isOpen: true,
    isFavorite: true,
  },
  {
    id: "6",
    name: "Spice Garden",
    cuisine: "Moroccan",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=80",
    rating: 4.8,
    deliveryFee: 12,
    deliveryTime: "25–35 min",
    distance: "2.4 km",
    priceLevel: "$$",
    isOpen: true,
    isFavorite: false,
  },
  {
    id: "7",
    name: "Sushi House",
    cuisine: "Japanese",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    rating: 4.9,
    deliveryFee: 20,
    deliveryTime: "30–40 min",
    distance: "3.1 km",
    priceLevel: "$$$",
    isOpen: true,
    isFavorite: false,
  },
  {
    id: "8",
    name: "Sweet Corner",
    cuisine: "Desserts",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    rating: 4.6,
    deliveryFee: 8,
    deliveryTime: "15–25 min",
    distance: "0.9 km",
    priceLevel: "$",
    isOpen: true,
    isFavorite: true,
  },
];