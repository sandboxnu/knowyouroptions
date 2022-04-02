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
      <input type="text" onChange={changed} />
      {console.log(book)}
      {/* //<div>{bookmarks}sdfsf</div> */}
      {/* <div>{bookmarks.toString}</div> */}
      {/* <div>{bookmarks[0]}</div> */}
      {/* {console.log(bookmarks.length + 'length')} */}
    </div>
  );
};
const changed = () => {
  console.log('test');
  const res = API.user.getBookmarks();
  res.then((value) => {
    console.log(value + 'val');
  });

  const post = API.user.postBookmark({ bookmark: 'implant' });

  //const val = res.apply(this);
  //console.log(val);
};

export default Bookmark;
