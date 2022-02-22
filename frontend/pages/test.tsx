import { API } from '../api-client';
import useSWR from 'swr';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';
import Implant from './implant';

const Background = styled.div`
  background-color: #ef8b6f;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Test = () => {
  const { data } = useSWR('/', async () => API.helloWorld.get());

  return <Implant />;
};

export default Test;
