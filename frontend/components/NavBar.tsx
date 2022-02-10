import { ReactElement } from 'react';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import SvgBookmarkIcon from '../public/BookmarkOutline.svg';
import SvgProfileIcon from '../public/ProfileOutline.svg';
import SvgSearchOutline from '../public/SearchOutline.svg';
import SvgSettingsOutline from '../public/SettingsOutline.svg';

const MenuHeading = styled.p`
  color: black;
  font-family: 'roboto';
  font-size: 16pt;
  padding: 40px;
`;

const MenuElements = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;

const Menu = styled.div`
  height: 135px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  background: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const MenuIcons = styled.div`
  display: flex;
`;
const Icon = styled.div`
  padding: 1.5rem;
`;

// TODO: Update logo icon.
const Sidebar = (): ReactElement => {
  return (
    <Menu>
      <Icon>
        <SvgProfileIcon />
      </Icon>

      <MenuElements>
        <MenuHeading>Take Questionnaire</MenuHeading>

        <MenuHeading>Q&A</MenuHeading>

        <MenuHeading>Quick Access</MenuHeading>
      </MenuElements>

      <MenuIcons>
        <Icon>
          <SvgSearchOutline />
        </Icon>

        <Icon>
          <SvgBookmarkIcon />
        </Icon>
        <Icon>
          <SvgSettingsOutline />
        </Icon>

        <Icon>
          <SvgProfileIcon />
        </Icon>
      </MenuIcons>
    </Menu>
  );
};

export default Sidebar;
