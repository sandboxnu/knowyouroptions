import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import HomePage from './home';
import Implant from './implant';

//
const HighlightedTab = styled.h2`
  border: 0rem;
  border-bottom: 0.2rem #5f034c;
  border-style: solid;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0.5rem;
  padding: 1rem 0.5rem;
  white-space: nowrap;
`;

const TabRow = styled.div`
  box-shadow: 0rem 0.75rem 1rem -0.5rem lightgrey;
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-y: hidden;
  padding: 0 1rem;
  margin: 0.5rem 0;
  wrap: no-wrap;
  background-color: white;
`;

const Tab = styled.h2`
  cursor: pointer;
  font-size: 1rem;
  margin: 0 1rem;
  opacity: 0.2;
  padding: 1rem 0;
  white-space: nowrap;
`;
const Home: NextPage = () => {
  <TabRow>
    <Tab></Tab>
  </TabRow>;
  return <HomePage />;
};

export default Home;
