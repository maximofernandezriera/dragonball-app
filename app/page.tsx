"use client";
import React from "react";
import Head from "next/head";
import HamburgerMenu from "./components/HamburgerMenu";
import styles from "./styles/Home.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hello DragonBall World</title>
      </Head>
      <main className={styles.main}>
        <HamburgerMenu />
        <div className={styles.hero}>
          <h1 className={styles.title}>Hello DragonBall World</h1>
          <p className={styles.subtitle}>Welcome to the ultimate Dragon Ball fan site!</p>
          <Image
            src="f.jpg"
            alt="Dragon Ball Banner"
            className={styles.banner}
            width={800}
            height={400}
          />
        </div>
        <section className={styles.features}>
          <div className={styles.feature}>
            <h2>Explore Characters</h2>
            <p>Discover all your favorite Dragon Ball characters and their stories.</p>
          </div>
          <div className={styles.feature}>
            <h2>Watch Episodes</h2>
            <p>Stream episodes from all Dragon Ball series and relive the epic battles.</p>
          </div>
          <div className={styles.feature}>
            <h2>Join the Community</h2>
            <p>Connect with other fans, share your thoughts, and join discussions.</p>
          </div>
        </section>
      </main>
    </>
  );
}