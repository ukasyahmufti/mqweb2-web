export interface Program {
  id: string;
  num: string;
  icon: string;
  title: string;
  description: string;
  ageBadge: string;
}

export interface Reason {
  id: string;
  num: string;
  image: string;
  altText: string;
  text: string;
}

export interface ComparisonItem {
  feature: string;
  hasMarkaz: boolean;
  hasOther: boolean;
}

export interface Testimonial {
  id: string;
  stars: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
  isFeatured?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
