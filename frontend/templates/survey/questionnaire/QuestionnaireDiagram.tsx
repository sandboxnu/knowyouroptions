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
  margin-top=1.5rem;
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
  top: 31.5%;
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
  top: 32%;
`;

const ButtonImplant = styled(ButtonPill)`
  top: 39%;
`;

const ButtonImplantSelected = styled(ButtonImplant)`
  background-color: purple;
  color: white;
`;

const ButtonImplantEndpoint = styled(ButtonPillEndpoint)`
  left: 70%;
  top: 45%;
`;

const ButtonPatch = styled(ButtonPill)`
  top: 49.4%;
`;

const ButtonPatchSelected = styled(ButtonPatch)`
  background-color: purple;
  color: white;
`;

const ButtonPatchEndpoint = styled(ButtonPillEndpoint)`
  left: 65%;
  top: 52%;
`;

const ButtonIUD = styled(ButtonPill)`
  top: 55.6%;
`;

const ButtonIUDSelected = styled(ButtonIUD)`
  background-color: purple;
  color: white;
`;

const ButtonIUDEndpoint = styled(ButtonPillEndpoint)`
  top: 57%;
`;

const ButtonRing = styled(ButtonPill)`
  top: 61.8%;
`;

const ButtonRingSelected = styled(ButtonRing)`
  background-color: purple;
  color: white;
`;

const ButtonRingEndpoint = styled(ButtonPillEndpoint)`
  top: 58%;
`;

const ButtonSpermicide = styled(ButtonPill)`
  top: 68%;
`;

const ButtonSpermicideSelected = styled(ButtonSpermicide)`
  background-color: purple;
  color: white;
`;

const ButtonSpermicideEndpoint = styled(ButtonPillEndpoint)`
  top: 59%;
`;

const ButtonShot = styled(ButtonPill)`
  left: 4%;
  top: 36%;
`;

const ButtonShotSelected = styled(ButtonShot)`
  background-color: purple;
  color: white;
`;

const ButtonShotEndpoint = styled(ButtonPillEndpoint)`
  left: 30%
  top: 42%;
`;

const ButtonSterilization = styled(ButtonShot)`
  top: 52%;
`;

const ButtonSterilizationSelected = styled(ButtonSterilization)`
  background-color: purple;
  color: white;
`;

const ButtonSterilizationEndpoint = styled(ButtonPillEndpoint)`
  left: 40%
  top: 54%;
`;

const ButtonSterilizationEndpoint2 = styled(ButtonPillEndpoint)`
  left: 63%
  top: 54%;
`;

const ButtonDiaphragm = styled(ButtonShot)`
  top: 59%;
`;

const ButtonDiaphragmSelected = styled(ButtonDiaphragm)`
  background-color: purple;
  color: white;
`;

const ButtonDiaphragmEndpoint = styled(ButtonPillEndpoint)`
  top: 59%;
`;

const ButtonCondom = styled(ButtonShot)`
  top: 67%;
`;

const ButtonCondomSelected = styled(ButtonCondom)`
  background-color: purple;
  color: white;
`;

const ButtonCondomEndpoint = styled(ButtonPillEndpoint)`
  top: 62%;
`;

const ButtonOther = styled(ButtonShot)`
  top: 80%;
`;

const ButtonOtherSelected = styled(ButtonOther)`
  background-color: purple;
  color: white;
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
            {/*}
            <ButtonPill className="PillButton"> Pill </ButtonPill>
            <ButtonPillEndpoint className="PillEndpoint" />
            <LineComponent
              from={'PillButton'}
              fromAnchor={'0 20%'}
              to={'PillEndpoint'}
              toAnchor={'center right'}
        /> */}
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
                        className="ImplantButton"
                        onClick={onClick}
                      >
                        {methodName}
                      </ImplantButton>
                      <ButtonImplantEndpoint className="ImplantEndpoint" />
                    </>
                  );
                }
                case 'Patch': {
                  const PatchButton = isThisMethodHighlighted
                    ? ButtonPatchSelected
                    : ButtonPatch;
                  return (
                    <>
                      <PatchButton className="PatchButton" onClick={onClick}>
                        {methodName}
                      </PatchButton>
                      <ButtonPatchEndpoint className="PatchEndpoint" />
                    </>
                  );
                }
                case 'IUD': {
                  const IUDButton = isThisMethodHighlighted
                    ? ButtonIUDSelected
                    : ButtonIUD;
                  return (
                    <>
                      <IUDButton className="IUDButton" onClick={onClick}>
                        {methodName}
                      </IUDButton>
                      <ButtonIUDEndpoint className="IUDEndpoint" />
                    </>
                  );
                }
                case 'Ring': {
                  const RingButton = isThisMethodHighlighted
                    ? ButtonRingSelected
                    : ButtonRing;
                  return (
                    <>
                      <RingButton className="RingButton" onClick={onClick}>
                        {methodName}
                      </RingButton>
                      <ButtonRingEndpoint className="RingEndpoint" />
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
                        className="PillSpermicide"
                        onClick={onClick}
                      >
                        {methodName}
                      </SpermicideButton>
                      <ButtonSpermicideEndpoint className="SpermicideEndpoint" />
                    </>
                  );
                }
                case 'Shot': {
                  const ShotButton = isThisMethodHighlighted
                    ? ButtonShotSelected
                    : ButtonShot;
                  return (
                    <>
                      <ShotButton className="ShotButton" onClick={onClick}>
                        {methodName}
                      </ShotButton>
                      <ButtonShotEndpoint className="ShotEndpoint" />
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
                        className="SterilizationButton"
                        onClick={onClick}
                      >
                        {methodName}
                      </SterilizationButton>
                      <ButtonSterilizationEndpoint className="SterilizationEndpoint" />
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
                        className="DiaphragmButton"
                        onClick={onClick}
                      >
                        {methodName}
                      </DiaphragmButton>
                      <ButtonDiaphragmEndpoint className="DiaphragmEndpoint" />
                    </>
                  );
                }
                case 'Condom': {
                  const CondomButton = isThisMethodHighlighted
                    ? ButtonCondomSelected
                    : ButtonCondom;
                  return (
                    <>
                      <CondomButton className="CondomButton" onClick={onClick}>
                        {methodName}
                      </CondomButton>
                      <ButtonCondomEndpoint className="CondomEndpoint" />
                    </>
                  );
                }
                default: {
                  return <></>;
                }
              }
            })}
            <ButtonOther> Other </ButtonOther>
            <MoveForwardButton onClick={onClickForwards} />
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
