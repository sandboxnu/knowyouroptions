import { ReactElement } from 'react';
import LineTo from 'react-lineto';

interface LineComponentProps {
  from: string;
  fromAnchor?: string;
  to: string;
  toAnchor?: string;
}

const LineComponent = ({
  from,
  fromAnchor,
  to,
  toAnchor,
}: LineComponentProps): ReactElement => {
  return (
    <LineTo
      borderColor={'gray'}
      from={from}
      fromAnchor={fromAnchor}
      to={to}
      toAnchor={toAnchor}
    />
  );
};

export default LineComponent;
