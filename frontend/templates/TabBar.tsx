import { ReactElement } from 'react';
import styled from 'styled-components';

const HighlightedTab = styled.div`
  border: 0rem;
  border-bottom: 0.2rem #5f034c;
  border-style: solid;
  font-weight: bold;
  margin: 0 1rem;
  white-space: nowrap;
`;

const Row = styled.div`
  box-shadow: 0rem 0.75rem 1rem -0.5rem lightgrey;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-y: hidden;
  padding: 1rem;
  wrap: no-wrap;
`;

const Tab = styled.div`
  margin: 0 1rem;
  opacity: 0.2;
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
        const highlightedTab = <HighlightedTab>{tab}</HighlightedTab>;
        const regularTab = <Tab onClick={() => setTabIndex(index)}>{tab}</Tab>;
        return index === tabIndex ? highlightedTab : regularTab;
      })}
    </Row>
  );
};

export default TabBar;
