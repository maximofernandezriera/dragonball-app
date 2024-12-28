export interface Character {
  id: string;
  name: string;
  race: string;
  ki: number;
  maxKi: number;
  imageUrl: string;
}

export interface ApiCharacter {
  id: string;
  name: string;
  gender: string;
  specie: string;
  imageUrl: string;
}