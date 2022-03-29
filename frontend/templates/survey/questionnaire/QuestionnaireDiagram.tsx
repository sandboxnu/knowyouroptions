import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '../index';
import { MoveForwardButton } from '../StyledComponents';
import SvgDiagram from '../../../public/preferred-methods.svg';
import SvgEndpoint from '../../../public/diagram-endpoint-circle.svg';
import dynamic from 'next/dynamic';

// import line component
const LineComponent = dynamic(
  () => import('../../../components/LineComponent'),
  {
    ssr: false,
  },
);

// styling

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Pill = styled.div`
  border-radius: 1rem;
  color: #000000;
`;

const PillContainer = styled(Pill)`
  display: flex;
  flex-direction: column;
`;

const SvgDiagramStyled = styled(SvgDiagram)`
  position: absolute;
  top: 8.3%;
  transform: translateX(-50%);
  left: 52%;
`;

// styled buttons followed by their clicked counterpart and "endpoints",
// listed from top to bottom, right to left
const ButtonPill = styled(PillContainer)`
  align-items: center;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 0.6rem;
  background-color: rgba(255, 255, 255, 0.8);
  flex-direction: column;
  font-size: 13px;
  height: 41px;
  justify-content: center;
  left: 71%;
  padding: 1rem 0rem;
  position: absolute;
  row-gap: 1rem;
  top: 6.37%;
  width: 95px;
  :hover {
    background-color: purple;
    color: white;
    cursor: pointer;
  }
`;

const ButtonPillSelected = styled(ButtonPill)`
  background-color: purple;
  color: white;
`;

const ButtonPillEndpoint = styled(SvgEndpoint)`
  left: 52%;
  position: absolute;
  top: 60px;
`;

const ButtonImplant = styled(ButtonPill)`
  top: 18.15%;
`;

const ButtonImplantSelected = styled(ButtonImplant)`
  background-color: purple;
  color: white;
`;

const ButtonImplantEndpoint = styled(ButtonPillEndpoint)`
  transform: translateX(59px);
  top: 140px;
`;

const ButtonPatch = styled(ButtonPill)`
  top: 34.94%;
`;

const ButtonPatchSelected = styled(ButtonPatch)`
  background-color: purple;
  color: white;
`;

const ButtonPatchEndpoint = styled(ButtonPillEndpoint)`
  transform: translateX(31px);
  top: 199px;
`;

const ButtonIUD = styled(ButtonPill)`
  top: 45.17%;
`;

const ButtonIUDSelected = styled(ButtonIUD)`
  background-color: purple;
  color: white;
`;

const ButtonIUDEndpoint = styled(ButtonPillEndpoint)`
  top: 246px;
`;

const ButtonRing = styled(ButtonPill)`
  top: 54.83%;
`;

const ButtonRingSelected = styled(ButtonRing)`
  background-color: purple;
  color: white;
`;

const ButtonRingEndpoint = styled(ButtonPillEndpoint)`
  top: 256px;
`;

const ButtonSpermicide = styled(ButtonPill)`
  top: 66.22%;
`;

const ButtonSpermicideSelected = styled(ButtonSpermicide)`
  background-color: purple;
  color: white;
`;

const ButtonSpermicideEndpoint = styled(ButtonPillEndpoint)`
  top: 271px;
`;

const ButtonShot = styled(ButtonPill)`
  left: 4%;
  top: 12.93%;
`;

const ButtonShotSelected = styled(ButtonShot)`
  background-color: purple;
  color: white;
`;

const ButtonShotEndpoint = styled(ButtonPillEndpoint)`
  top: 125px;
  transform: translateX(-72px);
`;

const ButtonSterilization = styled(ButtonShot)`
  top: 38.8%;
`;

const ButtonSterilizationSelected = styled(ButtonSterilization)`
  background-color: purple;
  color: white;
`;

const ButtonSterilizationEndpoint = styled(ButtonPillEndpoint)`
  top: 218px;
  transform: translateX(-40px);
`;

const ButtonSterilizationEndpoint2 = styled(ButtonPillEndpoint)`
  top: 218px;
  transform: translateX(29px);
`;

// invisible point to connect two perpendicular lines
const CornerPoint = styled(ButtonSterilizationEndpoint2)`
  top: 223px;
  visibility: hidden;
`;

const ButtonDiaphragm = styled(ButtonShot)`
  top: 50%;
`;

const ButtonDiaphragmSelected = styled(ButtonDiaphragm)`
  background-color: purple;
  color: white;
`;

const ButtonDiaphragmEndpoint = styled(ButtonPillEndpoint)`
  top: 271px;
`;

const ButtonCondom = styled(ButtonShot)`
  top: 63.32%;
`;

const ButtonCondomSelected = styled(ButtonCondom)`
  background-color: purple;
  color: white;
`;

const ButtonCondomEndpoint = styled(ButtonPillEndpoint)`
  top: 297px;
`;

const ButtonOther = styled(ButtonShot)`
  top: 77.22%;
`;

const ButtonOtherSelected = styled(ButtonOther)`
  background-color: purple;
  color: white;
`;

const MoveForwardButtonContainer = styled.div`
  position: absolute;
  top: 83.98%;
  left: 80%;
`;

export interface QuestionnaireDiagramProps {
  headerSize?: number;
  onClickForwards: React.MouseEventHandler<HTMLDivElement>;
  onClickBackwards: React.MouseEventHandler<HTMLDivElement>;
  pageNumber: number;
  question: string;
  response: Record<string, string[]>;
  responseKey: string;
  setResponse: React.Dispatch<React.SetStateAction<{}>>;
  totalPages: number;
}

const QuestionnaireDiagram = ({
  headerSize,
  onClickForwards,
  onClickBackwards,
  pageNumber,
  question,
  response,
  responseKey,
  setResponse,
  totalPages,
}: QuestionnaireDiagramProps): ReactElement => {
  // initialize state with methodsClicked
  const methodsClickedInit =
    response[responseKey] === undefined ? [] : response[responseKey];
  const [methodsClicked, setMethodsClicked] = useState(
    new Set(methodsClickedInit),
  );

  const methodNames = [
    'Pill',
    'Implant',
    'Patch',
    'IUD',
    'Ring',
    'Spermicide',
    'Shot',
    'Sterilization',
    'Diaphragm',
    'Condom',
    'Other',
  ];

  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <Container>
            <SvgDiagramStyled />
            {methodNames.map((methodName, idx) => {
              const isThisMethodHighlighted = methodsClicked.has(methodName);
              const onClick = (
                event: React.MouseEvent<HTMLDivElement, MouseEvent>,
              ) => {
                const newMethodsClicked = methodsClicked;
                if (methodsClicked.has(methodName)) {
                  // user wants to unselect this selected method
                  newMethodsClicked.delete(methodName);
                } else {
                  // user wants to select this unselected method
                  newMethodsClicked.add(methodName);
                }
                setMethodsClicked(new Set(newMethodsClicked));

                response[responseKey] = Array.from(methodsClicked);
                setResponse(response);
              };
              console.log(response);

              switch (methodName) {
                case 'Pill': {
                  const PillButton = isThisMethodHighlighted
                    ? ButtonPillSelected
                    : ButtonPill;
                  return (
                    <div key={idx}>
                      <PillButton className="PillButton" onClick={onClick}>
                        {methodName}
                      </PillButton>
                      <ButtonPillEndpoint className="PillEndpoint" />
                      <LineComponent
                        from={'PillButton'}
                        fromAnchor={'0 70%'}
                        to={'PillEndpoint'}
                        toAnchor={'100% 50%'}
                      />
                    </div>
                  );
                }
                case 'Implant': {
                  const ImplantButton = isThisMethodHighlighted
                    ? ButtonImplantSelected
                    : ButtonImplant;
                  return (
                    <div key={idx}>
                      <ImplantButton
                        className="ButtonImplant"
                        onClick={onClick}
                      >
                        {methodName}
                      </ImplantButton>
                      <ButtonImplantEndpoint className="ButtonImplantEndpoint" />
                      <LineComponent
                        from={'ButtonImplant'}
                        fromAnchor={'9% 101%'}
                        to={'ButtonImplantEndpoint'}
                        toAnchor={'100% 50%'}
                      />
                    </div>
                  );
                }
                case 'Patch': {
                  const PatchButton = isThisMethodHighlighted
                    ? ButtonPatchSelected
                    : ButtonPatch;
                  return (
                    <div key={idx}>
                      <PatchButton className="ButtonPatch" onClick={onClick}>
                        {methodName}
                      </PatchButton>
                      <ButtonPatchEndpoint className="ButtonPatchEndpoint" />
                      <LineComponent
                        from={'ButtonPatch'}
                        fromAnchor={'1% 50%'}
                        to={'ButtonPatchEndpoint'}
                        toAnchor={'100% 50%'}
                      />
                    </div>
                  );
                }
                case 'IUD': {
                  const IUDButton = isThisMethodHighlighted
                    ? ButtonIUDSelected
                    : ButtonIUD;
                  return (
                    <div key={idx}>
                      <IUDButton className="ButtonIUD" onClick={onClick}>
                        {methodName}
                      </IUDButton>
                      <ButtonIUDEndpoint className="ButtonIUDEndpoint" />
                      <LineComponent
                        from={'ButtonIUD'}
                        fromAnchor={'1% 35%'}
                        to={'ButtonIUDEndpoint'}
                        toAnchor={'100% 50%'}
                      />
                    </div>
                  );
                }
                case 'Ring': {
                  const RingButton = isThisMethodHighlighted
                    ? ButtonRingSelected
                    : ButtonRing;
                  return (
                    <div key={idx}>
                      <RingButton className="ButtonRing" onClick={onClick}>
                        {methodName}
                      </RingButton>
                      <ButtonRingEndpoint className="ButtonRingEndpoint" />
                      <LineComponent
                        from={'ButtonRing'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonRingEndpoint'}
                        toAnchor={'80% 80%'}
                      />
                    </div>
                  );
                }
                case 'Spermicide': {
                  const SpermicideButton = isThisMethodHighlighted
                    ? ButtonSpermicideSelected
                    : ButtonSpermicide;
                  return (
                    <div key={idx}>
                      <SpermicideButton
                        className="ButtonSpermicide"
                        onClick={onClick}
                      >
                        {methodName}
                      </SpermicideButton>
                      <ButtonSpermicideEndpoint className="ButtonSpermicideEndpoint" />
                      <LineComponent
                        from={'ButtonSpermicide'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonSpermicideEndpoint'}
                        toAnchor={'80% 80%'}
                      />
                    </div>
                  );
                }
                case 'Shot': {
                  const ShotButton = isThisMethodHighlighted
                    ? ButtonShotSelected
                    : ButtonShot;
                  return (
                    <div key={idx}>
                      <ShotButton className="ButtonShot" onClick={onClick}>
                        {methodName}
                      </ShotButton>
                      <ButtonShotEndpoint className="ButtonShotEndpoint" />
                      <LineComponent
                        from={'ButtonShot'}
                        fromAnchor={'90% 100%'}
                        to={'ButtonShotEndpoint'}
                        toAnchor={'10% 35%'}
                      />
                    </div>
                  );
                }
                case 'Sterilization': {
                  const SterilizationButton = isThisMethodHighlighted
                    ? ButtonSterilizationSelected
                    : ButtonSterilization;
                  return (
                    <div key={idx}>
                      <SterilizationButton
                        className="ButtonSterilization"
                        onClick={onClick}
                      >
                        {methodName}
                      </SterilizationButton>
                      <ButtonSterilizationEndpoint className="ButtonSterilizationEndpoint" />
                      <ButtonSterilizationEndpoint2 className="ButtonSterilizationEndpoint2" />
                      <CornerPoint className="SterilizationCornerPoint" />
                      <LineComponent
                        from={'ButtonSterilization'}
                        fromAnchor={'99% 47%'}
                        to={'ButtonSterilizationEndpoint'}
                        toAnchor={'19% 40%'}
                      />
                      <LineComponent
                        from={'ButtonSterilization'}
                        fromAnchor={'99% 60%'}
                        to={'SterilizationCornerPoint'}
                        toAnchor={'53% 50%'}
                      />
                      <LineComponent
                        from={'SterilizationCornerPoint'}
                        fromAnchor={'50% 70%'}
                        to={'ButtonSterilizationEndpoint2'}
                        toAnchor={'50% 100%'}
                      />
                    </div>
                  );
                }
                case 'Diaphragm': {
                  const DiaphragmButton = isThisMethodHighlighted
                    ? ButtonDiaphragmSelected
                    : ButtonDiaphragm;
                  return (
                    <div key={idx}>
                      <DiaphragmButton
                        className="ButtonDiaphragm"
                        onClick={onClick}
                      >
                        {methodName}
                      </DiaphragmButton>
                      <ButtonDiaphragmEndpoint className="ButtonDiaphragmEndpoint" />
                      <LineComponent
                        from={'ButtonDiaphragm'}
                        fromAnchor={'99% 40%'}
                        to={'ButtonSpermicideEndpoint'}
                        toAnchor={'0% 50%'}
                      />
                    </div>
                  );
                }
                case 'Condom': {
                  const CondomButton = isThisMethodHighlighted
                    ? ButtonCondomSelected
                    : ButtonCondom;
                  return (
                    <div key={idx}>
                      <CondomButton className="ButtonCondom" onClick={onClick}>
                        {methodName}
                      </CondomButton>
                      <ButtonCondomEndpoint className="ButtonCondomEndpoint" />
                      <LineComponent
                        from={'ButtonCondom'}
                        fromAnchor={'99% 16%'}
                        to={'ButtonCondomEndpoint'}
                        toAnchor={'20% 70%'}
                      />
                    </div>
                  );
                }
                case 'Other': {
                  const OtherButton = isThisMethodHighlighted
                    ? ButtonOtherSelected
                    : ButtonOther;
                  return (
                    <>
                      <OtherButton onClick={onClick}>
                        {' '}
                        {methodName}{' '}
                      </OtherButton>
                    </>
                  );
                }
                default: {
                  return <div key={idx}></div>;
                }
              }
            })}
            <MoveForwardButtonContainer>
              <MoveForwardButton onClick={onClickForwards} />
            </MoveForwardButtonContainer>
          </Container>
        }
        pageNumber={pageNumber}
        question={question}
        totalPages={totalPages}
      />
    </>
  );
};

export default QuestionnaireDiagram;
