import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomePage from './home';
import Implant from './implant'

const Home: NextPage = () => {
  return <Implant />;
};

export default Home;
