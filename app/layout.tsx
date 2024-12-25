"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getCharacters } from './lib/dragonball-api';
import CharacterCard from './components/CharacterCard';
import { Character } from './interfaces/Character';
import styles from './styles/Home.module.css';
import { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const Home: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getCharacters(currentPage);
      console.log("Data from getCharacters:", data);
      setCharacters(data);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Dragon Ball Characters</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Dragon Ball Characters</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
        <button onClick={() => setCurrentPage((prevPage) => prevPage + 1)}>
          Next Page
        </button>
      </main>
    </div>
  );
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Dragon Ball App</title>
      </head>
      <body className={`${roboto.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}