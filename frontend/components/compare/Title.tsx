import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import { Col } from 'antd';
import styled from 'styled-components';

export const Text = styled.p`
  margin: 0 auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
`;

const Header = styled.h1`
  padding-top: 1vh;
  padding-bottom: 3vh;
  margin: 0;
`;

const Title = ({ title }: { title: string }): ReactElement => {
  return <Col span={24}>{<Header className="centerText">{title}</Header>}</Col>;
};
export default Title;
