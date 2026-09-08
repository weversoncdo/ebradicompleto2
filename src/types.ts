export type CourseCategory = 'pos' | 'oab' | 'extensao' | 'digital';

export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  categoryTag?: string;
  area: string;
  duration: string;
  hours: string;
  badge?: string;
  discountBadge?: string;
  mecGrade?: number;
  coordinator: string;
  coordinatorRole: string;
  coordinatorPhoto: string;
  cardImage?: string;
  description: string;
  syllabus: string[];
  highlights: string[];
  originalPrice: number;
  promotionalPrice: number;
  installments: number;
  popular?: boolean;
  partner?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  photo: string;
  specialities: string[];
  notableWorks: string[];
  quote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  course: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  tag: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  author: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
