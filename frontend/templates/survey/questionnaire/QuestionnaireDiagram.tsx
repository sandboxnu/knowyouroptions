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
  align-items: center;
  row-gap: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 1rem;
  position: relative;
  height: 100%;
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
  margin: 0;
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
  position: absolute;
  top: 11.2%;
`;

const ButtonImplant = styled(ButtonPill)`
  top: 18.15%;
`;

const ButtonImplantSelected = styled(ButtonImplant)`
  background-color: purple;
  color: white;
`;

const ButtonImplantEndpoint = styled(ButtonPillEndpoint)`
  left: 67.73%;
  top: 27.03%;
`;

const ButtonPatch = styled(ButtonPill)`
  top: 34.94%;
`;

const ButtonPatchSelected = styled(ButtonPatch)`
  background-color: purple;
  color: white;
`;

const ButtonPatchEndpoint = styled(ButtonPillEndpoint)`
  left: 60.27%;
  top: 38.42%;
`;

const ButtonIUD = styled(ButtonPill)`
  top: 45.17%;
`;

const ButtonIUDSelected = styled(ButtonIUD)`
  background-color: purple;
  color: white;
`;

const ButtonIUDEndpoint = styled(ButtonPillEndpoint)`
  top: 47.3%;
`;

const ButtonRing = styled(ButtonPill)`
  top: 54.83%;
`;

const ButtonRingSelected = styled(ButtonRing)`
  background-color: purple;
  color: white;
`;

const ButtonRingEndpoint = styled(ButtonPillEndpoint)`
  top: 49.42%;
`;

const ButtonSpermicide = styled(ButtonPill)`
  top: 66.22%;
`;

const ButtonSpermicideSelected = styled(ButtonSpermicide)`
  background-color: purple;
  color: white;
`;

const ButtonSpermicideEndpoint = styled(ButtonPillEndpoint)`
  top: 52.32%;
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
  left: 30%;
  top: 23.75%;
`;

const ButtonSterilization = styled(ButtonShot)`
  top: 38.8%;
`;

const ButtonSterilizationSelected = styled(ButtonSterilization)`
  background-color: purple;
  color: white;
`;

const ButtonSterilizationEndpoint = styled(ButtonPillEndpoint)`
  left: 40%;
  top: 42.08%;
`;

const ButtonSterilizationEndpoint2 = styled(ButtonPillEndpoint)`
  left: 63%;
  top: 54%;
`;

const ButtonDiaphragm = styled(ButtonShot)`
  top: 50%;
`;

const ButtonDiaphragmSelected = styled(ButtonDiaphragm)`
  background-color: purple;
  color: white;
`;

const ButtonDiaphragmEndpoint = styled(ButtonPillEndpoint)`
  top: 52.32%;
`;

const ButtonCondom = styled(ButtonShot)`
  top: 63.32%;
`;

const ButtonCondomSelected = styled(ButtonCondom)`
  background-color: purple;
  color: white;
`;

const ButtonCondomEndpoint = styled(ButtonPillEndpoint)`
  top: 57.14%;
`;

const ButtonOther = styled(ButtonShot)`
  top: 77.22%;
`;

const ButtonOtherSelected = styled(ButtonOther)`
  background-color: purple;
  color: white;
`;

const MoveForwardButtonStyled = styled(MoveForwardButton)`
  .parent > * {
    position: absolute;
    top: 83.98%;
    left: 80%;
  }
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

            {methodNames.map((methodName) => {
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
                    <>
                      <PillButton className="PillButton" onClick={onClick}>
                        {methodName}
                      </PillButton>
                      <ButtonPillEndpoint className="PillEndpoint" />
                      <LineComponent
                        from={'PillButton'}
                        fromAnchor={'0 78%'}
                        to={'PillEndpoint'}
                        toAnchor={'100% 50%'}
                      />
                    </>
                  );
                }
                case 'Implant': {
                  const ImplantButton = isThisMethodHighlighted
                    ? ButtonImplantSelected
                    : ButtonImplant;
                  return (
                    <>
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
                        toAnchor={'80% 20%'}
                      />
                    </>
                  );
                }
                case 'Patch': {
                  const PatchButton = isThisMethodHighlighted
                    ? ButtonPatchSelected
                    : ButtonPatch;
                  return (
                    <>
                      <PatchButton className="ButtonPatch" onClick={onClick}>
                        {methodName}
                      </PatchButton>
                      <ButtonPatchEndpoint className="ButtonPatchEndpoint" />
                      {/*<LineComponent
                        from={'ButtonPatch'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonPatchEndpoint'}
                  toAnchor={'80% 80%'}
                      />*/}
                    </>
                  );
                }
                case 'IUD': {
                  const IUDButton = isThisMethodHighlighted
                    ? ButtonIUDSelected
                    : ButtonIUD;
                  return (
                    <>
                      <IUDButton className="ButtonIUD" onClick={onClick}>
                        {methodName}
                      </IUDButton>
                      <ButtonIUDEndpoint className="ButtonIUDEndpoint" />
                      {/*<LineComponent
                        from={'ButtonIUD'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonIUDEndpoint'}
                  toAnchor={'80% 80%'}
                      />*/}
                    </>
                  );
                }
                case 'Ring': {
                  const RingButton = isThisMethodHighlighted
                    ? ButtonRingSelected
                    : ButtonRing;
                  return (
                    <>
                      <RingButton className="ButtonRing" onClick={onClick}>
                        {methodName}
                      </RingButton>
                      <ButtonRingEndpoint className="ButtonRingEndpoint" />
                      {/*<LineComponent
                        from={'ButtonRing'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonRingEndpoint'}
                  toAnchor={'80% 80%'}
                      />*/}
                    </>
                  );
                }
                case 'Spermicide': {
                  const SpermicideButton = isThisMethodHighlighted
                    ? ButtonSpermicideSelected
                    : ButtonSpermicide;
                  return (
                    <>
                      <SpermicideButton
                        className="ButtonSpermicide"
                        onClick={onClick}
                      >
                        {methodName}
                      </SpermicideButton>
                      <ButtonSpermicideEndpoint className="ButtonSpermicideEndpoint" />
                      {/*<LineComponent
                        from={'ButtonSpermicide'}
                        fromAnchor={'1% 15%'}
                        to={'ButtonSpermicideEndpoint'}
                  toAnchor={'80% 80%'}
                      />*/}
                    </>
                  );
                }
                case 'Shot': {
                  const ShotButton = isThisMethodHighlighted
                    ? ButtonShotSelected
                    : ButtonShot;
                  return (
                    <>
                      <ShotButton className="ButtonShot" onClick={onClick}>
                        {methodName}
                      </ShotButton>
                      <ButtonShotEndpoint className="ButtonShotEndpoint" />
                      {/*<LineComponent
                        from={'ButtonShot'}
                        fromAnchor={'98% 10%'}
                        to={'ButtonShotEndpoint'}
                  toAnchor={'10% 35%'}
                      />*/}
                    </>
                  );
                }
                case 'Sterilization': {
                  const SterilizationButton = isThisMethodHighlighted
                    ? ButtonSterilizationSelected
                    : ButtonSterilization;
                  return (
                    <>
                      <SterilizationButton
                        className="ButtonSterilization"
                        onClick={onClick}
                      >
                        {methodName}
                      </SterilizationButton>
                      <ButtonSterilizationEndpoint className="ButtonSterilizationEndpoint" />
                      {/*<LineComponent
                        from={'ButtonSterilization'}
                        fromAnchor={'99% 15%'}
                        to={'ButtonSterilizationEndpoint'}
                  toAnchor={'19% 40%'}
                      />*/}
                    </>
                  );
                }
                case 'Diaphragm': {
                  const DiaphragmButton = isThisMethodHighlighted
                    ? ButtonDiaphragmSelected
                    : ButtonDiaphragm;
                  return (
                    <>
                      <DiaphragmButton
                        className="ButtonDiaphragm"
                        onClick={onClick}
                      >
                        {methodName}
                      </DiaphragmButton>
                      <ButtonDiaphragmEndpoint className="ButtonSpermicideEndpoint" />
                      {/*<LineComponent
                        from={'ButtonDiaphragm'}
                        fromAnchor={'99% 16%'}
                        to={'ButtonSpermicideEndpoint'}
                  toAnchor={'20% 70%'}
                      />*/}
                    </>
                  );
                }
                case 'Condom': {
                  const CondomButton = isThisMethodHighlighted
                    ? ButtonCondomSelected
                    : ButtonCondom;
                  return (
                    <>
                      <CondomButton className="ButtonCondom" onClick={onClick}>
                        {methodName}
                      </CondomButton>
                      <ButtonCondomEndpoint className="ButtonCondomEndpoint" />
                      {/*<LineComponent
                        from={'ButtonCondom'}
                        fromAnchor={'99% 16%'}
                        to={'ButtonCondomEndpoint'}
                  toAnchor={'20% 70%'}
                      />*/}
                    </>
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
                  return <></>;
                }
              }
            })}
            <MoveForwardButtonStyled onClick={onClickForwards} />
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
