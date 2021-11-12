import { ReactElement } from 'react';

import Survey from '../templates/survey';
import SurveyCheckbox from '../templates/survey/SurveyCheckbox';
import SurveyPill from '../templates/survey/SurveyPill';
import SurveyDropdown from '../templates/survey/SurveyDropdown';
import SurveyDropdownInput from '../templates/survey/SurveyDropdownInput';

const OnboardingSurvey = ({}): ReactElement => {
  const dropdownInfos: [string, string[]][] = [
    ['State', ['CA', 'MA', 'NY', 'OK']],
  ];
  return (
    <SurveyDropdownInput
      dropdownInfos={dropdownInfos}
      inputQuestion="city/town"
      intro="I live in ..."
      pageNumber={6}
      question="What are you looking for in this app?"
    />
  );
};

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
