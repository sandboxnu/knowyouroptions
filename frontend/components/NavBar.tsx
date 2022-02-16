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

const DropdownColumns = styled.ul`
  position: absolute;
  background-color: white;
  margin-left: -75px;
  padding: 25px;
  margin-top: 49px;
  columns: 2;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #6abdc1;
`;

const StyledMenu = styled(Menu)`
  padding: 50px;
`;

const MenuItem = styled(Menu.Item)`
  list-style: none;

  a:hover {
    color: #6abdc1;
    text-decoration: underline;
  }
`;

const ArrowDropdown = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #6abdc1;
  position: absolute;
  margin-top: 45px;
  margin-left: 40px;
`;

const MenuHeading = ({
  title,
  links = [],
}: {
  title: string;
  links?: Link[];
}): ReactElement => {
  const [dropdown, setDropdown] = useState(false);

  const linkToItem = (link: Link) => {
    return (
      <MenuItem>
        <a target="_blank" rel="noopener noreferrer" href={link.url}>
          {link.title}
        </a>
      </MenuItem>
    );
  };

  return (
    <StyledMenu
      onMouseEnter={() => setDropdown(true)}
      onMouseLeave={() => setDropdown(false)}
    >
      {title}
      {dropdown && title == 'Quick Access' ? (
        <div>
          <ArrowDropdown />
          <DropdownColumns>
            {links?.map((link: Link) => linkToItem(link))}
          </DropdownColumns>
        </div>
      ) : null}
    </StyledMenu>
  );
};

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

// TODO: Update icons.
const NavBar = (): ReactElement => {
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

export default NavBar;
