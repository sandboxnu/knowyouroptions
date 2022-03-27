import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const Header = styled.h1`
  padding-top: 1vh;
  padding-bottom: 3vh;
  margin: 0;
`;

const Title = (title: string): ReactElement => {
  return <Col span={24}>{<Header className="centerText">{title}</Header>}</Col>;
};
export default Title;
