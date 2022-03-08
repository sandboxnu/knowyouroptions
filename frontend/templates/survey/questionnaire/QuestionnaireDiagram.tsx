import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Survey from '../index';
import { MoveForwardButton } from '../StyledComponents';
import SvgDiagram from '../../../public/preferred-methods.svg';
import PillLine from '../../../public/questionnaire-diagram-lines/pill-line.svg';
import ImplantLine from '../../../public/questionnaire-diagram-lines/implant-line.svg';
import PatchLine from '../../../public/questionnaire-diagram-lines/patch-line.svg';
import IUDLine from '../../../public/questionnaire-diagram-lines/iud-line.svg';
import RingLine from '../../../public/questionnaire-diagram-lines/ring-line.svg';
import SpermicideLine from '../../../public/questionnaire-diagram-lines/spermicide-line.svg';
import CondomLine from '../../../public/questionnaire-diagram-lines/condom-line.svg';
import DiaphragmLine from '../../../public/questionnaire-diagram-lines/diaphragm-line.svg';
import SterilizationLine from '../../../public/questionnaire-diagram-lines/sterilization-lines.svg';
import ShotLine from '../../../public/questionnaire-diagram-lines/shot-line.svg';
import PillButton from '../../../components/PillButton'; // delete later!!!
import SvgEndpoint from '../../../public/diagram-endpoint-circle.svg';
import dynamic from 'next/dynamic';

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

// styled buttons followed by their selected counterpart and "endpoints",
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
  const [methodsClicked, setMethodsClicked] = useState(new Set());

  const methodInfos = [
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
  ];

  const ButtonEndpoints: [ReactElement, ReactElement, ReactElement][] = [
    [
      <ButtonPill>Pill</ButtonPill>,
      <ButtonPillSelected>Pill</ButtonPillSelected>,
      <ButtonPillEndpoint />,
    ],
    [
      <ButtonImplant>Implant</ButtonImplant>,
      <ButtonImplantSelected>Implant</ButtonImplantSelected>,
      <ButtonImplantEndpoint />,
    ],
    [
      <ButtonPatch>Patch</ButtonPatch>,
      <ButtonPatchSelected>Patch</ButtonPatchSelected>,
      <ButtonPatchEndpoint />,
    ],
    [
      <ButtonIUD>IUD</ButtonIUD>,
      <ButtonIUDSelected>IUD</ButtonIUDSelected>,
      <ButtonIUDEndpoint />,
    ],
    [
      <ButtonRing>Ring</ButtonRing>,
      <ButtonRingSelected>Ring</ButtonRingSelected>,
      <ButtonRingEndpoint />,
    ],
    [
      <ButtonSpermicide>Spermicide</ButtonSpermicide>,
      <ButtonSpermicideSelected>Spermicide</ButtonSpermicideSelected>,
      <ButtonSpermicideEndpoint />,
    ],
    [
      <ButtonShot>Shot</ButtonShot>,
      <ButtonShotSelected>Shot</ButtonShotSelected>,
      <ButtonShotEndpoint />,
    ],
    [
      <ButtonSterilization>Sterilization</ButtonSterilization>,
      <ButtonSterilizationSelected>Sterilization</ButtonSterilizationSelected>,
      <ButtonSterilizationEndpoint />,
    ],
    [
      <ButtonDiaphragm>Diaphragm</ButtonDiaphragm>,
      <ButtonDiaphragmSelected>Diaphragm</ButtonDiaphragmSelected>,
      <ButtonDiaphragmEndpoint />,
    ],
    [
      <ButtonCondom>Condom</ButtonCondom>,
      <ButtonCondomSelected>Condom</ButtonCondomSelected>,
      <ButtonCondomEndpoint />,
    ],
  ];

  const mapMethodInfos = () => {
    return (
      <>
        {ButtonEndpoints.map((methodArray) => {
          const [Button, ButtonSelected, Endpoint] = methodArray;

          return (
            <>
              {Button}
              {Endpoint}
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <Container>
            <SvgDiagramStyled />
            <ButtonPill className="PillButton"> Pill </ButtonPill>
            <ButtonPillEndpoint className="PillEndpoint" />
            <LineComponent
              from={'PillButton'}
              fromAnchor={'0 20%'}
              to={'PillEndpoint'}
              toAnchor={'center right'}
            />
            <ButtonImplant> Implant </ButtonImplant>
            <ButtonImplantEndpoint />
            <ButtonPatch> Patch </ButtonPatch>
            <ButtonPatchEndpoint />
            <ButtonIUD> IUD </ButtonIUD>
            <ButtonIUDEndpoint />
            <ButtonRing> Ring </ButtonRing>
            <ButtonRingEndpoint />
            <ButtonSpermicide> Spermicide </ButtonSpermicide>
            <ButtonSpermicideEndpoint />
            <ButtonShot> Shot </ButtonShot>
            <ButtonShotEndpoint />
            <ButtonSterilization> Sterilization </ButtonSterilization>
            <ButtonSterilizationEndpoint />
            <ButtonDiaphragm> Diaphragm </ButtonDiaphragm>
            <ButtonDiaphragmEndpoint />
            <ButtonCondom> Condom </ButtonCondom>
            <ButtonCondomEndpoint />
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
