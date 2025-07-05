export interface Trip {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  rating: number;
  reviews: number;
  slug: string;
  highlights: string[];
  location: string;
  category: string;
  fullDescription: string;
  itinerary: Array<{ time: string; activity: string }>;
  inclusions: string[];
  exclusions: string[];
  whatToBring: string[];
}
