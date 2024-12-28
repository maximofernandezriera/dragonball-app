export interface Character {
  id: number;
  name: string;
  race: string;
  ki: string;
  maxKi: string;
  imageUrl?: string; // si la API la devuelve
}

export interface ApiCharacter {
  id: string;
  name: string;
  race: string;
  ki: number;
  maxKi: number;
  image: string;
}