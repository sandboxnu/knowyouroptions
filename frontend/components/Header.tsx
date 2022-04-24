import styled from 'styled-components';
import { device } from '../templates/mediaSizes';

// That salmon-colored header at the top of most pages
const Background = styled.div`
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

const Header = ({ title }: { title: string }): JSX.Element => {
  return (
    <Background>
      <Title>{title}</Title>
    </Background>
  );
};

export default Header;
