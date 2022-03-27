import { ReactElement } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
const TwoColumns = (
  leftText: ReactElement,
  rightText: ReactElement,
): ReactElement => {
  return (
    <Row>
      <Col span={9} offset={2}>
        {leftText}
      </Col>
      <Col span={9} offset={2}>
        {rightText}
      </Col>
    </Row>
  );
};
export default TwoColumns;
