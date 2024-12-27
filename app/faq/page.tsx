"use client";
import React from 'react';
import styles from './Faq.module.css';

const faqs = [
  {
    question: "¿Qué es Dragon Ball?",
    answer: "Dragon Ball es una serie de manga y anime creada por Akira Toriyama."
  },
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
  }
];

const FaqPage: React.FC = () => {
  return (
    <div className={styles.faqContainer}>
      <h1>Preguntas Frecuentes</h1>
      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqPage;