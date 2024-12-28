"use client";
import React from "react";
import Head from "next/head";
import HamburgerMenu from "../components/HamburgerMenu";
import styles from "../styles/About.module.css";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About DragonBall World</title>
      </Head>
      <main className={styles.main}>
        <HamburgerMenu />
        <div className={styles.hero}>
          <h1 className={styles.title}>About DragonBall World</h1>
          <p className={styles.subtitle}>Learn more about the ultimate Dragon Ball fan site!</p>
          <img src="f.jpg" alt="About Dragon Ball Banner" className={styles.banner} />
        </div>
        <section className={styles.content}>
          <h2>Our Mission</h2>
          <p>Our mission is to bring together Dragon Ball fans from all over the world and provide a platform to share their love for the series.</p>
          <h2>What We Offer</h2>
          <p>We offer a comprehensive database of characters, episodes, and news related to Dragon Ball. Join our community to connect with other fans and stay updated on the latest happenings in the Dragon Ball universe.</p>
        </section>
      </main>
    </>
  );
}