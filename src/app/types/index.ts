export interface Destination {
  id: number;
  name: string;
  description: string;
  image: string;
  province: string;
  bestTime: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}