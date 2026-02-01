import type { RecipeItem } from "../types";

export const recipesData: RecipeItem[] = [
  {
    id: 1,
    slug: "big-and-juicy-wagyu-beef-cheeseburger",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    category: "Snack",
    image: "/images/home/simpleRecipes/simpleRecipes-1.png",
    time: "30 Minutes",
    servings: 2,
    calories: 820,
    description:
      "Juicy Wagyu beef patty with melted cheddar, served in a soft bun for a rich and satisfying burger experience.",
    ingredients: [
      {
        title: "For the Burger Patties",
        items: [
          "400g Wagyu ground beef",
          "1 tsp Salt",
          "1/2 tsp Black Pepper",
          "1 tsp Worcestershire Sauce",
        ],
      },
      {
        title: "For Assembly",
        items: [
          "2 Brioche Burger Buns",
          "2 slices Cheddar Cheese",
          "Lettuce Leaves",
          "Sliced Tomatoes",
          "Sliced Red Onions",
          "Ketchup or Burger Sauce",
        ],
      },
    ],
    steps: [
      "Preheat a cast iron pan or grill over medium-high heat.",
      "Season Wagyu beef with salt, pepper, and Worcestershire sauce, then form into 2 patties.",
      "Cook patties for 3–4 minutes on each side.",
      "Place cheddar cheese on top and let melt.",
      "Toast the brioche buns lightly.",
      "Assemble with lettuce, tomato, onion, patty, and sauce.",
      "Serve immediately while hot and juicy.",
    ],
  },
  {
    id: 2,
    slug: "fresh-lime-roasted-salmon-with-ginger-sauce",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    category: "Fish",
    image: "/images/home/simpleRecipes/simpleRecipes-2.png",
    time: "30 Minutes",
    servings: 2,
    calories: 520,
    description:
      "Oven-roasted salmon with fresh lime and a light ginger sauce, offering a bright and balanced flavor.",
    ingredients: [
      {
        title: "For the Salmon",
        items: [
          "2 Salmon Fillets",
          "1 tbsp Olive Oil",
          "Salt & Black Pepper",
          "Zest of 1 Lime",
        ],
      },
      {
        title: "For the Ginger Sauce",
        items: [
          "2 tbsp Fresh Lime Juice",
          "1 tbsp Soy Sauce",
          "1 tsp Grated Ginger",
          "1 tsp Honey",
          "1 Garlic Clove (minced)",
        ],
      },
    ],
    steps: [
      "Preheat oven to 200°C (390°F).",
      "Place salmon on a baking tray and drizzle with olive oil.",
      "Season with salt, pepper, and lime zest.",
      "Bake for 12–15 minutes until flaky.",
      "Meanwhile whisk lime juice, soy sauce, ginger, honey, and garlic together.",
      "Drizzle the ginger-lime sauce over the baked salmon before serving.",
    ],
  },
  {
    id: 3,
    slug: "strawberry-oatmeal-pancake-with-honey-syrup",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    category: "Breakfast",
    image: "/images/home/simpleRecipes/simpleRecipes-3.png",
    time: "30 Minutes",
    servings: 2,
    calories: 390,
    description:
      "Soft oatmeal pancakes topped with fresh strawberries and drizzled with honey syrup for a wholesome breakfast.",
    ingredients: [
      {
        title: "For the Pancakes",
        items: [
          "1 cup Rolled Oats",
          "1/2 cup Flour",
          "1 cup Milk",
          "1 Egg",
          "1 tbsp Honey",
          "1 tsp Baking Powder",
          "1/2 tsp Vanilla Extract",
        ],
      },
      {
        title: "For Topping",
        items: [
          "Fresh Strawberries (sliced)",
          "Honey Syrup",
          "Butter (optional)",
        ],
      },
    ],
    steps: [
      "Blend oats into a fine flour or leave slightly coarse for texture.",
      "Mix oats, flour, baking powder, milk, egg, honey, and vanilla until smooth.",
      "Heat a non-stick pan over medium heat and grease lightly.",
      "Pour batter and cook pancakes 2–3 minutes per side.",
      "Serve topped with fresh strawberries and honey syrup.",
    ],
  },
  {
    id: 4,
    slug: "fresh-and-healthy-mixed-mayonnaise-salad",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    category: "Healthy",
    image: "/images/home/simpleRecipes/simpleRecipes-4.png",
    time: "30 Minutes",
    servings: 2,
    calories: 320,
    description:
      "A light and refreshing mixed salad with fresh vegetables and a creamy mayonnaise dressing.",
    ingredients: [
      {
        title: "For the Salad",
        items: [
          "1 cup Lettuce (chopped)",
          "1/2 cup Cucumber (sliced)",
          "1/2 cup Cherry Tomatoes (halved)",
          "1/4 cup Sweet Corn",
          "1/4 cup Carrots (shredded)",
        ],
      },
      {
        title: "For the Dressing",
        items: [
          "2 tbsp Mayonnaise",
          "1 tbsp Lemon Juice",
          "1/2 tsp Salt",
          "1/4 tsp Black Pepper",
        ],
      },
    ],
    steps: [
      "Combine lettuce, cucumber, tomatoes, corn, and shredded carrots in a large bowl.",
      "In a small bowl whisk mayonnaise, lemon juice, salt, and pepper.",
      "Pour the dressing over the salad and toss gently to coat.",
      "Serve chilled for best flavor.",
    ],
  },
  {
    id: 5,
    slug: "chicken-meatballs-with-cream-cheese",
    title: "Chicken Meatballs with Cream Cheese",
    category: "Meat",
    image: "/images/home/simpleRecipes/simpleRecipes-5.png",
    time: "30 Minutes",
    servings: 2,
    calories: 480,
    description:
      "Tender chicken meatballs cooked until golden and served with a rich, creamy cheese sauce.",
    ingredients: [
      {
        title: "For the Meatballs",
        items: [
          "300g Ground Chicken",
          "1 Egg",
          "1/4 cup Breadcrumbs",
          "1 Garlic Clove (minced)",
          "Salt & Pepper",
        ],
      },
      {
        title: "For the Cream Cheese Sauce",
        items: [
          "100g Cream Cheese",
          "1/2 cup Milk",
          "1 tbsp Butter",
          "1/4 tsp Paprika",
          "Salt to taste",
        ],
      },
    ],
    steps: [
      "Mix ground chicken with egg, breadcrumbs, garlic, salt, and pepper.",
      "Shape into small meatballs and pan-fry until golden.",
      "In a saucepan, melt butter and add cream cheese.",
      "Pour in milk and whisk until smooth.",
      "Season with paprika and salt.",
      "Add cooked meatballs into the sauce and simmer for 5 minutes.",
    ],
  },
  {
    id: 6,
    slug: "fruity-pancake-with-orange-blueberry",
    title: "Fruity Pancake with Orange & Blueberry",
    category: "Sweet",
    image: "/images/home/simpleRecipes/simpleRecipes-6.png",
    time: "30 Minutes",
    servings: 2,
    calories: 420,
    description:
      "Fluffy pancakes topped with fresh blueberries and bright orange notes for a fruity and sweet treat.",
    ingredients: [
      {
        title: "For the Pancakes",
        items: [
          "1 cup Flour",
          "1 tbsp Sugar",
          "1 tsp Baking Powder",
          "1 Egg",
          "1 cup Milk",
          "Zest of 1 Orange",
        ],
      },
      {
        title: "For Topping",
        items: ["Fresh Blueberries", "Orange Segments", "Maple Syrup"],
      },
    ],
    steps: [
      "Mix flour, sugar, baking powder, milk, egg, and orange zest until smooth.",
      "Heat a pan over medium heat and lightly grease.",
      "Cook pancakes for 2–3 minutes per side.",
      "Serve topped with blueberries, orange slices, and maple syrup.",
    ],
  },
  {
    id: 7,
    slug: "the-best-easy-one-pot-chicken-and-rice",
    title: "The Best Easy One Pot Chicken and Rice",
    category: "Snack",
    image: "/images/home/simpleRecipes/simpleRecipes-7.png",
    time: "30 Minutes",
    servings: 2,
    calories: 560,
    description:
      "A comforting one-pot meal with tender chicken and perfectly cooked rice, simple and satisfying.",
    ingredients: [
      {
        title: "Main Ingredients",
        items: [
          "1 cup Rice",
          "250g Chicken Thighs (cubed)",
          "1 Onion (diced)",
          "2 Garlic Cloves (minced)",
          "2 cups Chicken Broth",
          "1 tbsp Olive Oil",
          "Salt & Pepper",
        ],
      },
    ],
    steps: [
      "Heat olive oil in a pot and sauté onion and garlic.",
      "Add chicken cubes and cook until lightly browned.",
      "Add rice and stir for 1 minute.",
      "Pour chicken broth, season with salt and pepper.",
      "Cover and simmer 15–18 minutes until rice is tender.",
      "Fluff with a fork and serve warm.",
    ],
  },
  {
    id: 8,
    slug: "the-creamiest-creamy-chicken-and-bacon-pasta",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    category: "Noodles",
    image: "/images/home/simpleRecipes/simpleRecipes-8.png",
    time: "30 Minutes",
    servings: 2,
    calories: 720,
    description:
      "Creamy pasta tossed with tender chicken and crispy bacon in a rich, indulgent sauce.",
    ingredients: [
      {
        items: [
          "200g Pasta (penne or fusilli)",
          "150g Chicken Breast (strips)",
          "100g Bacon (chopped)",
          "1 cup Heavy Cream",
          "1/2 cup Parmesan (grated)",
          "1 Garlic Clove (minced)",
          "1 tbsp Olive Oil",
        ],
      },
    ],
    steps: [
      "Boil pasta according to package instructions.",
      "Sauté bacon until crispy, then remove.",
      "In the same pan, cook chicken until golden.",
      "Add garlic and cook for 1 minute.",
      "Pour in heavy cream and simmer.",
      "Add Parmesan and stir until thickened.",
      "Mix in the cooked pasta and crispy bacon.",
    ],
  },
];
