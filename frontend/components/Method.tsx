import styled from 'styled-components';
import React, { ReactElement, useState } from 'react';
import { device } from '../templates/mediaSizes';
import { API, Contraceptive, TimeUnits } from '../api-client';
import { Column } from '../templates/contraceptives/tabs/StyledComponents';
import SvgBookmarked from '../public/bookmarks-icons/bookmarked.svg';
import SvgUnbookmarked from '../public/bookmarks-icons/unbookmarked.svg';

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

const ImageContainer = styled.div`
  padding-right: 10px;
`;

const LearnMoreButton = styled.p`
  color: #911d7a;
  font-family: roboto;
  font-size: 10px;
  margin: 0;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

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
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

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

interface MethodProps {
  icon: ReactElement;
  name: string;
  effectiveRate: number;
  usePatternHighBound: number;
  usePatternUnits: TimeUnits;
  costMin: number;
  costMax: number;
  whoAdministers: string;
  showBookmark: boolean;
}

export const Method = ({
  icon,
  name,
  effectiveRate,
  usePatternHighBound,
  usePatternUnits,
  costMin,
  costMax,
  whoAdministers,
  showBookmark,
}: MethodProps): ReactElement => {
  const [bookmarked, setBookmarked] = useState<Boolean>(true);
  const bookmarkClicked = (name: string) => {
    setBookmarked(!bookmarked);
    if (!bookmarked) {
      API.user.postBookmark(name);
    } else {
      console.log(name);
      API.user.deleteBookmark(name);
    }
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
          {showBookmark ? (
            <BookmarkIcon onClick={() => bookmarkClicked(name)} />
          ) : (
            ''
          )}

          <LearnMoreButton> LEARN MORE {'>'} </LearnMoreButton>
        </ColumnExtra>
      </MethodCard>
    </>
  );
};
