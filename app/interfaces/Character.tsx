export interface Character {
  id: number;
  name: string;
  race: string;
  ki: string;
  maxKi: string;
  imageUrl?: string; // si la API la devuelve
}

// Nueva interfaz para el tipo de datos original de la API
export interface ApiCharacter {
  id: number;
  name: string;
  gender: string;
  specie: string; // Corregido el nombre
  imageUrl: string;
  ki: string;
  maxKi: string;
  race: string;
  affiliation: string;
  deletedAt: string | null; // Podría ser null
}