// components/CharacterCard.tsx

import React from 'react';
import { Character } from '../interfaces/characters';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-body">
        <h2 className="card-title">{character.name}</h2>
        <p className="card-text">Gender: {character.gender}</p>
        <p className="card-text">Species: {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;