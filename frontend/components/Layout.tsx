import MenuBar from './Menubar';
import styled from 'styled-components';
import { ReactElement } from 'react';

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
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
