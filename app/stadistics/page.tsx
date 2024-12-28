import React from 'react';
import Statistics from '../components/Statistics';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const StatisticsPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Dragon Ball Statistics</title>
        <meta name="description" content="Statistics of Dragon Ball characters" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dragon Ball Statistics</h1>
        <Statistics />
      </main>
    </div>
  );
};

export default StatisticsPage;