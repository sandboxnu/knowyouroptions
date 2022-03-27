import MenuBar from './Menubar';
import styled from 'styled-components';
import { ReactElement } from 'react';
import { colors } from '../templates/mediaSizes';
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.homepageBackground};
`;

interface LayoutProps {
  children: JSX.Element | string;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <PageContainer>
      <MenuBar />
      {children}
    </PageContainer>
  );
};

export default Layout;
