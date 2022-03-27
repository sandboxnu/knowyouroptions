import Title from '../../components/compare/Title';
import { ReactElement } from 'react';
import { Collapse, Tabs } from 'antd';
import { Text } from '../../pages/compare';
import styled, { keyframes } from 'styled-components';
const { TabPane } = Tabs;
export interface MechanismProps {
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
    color: #89006C !important; 
    font-weight:bold;
}
.ant-tabs-tab-btn:hover {
  color: #89006C !important;
}
.ant-tabs-ink-bar::after {
 content: " ";
 position: absolute;
 left: 50%;
 right: 0;
 bottom: 0;
 height: 5px;
 background: #89006C;
 width: 80px;
 transform: translateX(-50%);
 font-size: 15pt;
 
 }
}


`;

const TextLong = styled.p`
  width: 60%;
  margin: auto;
`;
const Mechanism = ({
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
        <TabPane tab="test" key="1">
          <TextLong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
            varius libero. Sed eu laoreet mauris, ac interdum enim.{' '}
          </TextLong>
        </TabPane>
        <TabPane tab={<Text>Implant</Text>} key="2">
          <TextLong>
            The implant releases the hormone progestogen into your bloodstream,
            which prevents the release of an egg each month (ovulation) to
            prevent pregnancy.
          </TextLong>
        </TabPane>
      </Tabss>

      <Tabs defaultActiveKey="1" onChange={console.log('hello')}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
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
