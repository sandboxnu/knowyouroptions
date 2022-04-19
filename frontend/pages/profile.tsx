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
  /* border around the select */
  .ant-select .ant-select-selector {
    border-radius: 15px;
    height: 50px;
  }
  /* an option when it's selected
  .ant-select-single {
    border-radius: 15px;
    box-shadow: 0px 4px 6px 4px #00000040;
  }

  /* font size of the select */
  .ant-select {
    font-size: 18px;
  }
  /* This is where the text would be placed in the bar */
  .ant-select-single .ant-select-selector .ant-select-selection-item,
  .ant-select-single .ant-select-selector .ant-select-selection-placeholder {
    line-height: 45px;
  }
  /* gets rid of the blue effect when clicked */
  .ant-select-focused .ant-select-selector,
  .ant-select-selector:focus,
  .ant-select-selector:active,
  .ant-select-open .ant-select-selector {
    border-color: #d9d9d9 !important;
    box-shadow: none !important;
  }
`;
const StyeldEditSvg = styled(EditSvg)`
  right: 15px;
  position: absolute;
`;
const SelectN = styled(Select)``;
const Profile = () => {
  return (
    <div>
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
            <Option value="under-12">Under 12</Option>
            <Option value="13-15">13 - 15</Option>
            <Option value="16-18">16 - 18</Option>
            <Option value="19-22">19 - 22</Option>
            <Option value="23-30">23 - 30</Option>
            <Option value="above-30">Above 30</Option>
          </SelectN>
        </SelectContainer>
      </Card>

      <Card>
        <DemoQuestion>
          At what stage do you think you will be (or currently are) sexually
          active?
        </DemoQuestion>
        <SelectContainer>
          <SelectN
            defaultValue="Please Select"
            style={{ width: '100%', height: 45 }}
            suffixIcon={<StyeldEditSvg />}
          >
            <Option value="middle-school">Middle School</Option>
            <Option value="high-school">High School</Option>
            <Option value="late-teen">Late teen</Option>
            <Option value="early-20s">Early 20s</Option>
            <Option value="after-marriage">After Marriage</Option>
            <Option value="Other">Other</Option>
          </SelectN>
        </SelectContainer>
      </Card>

      <Card>
        <DemoQuestion>
          Have you tried any contraception/birth control methods?
        </DemoQuestion>
        <SelectContainer>
          <SelectN
            defaultValue="Please Select"
            style={{ width: '100%', height: 45 }}
            suffixIcon={<StyeldEditSvg />}
          >
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </SelectN>
        </SelectContainer>
      </Card>
    </div>
  );
};

export default Profile;
