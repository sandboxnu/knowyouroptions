import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import TwoColumns from '../../components/compare/TwoColumns';
import Title from '../../components/compare/Title';
import { Text } from '../../pages/compare';
import { ThingToKnow } from '../../../backend/src/entities/things-to-know.entity';
import Category from '../../components/Category';

export interface AdditionalInfoProps {
  thingsToKnowLeft: ThingToKnow[];
  thingsToKnowRight: ThingToKnow[];
}

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
    ></Category>
  );

  return (
    <div>
      <Title title="Things to notice about this method" />
      <TwoColumns
        LeftElm={<div>{thingsToKnowLeft.map(categoryMap)}</div>}
        RightElm={<div>{thingsToKnowRight.map(categoryMap)}</div>}
      />
      <Title title="Things to notice about this method" />
      <Text className="gray">
        Some forms of birth control are considered a violation of certain
        religious laws or cultural traditions. Weigh the risks and benefits of a
        birth control method against your personal convictions.
      </Text>
    </div>
  );
};
export default AdditionalInformation;
