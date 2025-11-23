export interface Dog {
  id: string;
  name: string;
  registeredName: string;
  gender: 'male' | 'female';
  dob: string;
  image: string;
  description: string;
  titles?: string[];
}

export interface Puppy {
  id: string;
  litterName: string;
  status: 'available' | 'reserved' | 'sold';
  gender: 'male' | 'female';
  color: string;
  price?: string;
  image: string;
  lineage?: {
    sire: string;
    dam: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export enum Section {
  HOME = 'home',
  HISTORY = 'history',
  ABOUT = 'about',
  DOGS = 'dogs',
  PUPPIES = 'puppies',
  CONTACT = 'contact'
}