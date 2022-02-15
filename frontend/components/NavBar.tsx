import { ReactElement, useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import SvgBookmarkIcon from '../public/BookmarkOutline.svg';
import SvgProfileIcon from '../public/ProfileOutline.svg';
import SvgSearchOutline from '../public/SearchOutline.svg';
import SvgSettingsOutline from '../public/SettingsOutline.svg';
import { Menu } from 'antd';

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
    marginLeft: -75,

    padding: 20,
    paddingTop: 70,
    paddingLeft: 25,
    paddingBottom: 30,
    columns: 2,

    //padding: '20px',
  };
  const MenuItem = styled(Menu.Item)`
    a:hover {
      color: #6abdc1;
      text-decoration: underline;
    }
  `;
  const [dropdown, setDropdown] = useState(false);

  const linkToItem = (link: Link) => {
    return (
      <MenuItem
        style={{
          listStyle: 'none',
          margin: 0,
          marginLeft: 0,
          padding: 1,
          textAlign: 'left',
        }}
      >
        <a target="_blank" rel="noopener noreferrer" href={link.url}>
          {link.title}
        </a>
      </MenuItem>
    );
  };

  return (
    <Menu
      style={headingStyle}
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {props.title}
      {dropdown && props.title == 'Quick Access' ? (
        <ul style={dropdownStyle}>
          {props.links?.map((link: Link) => linkToItem(link))}
        </ul>
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
  height: 120px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  background: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 3;
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
            new Link('Cervical Cap', 'google.com'),
            new Link('Condom', 'google.com'),
            new Link('Copper IUD', 'google.com'),
            new Link('Diaphragm', 'google.com'),
            new Link('Hormonal IUD', 'google.com'),
            new Link('Implant', 'google.com'),

            new Link('Patch', 'google.com'),
            new Link('Pill', 'google.com'),
            new Link('Ring', 'google.com'),
            new Link('Shot', 'google.com'),
            new Link('Spermicide', 'google.com'),
            new Link('Sterilization', 'google.com'),
          ]}
        ></MenuHeading>
      </MenuElements>

      <MenuIcons>
        <Icon>
          <SvgSearchOutline />
        </Icon>

        <Icon>
          <SvgBookmarkIcon></SvgBookmarkIcon>
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
