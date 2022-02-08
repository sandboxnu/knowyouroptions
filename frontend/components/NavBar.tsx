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
  padding-left: 15%;

  display: inline-block;
   {
    margin-right: 10px;
  }
`;

const MenuElements = styled.div`
  margin-left: 10%;
  width: 75%;
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

const MenuIcons = styled.div`
  position: absolute;
  right: 1%;
  top: 0;
  width: 25%;
`;
const Icon = styled.div`
  padding-top: 10px;
  padding-right: 10%;
  display: inline-block;
  float: right;
  margin: auto;
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
    <Menu>
      <MenuElements>
        <MenuHeading>Take Questionnaire</MenuHeading>

        <MenuHeading>Q&A</MenuHeading>

        <MenuHeading>Quick Access</MenuHeading>
      </MenuElements>

      <MenuIcons>
        <Icon>
          {' '}
          <UserOutlined />
        </Icon>

        <Icon>
          <UserOutlined />
        </Icon>
        <Icon>
          <SvgBookmarkIcon></SvgBookmarkIcon>
        </Icon>

        <Icon>
          <SvgBookmarkIcon></SvgBookmarkIcon>
        </Icon>
      </MenuIcons>
    </Menu>
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
