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
  color: #911d7a;
  font-family: 'din-2014';
  font-size: 1rem;
  font-weight: bold;

  > * {
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
  z-index: 0;
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
  border: 2px solid #d6d6d6;
  border-left: none;
  padding: 3rem 1rem;
  width: 75vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  position: absolute;
  z-index: 0;
`;

const Sidebar = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  const animation = open
    ? slideStyle.slide
    : closing
    ? slideStyle.close
    : slideStyle.default;

  const closeMenu = () => {
    setOpen(false);
    setClosing(true);
    return setTimeout(() => {
      setClosing(false);
    }, 500);
  };

  return (
    <SidebarDiv>
      {open || closing ? (
        <Menu className={animation}>
          <SvgMenuIcon
            cursor="pointer"
            onClick={closeMenu}
            style={{ width: '30px' }}
          />
          <MenuSection>
            <div>
              <div>
                <MenuHeading>
                  <UserOutlined />
                  Profile
                </MenuHeading>
                <MenuElements>
                  <div>
                    <a href={'https://google.com'}>Survey Report</a>
                  </div>
                </MenuElements>
              </div>
              <div>
                <MenuHeading>
                  <SvgBookmarkIcon color="purple" />
                  Bookmarks
                </MenuHeading>
                <MenuElements>
                  <div>
                    <a href={'https://google.com'}>My method list</a>
                  </div>
                  <div>
                    <a href={'https://google.com'}>Saved Posts</a>
                  </div>
                  <div>
                    <a href={'https://google.com'}>Saved Topics</a>
                  </div>
                </MenuElements>
              </div>
              <div>
                <MenuHeading>
                  <SvgTakeQuestionnaire />
                  Take Questionnaire
                </MenuHeading>
              </div>
              <div>
                <MenuHeading>
                  <QuestionCircleOutlined /> Q&A
                </MenuHeading>
              </div>
            </div>
          </MenuSection>
          <MenuSection>
            <div>
              <MenuHeading>
                <SvgQuickAccessButton />
                Quick Access
              </MenuHeading>
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
              </TwoColumns>
            </div>
          </MenuSection>
          <div>
            <MenuHeading>Settings and privacy</MenuHeading>
          </div>
        </Menu>
      ) : (
        <SvgMenuIcon
          cursor="pointer"
          onClick={() => setOpen(true)}
          style={{ width: '30px', marginLeft: '30px', marginTop: '30px' }}
        />
      )}
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
