import type { RecipeItem } from "../types";

export const recipesData: RecipeItem[] = [
  {
    id: 1,
    slug: "grilled-sea-bass",
    title: "Grilled Sea Bass with Asparagus",
    category: "Seafood",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "45 min",
    servings: 2,
    calories: 450,
    description:
      "A light and healthy seafood dinner perfect for summer evenings. The lemon zest adds a refreshing touch.",
    ingredients: [
      "2 Sea bass fillets",
      "1 bunch Asparagus",
      "Extra Virgin Olive Oil",
      "1 Lemon",
      "Fresh Thyme",
      "Sea Salt & Black Pepper",
    ],
    steps: [
      "Preheat your grill or grill pan to high heat.",
      "Season the sea bass fillets with olive oil, salt, pepper, and fresh thyme.",
      "Trim the woody ends of the asparagus and toss with olive oil.",
      "Grill the asparagus for 3-4 minutes until tender-crisp.",
      "Grill the fish skin-side down for 4-5 minutes, flip carefully, and cook for another 2 minutes.",
      "Serve immediately with lemon wedges.",
    ],
  },
  {
    id: 2,
    slug: "vegan-blueberry-cheesecake",
    title: "Raw Vegan Blueberry Cheesecake",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "60 min",
    servings: 8,
    calories: 320,
    description:
      "A guilt-free dessert that tastes rich and creamy without any dairy or refined sugar.",
    ingredients: [
      "200g Cashews (soaked)",
      "1/2 cup Coconut Oil",
      "1/3 cup Maple Syrup",
      "1 cup Fresh Blueberries",
      "1 cup Almond Flour (for base)",
      "1/2 cup Dates (for base)",
    ],
    steps: [
      "Process almond flour and dates in a food processor to make the crust. Press into a tin.",
      "Blend soaked cashews, coconut oil, and maple syrup until ultra-smooth.",
      "Pour half the mixture over the crust.",
      "Blend the remaining half with blueberries and pour on top.",
      "Freeze for at least 4 hours before serving.",
    ],
  },
  {
    id: 3,
    slug: "classic-italian-pizza",
    title: "Homemade Classic Italian Pizza",
    category: "Main Course",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    time: "90 min",
    servings: 4,
    calories: 600,
    description:
      "Authentic Neapolitan style pizza dough recipe that you can make in your home oven.",
    ingredients: [
      "500g '00' Flour",
      "325ml Warm Water",
      "7g Instant Yeast",
      "Fresh Mozzarella",
      "Fresh Basil Leaves",
      "San Marzano Tomato Sauce",
    ],
    steps: [
      "Mix flour, water, salt, and yeast. Knead for 10 minutes until smooth.",
      "Let the dough rise in a warm place for at least 2 hours.",
      "Preheat your oven to the maximum temperature (use a pizza stone if available).",
      "Stretch the dough, add sauce and cheese.",
      "Bake for 8-10 minutes until the crust is golden and charred in spots.",
      "Top with fresh basil.",
    ],
  },
];
