import { ReactElement } from 'react';
import styled from 'styled-components';
import { device } from '../pages/mediaSizes';

const HighlightedTab = styled.h2`
  border: 0rem;
  border-bottom: 0.2rem #5f034c;
  border-style: solid;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0.5rem;
  padding: 1rem 0.5rem;
  white-space: nowrap;
`;

const Row = styled.div`
  box-shadow: 0rem 0.75rem 1rem -0.5rem lightgrey;
  column-gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-y: hidden;
  padding: 0 1rem;
  margin: 0.5rem 0;
  wrap: no-wrap;

  @media ${device.laptop} {
    padding: 0 4rem;
  }
`;

const Tab = styled.h2`
  cursor: pointer;
  font-size: 1rem;
  margin: 0 1rem;
  opacity: 0.2;
  padding: 1rem 0;
  white-space: nowrap;
`;

const TabBar = ({
  tabs,
  tabIndex,
  setTabIndex,
}: {
  tabs: Array<string>;
  tabIndex: number;
  setTabIndex: Function;
}): ReactElement => {
  return (
    <Row>
      {tabs.map((tab: string, index: number) => {
        const highlightedTab = <HighlightedTab key={tab}>{tab}</HighlightedTab>;
        const regularTab = (
          <Tab key={tab} onClick={() => setTabIndex(index)}>
            {tab}
          </Tab>
        );
        return index === tabIndex ? highlightedTab : regularTab;
      })}
    </Row>
  );
};

export default TabBar;
