import type { BlogPost } from "../types";

export const posts: BlogPost[] = [
  {
    id: 101,
    slug: "knife-skills-101",
    title: "Knife Skills 101: The Art of Cutting",
    excerpt:
      "The first rule of being a good chef is mastering your knife. Here is what you need to know about grip and motion.",
    content: `
      <p>Mastering knife skills is essential for efficiency and safety in the kitchen. Whether you are julienning carrots or dicing onions, the way you hold your knife determines the outcome.</p>
      <h3>The Claw Grip</h3>
      <p>Always tuck your fingertips in to avoid accidents. Use your knuckles as a guide for the blade.</p>
      <h3>Maintenance</h3>
      <p>Keep your knife sharp using a honing steel before every use, and use a whetstone once a month. A sharp knife is safer than a dull one.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Technique",
    date: "Nov 18, 2024",
    readTime: "5 min",
    author: "Chef Alex",
  },
  {
    id: 102,
    slug: "zero-waste-kitchen",
    title: "Zero Waste Kitchen: Sustainable Cooking",
    excerpt:
      "Simple methods to reduce food waste and build an eco-friendly kitchen routine.",
    content: `
      <p>Have you ever tried making stock from vegetable peels? Sustainable cooking is not just a trend, it is a necessity. By using every part of the vegetable, you not only save money but also add immense flavor to your dishes.</p>
      <p>Store your herbs in a glass of water like flowers to keep them fresh longer, and freeze leftover sauces in ice cube trays.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Lifestyle",
    date: "Nov 15, 2024",
    readTime: "7 min",
    author: "Sarah Green",
  },
  {
    id: 103,
    slug: "coffee-brewing-guide",
    title: "The Ultimate Coffee Brewing Guide",
    excerpt:
      "V60, Chemex, or French Press? Discover which brewing method suits your taste buds best.",
    content: `
      <p>Coffee is chemistry. The grind size, water temperature, and bloom time all affect the extraction. For a clean cup, try a V60. For something full-bodied, the French Press is your best friend.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Beverage",
    date: "Nov 10, 2024",
    readTime: "4 min",
    author: "Barista Mike",
  },
];
