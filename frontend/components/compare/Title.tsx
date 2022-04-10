import { ReactElement } from 'react';
import { Col } from 'antd';
import styled from 'styled-components';

export const Text = styled.p`
  margin: 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: min(5vw, 2rem);
`;

const Header = styled(Text)`
  padding-top: 1vh;
  padding-bottom: 3vh;
  margin: 1rem 0 0 0;
  font-weight: 500;
  font-size: min(4vw, 1.5rem);
`;

const Title = ({ title }: { title: string }): ReactElement => {
  return <Col span={24}>{<Header className="centerText">{title}</Header>}</Col>;
};
export default Title;
