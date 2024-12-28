import axios from 'axios';
import { Character, ApiCharacter } from '../interfaces/Character';

const BASE_URL = 'https://dragonball-api.com/api/characters';

export const getCharacters = async (page: number, limit: number = 6): Promise<Character[]> => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    
    console.log('API Response:', response.data); // Verifica la estructura de la respuesta

    if (!Array.isArray(response.data.items)) {
      console.log('Respuesta de la API no es un array:', response.data);
      return [];
    }

    return response.data.items.map((char: ApiCharacter) => ({
      id: char.id,
      name: char.name,
      race: char.race,
      ki: char.ki,
      maxKi: char.maxKi,
      imageUrl: char.image, // ajusta según el nombre real del campo
    }));
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};