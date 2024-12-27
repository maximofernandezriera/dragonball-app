// components/Statistics.tsx

import React from 'react';
import statsData from '../data/stadistics.json';

const Statistics: React.FC = () => {
  return (
    <div>
      <h2>Dragon Ball Statistics</h2>

      <div>
        <h3>Total Characters</h3>
        <p>{statsData.totalCharacters}</p>
      </div>

      <div>
        <h3>Characters by Species</h3>
        <ul>
          {statsData.species.map((specie) => (
            <li key={specie.name}>
              {specie.name}: {specie.count}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Characters by Gender</h3>
        <p>Male: {statsData.gender.Male}</p>
        <p>Female: {statsData.gender.Female}</p>
      </div>
    </div>
  );
};

export default Statistics;