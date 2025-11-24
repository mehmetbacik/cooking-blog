export interface Recipe {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  time: string;
  servings: number;
  calories: number;
  description: string;
  ingredients: string[];
  steps: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
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