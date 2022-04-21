import { ReactElement } from 'react';
import styled from 'styled-components';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../components/compare/Title';
import Category from '../../components/Category';
import { ThingToKnow } from '../../classes/response-classes';

export interface AdditionalInfoProps {
  thingsToKnowLeft: ThingToKnow[];
  thingsToKnowRight: ThingToKnow[];
}

const LongText = styled(Text)`
  max-width: 550px;
  font-size: 1rem;
`;

const AdditionalInformation = ({
  thingsToKnowLeft = [],
  thingsToKnowRight = [],
}: AdditionalInfoProps): ReactElement => {
  const categoryMap = (thingToKnow: ThingToKnow) => (
    <Category
      title={thingToKnow.description}
      titleClass="lightGray subtitle1"
      value={thingToKnow.title}
      valueClass="teal title1"
    />
  );

  return (
    <div>
      <Title title="Things to notice about this method" />
      <TwoColumns
        LeftElm={<div>{thingsToKnowLeft.map(categoryMap)}</div>}
        RightElm={<div>{thingsToKnowRight.map(categoryMap)}</div>}
      />
      <Title title="Things to notice about this method" />
      <LongText className="gray">
        Some forms of birth control are considered a violation of certain
        religious laws or cultural traditions. Weigh the risks and benefits of a
        birth control method against your personal convictions.
      </LongText>
    </div>
  );
};
export default AdditionalInformation;
