import styled from 'styled-components';
import Pill from './Pill';

const PillButton = styled(Pill)`
  background-color: rgba(253, 253, 253, 0.5);
  border-radius: 10px;

  .shadow {
    -moz-box-shadow: 0 0 30px 5px #999;
    -webkit-box-shadow: 0 0 30px 5px #999;
  }
`;

export default PillButton;
