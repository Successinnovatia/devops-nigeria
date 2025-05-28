export interface NavItem {
  title: string;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  imageUrl: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'Documentation' | 'Tutorial' | 'Video' | 'Exercise';
  link: string;
  imageUrl: string;
}

export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  website: string;
}