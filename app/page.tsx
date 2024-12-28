"use client";
import React from "react";
import Head from "next/head";
import HamburgerMenu from "./components/HamburgerMenu";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hello DragonBall World</title>
      </Head>
      <main>
        <HamburgerMenu />
        <h1>Hello DragonBall World</h1>
      </main>
    </>
  );
}