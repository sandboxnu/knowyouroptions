import { ReactElement } from 'react';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import Category from '../../components/Category';

export interface PracticalQuestionsProps {
  whereToAccessLeft: string[];
  whereToAccessRight: string[];
  whoWillAdministerLeft: string;
  whoWillAdministerRight: string;
  costLowLeft: number;
  costLowRight: number;
  costHighLeft: number;
  costHighRight: number;
}

const PracticalQuestions = ({
  whereToAccessLeft = [],
  whereToAccessRight = [],
  whoWillAdministerLeft = '',
  whoWillAdministerRight = '',
  costLowLeft = 0,
  costLowRight = 0,
  costHighLeft = 0,
  costHighRight = 0,
}: PracticalQuestionsProps): ReactElement => {
  const toListItem = (s: string) => <li className="gray subtitle1">{s}</li>;

  return (
    <div>
      <Title title="Where to access?" />
      <TwoColumns
        span={8}
        LeftElm={<ul>{whereToAccessLeft.map(toListItem)}</ul>}
        RightElm={<ul>{whereToAccessRight.map(toListItem)}</ul>}
      />
      <Title title="Who will administer this method?" />
      <TwoColumns
        span={8}
        LeftElm={<p className="gray subtitle1">{whoWillAdministerLeft}</p>}
        RightElm={<p className="gray subtitle1">{whoWillAdministerRight}</p>}
      />
      <Title title="How much could it cost?" />
      <TwoColumns
        span={8}
        LeftElm={
          <Category
            title="Price may vary from geographic regions and health insurers."
            titleClass="gray subtitle1"
            value={`$${costLowLeft}-$${costHighLeft}`}
            valueClass="teal title3"
          />
        }
        RightElm={
          <Category
            title="Price may vary from geographic regions and health insurers."
            titleClass="gray subtitle1"
            value={`$${costLowRight}-$${costHighRight}`}
            valueClass="teal title3"
          />
        }
      />
    </div>
  );
};
export default PracticalQuestions;
