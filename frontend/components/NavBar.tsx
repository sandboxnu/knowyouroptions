import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, MenuProps, Space } from 'antd';
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

const DropdownLinkItem = styled(Menu.Item)`
  list-style: none;

  a:hover {
    color: ${colors.homepageNavBarDropdown};
    text-decoration: underline;
  }
`;

const headerItems = ['Take Questionnaire', 'Q&A'].map((i) => (
  <Menu.Item className="nav-bar-title" style={{ margin: 'auto' }}>
    {i}
  </Menu.Item>
));

const linkToItem = (link: QuickLink) => {
  return (
    <DropdownLinkItem>
      <Link href={link.url}>
        <a>{link.title}</a>
      </Link>
    </DropdownLinkItem>
  );
};

const quickLinksDropdown = (
  <Menu.SubMenu className="nav-bar-title" title="Quick Access">
    {quickLinks.map(linkToItem)}
  </Menu.SubMenu>
);

const icons = ['search', 'desktop-bookmark', 'settings', 'profile']
  .map((filename) => (
    <img src={`desktop-icons/${filename}.svg`} height="35px" />
  ))
  .map((img) => <Menu.Item icon={img} />);

const { Header, Content } = Layout;

const NavBar = (): ReactElement => (
  <Layout className="layout">
    <Header className="nav-bar-header">
      <img src="bookmark.svg" className="nav-bar-logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        {headerItems.concat(quickLinksDropdown, icons)}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}></Content>
  </Layout>
);

export default NavBar;
