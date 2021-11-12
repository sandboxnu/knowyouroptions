import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomePage from './home';
import OnboardingSurvey from './onboarding-survey';

const Home: NextPage = () => {
  return <OnboardingSurvey />;
};

export default Home;
