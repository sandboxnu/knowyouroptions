import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import SvgDownArrow from '../public/down-arrow.svg';

const contraceptives = ['Implant', 'Condom', 'IUD'];

const StyledArrow = styled(SvgDownArrow)`
  align-self: center;
`;

const StyledDropdown = styled(Dropdown)`
  font-size: 30pt;
  font-family: Roboto;
  padding-bottom: 9px;
  color: #808080;
  border-bottom: 5px solid #3f3f3f;
  width: 50%;
  display: flex;
  justify-content: space-between;

  :hover {
    color: #911d7a;
  }
`;

const StyledMenu = styled;

const CompareDropdown = (): ReactElement => {
  const menuMap = (contraceptive: string, index: number) => (
    <Menu.Item key={`${index}`}>
      <a>{contraceptive}</a>
    </Menu.Item>
  );

  const menu = <Menu>{contraceptives.map(menuMap)}</Menu>;

  return (
    <StyledDropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        Method 1<StyledArrow />
      </a>
    </StyledDropdown>
  );
};

export default CompareDropdown;
