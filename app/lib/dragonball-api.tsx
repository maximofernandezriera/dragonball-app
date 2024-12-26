// lib/dragonball-api.ts

import axios from 'axios';
import { Character, ApiCharacter} from '../interfaces/Character';

const BASE_URL = 'https://dragonball-api.com/api/characters';

export const getCharacters = async (page: number = 1, limit: number = 12): Promise<Character[]> => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);

    console.log('API Response:', response.data); // Verifica la estructura de la respuesta

    if (!Array.isArray(response.data.items)) {
      console.log('Respuesta de la API no es un array:', response.data);
      return [];
    }

    const characters: Character[] = response.data.items.map((char: ApiCharacter) => ({
      id: char.id,
      name: char.name,
      race: char.race,
      ki: char.ki,
      maxKi: char.maxKi,
      imageUrl: char.imageUrl, // ajusta según el nombre real del campo
    }));

    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};