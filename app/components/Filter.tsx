"use client";
import React from "react";
import styles from "../styles/Filter.module.css";

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="filter" className={styles.filterLabel}>Filter by Race:</label>
      <select id="filter" className={styles.filterSelect} onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="Saiyan">Saiyan</option>
        <option value="Namekian">Namekian</option>
        <option value="Human">Human</option>
        <option value="Frieza Race">Frieza Race</option>
        <option value="Android">Android</option>
      </select>
    </div>
  );
};

export default Filter;