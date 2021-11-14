import { ReactElement } from 'react';

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

const OnboardingSurvey = ({}): ReactElement => {
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
  return (
    <SurveyMethods
      methodInfos={methodInfos}
      pageNumber={4}
      question="I have used and been satisfied with the following method(s):"
    />
  );
};

// const OnboardingSurvey = ({}): ReactElement => {
//   const dropdownInfos: [string, string[]][] = [
//     ['State', ['CA', 'MA', 'NY', 'OK']],
//   ];
//   return (
//     <SurveyDropdownInput
//       dropdownInfos={dropdownInfos}
//       inputQuestion="city/town"
//       intro="I live in ..."
//       pageNumber={6}
//       question="What are you looking for in this app?"
//     />
//   );
// };

/*
const OnboardingSurvey = ({}): ReactElement => {
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
      pageNumber={6}
      question="What are you looking for in this app?"
    />
  );
};*/

/*
const OnboardingSurvey = ({}): ReactElement => {
  const answers = [
    'middle school',
    'high school',
    'late teen',
    'early 20s',
    'after marriage',
    'other...',
  ];
  return (
    <SurveyCheckbox
      answers={answers}
      pageNumber={6}
      question="What are you looking for in this app?"
    />
  );
};*/

export default OnboardingSurvey;
