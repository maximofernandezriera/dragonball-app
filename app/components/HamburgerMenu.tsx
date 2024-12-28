"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './HamburgerMenu.module.css';

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button>
      {isOpen && (
        <nav className={styles.navMenu}>
          <ul>
            <li>
              <Link href="/characters">Characters</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;