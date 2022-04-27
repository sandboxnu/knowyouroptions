import { StyledCollapseComponent } from '../components/StyledCollapseComponent';
import 'antd/dist/antd.css';

const NextSteps = () => {
  return (
    <>
      <StyledCollapseComponent
        header={'Talk with your doctor'}
        children={<div>URMOM</div>}
        number={1}
      />
      ;
      <StyledCollapseComponent
        header={'Complications & health problems'}
        number={2}
      >
        <div>uwuw</div>
      </StyledCollapseComponent>
      <StyledCollapseComponent header={'The bottom line'} number={3}>
        <div></div>
      </StyledCollapseComponent>
    </>
  );
};

export default NextSteps;
