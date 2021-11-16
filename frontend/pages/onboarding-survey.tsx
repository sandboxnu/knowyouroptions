import { ReactElement, useState } from 'react';

import Survey from '../templates/survey';
import SurveyCheckbox from '../templates/survey/SurveyCheckbox';
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
  const onClick = () => {
    setCurPage(curPage + 1);
  }

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
        onClick={onClick}
        pageNumber={1}
        question="What age do you consider appropriate for you to become pregnant?"
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
        onClick={onClick}
        pageNumber={2}
        question="At what stage do you think you will be (or currently are) sexually active?"
      />
    );
  };


  // PAGE 3
  const TriedMethodsPage = ({}): ReactElement => {
    const answers = ['Yes', 'No'];
    return (
      <SurveyPill
        answers={answers}
        onClick={onClick}
        pageNumber={3}
        question="Have you tried any contraception/birth control methods?"
      />
    );
  };

  // PAGE 4.1
  const methodInfos: [ReactElement, string][] = [
    [<SvgCopperIUD/>, 'Copper IUD'],
    [<SvgHormonalIUD/>, 'Hormonal IUD'],
    [<SvgSterilization/>, 'Sterilization'],
    [<SvgImplant/>, 'Implant'],
    [<SvgShot/>, 'Shot'],
    [<SvgRing/>, 'Ring'],
    [<SvgPatch/>, 'Patch'],
    [<SvgCondom/>, 'Condoms'],
    [<SvgSpermicide/>, 'Spermicide'],
    [<SvgDiaphragm/>, 'Diaphragm'],
    [<SvgPill/>, 'Pill'],
    [<SvgCervicalCap/>, 'Cervical Cap'],
  ];

  const MethodsUsedPage = ({}): ReactElement => {
    return (
      <SurveyMethods
        methodInfos={methodInfos}
        onClick={onClick}
        pageNumber={4}
        question="I have used and been satisfied with the following method(s):"
      />
    );
  };

  // PAGE 4.2
  const MethodsMoreInfoPage = ({}): ReactElement => {
    return (
      <SurveyMethods
        methodInfos={methodInfos}
        onClick={onClick}
        pageNumber={4}
        question="I want more information about the following method(s):"
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
        onClick={onClick}
        pageNumber={5}
        question="Where do you receive sexual education about contraception, consent, and other related topics?"
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
        onClick={onClick}
        pageNumber={6}
        question="What are you looking for in this app?"
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
        dropdownInfos={dropdownInfos}
        intro="I am ..."
        onClick={onClick}
        pageNumber={7}
        question="Please tell us a bit more about yourself."
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
        dropdownInfos={dropdownInfos}
        inputQuestion="city/town"
        intro="I live in ..."
        onClick={onClick}
        pageNumber={7}
        question="Please tell us a bit more about yourself."
      />
    );
  };

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
    PersonalInfoPage
  ]

  const Page = pages[curPage]
  return (
    <>
      <Page />
    </>
  );
};

export default OnboardingSurvey;
