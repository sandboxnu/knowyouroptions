import { ReactElement } from 'react';
import { Row, Col } from 'antd';
const TwoColumns = ({
  LeftElm,
  RightElm,
  span = 8,
}: {
  LeftElm: ReactElement;
  RightElm: ReactElement;
  span?: number;
}): ReactElement => {
  // Divide into quarters
  const offset = (24 - 2 * span) / 4;
  return (
    <Row>
      <Col span={span} offset={offset}>
        {LeftElm}
      </Col>
      <Col span={span} offset={2 * offset}>
        {RightElm}
      </Col>
    </Row>
  );
};
export default TwoColumns;
