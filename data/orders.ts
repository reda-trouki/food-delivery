export type OrderStatus = 
  | "Preparing"
  | "On the way"
  | "Delivered"
  | "Cancelled"

export interface Order {
  id: string
  restaurant: string
  restaurantImage: string
  items: string[]
  total: number
  deliveryFee: number
  date: string
  status: OrderStatus
  estimatedTime?: string
}

export const orders: Order[] = [
  {
    id: "ORD-001",
    restaurant: "Burger Factory",
    restaurantImage:
      "https://images.unsplash.com/photo-1571091718767-18b5b1457add",
    items: ["Classic Cheeseburger", "French Fries", "Coca Cola"],
    total: 89,
    deliveryFee: 10,
    date: "Today, 18:30",
    status: "On the way",
    estimatedTime: "15-20 min",
  },
  {
    id: "ORD-002",
    restaurant: "Sushi House",
    restaurantImage:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    items: ["Salmon Sushi", "California Roll", "Miso Soup"],
    total: 145,
    deliveryFee: 12,
    date: "Today, 12:45",
    status: "Preparing",
    estimatedTime: "25-30 min",
  },
  {
    id: "ORD-003",
    restaurant: "Pizza Roma",
    restaurantImage:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    items: ["Margherita Pizza", "Garlic Bread"],
    total: 110,
    deliveryFee: 8,
    date: "Sep 17, 20:15",
    status: "Delivered",
  },
  {
    id: "ORD-004",
    restaurant: "Taco Corner",
    restaurantImage:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b",
    items: ["Chicken Tacos", "Beef Burrito", "Nachos"],
    total: 125,
    deliveryFee: 10,
    date: "Sep 15, 19:40",
    status: "Delivered",
  },
  {
    id: "ORD-005",
    restaurant: "Green Bowl",
    restaurantImage:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    items: ["Chicken Avocado Bowl", "Fresh Orange Juice"],
    total: 98,
    deliveryFee: 7,
    date: "Sep 12, 13:20",
    status: "Cancelled",
  },
]