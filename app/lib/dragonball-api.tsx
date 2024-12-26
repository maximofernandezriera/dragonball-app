// lib/dragonball-api.ts

import axios from 'axios';

import { Character, ApiCharacter } from '../interfaces/Character'; // Importa la nueva interfaz

const BASE_URL = 'https://dragonball-api.com/api/characters';

export const getCharacters = async (page: number = 1, limit: number = 12): Promise<Character[]> => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);

    console.log('API Response:', response.data); // Verifica la estructura de la respuesta

    const characters: Character[] = response.data.items.map((char: ApiCharacter) => ({
      id: char.id,
      name: char.name,
      race: char.race,
      ki: char.ki,
      maxKi: char.maxKi,
      imageUrl: char.imageUrl,
    }));

    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};