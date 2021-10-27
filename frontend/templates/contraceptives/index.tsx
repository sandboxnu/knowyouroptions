import React, { ReactElement } from 'react';
import Overview, { OverviewProps } from './tabs/Overview'

export declare interface ContraceptivesProps {
  title: string,
  overviewProps: OverviewProps,
};

const Contraceptives = ({
  title,
  overviewProps,
}: ContraceptivesProps): ReactElement => {
  // states:
  // @ts-ignore
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <Overview {...overviewProps} />
      </div>
    </>
  );
};

export default Contraceptives;