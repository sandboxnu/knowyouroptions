import { useState } from 'react';
import * as React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Collapse } from 'antd';
import SvgPlus from '../public/plus.svg';
import SvgMinus from '../public/minus.svg';
import { colors, device } from '../templates/mediaSizes';

const { Panel } = Collapse;
const StyledCollapse = styled(Collapse)`
  margin-top: 6vh;
`;

const PanelDrop = styled(Panel)`
  background-color: white;
  padding: 2vh;
`;

const TextHeader = styled.p`
  font-size: min(3vw, 1.5rem);
  color: ${colors.comparePageText};
  display: inline-block;
  margin: 0;
  padding-top: 8px;
  padding-left: 15px;
  font-weight: 500;
`;

const Container = styled.div`
  width: 80%;
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: min(3vw, 1.5rem);
`;

const CircleNumber = styled.div`
  height: min(6vw, 3rem);
  width: min(6vw, 3rem);
  display: inline-block;
  text-align: center;
  border-radius: 25px;
  background-color: #16999f;
  line-height: min(6vw, 3rem); //same value as heights
  float: left;
  margin-left: 3%;
`;

const NumberText = styled.p`
  color: white;
  font-size: min(3vw, 1.5rem);
`;

const MinusImage = styled(SvgMinus)`
  fill: ${colors.comparePageText};
`;

const PlusImage = styled(SvgPlus)`
  fill: ${colors.comparePageText};
`;

export const StyledCollapseComponent = ({
  headers,
  children,
  number,
}: {
  headers: string[];
  children: React.ReactNode;
  number: number;
}) => {
  const [value, setValue] = useState<string | string[]>(['']);

  return (
    <>
      <StyledCollapse
        defaultActiveKey={['-1']}
        bordered={true}
        onChange={(e) => setValue(e)}
      >
        {
          <PanelDrop
            showArrow={false}
            extra={
              <TextHeader>
                {value.includes(number.toString()) ? (
                  <MinusImage />
                ) : (
                  <PlusImage />
                )}
              </TextHeader>
            }
            header={
              <Container>
                <TextHeader>{headers}</TextHeader>
                <CircleNumber>
                  <NumberText>{number}</NumberText>
                </CircleNumber>
              </Container>
            }
            key={number + ''}
          >
            {children}
          </PanelDrop>
        }
      </StyledCollapse>
      )
    </>
  );
};
