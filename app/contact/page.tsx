"use client";
import React from "react";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import styles from "../styles/Contact.module.css";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact - DragonBall World</title>
      </Head>
      <main className={styles.main}>
        <HamburgerMenu />
        <div className={styles.hero}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We'd love to hear from you! Fill out the form below to get in touch.</p>
          <img src="/contact-banner.jpg" alt="Contact Banner" className={styles.banner} />
        </div>
        <section className={styles.content}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </section>
      </main>
    </>
  );
}