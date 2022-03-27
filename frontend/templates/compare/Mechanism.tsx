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
          <Text>{howItWorks}</Text>
        </TabPane>
        <TabPane tab={contraceptiveRight} key="2">
          <Text>{howItWorksRight}</Text>
        </TabPane>
      </Tabss>

      <Title title="Health Risk"></Title>
      <Tabss defaultActiveKey="1" centered>
        <TabPane tab={contraceptive} key="1">
          <Text>{healthRisks}</Text>
          <TextLong>{'*' + warning}</TextLong>
          <Title title="Who can't use"></Title>
          <Text>{whoCantUse}</Text>
        </TabPane>
        <TabPane tab={contraceptiveRight} key="2">
          <Text>{healthRisksRight}</Text>
          <TextLong>{'*' + warningRight}</TextLong>
          <Title title="Who can't use"></Title>
          <Text>{whoCantUseRight}</Text>
        </TabPane>
      </Tabss>
    </div>
  );
};

export default Mechanism;
/*{
  
}

{
  Title('Health Risk');
}
<Tabss defaultActiveKey="1" centered>
  <TabPane tab={<TextPurple>Condom</TextPurple>} key="1">
    <TextLong>
      Reactions to latex can include rash, hives, runny nose, and in severe
      cases tightening of the airways and loss of blood pressure. If you or your
      partner is allergic to latex, a polyurethane or lambskin condom may be an
      alternative. * Tell your doctor or nurse if you have any unexpected
      symptoms while using Nexplanon.{' '}
    </TextLong>
  </TabPane>
  <TabPane tab={<TextPurple>Implant</TextPurple>} key="2">
    <TextLong>
      The implant releases the hormone progestogen into your bloodstream, which
      prevents the release of an egg each month (ovulation) to prevent
      pregnancy.
    </TextLong>
  </TabPane>
</Tabss>;
{
  Title("Who Can't Use");
}
<Text>
  Check with your doctor on your medical history and see if the methods are
  appropriate with your health condition.
</Text>;
*/
