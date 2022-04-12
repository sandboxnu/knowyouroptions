import React, { ReactElement, useEffect, useState } from 'react';
import { Column, Row } from '../templates/contraceptives/tabs/StyledComponents';
import styled from 'styled-components';
import { API, Contraceptive, TimeUnits } from '../api-client';
import { size, device, maxDevice } from '../templates/mediaSizes';
import MenuBar from '../components/Menubar';
import SvgImplantBookmark from '../public/bookmarks-icons/implant.svg';
import SvgPatchBookmark from '../public/bookmarks-icons/patch.svg';
import SvgCondomBookmark from '../public/bookmarks-icons/condom.svg';
import SvgMenuButton from '../public/menu.svg';
import SvgBookmarked from '../public/bookmarks-icons/bookmarked.svg';
import SvgUnbookmarked from '../public/bookmarks-icons/unbookmarked.svg';

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

const ColumnExtra = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 25%;
  @media ${device.laptop} {
    min-width: 5%;
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

const LearnMoreButton = styled.p`
  color: #911d7a;
  font-family: roboto;
  font-size: 10px;
  margin: 0;

  @media ${device.laptop} {
    font-size: 16px;
    font-weight: 700;
    left: 60%;
    line-height: 140%;
    position: absolute;
    text-align: right;
    top: 80%;
  }
`;

const MethodCard = styled.div`
  border-radius: 0.75rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.161);
  column-gap: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 1rem;

  @media ${device.laptop} {
    align-items: flex-start;
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.25);
    column-gap: 0.5rem;
    height: 350px;
    justify-content: flex-start;
    padding: 3rem 2rem;
    position: relative;
    width: 350px;
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

const MethodInfo = styled.p`
  color: #5d5d5d;
  font-family: roboto;
  font-size: 12px;
  margin: 0.1rem;

  @media ${device.laptop} {
    color: #808080;
    font-size: 20px;
    font-weight: 400;
    line-height: 140%;
  }
`;

const MethodInfoColumn = styled(Column)`
  justify: left;
  padding-left: 1.5rem;
  padding-left: 0px;
  width: 100%;
  @media ${device.laptop} {
    bottom: 0;
    justify: left;
    width: 80%;
  }
`;

const MethodName = styled.h1`
  color: #212121;
  font-family: roboto;
  font-size: 18px;
  font-weight: 500;
  margin: 0.1rem;
  width: 20%;
  display: inline-block;

  @media ${device.laptop} {
    font-size: 30px;
    line-height: 35px;
    font-weight: 700;
    margin: 0 0 1rem 0;
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

const SvgBookmarkedStyled = styled(SvgBookmarked)`
  cursor: pointer;

  @media ${device.laptop} {
    left: 85%;
    position: absolute;
    top: 2%;
    transform: scale(2);
  }
`;

const SvgUnbookmarkedStyled = styled(SvgUnbookmarked)`
  cursor: pointer;

  @media ${device.laptop} {
    left: 85%;
    position: absolute;
    top: 2%;
    transform: scale(2);
  }
`;

const ImageContainer = styled.div`
  padding-right: 10px;
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

interface MethodProps {
  icon: ReactElement;
  name: string;
  effectiveRate: number;
  usePatternHighBound: number;
  usePatternUnits: TimeUnits;
  costMin: number;
  costMax: number;
  whoAdministers: string;
}

const Method = ({
  icon,
  name,
  effectiveRate,
  usePatternHighBound,
  usePatternUnits,
  costMin,
  costMax,
  whoAdministers,
}: MethodProps): ReactElement => {
  const [bookmarked, setBookmarked] = useState<Boolean>(true);
  const hello = () => {
    setBookmarked(!bookmarked);
  };
  const BookmarkIcon = bookmarked ? SvgBookmarkedStyled : SvgUnbookmarkedStyled;
  return (
    <>
      <MethodCard>
        <ImageContainer>{icon}</ImageContainer>

        <MethodInfoColumn>
          <MethodName>{name}</MethodName>

          <MethodInfo>{effectiveRate}% Effective</MethodInfo>
          <MethodInfo>
            Lasts up to {usePatternHighBound} {usePatternUnits}
          </MethodInfo>
          <MethodInfo>
            Can cost ${costMin} - ${costMax}
          </MethodInfo>
          <MethodInfo>{whoAdministers}</MethodInfo>
        </MethodInfoColumn>
        <ColumnExtra>
          <BookmarkIcon onClick={() => hello()} />

          <LearnMoreButton> LEARN MORE {'>'} </LearnMoreButton>
        </ColumnExtra>
      </MethodCard>
    </>
  );
};
type BookmarkProps = {
  bookmarks: string[];
};

const Bookmark = ({ bookmarks }: BookmarkProps): ReactElement => {
  const [contraceptives, setContraceptives] = useState<Contraceptive[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setContraceptives([]);
    bookmarks.map((m) => {
      const contraceptive = API.contraceptive.getOne(m);
      const p = Promise.resolve(contraceptive);
      p.then((val) => {
        setContraceptives((contraceptive) =>
          contraceptive.concat(val).concat(val),
        );
        console.log(val);
      });
    });
  };

  return (
    <>
      <Container>
        <MenuBar />
        <Header>
          <Title>Bookmarks</Title>
        </Header>

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
  const bookmarkedContraceptives = await API.user.getBookmarks({
    cookie: req.headers.cookie,
  });

  return { bookmarks: bookmarkedContraceptives };
};
