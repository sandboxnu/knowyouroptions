import { Button } from 'antd';
import { ReactElement, useMemo, useState } from 'react';
import {
  MenuOutlined,
  UserOutlined,
  BookOutlined,
  QuestionCircleOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import slideStyle from './slide.module.scss';

const MenuHeading = styled.h1`
  color: #800080;
`;

const MenuElements = styled.div`
  margin-left: 10px;
  :hover {
    color: #800080;
  }
`;

const SidebarDiv = styled.div`
  position: absolute;
  x: 0;
  y: 0;
  width: 30vw;
  height: 100vh;
`;

const MenuSection = styled.div`
  border-bottom: 2px solid;
`;

const TwoColumns = styled.div`
  display: flex;
  margin-left: 10px;
`;
const ColumnItem = styled.div`
  width: 50%;
  :hover {
    color: #800080;
  }
`;

const Menu = styled.div`
  width: 25vw;
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
    : undefined;
  console.log(animation);

  const closeMenu = () => {
    setOpen(false);
    setClosing(true);
    return setTimeout(() => {
      setClosing(false);
    }, 500);
  };

  /**
   * TODO: Update icon to be icon from prototype - use custom icon
   */
  return (
    <SidebarDiv>
      {open || closing ? (
        <Menu className={animation}>
          <Button
            icon={<MenuOutlined />}
            onClick={closeMenu}
            style={{ width: '30px' }}
            ghost
          />
          <MenuSection>
            <div>
              <MenuHeading>
                <UserOutlined />
                Profile
              </MenuHeading>
              <MenuElements>
                <a href={'https://google.com'}>Survey Report</a>
              </MenuElements>
            </div>
            <div>
              <MenuHeading>
                <BookOutlined />
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
              <MenuHeading>Take Questionnaire</MenuHeading>
            </div>
            <div>
              <MenuHeading>
                <QuestionCircleOutlined /> Q&A
              </MenuHeading>
            </div>
          </MenuSection>
          <MenuSection>
            <div>
              <MenuHeading>
                <BarChartOutlined />
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
            <MenuHeading>Settings and Privacy</MenuHeading>
          </div>
        </Menu>
      ) : (
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)} />
      )}
    </SidebarDiv>
  );
};

export default Sidebar;
