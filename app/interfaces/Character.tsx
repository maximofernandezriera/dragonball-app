export interface Character {
  id: number;
  name: string;
  race: string;
  ki: string;
  maxKi: string;
  imageUrl?: string; // si la API la devuelve
}