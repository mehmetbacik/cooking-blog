export interface RecipeItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  videoUrl: string;
  time: string;
  preptime: string;
  calories: number;
  fat: number;
  protein: number;
  carbohydrate: number;
  cholesterol: number;
  description: string;
  ingredients: IngredientSection[];
  steps: string[];
  author: string;
  photo: string;
  date: string;
}

export interface IngredientSection {
  title?: string;
  items: string[];
}

export interface SimpleRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  time: string;
}

export interface DeliciousRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  time: string;
}

export interface TastyRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  author: string;
  category: string;
  time: string;
}

export interface CheckOutRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  time: string;
}

export interface DerivedRecipe {
  id?: number;
  slug: string;
  title: string;
  image?: string;
  videoUrl?: string;
  category?: string;
  time?: string;
  preptime?: string;
  calories?: number;
  fat?: number;
  protein?: number;
  carbohydrate?: number;
  cholesterol?: number;
  description?: string;
  ingredients?: IngredientSection[];
  steps?: string[];
  author?: string;
  photo?: string;
  date?: string;
}

export interface NavItem {
  id: number;
  label: string;
  link: string;
}

export interface SocialItem {
  id: number;
  name: string;
  iconUrl: string;
  link: string;
}

export interface SlideItem {
  id: number;
  image: string;
  mobileImage: string;
  badge: string;
  title: string;
  description: string;
  time: string;
  category: string;
  author: string;
  date: string;
  photo: string;
  text: string;
  link: string;
}

export interface CategoryItem {
  id: number;
  title: string;
  url: string;
  image: string;
}

export interface InstagramPost {
  id: number;
  image: string;
  link: string;
  alt: string;
}

export interface FooterNavItem {
  id: number;
  label: string;
  link: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  photo: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  enquiryType: string;
  message: string;
}
