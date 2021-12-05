import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HomePage from './home';
import OnboardingSurvey from './onboarding-survey';
import Questionnaire from './questionnaire';

const Home: NextPage = () => {
  return <Questionnaire />;
};

export default Home;
