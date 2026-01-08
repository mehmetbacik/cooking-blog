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

export interface SimpleRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  time: string;
}

export interface InstagramPost {
  id: number;
  image: string;
  link: string;
  alt: string;
}

export interface DeliciousRecipeItem {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  time: string;
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
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  photo: string;
}