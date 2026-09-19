export interface FoodCategory {
  id: string;
  name: string;
  icon: string;
}

export const foodCategories: FoodCategory[] = [
  {
    id: "all",
    name: "All",
    icon: "🍽️",
  },
  {
    id: "pizza",
    name: "Pizza",
    icon: "🍕",
  },
  {
    id: "burgers",
    name: "Burgers",
    icon: "🍔",
  },
  {
    id: "chicken",
    name: "Chicken",
    icon: "🍗",
  },
  {
    id: "sandwiches",
    name: "Sandwiches",
    icon: "🥪",
  },
  {
    id: "tacos",
    name: "Tacos",
    icon: "🌮",
  },
  {
    id: "pasta",
    name: "Pasta",
    icon: "🍝",
  },
  {
    id: "asian",
    name: "Asian",
    icon: "🍜",
  },
  {
    id: "seafood",
    name: "Seafood",
    icon: "🍤",
  },
  {
    id: "moroccan",
    name: "Moroccan",
    icon: "🍲",
  },
  {
    id: "salads",
    name: "Salads",
    icon: "🥗",
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "🍰",
  },
  {
    id: "bakery",
    name: "Bakery",
    icon: "🥐",
  },
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "🍳",
  },
  {
    id: "drinks",
    name: "Drinks",
    icon: "🥤",
  },
];