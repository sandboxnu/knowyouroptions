import Card from '../components/Card';
import Image from 'next/image';
import homepagePic from '../public/home-image.png';
import Layout from '../components/Layout';
import { colors, size, maxDevice } from '../templates/mediaSizes';
import React, { ReactElement, useEffect, useState } from 'react';
import styled from 'styled-components';
import SvgWelcomeImage from '../public/welcome.svg';
import { API, User } from '../api-client';
import { useRouter } from 'next/router';
import axios from 'axios';

type BookmarkProps = {
  bookmarks: string[];
};
const Bookmark = (bookmark: BookmarkProps): ReactElement => {
  return (
    <div>
      <input type="text" onChange={retriveBookmark} />
    </div>
  );
};
const retriveBookmark = () => {
  const res = API.user.getBookmarks();
  res.then((value) => {
    console.log(value + ' val');
  });

  const post = API.user.postBookmark('IUD');
  API.user.deleteBookmarks('Implant');
};

export default Bookmark;
