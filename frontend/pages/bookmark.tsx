import Card from '../components/Card';
import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useState } from 'react';
import { Column, Row } from '../templates/contraceptives/tabs/StyledComponents';
import styled from 'styled-components';
import Pill from '../components/Pill';
import { API, User } from '../api-client';
import { useRouter } from 'next/router';
import { size, device, maxDevice } from '../templates/mediaSizes';
import axios from 'axios';
import SvgImplantBookmark from '../public/bookmarks-icons/implant.svg';
import SvgPatchBookmark from '../public/bookmarks-icons/patch.svg';
import SvgCondomBookmark from '../public/bookmarks-icons/condom.svg';
import SvgMenuButton from '../public/menu.svg';
import { icons } from 'antd/lib/image/PreviewGroup';

const Container = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Body = styled(Container)`
  padding: 0rem 1.5rem;

  @media ${device.laptop} {
    padding: 1rem 3rem;
    width: 65vw;
  }
`;

const Header = styled(Container)`
  background-color: #febba8;
  display: flex;
  flex-direction: column;
  height: 20vh;
  margin: 0;
  padding: 2rem 1.5rem;
  row-gap: 2rem;
  width: 100%;

  @media ${device.laptop} {
    height: 57vh;
    position: relative;
  }
`;

const MethodCard = styled.div`
  border: 2px solid;
  border-radius: 0.5rem;
`;

const MethodInfo = styled.p`
  font-size: 0.75rem;
  margin: 0.25rem;
`;

const MethodName = styled.h1`
  font-size: 1rem;
  margin: 0.25rem;
`;

const PillDesktop = styled(Pill)`
  background: #fffefe;
  display: inline;
  margin: 1rem;
  padding: 0.2rem 0.3rem;
`;

const QuickAccess = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    padding: 1.5rem 1.5rem;
  }
`;

const SvgDesktopColumn = styled(Column)`
  margin-left: 0.5rem;
  justify: left;
  @media ${device.laptop} {
    bottom: 0;
    justify: left;
    position: absolute;
  }
`;

const SvgRow = styled(Row)`
  margin-left: auto;
  margin-top: auto;
`;

const Title = styled.h1`
  display: inline;
  font-size: 22px;
  margin: 0;
  @media ${device.laptop} {
  }
`;

type BookmarkProps = {
  bookmarks: string[];
};
// const Bookmark = (bookmark: BookmarkProps): ReactElement => {
//   return (
//     <div>
//       <input type="text" onChange={retriveBookmark} />
//     </div>
//   );
// };
const retriveBookmark = () => {
  const res = API.user.getBookmarks();
  res.then((value) => {
    console.log(value + ' val');
  });

  const post = API.user.postBookmark('IUD');
  API.user.deleteBookmarks('Implant');
};

// PLACEHOLDER: NEED TO GET BOOKMARKED METHODS FROM CURRENT USER
const BookedmarkedMethods = ['Implant', 'Patch', 'Condom'];

// PLACEHOLDER: NEED TO RETRIEVE CONTRACEPTIVE INFO FROM BOOKMARK NAME
const BookmarkedMethodProps: MethodProps[] = [
  {
    icon: <SvgImplantBookmark />,
    name: 'Implant',
    effectiveRate: '99% Effective',
    useFrequency: 'Last up to 5 years',
    cost: 'Can cost $0 - $1300',
    application: 'Operated by doctor',
  },
  {
    icon: <SvgImplantBookmark />,
    name: 'Implant',
    effectiveRate: '99% Effective',
    useFrequency: 'Last up to 5 years',
    cost: 'Can cost $0 - $1300',
    application: 'Operated by doctor',
  },
  {
    icon: <SvgImplantBookmark />,
    name: 'Implant',
    effectiveRate: '99% Effective',
    useFrequency: 'Last up to 5 years',
    cost: 'Can cost $0 - $1300',
    application: 'Operated by doctor',
  },
];

interface MethodProps {
  icon: ReactElement;
  name: string;
  effectiveRate: string;
  useFrequency: string;
  cost: string;
  application: string;
}

const Method = ({
  icon,
  name,
  effectiveRate,
  useFrequency,
  cost,
  application,
}: MethodProps): ReactElement => {
  return (
    <>
      <MethodCard>
        <SvgRow>
          {icon}
          <SvgDesktopColumn>
            <MethodName>{name}</MethodName>
            <MethodInfo>{effectiveRate}</MethodInfo>
            <MethodInfo>{useFrequency}</MethodInfo>
            <MethodInfo>{cost}</MethodInfo>
            <MethodInfo>{application}</MethodInfo>
          </SvgDesktopColumn>
        </SvgRow>
      </MethodCard>
    </>
  );
};

const Bookmark = (bookmark: BookmarkProps): ReactElement => {
  // TODO: add a button for the nav bar
  // TODO: add next page button??? ask emily
  // TODO: add learn more button
  // TODO: scroll bar
  return (
    <>
      <Container>
        <Header>
          <SvgMenuButton />
          <Title>Bookmarks</Title>
        </Header>

        <Body>
          <p> {BookmarkedMethodProps.length} methods</p>
          {BookmarkedMethodProps.map((method) => {
            return (
              <Method
                icon={method.icon}
                name={method.name}
                effectiveRate={method.effectiveRate}
                useFrequency={method.useFrequency}
                cost={method.cost}
                application={method.application}
              />
            );
          })}
        </Body>
      </Container>
    </>
  );
};

export default Bookmark;
