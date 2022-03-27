import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledImage = styled('img')`
  display: block;
  margin-bottom: 2vh;
  margin-left: auto;
  margin-right: auto;
`;

const Image = ({ src }: { src: string }): ReactElement => {
  return <StyledImage src={src} />;
};

export default Image;
