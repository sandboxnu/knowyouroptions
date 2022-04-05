import Card from '../components/Card';
import Layout from '../components/Layout';
import React, { ReactElement, useEffect, useState } from 'react';
import { Column, Row } from '../templates/contraceptives/tabs/StyledComponents';
import styled from 'styled-components';
import Pill from '../components/Pill';
import { useRouter } from 'next/router';
import { size, device, maxDevice } from '../templates/mediaSizes';
import axios from 'axios';
import SvgImplantBookmark from '../public/bookmarks-icons/implant.svg';
import SvgPatchBookmark from '../public/bookmarks-icons/patch.svg';
import SvgCondomBookmark from '../public/bookmarks-icons/condom.svg';
import SvgMenuButton from '../public/menu.svg';
import { icons } from 'antd/lib/image/PreviewGroup';
import { API, Contraceptive, User } from '../api-client';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  row-gap: 1rem;
  width: 100%;
  height: 100%;

  @media ${device.laptop} {
    padding: 1rem 7rem;
  }
`;

const Container = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Header = styled(Container)`
  background-color: #febba8;
  display: flex;
  flex-direction: column;
  height: 20%;
  justify-content: end;
  margin: 0;
  padding: 1.5rem;
  row-gap: 2rem;
  width: 100%;

  @media ${device.laptop} {
    height: 40%;
    position: relative;
    padding-left: 7rem;
  }
`;

const LearnMoreButton = styled.p`
  color: #911d7a;
  font-family: roboto;
  font-size: 10px;
  position: relative;
  top: 75%;

  @media ${device.laptop} {
    position: absolute;
    top: 80%;
    left: 60%;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    text-align: right;
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
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
  }
`;

const MethodInfoColumn = styled(Column)`
  margin-left: 0.5rem;
  justify: left;
  width: 58%;
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
  @media ${device.laptop} {
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    margin: 0 0 1rem 0;
  }
`;

const MethodsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
    column-gap: 4rem;
  }
`;

const SvgMenuButtonStyled = styled(SvgMenuButton)`
  @media ${device.laptop} {
    visibility: hidden;
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

const retrieveBookmark = () => {
  const res = API.user.getBookmarks();
  res.then((value) => {
    console.log(value + ' val');
  });

  return res;
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
        {icon}
        <MethodInfoColumn>
          <MethodName>{name}</MethodName>
          <MethodInfo>{effectiveRate}</MethodInfo>
          <MethodInfo>{useFrequency}</MethodInfo>
          <MethodInfo>{cost}</MethodInfo>
          <MethodInfo>{application}</MethodInfo>
        </MethodInfoColumn>
        <LearnMoreButton> LEARN MORE {'>'} </LearnMoreButton>
      </MethodCard>
    </>
  );
};

type BookmarkProps = {
  bookmarks: string[];
};

const Bookmark = (bookmarkProps: BookmarkProps): ReactElement => {
  // TODO: connect menu icon to actual menu

  // HERE: create useEffect to make API calls for the list of bookmarks
  const { bookmarks } = bookmarkProps;
  const router = useRouter();
  const [methodProps, setMethodProps] = useState([{}]);
  useEffect(() => {
    if (!methodProps) {
      getMethodProps();
    }
  });
  const getMethodProps = async () => {
    try {
      let newMethodProps: Contraceptive[] = [];
      bookmarks.map(async (methodName) => {
        // for each methodName, retrieve the methodProps
        let methodProp = await API.contraceptive.getContraceptive(methodName);
        newMethodProps.push(methodProp);
      });
      setMethodProps(newMethodProps);
    } catch (e) {
      // If user is not signed in (expects not-logged-in error)
      router.push('/signin');
    }
  };

  return (
    <>
      <Container>
        <Header>
          <SvgMenuButtonStyled />
          <Title>Bookmarks</Title>
        </Header>

        <Body>
          <MethodCount> {BookmarkedMethodProps.length} methods</MethodCount>
          <MethodsContainer>
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
          </MethodsContainer>
        </Body>
      </Container>
    </>
  );
};

export default Bookmark;
