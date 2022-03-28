import Title from '../../components/compare/Title';
import { ReactElement } from 'react';
import { Collapse, Tabs } from 'antd';
import { Text } from '../../pages/compare';
import styled, { keyframes } from 'styled-components';
const { TabPane } = Tabs;
export interface MechanismProps {
  contraceptive: string;
  contraceptiveRight: string;
  howItWorks: string;
  howItWorksRight: string;
  healthRisks: string;
  healthRisksRight: string;
  warning: string;
  warningRight: string;
  whoCantUse: string[];
  whoCantUseRight: string[];
}
const Tabss = styled(Tabs)`
border-style: none;
.ant-tabs-ink-bar {
  height: 20px;
  background: #ffffff;
  !important;
  border-style: none;
  border-width: 0;
  
}
.ant-tabs-tab.ant-tabs-tab-active  .ant-tabs-tab-btn {
    
    color: #3F3F3F;
    font-weight:bold;
    font-size: 20px;
}
.ant-tabs-tab-btn{
    color:gray;
    font-size: 20px;
}
.ant-tabs-tab-btn:hover {
    color: #3F3F3F !important;
  
}
.ant-tabs-nav::before{
    display:none;
    color:blue;


}
.ant-tabs-ink-bar::after {
 content: " ";
 position: absolute;
 left: 50%;
 right: 0;
 bottom: 0;
 height: 5px;
 background: #89006C;
 width: 100px;
 transform: translateX(-50%);
 font-size: 30px;
 border-radius: 50px;
 }
 .ant-tabs
}


`;

const TextLong = styled.p`
  width: 60%;
  margin: auto;
`;
const Mechanism = ({
  contraceptive,
  contraceptiveRight,
  howItWorks,
  howItWorksRight,
  healthRisks,
  healthRisksRight,
  warning,
  warningRight,
  whoCantUse,
  whoCantUseRight,
}: MechanismProps): ReactElement => {
  return (
    <div>
      <Title title="How it works?"></Title>
      <Tabss defaultActiveKey="1" centered>
        <TabPane tab={contraceptive} key="1">
          <Text className="gray">{howItWorks}</Text>
        </TabPane>
        <TabPane tab={contraceptiveRight} key="2">
          <Text className="gray">{howItWorksRight}</Text>
        </TabPane>
      </Tabss>

      <Title title="Health Risk"></Title>
      <Tabss defaultActiveKey="1" centered>
        <TabPane tab={contraceptive} key="1">
          <Text className="gray">{healthRisks}</Text>
          <TextLong>{'*' + warning}</TextLong>
          <Title title="Who can't use"></Title>
          <Text className="gray">{whoCantUse}</Text>
        </TabPane>
        <TabPane tab={contraceptiveRight} key="2">
          <Text className="gray">{healthRisksRight}</Text>
          <TextLong>{'*' + warningRight}</TextLong>
          <Title title="Who can't use"></Title>
          <Text className="gray">{whoCantUseRight}</Text>
        </TabPane>
      </Tabss>
    </div>
  );
};

export default Mechanism;
