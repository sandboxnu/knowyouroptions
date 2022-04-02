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
  const hello = API.user.getBookmarks;
  const book = bookmark.bookmarks;
  const promise = Promise.resolve(hello);
  hello.length;
  return (
    <div>
      <input type="text" />
      {console.log(book)}
      {/* //<div>{bookmarks}sdfsf</div> */}
      {/* <div>{bookmarks.toString}</div> */}
      {/* <div>{bookmarks[0]}</div> */}
      {/* {console.log(bookmarks.length + 'length')} */}
    </div>
  );
};

Bookmark.getInitialProps = async () => {
  const res = await API.user.getBookmarks;
  console.log('bookmarks');
  return res;
};
export default Bookmark;
