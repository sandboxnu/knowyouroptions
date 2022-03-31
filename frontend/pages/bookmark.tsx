import Card from '../components/Card';
import Image from 'next/image';
import homepagePic from '../public/home-image.png';
import Layout from '../components/Layout';
import { colors, size, maxDevice } from '../templates/mediaSizes';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgWelcomeImage from '../public/welcome.svg';
import { API } from '../api-client';
import { useRouter } from 'next/router';

const Bookmark = (): ReactElement => {
  const router = useRouter();
  const [contraceptives, setContraceptives] = useState(['']);
  useEffect(() => {
    if (contraceptives) {
      console.log('gell');
      getContraceptives();
    }
  });
  const getContraceptives = async () => {
    try {
      const user = await API.userBookmarks.getBookmarks();
      console.log('hello' + user);
      setContraceptives(user);
    } catch (e) {
      console.log(e);
    }
  };
  return <div>{contraceptives} hello</div>;
};
export default Bookmark;
