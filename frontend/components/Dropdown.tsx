import { Menu, Dropdown } from 'antd';
import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import SvgDownArrow from '../public/down-arrow.svg';

const StyledArrow = styled(SvgDownArrow)`
  align-self: center;
`;

const StyledDropdown = styled(Dropdown)`
  font-size: 30pt;
  font-family: Roboto;
  padding-bottom: 9px;
  color: #808080;
  border-bottom: 5px solid #3f3f3f;
  display: flex;
  justify-content: space-between;

  :hover {
    color: #911d7a;
  }
`;

type MenuItemInfo = {
  title: string;
  action: Function;
};

type DropdownProps = {
  title: string;
  menuItemInfos: MenuItemInfo[];
  filter: number[];
};

const CompareDropdown = (dropdownProps: DropdownProps): ReactElement => {
  const menuMap = (menuItemInfo: MenuItemInfo, index: number) => (
    <Menu.Item key={index} onClick={(e) => menuItemInfo.action(index)}>
      {menuItemInfo.title}
    </Menu.Item>
  );

  const menu = (
    <Menu>
      {dropdownProps.menuItemInfos
        .map(menuMap)
        .filter((_item, index) => !dropdownProps.filter?.includes(index))}
    </Menu>
  );

  return (
    <StyledDropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        {dropdownProps.title}
        <StyledArrow />
      </a>
    </StyledDropdown>
  );
};

export default CompareDropdown;
