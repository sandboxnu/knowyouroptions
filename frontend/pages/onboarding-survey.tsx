import { ReactElement } from 'react';

import Survey from '../templates/survey';
import SurveyCheckbox from '../templates/survey/SurveyCheckbox';
import SurveyPill from '../templates/survey/SurveyPill';
import SurveyDropdown from '../templates/survey/SurveyDropdown';
import SurveyDropdownInput from '../templates/survey/SurveyDropdownInput';

/*
// PAGE 1
const OnboardingSurvey = ({}): ReactElement => {
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
      pageNumber={1}
      question="What age do you consider appropriate for you to become pregnant?"
    />
  );
};*/

/*
// PAGE 2
const OnboardingSurvey = ({}): ReactElement => {
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
      pageNumber={2}
      question="At what stage do you think you will be (or currently are) sexually active?"
    />
  );
};*/

/*
// PAGE 3
const OnboardingSurvey = ({}): ReactElement => {
  const answers = ['Yes', 'No'];
  return (
    <SurveyPill
      answers={answers}
      pageNumber={3}
      question="Have you tried any contraception/birth control methods?"
    />
  );
};*/

// PAGE 4

// PAGE 4.2

/*
// PAGE 5
const OnboardingSurvey = ({}): ReactElement => {
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
      pageNumber={5}
      question="Where do you receive sexual education about contraception, consent, and other related topics?"
    />
  );
};*/

// PAGE 6
const OnboardingSurvey = ({}): ReactElement => {
  const answers = [
    'General knowledge on contraceptive methods',
    'Choosing a method that suits your value and lifestyle',
    'Sharing your own experience with peers and community of girls',
    'Looking for advice from peers and healthcare professionals',
  ];
  return (
    <SurveyCheckbox
      answers={answers}
      pageNumber={6}
      question="What are you looking for in this app?"
    />
  );
};

/*
// PAGE 7.1
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
      pageNumber={7}
      question="Please tell us a bit more about yourself."
    />
  );
};*/

/*
// PAGE 7.2
const OnboardingSurvey = ({}): ReactElement => {
  const dropdownInfos: [string, string[]][] = [
    ['State', ['CA', 'MA', 'NY', 'OK']],
  ];
  return (
    <SurveyDropdownInput
      dropdownInfos={dropdownInfos}
      inputQuestion="city/town"
      intro="I live in ..."
      pageNumber={7}
      question="Please tell us a bit more about yourself."
    />
  );
};*/

export default OnboardingSurvey;
