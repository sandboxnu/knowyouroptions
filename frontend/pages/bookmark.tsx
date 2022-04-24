import React, { ReactElement, useState } from 'react';
import { Method } from '../components/Method';
import styled from 'styled-components';
import { API, Contraceptive, TimeUnits } from '../api-client';
import { device } from '../templates/mediaSizes';
import MenuBar from '../components/Menubar';
import SvgImplantBookmark from '../public/bookmarks-icons/implant.svg';
import SvgPatchBookmark from '../public/bookmarks-icons/patch.svg';
import SvgCondomBookmark from '../public/bookmarks-icons/condom.svg';
import SvgMenuButton from '../public/menu.svg';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  row-gap: 1rem;
  width: 100%;

  @media ${device.laptop} {
    padding: 1rem 7rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100vw;
`;

const Header = styled(Container)`
  background-color: #febba8;
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  justify-content: end;
  margin: 0;
  padding: 1.5rem;
  row-gap: 2rem;
  width: 100%;

  @media ${device.laptop} {
    min-height: 30vh;
    position: relative;
    padding-left: 7rem;
  }
`;

const MethodCount = styled.p`
  color: gray;
  font-family: roboto;
  font-size: 15px;
  margin: 1rem 0 0 0;

  @media ${device.laptop} {
    font-size: 30px;
    font-weight: 400;
    line-height: 35px;
    margin: 2rem 0;
  }
`;

// there will be white space after the cards if the desktop view is expanded;
// however this looks better than using justify-content: space-between because
// of awkward white space between cards
const MethodsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  row-gap: 1rem;
  width: 100%;

  @media ${device.laptop} {
    column-gap: 3rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    row-gap: 3rem;
  }
`;

const Title = styled.h1`
  display: inline;
  font-size: 22px;
  margin: 0;

  @media ${device.laptop} {
    font-size: 48px;
    font-weight: 900;
    line-height: 56px;
    letter-spacing: -0.005em;
  }
`;

// TODO: ask for all icons
const MethodIconsMap: Record<string, ReactElement> = {
  Implant: <SvgImplantBookmark />,
  Patch: <SvgPatchBookmark />,
  Condom: <SvgCondomBookmark />,
  'Copper IUD': <SvgImplantBookmark />,
  'Hormonal IUD': <SvgImplantBookmark />,
  Sterilization: <SvgImplantBookmark />,
  Shot: <SvgPatchBookmark />,
  Ring: <SvgPatchBookmark />,
  Spermicide: <SvgPatchBookmark />,
  Diaphragm: <SvgPatchBookmark />,
  Pill: <SvgPatchBookmark />,
  'Cervical Cap': <SvgPatchBookmark />,
};

type CompareProps = {
  contraceptives: Contraceptive[];
};
const Bookmark = (compareProps: CompareProps): ReactElement => {
  //const [contraceptives, setContraceptives] = useState<Contraceptive[]>([]);
  const { contraceptives } = compareProps;
  return (
    <>
      <Container>
        <MenuBar />
        <Header>
          <Title>Bookmarks</Title>
        </Header>
        {console.log(contraceptives[0] + 'val')}
        <Body>
          <MethodCount> {contraceptives.length} methods</MethodCount>
          <MethodsContainer>
            {contraceptives.map((m: Contraceptive) => {
              return (
                <Method
                  icon={MethodIconsMap[m.name]}
                  name={m.name}
                  effectiveRate={m.effectiveRate}
                  usePatternHighBound={m.usePatternHighBound}
                  usePatternUnits={m.usePatternUnits}
                  costMin={m.costMin}
                  costMax={m.costMax}
                  whoAdministers={m.whoAdministers}
                  showBookmark={true}
                />
              );
            })}
          </MethodsContainer>
        </Body>
      </Container>
    </>
  );
};

export default Bookmark;

Bookmark.getInitialProps = async ({ req }: any) => {
  //getInitialProps is only called on the server side, and does not interact with cookies on the frontend.
  //Therefore we must manually give the get request cookies, so we don't have a 401 authentication error.
  //This gets the bookmarked contracetpives of the user as a list of strings
  const bookmarkedContraceptives = await API.user.getBookmarks({
    cookie: req.headers.cookie,
  });

  //gets the contraceptives entities from the string of bookmarked contraceptives from the user(_bookmarkedContraceptives_)
  const contraceptives = await API.contraceptive.getMany(
    bookmarkedContraceptives,
  );
  return { contraceptives: contraceptives };
};
