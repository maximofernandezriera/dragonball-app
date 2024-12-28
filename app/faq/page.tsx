"use client";
import React, { useState } from "react";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import styles from "../styles/Faq.module.css";
import Image from "next/image";

const faqs = [
  {
    question: "¿Quién es el protagonista de Dragon Ball?",
    answer: "El protagonista de Dragon Ball es Son Goku."
  },
  {
    question: "¿Cuántas sagas tiene Dragon Ball?",
    answer: "Dragon Ball tiene varias sagas, incluyendo la saga de los Saiyajin, la saga de Freezer, la saga de Cell y la saga de Majin Buu."
  },
  {
    question: "¿Qué son las Dragon Balls?",
    answer: "Las Dragon Balls son esferas mágicas que, al reunir las siete, permiten invocar al dragón Shenlong para conceder un deseo."
  },
  {
    question: "¿Quién creó Dragon Ball?",
    answer: "Dragon Ball fue creado por Akira Toriyama."
  },
  {
    question: "¿Cuándo se emitió por primera vez Dragon Ball?",
    answer: "Dragon Ball se emitió por primera vez en Japón el 26 de febrero de 1986."
  },
  {
    question: "¿Cuántos episodios tiene Dragon Ball?",
    answer: "Dragon Ball tiene un total de 153 episodios."
  },
  {
    question: "¿Qué es el Super Saiyan?",
    answer: "El Super Saiyan es una transformación que aumenta enormemente el poder de un Saiyan."
  },
  {
    question: "¿Quién es el villano más fuerte de Dragon Ball?",
    answer: "Uno de los villanos más fuertes de Dragon Ball es Majin Buu."
  },
  {
    question: "¿Qué es el Torneo de Artes Marciales?",
    answer: "El Torneo de Artes Marciales es una competición donde los luchadores más fuertes del mundo se enfrentan entre sí."
  },
  {
    question: "¿Qué es el Ki?",
    answer: "El Ki es una forma de energía que los personajes de Dragon Ball utilizan para realizar ataques y técnicas especiales."
  }
];

const FaqPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedFaqs = faqs.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Head>
        <title>FAQ - DragonBall World</title>
      </Head>
      <main className={styles.main}>
        <HamburgerMenu />
        <div className={styles.hero}>
          <h1 className={styles.title}>Preguntas Frecuentes</h1>
          <p className={styles.subtitle}>Encuentra respuestas a las preguntas más comunes sobre Dragon Ball.</p>
          <Image
            src="f.jpg"
            alt="FAQ Banner"
            className={styles.banner}
            width={800}
            height={400}
          />
        </div>
        <section className={styles.content}>
          {selectedFaqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
        <div className={styles.pagination}>
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous Page
          </button>
          <button onClick={handleNextPage} disabled={startIndex + itemsPerPage >= faqs.length}>
            Next Page
          </button>
        </div>
      </main>
    </>
  );
};

export default FaqPage;