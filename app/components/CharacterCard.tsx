// components/CharacterCard.tsx

import React from 'react';
import { Character } from '../interfaces/Character';
import Image from "next/image";
import styles from './CharacterCard.module.css';

interface Props {
  character: Character;
}

const CharacterCard: React.FC<Props> = ({ character }) => {
  return (
    <div>
      <Image
        src={character.imageUrl}
        alt={character.name}
        className={styles.characterImage}
        width={300}
        height={300}
      />
      <h2>{character.name}</h2>
      <p>Race: {character.race}</p>
      <p>Ki: {character.ki}</p>
      <p>MaxKi: {character.maxKi}</p>
    </div>
  );
};

export default CharacterCard;