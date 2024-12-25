// lib/dragonball-api.ts

import axios from 'axios';
import { Character } from '../interfaces/characters';

const BASE_URL = 'https://dragonball-api.com/api/characters';

export const getCharacters = async (page: number = 1, limit: number = 12): Promise<Character[]> => {
  try {
    const offset = (page - 1) * limit;
    const response = await axios.get(`${BASE_URL}?limit=${limit}&offset=${offset}`);
    
    // Adaptar la respuesta a nuestra interfaz Character
    const characters: Character[] = response.data.map((char: any) => ({
        name: char.name,
        gender: char.gender,
        species: char.specie, // Corrección: la API devuelve 'specie' en lugar de 'species'
        image: char.imageUrl,
    }));
    
    return characters;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};