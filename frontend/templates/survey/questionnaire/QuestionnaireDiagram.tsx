import React, { ReactElement, useState, useEffect } from 'react';
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

/**
 * BUG: when back button is used to get to page lines do not render
 * perhaps side effect? tbf lines > no lines
 * BUG: Foward/next page button is fucked Returns to normal when next page or prev but then above error happens
 * Also related to line compoentns?
 *
 */

let LineComponent = dynamic(() => import('../../../components/LineComponent'), {
  ssr: false,
});

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
  left: 58%;
  top: 45%;
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
  top: 50%;
`;

const ButtonRing = styled(ButtonPill)`
  top: 61.8%;
`;

const ButtonRingSelected = styled(ButtonRing)`
  background-color: purple;
  color: white;
`;

const ButtonRingEndpoint = styled(ButtonPillEndpoint)`
  top: 51%;
`;

const ButtonSpermicide = styled(ButtonPill)`
  top: 68%;
`;

const ButtonSpermicideSelected = styled(ButtonSpermicide)`
  background-color: purple;
  color: white;
`;

const ButtonSpermicideEndpoint = styled(ButtonPillEndpoint)`
  top: 52%;
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
  left: 33%;
  top: 36%;
`;

const ButtonSterilization = styled(ButtonShot)`
  top: 52%;
`;

const ButtonSterilizationSelected = styled(ButtonSterilization)`
  background-color: purple;
  color: white;
`;

const ButtonSterilizationEndpoint = styled(ButtonPillEndpoint)`
  top: 47.5%;
  left: 40%;
`;

const ButtonSterilizationEndpoint2 = styled(ButtonPillEndpoint)`
  top: 47.5%;
  left: 57%;
`;

const ButtonDiaphragm = styled(ButtonShot)`
  top: 59%;
`;

const ButtonDiaphragmSelected = styled(ButtonDiaphragm)`
  background-color: purple;
  color: white;
`;

const ButtonDiaphragmEndpoint = styled(ButtonSpermicideEndpoint)``;

const ButtonCondom = styled(ButtonShot)`
  top: 67%;
`;

const ButtonCondomSelected = styled(ButtonCondom)`
  background-color: purple;
  color: white;
`;

const ButtonCondomEndpoint = styled(ButtonPillEndpoint)`
  top: 55%;
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

  useEffect(() => {
    LineComponent = dynamic(() => import('../../../components/LineComponent'), {
      ssr: false,
    });
  }, []);

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

  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <Container>
            <div>
              <SvgDiagramStyled />
              <ButtonPillEndpoint className="PillEndpoint" />
            </div>
            <ButtonPill className="PillButton"> Pill </ButtonPill>

            <LineComponent
              from={'PillButton'}
              fromAnchor={'0% 50%'}
              to={'PillEndpoint'}
              toAnchor={'95% 50%'}
            />
            <ButtonImplant className="ButtonImplant"> Implant </ButtonImplant>
            <ButtonImplantEndpoint className="ButtonImplantEndpoint" />
            <LineComponent
              from={'ButtonImplant'}
              fromAnchor={'9% 101%'}
              to={'ButtonImplantEndpoint'}
              toAnchor={'80% 20%'}
            />
            <ButtonPatch className="ButtonPatch"> Patch </ButtonPatch>
            <ButtonPatchEndpoint className="ButtonPatchEndpoint " />
            <LineComponent
              from={'ButtonPatch'}
              fromAnchor={'1% 15%'}
              to={'ButtonPatchEndpoint'}
              toAnchor={'80% 80%'}
            />
            <ButtonIUD className="ButtonIUD"> IUD </ButtonIUD>
            <ButtonIUDEndpoint className="ButtonIUDEndpoint" />
            <LineComponent
              from={'ButtonIUD'}
              fromAnchor={'1% 15%'}
              to={'ButtonIUDEndpoint'}
              toAnchor={'80% 80%'}
            />
            <ButtonRing className="ButtonRing"> Ring </ButtonRing>
            <ButtonRingEndpoint className="ButtonRingEndpoint" />
            <LineComponent
              from={'ButtonRing'}
              fromAnchor={'1% 15%'}
              to={'ButtonRingEndpoint'}
              toAnchor={'80% 80%'}
            />
            <ButtonSpermicide className="ButtonSpermicide">
              {' '}
              Spermicide{' '}
            </ButtonSpermicide>
            <ButtonSpermicideEndpoint className="ButtonSpermicideEndpoint" />
            <LineComponent
              from={'ButtonSpermicide'}
              fromAnchor={'1% 15%'}
              to={'ButtonSpermicideEndpoint'}
              toAnchor={'80% 80%'}
            />
            <ButtonShot className="ButtonShot"> Shot </ButtonShot>
            <ButtonShotEndpoint className="ButtonShotEndpoint" />
            <LineComponent
              from={'ButtonShot'}
              fromAnchor={'98% 10%'}
              to={'ButtonShotEndpoint'}
              toAnchor={'10% 35%'}
            />
            <ButtonSterilization className="ButtonSterilization">
              {' '}
              Sterilization{' '}
            </ButtonSterilization>
            <ButtonSterilizationEndpoint className="ButtonSterilizationEndpoint" />
            <ButtonSterilizationEndpoint2 className="ButtonSterilizationEndpoint2" />
            <LineComponent
              from={'ButtonSterilization'}
              fromAnchor={'99% 15%'}
              to={'ButtonSterilizationEndpoint'}
              toAnchor={'19% 40%'}
            />
            <LineComponent
              from={'ButtonSterilization'}
              fromAnchor={'99% 15%'}
              to={'ButtonSterilizationEndpoint2'}
              toAnchor={'19% 40%'}
            />
            <ButtonDiaphragm className="ButtonDiaphragm">
              {' '}
              Diaphragm{' '}
            </ButtonDiaphragm>
            <ButtonDiaphragmEndpoint />
            <LineComponent
              from={'ButtonDiaphragm'}
              fromAnchor={'99% 16%'}
              to={'ButtonSpermicideEndpoint'}
              toAnchor={'20% 70%'}
            />
            <ButtonCondom className="ButtonCondom"> Condom </ButtonCondom>
            <ButtonCondomEndpoint className="ButtonCondomEndpoint" />
            <LineComponent
              from={'ButtonCondom'}
              fromAnchor={'99% 16%'}
              to={'ButtonCondomEndpoint'}
              toAnchor={'20% 70%'}
            />
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
