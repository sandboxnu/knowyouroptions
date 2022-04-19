import { ReactElement } from 'react';
import styled from 'styled-components';
import { colors } from '../templates/mediaSizes';
import 'antd/dist/antd.css';
import EditSvg from '../public/edit.svg';
import { Select } from 'antd';

const { Option } = Select;

const Card = styled.div`
  margin-top: 50px; // this is temp
  margin-left: 5%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 6px 4px #00000040;
  border-radius: 15px;
`;
const DemoQuestion = styled.h1`
  width: 30%;
  color: ${colors.ProfileBlue};
  margin-left: 3%;
  margin-right: 3%;
  margin-top: 2vh;
`;
const SelectContainer = styled.div`
  width: 70%;
  margin-right: 3%;
  margin-top: 2vh;
  .ant-select .ant-select-selector {
    border-radius: 15px;
    height: 50px;
    box-shadow: 0px 4px 6px 4px #00000040;
  }
  .ant-select {
    font-size: 18px;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 45px;
  }
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
`;
const StyeldEditSvg = styled(EditSvg)`
  right: 20px;
  position: absolute;
`;
const SelectN = styled(Select)``;
const Profile = () => {
  return (
    <Card>
      <DemoQuestion>
        What age do you consider appropriate for you to become pregnant?
      </DemoQuestion>
      <SelectContainer>
        <SelectN
          defaultValue="Please Select"
          style={{ width: '100%', height: 45 }}
          suffixIcon={<StyeldEditSvg />}
        >
          <Option value="lucy">Lucy</Option>
        </SelectN>
      </SelectContainer>
    </Card>
  );
};

export default Profile;
