"use client";
import React from "react";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import styles from "../styles/Faq.module.css";

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
          <img src="f.jpg" alt="FAQ Banner" className={styles.banner} />
        </div>
        <section className={styles.content}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default FaqPage;