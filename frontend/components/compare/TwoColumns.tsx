import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
const TwoColumns = ({
  LeftElm,
  RightElm,
}: {
  LeftElm: ReactElement;
  RightElm: ReactElement;
}): ReactElement => {
  return (
    <Row>
      <Col span={9} offset={2}>
        {LeftElm}
      </Col>
      <Col span={9} offset={2}>
        {RightElm}
      </Col>
    </Row>
  );
};
export default TwoColumns;
