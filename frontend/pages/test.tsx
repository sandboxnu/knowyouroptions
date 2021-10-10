import { useEffect, useState } from 'react';
import { API } from '../api-client';
import useSWR from 'swr';

const Test = () => {
  const { data } = useSWR('/', async () => API.helloWorld.get());

  return <div>{data}</div>;
};

export default Test;
