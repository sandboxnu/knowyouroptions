import { Button } from 'antd';
import { ReactElement, useMemo, useState } from 'react';
import {
  MenuOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import slideStyle from './slide.module.scss';
import SvgBookmarkIcon from '../public/bookmark-nav-bar.svg';
import SvgMenuIcon from '../public/menu.svg';
import SvgQuickAccessButton from '../public/quick-access.svg';
import SvgTakeQuestionnaire from '../public/take-questionnaire.svg';

const MenuHeading = styled.h1`
  color: black;
  font-family: 'din-2014';
  font-size: 1rem;

   {
    margin-right: 10px;
  }
`;

const MenuElements = styled.div`
  margin-left: 10px;
  :hover {
    color: #911d7a;
  }
  & > div {
    & > a {
      color: #404040;
      font-family: 'roboto';
      font-size: 0.8rem;
    }
  }

  > * {
    margin-left: 15px;
  }
`;

const SidebarDiv = styled.div`
  position: absolute;
  x: 0;
  y: 0;
  width: 70vw;
  height: 100vh;
  z-index: 10;
`;

const MenuSection = styled.div`
  border-bottom: 1.5px solid #d6d6d6;
  padding: 1rem 0rem;
  & > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
  }
`;

const TwoColumns = styled.div`
  display: flex;
  margin-left: 10px;

  > * {
    margin-left: 20px;
  }
`;
const ColumnItem = styled.div`
  width: 50%;
  :hover {
    color: #800080;
    font-weight: bold;
  }
  & > a {
    font-family: 'roboto';
    font-size: 0.8rem;
  }
`;

const Menu = styled.div`
  border-left: none;
  padding: 0rem 1rem;
  height: 5v;
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: white;
  position: absolute;
  z-index: 0;
`;
const Icon = styled.div`
  margin-left: 5%;
  float: right;
  display: inline;
`;
const MenuIcons = styled.div`
  margin: auto;

  width: 25%;
  float: right;
`;
const Sidebar = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(true);
  const [closing, setClosing] = useState<boolean>(false);

  const closeMenu = () => {
    setOpen(true);
    setClosing(true);
    return setTimeout(() => {
      setClosing(false);
    }, 500);
  };

  return (
    <SidebarDiv>
      <Menu>
        <div>
          <MenuElements></MenuElements>
        </div>
        <div>
          {/* <MenuElements>
                  <div>
                    <a href={'https://google.com'}>My method list</a>
                  </div>
                  <div>
                    <a href={'https://google.com'}>Saved Posts</a>
                  </div>
                  <div>
                    <a href={'https://google.com'}>Saved Topics</a>
                  </div>
                </MenuElements> */}
        </div>
        <div>
          <MenuHeading>Take Questionnaire</MenuHeading>
        </div>
        <div>
          <MenuHeading>Q&A</MenuHeading>
        </div>

        <div>
          <MenuHeading>Quick Access</MenuHeading>
          {/* 
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Sterilization</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Implant</a>
                </ColumnItem>
              </TwoColumns>
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Copper IUD</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Hormonal IUD</a>
                </ColumnItem>
              </TwoColumns>
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Shot</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Ring</a>
                </ColumnItem>
              </TwoColumns>
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Patch</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Condom</a>
                </ColumnItem>
              </TwoColumns>
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Spermicide</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Diaphram</a>
                </ColumnItem>
              </TwoColumns>
              <TwoColumns>
                <ColumnItem>
                  <a href={'https://google.com'}>Pill</a>
                </ColumnItem>
                <ColumnItem>
                  <a href={'https://google.com'}>Cervical Cap</a>
                </ColumnItem>
              </TwoColumns> */}
        </div>

        <MenuIcons>
          <Icon>
            {' '}
            <SvgBookmarkIcon></SvgBookmarkIcon>{' '}
          </Icon>
          <Icon>
            {' '}
            <SvgBookmarkIcon></SvgBookmarkIcon>{' '}
          </Icon>
          <Icon>
            {' '}
            <UserOutlined />{' '}
          </Icon>
          <Icon>
            {' '}
            <UserOutlined />{' '}
          </Icon>
        </MenuIcons>
      </Menu>
    </SidebarDiv>
  );
};

const Bookmark = (): ReactElement => {
  return (
    <>
      <SvgBookmarkIcon />
    </>
  );
};

export default Sidebar;
