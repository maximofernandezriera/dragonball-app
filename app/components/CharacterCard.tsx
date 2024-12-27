// components/CharacterCard.tsx

import React from 'react';
import { Character } from '../interfaces/Character';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div>
      <img src={character.imageUrl} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Ki: {character.ki}</p>
      <p>MaxKi: {character.maxKi}</p>
    </div>
  );
};

export default CharacterCard;