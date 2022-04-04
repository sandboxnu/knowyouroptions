import Card from '../components/Card';
import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useState } from 'react';
import { Column, Row } from '../templates/contraceptives/tabs/StyledComponents';
import styled from 'styled-components';
import Pill from '../components/Pill';
import { API, Contraceptive, TimeUnits } from '../api-client';
import { useRouter } from 'next/router';
import { size, device, maxDevice } from '../templates/mediaSizes';
import axios, { AxiosError } from 'axios';
import SvgImplantBookmark from '../public/bookmarks-icons/implant.svg';
import SvgPatchBookmark from '../public/bookmarks-icons/patch.svg';
import SvgCondomBookmark from '../public/bookmarks-icons/condom.svg';
import SvgMenuButton from '../public/menu.svg';
import { icons } from 'antd/lib/image/PreviewGroup';
import { isVariableWidth } from 'class-validator';
import { CodeSandboxCircleFilled } from '@ant-design/icons';

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

// const Bookmark = (bookmark: BookmarkProps): ReactElement => {
//   return (
//     <div>
//       <input type="text" onChange={retriveBookmark} />
//     </div>
//   );
// };

// PLACEHOLDER: NEED TO GET BOOKMARKED METHODS FROM CURRENT USER
//const BookedmarkedMethods = API.user.getBookmarks();

// PLACEHOLDER: NEED TO RETRIEVE CONTRACEPTIVE INFO FROM BOOKMARK NAME
// const BookmarkedMethodProps: MethodProps[] = [
//   {
//     icon: <SvgImplantBookmark />,
//     name: 'Implant',
//     effectiveRate: '99% Effective',
//     useFrequency: 'Last up to 5 years',
//     cost: 'Can cost $0 - $1300',
//     application: 'Operated by doctor',
//   },
//   {
//     icon: <SvgImplantBookmark />,
//     name: 'Implant',
//     effectiveRate: '99% Effective',
//     useFrequency: 'Last up to 5 years',
//     cost: 'Can cost $0 - $1300',
//     application: 'Operated by doctor',
//   },
//   {
//     icon: <SvgImplantBookmark />,
//     name: 'Implant',
//     effectiveRate: '99% Effective',
//     useFrequency: 'Last up to 5 years',
//     cost: 'Can cost $0 - $1300',
//     application: 'Operated by doctor',
//   },
// ];

interface MethodProps {
  // icon: ReactElement;
  name: string;
  effectiveRate: number;
  usePatternHighBound: number;
  usePatternUnits: TimeUnits;
  costMin: number;
  costMax: number;
  application: string;
}

const Method = ({
  // icon,
  name,
  effectiveRate,
  usePatternHighBound,
  usePatternUnits,
  costMin,
  costMax,
  application,
}: MethodProps): ReactElement => {
  return (
    <>
      <MethodCard>
        <SvgRow>
          <SvgImplantBookmark />
          <SvgDesktopColumn>
            <MethodName>{name}</MethodName>
            <MethodInfo>{effectiveRate}% Effective</MethodInfo>
            <MethodInfo>
              Lasts up to {usePatternHighBound} {usePatternUnits}
            </MethodInfo>
            <MethodInfo>
              Can cost ${costMin} - ${costMax}
            </MethodInfo>
            <MethodInfo>{application}</MethodInfo>
          </SvgDesktopColumn>
        </SvgRow>
      </MethodCard>
    </>
  );
};
type BookmarkProps = {
  bookmarks: string[];
};

const Bookmark = ({ bookmarks }: BookmarkProps): ReactElement => {
  // TODO: add a button for the nav bar
  // TODO: add next page button??? ask emily
  // TODO: add learn more button
  // TODO: scroll bar
  const getBookmarks = () => {
    const arrOfMethods: Contraceptive[] = [];
    bookmarks.map((m) => {
      const contraceptive = API.contraceptive.getOne(m);
      const p = Promise.resolve(contraceptive);
      p.then((val) => {
        arrOfMethods.push(val);
      });
    });
    return arrOfMethods;
  };

  const arrOfMethods: Contraceptive[] = [];
  const [contraceptives, setContraceptives] = useState(getBookmarks);

  // return arrOfMethods;

  // const getContraceptives = async (bookmark: string[]) => {
  //   const arrOfMethods: Contraceptive[] = [];

  // };

  return (
    <>
      <Container>
        <Header>
          <SvgMenuButton />
          <Title>Bookmarks</Title>
        </Header>

        <Body>
          <p> {bookmarks.length} methods</p>
          {console.log(contraceptives)}
          {contraceptives.map((m: Contraceptive, i) => {
            return (
              <Method
                // icon={m.name}
                name={m.name}
                effectiveRate={m.effectiveRate}
                usePatternHighBound={m.usePatternHighBound}
                usePatternUnits={m.usePatternUnits}
                costMin={m.costMin}
                costMax={m.costMax}
                application={m.whoAdministers}
              />
            );
          })}
        </Body>
      </Container>
    </>
  );
};

export default Bookmark;

Bookmark.getInitialProps = async ({ req }: any) => {
  //getInitialProps is only called on the server side, and does not interact with cookies on the frontend.
  //Therefore we must manually give the get request cookies, so we don't have a 401 authentication error.
  const bookmarkedContraceptives = await API.user.getBookmarks({
    cookie: req.headers.cookie,
  });

  return { bookmarks: bookmarkedContraceptives };
};
