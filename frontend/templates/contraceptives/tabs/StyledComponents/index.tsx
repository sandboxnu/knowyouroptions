import styled from 'styled-components';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  color: #7c7c7c;
`;

const DescriptionBold = styled(Description)`
  color: black;
  font-weight: bold;
`;

const List = styled.ul`
  padding-left: 1.25rem;

  li::marker {
    color: #1da3aa;
  }
`;

const ListItem = styled.li`
  color: #7c7c7c;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Subtitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export { Column, Description, DescriptionBold, List, ListItem, Row, Subtitle };
