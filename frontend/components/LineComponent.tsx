import { ReactElement } from 'react';
import LineTo from 'react-lineto';

interface LineComponentProps {
  from: string;
  to: string;
}

const LineComponent = ({ from, to }: LineComponentProps): ReactElement => {
  return <LineTo from={from} to={to} />;
};

export default LineComponent;
