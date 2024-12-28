// components/CharacterCard.tsx

import React from 'react';
import Image from 'next/image';
import { Character } from '../interfaces/Character';

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <Image src={character.imageUrl || '/default-image.png'} alt={character.name} width={300} height={300} />
      <p>Race: {character.race}</p>
      <p>Ki: {character.ki}</p>
      <p>Max Ki: {character.maxKi}</p>
    </div>
  );
};

export default CharacterCard;