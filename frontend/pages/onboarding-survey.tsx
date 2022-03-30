import { ReactElement, useState } from 'react';
import { useRouter } from 'next/router';

import Survey from '../templates/survey';
import SurveyCheckbox from '../templates/survey/SurveyCheckbox';
import { SurveyKeys } from '../templates/survey';
import SurveyPill from '../templates/survey/SurveyPill';
import SurveyDropdown from '../templates/survey/SurveyDropdown';
import SurveyDropdownInput from '../templates/survey/SurveyDropdownInput';
import SurveyMethods from '../templates/survey/SurveyMethods';
import SvgImplant from '../public/implant-small.svg';
import SvgCopperIUD from '../public/copper-IUD.svg';
import SvgHormonalIUD from '../public/hormonal-IUD.svg';
import SvgSterilization from '../public/sterilization.svg';
import SvgShot from '../public/shot.svg';
import SvgRing from '../public/ring.svg';
import SvgPatch from '../public/patch.svg';
import SvgCondom from '../public/condom.svg';
import SvgSpermicide from '../public/spermicide.svg';
import SvgDiaphragm from '../public/diaphragm.svg';
import SvgPill from '../public/pill.svg';
import SvgCervicalCap from '../public/cervical-cap.svg';

const OnboardingSurvey = (): ReactElement => {
  const [curPage, setCurPage] = useState(0);
  const router = useRouter();

  const onClickForwards = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurPage(curPage + 1);
  };
  const onClickBackwards = (event: React.MouseEvent<HTMLDivElement>) => {
    setCurPage(curPage - 1);
  };
  const redirectToHome = (event: React.MouseEvent<HTMLDivElement>) => {
    router.push(
      {
        pathname: '/home',
        query: { popup: true },
      },
      '/home',
    );
  };

  // create an initial response to have keys
  const initialResponse: Record<string, string[]> = {};
  for (const index in SurveyKeys) {
    initialResponse[SurveyKeys[index]] = [];
  }
  const [response, setResponse] = useState(initialResponse);

  // PAGE 1
  const AgePregnantSurvey = ({}): ReactElement => {
    const answers = [
      'Under 12',
      '13 - 15',
      '16 - 18',
      '19 - 22',
      '23 - 30',
      'Above 30',
    ];
    return (
      <SurveyPill
        answers={answers}
        boldedWord="age"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={1}
        question="What age do you consider appropriate for you to become pregnant?"
        response={response}
        responseKey={SurveyKeys[0]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 2
  const StageSexuallyActivePage = ({}): ReactElement => {
    const answers = [
      'Middle school',
      'High school',
      'Late teen',
      'Early 20s',
      'After marriage',
      'Other...',
    ];
    return (
      <SurveyPill
        answers={answers}
        boldedWord="stage"
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={2}
        question="At what stage do you think you will be (or currently are) sexually active?"
        response={response}
        responseKey={SurveyKeys[1]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 3
  const TriedMethodsPage = ({}): ReactElement => {
    const answers = ['Yes', 'No'];
    return (
      <SurveyPill
        answers={answers}
        boldedWord=""
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={3}
        question="Have you tried any contraception/birth control methods?"
        response={response}
        responseKey={SurveyKeys[2]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 4.1
  const methodInfos: [ReactElement, string][] = [
    [<SvgCopperIUD />, 'Copper IUD'],
    [<SvgHormonalIUD />, 'Hormonal IUD'],
    [<SvgSterilization />, 'Sterilization'],
    [<SvgImplant />, 'Implant'],
    [<SvgShot />, 'Shot'],
    [<SvgRing />, 'Ring'],
    [<SvgPatch />, 'Patch'],
    [<SvgCondom />, 'Condoms'],
    [<SvgSpermicide />, 'Spermicide'],
    [<SvgDiaphragm />, 'Diaphragm'],
    [<SvgPill />, 'Pill'],
    [<SvgCervicalCap />, 'Cervical Cap'],
  ];

  const MethodsUsedPage = ({}): ReactElement => {
    return (
      <SurveyMethods
        boldedWord="method(s)"
        methodInfos={methodInfos}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={4}
        question="I have used and been satisfied with the following method(s):"
        response={response}
        responseKey={SurveyKeys[3]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 4.2
  const MethodsMoreInfoPage = ({}): ReactElement => {
    return (
      <SurveyMethods
        boldedWord="method(s)"
        methodInfos={methodInfos}
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={4}
        question="I want more information about the following method(s):"
        response={response}
        responseKey={SurveyKeys[4]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 5
  const SexualEducationPage = ({}): ReactElement => {
    const answers = [
      'Health education class at school',
      'Parent / Family',
      'Friends / Peers',
      'Websites / Videos',
      'Religious Institution',
      'Others',
    ];
    return (
      <SurveyCheckbox
        answers={answers}
        boldedWord=""
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={5}
        question="Where do you receive sexual education about contraception, consent, and other related topics?"
        response={response}
        responseKey={SurveyKeys[5]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 6
  const LookingForPage = ({}): ReactElement => {
    const answers = [
      'General knowledge on contraceptive methods',
      'Choosing a method that suits your value and lifestyle',
      'Sharing your own experience with peers and community of girls',
      'Looking for advice from peers and healthcare professionals',
    ];
    return (
      <SurveyCheckbox
        answers={answers}
        boldedWord=""
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={6}
        question="What are you looking for in this app?"
        response={response}
        responseKey={SurveyKeys[6]}
        setResponse={setResponse}
        subHeader=""
        totalPages={7}
      />
    );
  };

  // PAGE 7.1
  const DemographicPage = ({}): ReactElement => {
    const dropdownInfos: [string, string[]][] = [
      [
        'Age',
        ['Under 12', '13 - 15', '16 - 18', '19 - 22', '23 - 30', 'Above 30'],
      ],
      [
        'Ethnicity',
        [
          'Hispanic or Latino or Spanish Origin',
          'Not Hispanic or Latino or Spanish Origin',
        ],
      ],
      [
        'Race',
        [
          'White',
          'Black or African American',
          'Asian',
          'American Indian or Alaska Native',
        ],
      ],
    ];
    return (
      <SurveyDropdown
        boldedWord=""
        dropdownInfos={dropdownInfos}
        intro="I am ..."
        onClickForwards={onClickForwards}
        onClickBackwards={onClickBackwards}
        pageNumber={7}
        question="Please tell us a bit more about yourself."
        response={response}
        responseKey={SurveyKeys[7]}
        setResponse={setResponse}
        subHeader="*The data will not be shared with any other group. It will only be used to help improve the application."
        totalPages={7}
      />
    );
  };

  // PAGE 7.2
  const PersonalInfoPage = ({}): ReactElement => {
    const dropdownInfos: [string, string[]][] = [
      ['State', ['CA', 'MA', 'NY', 'OK']],
    ];
    return (
      <SurveyDropdownInput
        boldedWord=""
        dropdownInfos={dropdownInfos}
        inputQuestion="city/town"
        intro="I live in ..."
        onClickForwards={redirectToHome}
        onClickBackwards={onClickBackwards}
        pageNumber={7}
        question="Please tell us a bit more about yourself."
        response={response}
        responseKey={SurveyKeys[8]}
        setResponse={setResponse}
        subHeader="*The data will not be shared with any other group. It will only be used to help improve the application."
        totalPages={7}
      />
    );
  };

  console.log('response: ', response);

  // DISPLAY

  const pages = [
    AgePregnantSurvey,
    StageSexuallyActivePage,
    TriedMethodsPage,
    MethodsUsedPage,
    MethodsMoreInfoPage,
    SexualEducationPage,
    LookingForPage,
    DemographicPage,
    PersonalInfoPage,
  ];

  const Page = pages[curPage];
  return (
    <>
      <Page />
    </>
  );
};

export default OnboardingSurvey;
