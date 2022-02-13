import { ReactElement, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import SvgBookmarkIcon from '../public/BookmarkOutline.svg';
import SvgProfileIcon from '../public/ProfileOutline.svg';
import SvgSearchOutline from '../public/SearchOutline.svg';
import SvgSettingsOutline from '../public/SettingsOutline.svg';
import { Menu, Dropdown } from 'antd';

class Link {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}
function MenuHeading(props) {
  const headingStyle = {
    color: 'black',
    fontFamily: 'roboto',
    fontSize: 16,
    padding: 40,
  };

  const dropdownStyle = {
    position: 'absolute',
    backgroundColor: 'white',
    padding: '20px',
  };

  const [dropdown, setDropdown] = useState(false);

  const linkToItem = (link: Link) => {
    return (
      <Menu.Item style={{ margin: 20, listStyle: 'none' }}>
        <a target="_blank" rel="noopener noreferrer" href={link.url}>
          {link.title}
        </a>
      </Menu.Item>
    );
  };

  return (
    <Menu
      style={headingStyle}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      Test
      {dropdown ? (
        <div style={dropdownStyle}>
          {props.links?.map((link: Link) => linkToItem(link))}
        </div>
      ) : null}
    </Menu>
  );
}

const MenuElements = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;

const NavMenu = styled.div`
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
    <NavMenu>
      <Icon>
        <SvgProfileIcon />
      </Icon>

      <MenuElements>
        <MenuHeading title={'Take Questionnaire'}></MenuHeading>

        <MenuHeading title={'Q&A'}></MenuHeading>

        <MenuHeading
          title={'Quick Access'}
          links={[
            new Link('Sterilization', 'google.com'),
            new Link('Copper IUD', 'google.com'),
            new Link('Shot', 'google.com'),
            new Link('Patch', 'google.com'),
            new Link('Spermicide', 'google.com'),
            new Link('Pill', 'google.com'),
            new Link('Implant', 'google.com'),
            new Link('Hormonal IUD', 'google.com'),
            new Link('Ring', 'google.com'),
            new Link('Condom', 'google.com'),
            new Link('Diaphragm', 'google.com'),
            new Link('Cervical Cap', 'google.com'),
          ]}
        ></MenuHeading>
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
    </NavMenu>
  );
};

export default Sidebar;
