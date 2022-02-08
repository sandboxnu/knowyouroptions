import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomePage from './home';
import { Navbar } from '../templates/navbar';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <HomePage />;
      </div>
    </>
  );
};

export default Home;
