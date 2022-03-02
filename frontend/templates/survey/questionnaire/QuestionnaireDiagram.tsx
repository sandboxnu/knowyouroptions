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
import PillButton from '../../../components/PillButton';

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

const PillAnswers = styled(PillContainer)`
  left: 850px;
  top: 350px;
  position: absolute;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.8);
  padding-top: 1rem;
  row-gap: 1rem;
  & > div {
    background-color: #ffebe5;
    border: 0;

    color: black;
    font-weight: 500;
    padding: 1rem 3rem;
    width: 100%;
  }
  & > div:hover {
    background-color: purple;
    cursor: pointer;
  }
  padding: 1rem 2.5rem;
`;

export interface QuestionnaireDiagramProps {
  headerSize?: number;
  methodInfos: string[];
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
  methodInfos,
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

  return (
    <>
      <Survey
        headerSize={headerSize}
        onClick={onClickBackwards}
        Options={
          <Container>
            <SvgDiagram />
            <PillAnswers> Pill </PillAnswers>
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
