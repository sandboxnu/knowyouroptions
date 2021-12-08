import { ReactElement, useState } from 'react';

import QuestionnaireStartPage from '../templates/questionnaire/StartPage';
import SurveyCheckbox from '../templates/survey/SurveyCheckbox';
import SurveyPill from '../templates/survey/SurveyPill';
import SurveyMethods from '../templates/survey/SurveyMethods';

import SvgCramps from '../public/cramps.svg';
import SvgAches from '../public/aches.svg';
import SvgSpotting from '../public/spotting.svg';
import SvgMenstrualDisorder from '../public/menstrual-disorder.svg';
import SvgHeavyPeriod from '../public/heavy-period.svg';
import SvgLessNoPeriod from '../public/less-no-period.svg';
import SvgHeadache from '../public/headache.svg';
import SvgNausea from '../public/nausea.svg';
import SvgAcne from '../public/acne.svg';
import SvgBreastTenderness from '../public/breast-tenderness.svg';
import SvgMood from '../public/mood-depression.svg';

const Questionnaire = (): ReactElement => {
  const SurveyKeys = [
    'Intro',
    'WhenPlanPregnant',
    'TopPriority',
    'AdditionalBenefit',
    'SideEffects',
    'UsageFrequency',
    'PreferredMethods',
    'WhoAdministers',
    'PreferredAccess',
    'HealthInsurance',
    'Payment',
  ];

  const [curPage, setCurPage] = useState(0);
  const onClickForwards = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurPage(curPage + 1);
  };
  const onClickBackwards = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurPage(curPage - 1);
  };

  // create an initial response to have keys
  const initialResponse: Record<string, string[]> = {};
  for (const index in SurveyKeys) {
    initialResponse[SurveyKeys[index]] = [];
  }
  const [response, setResponse] = useState(initialResponse);

  // INTRO PAGE
  const IntroPage = ({}): ReactElement => {
    return (
      <QuestionnaireStartPage
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
      />
    );
  };

  // PAGE 1
  const WhenPlanPregnantPage = ({}): ReactElement => {
    const answers = [
      'Less than 1 year',
      '1 - 5 years',
      '6 - 10 years',
      '19 - 22',
      "I'm not sure",
    ];
    return (
      <SurveyPill
        answers={answers}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={1}
        question="When do you plan on getting pregnant?"
        response={response}
        responseKey={SurveyKeys[1]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 2
  const TopPriorityPage = ({}): ReactElement => {
    const answers = [
      'Preventing pregnancy',
      'Adjusting hormones',
      'Helping with period',
    ];
    return (
      <SurveyPill
        answers={answers}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={2}
        question="What is your top priority in using contraceptive methods?"
        response={response}
        responseKey={SurveyKeys[2]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 3
  const AdditionalBenefitPage = ({}): ReactElement => {
    const answers = [
      'Decrease cramping',
      'Less or no period',
      'Decrease acne',
      'Stabilizing period cycle',
      'Stabilizing mood swings',
      'Input other needs here',
    ]; // TODO: Input box
    return (
      <SurveyCheckbox
        answers={answers}
        headerSize="medium"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={3}
        question="What additional benefit do you hope to get from contraception?"
        response={response}
        responseKey={SurveyKeys[3]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 4.1
  // TODO: sideEffectInfos
  const sideEffectInfos: [ReactElement, string][] = [
    [<SvgCramps />, 'Cramps'],
    [<SvgAches />, 'Muscle soreness / Back ache'],
    [<SvgSpotting />, 'Spotting'],
    [<SvgMenstrualDisorder />, 'Menstrual disorder'],
    [<SvgHeavyPeriod />, 'Heavy period'],
    [<SvgLessNoPeriod />, 'Less / No period'],
    [<SvgHeadache />, 'Headache'],
    [<SvgNausea />, 'Nausea'],
    [<SvgAcne />, 'Acne'],
    [<SvgBreastTenderness />, 'Breast Tenderness'],
    [<SvgMood />, 'Mood Depression'],
  ];

  const SideEffectsPage = ({}): ReactElement => {
    return (
      <SurveyMethods
        methodInfos={sideEffectInfos}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={4}
        question="What side effects can't you tolerate?"
        response={response}
        responseKey={SurveyKeys[4]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 5
  const UsageFrequencyPage = ({}): ReactElement => {
    const answers = [
      'Daily',
      'Weekly',
      'Monthly',
      'Quarterly',
      'Long Acting Reversible (3-12 years)',
      'Permanently',
      'I have no preference',
    ];
    return (
      <SurveyCheckbox
        answers={answers}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={5}
        question="How frequently do you care to use contraceptive methods?"
        response={response}
        responseKey={SurveyKeys[5]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 6
  // TODO: body
  const PreferredMethodsPage = ({}): ReactElement => {
    const answers = [
      'General knowledge on contraceptive methods',
      'Choosing a method that suits your value and lifestyle',
      'Sharing your own experience with peers and community of girls',
      'Looking for advice from peers and healthcare professionals',
    ];
    return (
      <SurveyCheckbox
        answers={answers}
        headerSize="small"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={6}
        question="What methods of use do you prefer?"
        response={response}
        responseKey={SurveyKeys[6]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 7
  const WhoAdministersPage = ({}): ReactElement => {
    const answers = ['Yourself', 'Healthcare professional', 'Either is OK'];
    return (
      <SurveyPill
        answers={answers}
        headerSize="medium"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={7}
        question="Would you like to take the contraceptive method yourself or have a healthcare professional to administer for you?"
        response={response}
        responseKey={SurveyKeys[7]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 8
  const PreferredAccessPage = ({}): ReactElement => {
    const answers = [
      'Over the counter',
      'By prescription',
      'Doctor/Physicians visit',
    ];
    return (
      <SurveyCheckbox
        answers={answers}
        headerSize="medium"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={8}
        question="How do you prefer to access the contraception methods?"
        response={response}
        responseKey={SurveyKeys[8]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 9
  const HealthInsurancePage = ({}): ReactElement => {
    const answers = ['Yes', 'No', "I don't know"];
    return (
      <SurveyPill
        answers={answers}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={9}
        question="Do you have health insurance?"
        response={response}
        responseKey={SurveyKeys[9]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // PAGE 10
  // TODO: add submit button
  const PaymentPage = ({}): ReactElement => {
    const answers = [
      '$ 0 - 50 monthly',
      '$ 50 - 100 several times a year',
      '$ 100 - 500 at one time, every 1 - 3 years',
      '$ 500 - 1000 at one time, every 2 - 5 years',
      "I don't know",
    ];
    return (
      <SurveyPill
        answers={answers}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={10}
        question="How much are you willing to pay yourself for contraception?"
        response={response}
        responseKey={SurveyKeys[10]}
        setResponse={setResponse}
        totalPages={10}
      />
    );
  };

  // DISPLAY

  const pages = [
    IntroPage,
    WhenPlanPregnantPage,
    TopPriorityPage,
    AdditionalBenefitPage,
    SideEffectsPage,
    UsageFrequencyPage,
    PreferredMethodsPage,
    WhoAdministersPage,
    PreferredAccessPage,
    HealthInsurancePage,
    PaymentPage,
  ];

  const Page = pages[curPage];
  return (
    <>
      <Page />
    </>
  );
};

export default Questionnaire;
