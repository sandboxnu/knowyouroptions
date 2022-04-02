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
import axios from 'axios';

type CompareProps = {
  bookmarks: string[];
};
const Bookmark = (res: CompareProps): ReactElement => {
  const { bookmarks } = res;
  return (
    <div>
      <input type="text" />
      {/* <div>{bookmarks.toString}</div> */}
      {/* <div>{bookmarks[0]}</div> */}
      {/* {console.log(bookmarks.length + 'length')} */}
    </div>
  );
};

Bookmark.getInitialProps = async () => {
  const res = API.user.getBookmarks;
  console.log(res + 'rest');
  return { bookmarks: res };
};
export default Bookmark;
