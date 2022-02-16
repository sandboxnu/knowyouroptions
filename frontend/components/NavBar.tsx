import { ReactElement, useState } from 'react';
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

const quickLinks = [
  new Link('Cervical Cap', "https://www.google.com'"),
  new Link('Condom', "https://www.google.com'"),
  new Link('Copper IUD', "https://www.google.com'"),
  new Link('Diaphragm', "https://www.google.com'"),
  new Link('Hormonal IUD', 'https://www.google.com'),
  new Link('Implant', 'implant'),
  new Link('Patch', "https://www.google.com'"),
  new Link('Pill', "https://www.google.com'"),
  new Link('Ring', "https://www.google.com'"),
  new Link('Shot', "https://www.google.com'"),
  new Link('Spermicide', "https://www.google.com'"),
  new Link('Sterilization', "https://www.google.com'"),
];

interface MenuHeadingProps {
  title: string;
  links: Link[];
}

const MenuHeading = ({ title, links }: MenuHeadingProps): ReactElement => {
  const headingStyle = {
    color: 'black',
    fontFamily: 'roboto',
    fontSize: 16,
    padding: 50,
  };

  const dropdownStyle = {
    position: 'absolute',
    backgroundColor: 'white',
    marginLeft: -75,
    padding: 20,
    marginTop: 49,
    paddingTop: 21,
    paddingLeft: 25,
    paddingBottom: 30,
    columns: 2,
    borderTopStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: '#6abdc1',
  };

  const ArrowStyle = {
    position: 'absolute',
    marginTop: 45,
    marginLeft: 40,
    zIndex: 4,
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
      {title}
      {dropdown && title == 'Quick Access' ? (
        <div>
          <ArrowDropdown style={ArrowStyle} />
          <ul style={dropdownStyle}>
            {links?.map((link: Link) => linkToItem(link))}
          </ul>
        </div>
      ) : null}
    </Menu>
  );
};

const ArrowDropdown = styled.div`
width: 0; 
height: 0; 
border-left: 5px solid transparent;
border-right: 5px solid transparent;
border-bottom: 5px solid #6abdc1;
}
`;
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
        <MenuHeading title={'Take Questionnaire'} />

        <MenuHeading title={'Q&A'} />

        <MenuHeading title={'Quick Access'} links={quickLinks} />
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
