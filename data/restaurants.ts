export interface Restaurant {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  isOpen: boolean;
}

export const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Casa Pizza",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "20-30 min",
    deliveryFee: 15,
    isOpen: true,
  },
  {
    id: "2",
    name: "Burger House",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    cuisine: "Fast Food",
    rating: 4.6,
    deliveryTime: "25-35 min",
    deliveryFee: 12,
    isOpen: true,
  },
  {
    id: "3",
    name: "Marrakech Kitchen",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554",
    cuisine: "Moroccan",
    rating: 4.9,
    deliveryTime: "30-40 min",
    deliveryFee: 10,
    isOpen: true,
  },
  {
    id: "4",
    name: "Sushi Time",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "30-45 min",
    deliveryFee: 20,
    isOpen: true,
  },
  {
    id: "5",
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    cuisine: "Mexican",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: 15,
    isOpen: false,
  },
];