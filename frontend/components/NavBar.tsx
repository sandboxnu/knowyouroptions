import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import SvgBookmarkIcon from '../public/desktop-icons/desktop-bookmark.svg';
import SvgSettingsIcon from '../public/desktop-icons/settings.svg';
import SvgSearchIcon from '../public/desktop-icons/search.svg';
import SvgProfileIcon from '../public/desktop-icons/profile.svg';
import { Menu } from 'antd';
import { colors } from '../templates/mediaSizes';
import Link from 'next/link';

class QuickLink {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

const quickLinks = [
  new QuickLink('Cervical Cap', 'https://www.google.com'),
  new QuickLink('Condom', 'https://www.google.com'),
  new QuickLink('Copper IUD', 'https://www.google.com'),
  new QuickLink('Diaphragm', 'https://www.google.com'),
  new QuickLink('Hormonal IUD', 'https://www.google.com'),
  new QuickLink('Implant', '/implant'),
  new QuickLink('Patch', 'https://www.google.com'),
  new QuickLink('Pill', 'https://www.google.com'),
  new QuickLink('Ring', 'https://www.google.com'),
  new QuickLink('Shot', 'https://www.google.com'),
  new QuickLink('Spermicide', 'https://www.google.com'),
  new QuickLink('Sterilization', 'https://www.google.com'),
];

const DropdownColumns = styled.ul`
  position: absolute;
  background-color: white;
  margin-left: -75px;
  padding: 25px;
  margin-top: 32px;
  columns: 2;
  column-gap: 25px;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: ${colors.homepageNavBarDropdown};
  z-index: 5;
`;

const StyledMenu = styled(Menu)`
  padding: 50px;
`;

const MenuItem = styled(Menu.Item)`
  list-style: none;

  a:hover {
    color: ${colors.homepageNavBarDropdown};
    text-decoration: underline;
  }
`;

const ArrowDropdown = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid ${colors.homepageNavBarDropdown};
  position: absolute;
  margin-top: 27px;
  margin-left: 40px;
`;

const MenuHeading = ({
  title,
  links = [],
}: {
  title: string;
  links?: QuickLink[];
}): ReactElement => {
  const [dropdown, setDropdown] = useState(false);

  const linkToItem = (link: QuickLink) => {
    return (
      <MenuItem>
        <Link href={link.url}>
          <a>{link.title}</a>
        </Link>
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
            {links?.map((link: QuickLink) => linkToItem(link))}
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
  height: 85px;
  display: flex;
  flex-wrap: no-wrap;
  justify-content: space-between;
  align-items: center;
  background: white;
  z-index: 3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const MenuIcons = styled.div`
  width: 20%;
  margin-right: 30px;
  display: flex;
  align-items: flex-end;
  flex-wrap: no-wrap;
  justify-content: space-between;
`;

const ICON_HEIGHT = '30px';

const SearchIcon = styled(SvgSearchIcon)`
  height: ${ICON_HEIGHT};
  width: auto;
`;

const BookmarkIcon = styled(SvgBookmarkIcon)`
  height: ${ICON_HEIGHT};
  width: auto;
`;

const SettingsIcon = styled(SvgSettingsIcon)`
  height: ${ICON_HEIGHT};
  width: auto;
`;

const ProfileIcon = styled(SvgProfileIcon)`
  height: ${ICON_HEIGHT};
  width: auto;
`;

const Logo = styled(SvgSettingsIcon)`
  height: ${ICON_HEIGHT};
  width: auto;
  margin-left: 30px;
`;

const NavBar = (): ReactElement => {
  return (
    <NavMenu>
      <Logo />
      <MenuElements>
        <MenuHeading title={'Take Questionnaire'} />
        <MenuHeading title={'Q&A'} />
        <MenuHeading title={'Quick Access'} links={quickLinks} />
      </MenuElements>
      <MenuIcons>
        <SearchIcon />
        <BookmarkIcon />
        <SettingsIcon />
        <ProfileIcon />
      </MenuIcons>
    </NavMenu>
  );
};

export default NavBar;
