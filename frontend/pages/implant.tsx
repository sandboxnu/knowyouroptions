import { ReactElement } from 'react';

import SvgAcne from '../public/acne.svg';
import SvgBed from '../public/bed.svg';
import SvgBreastFeeding from '../public/breastfeeding.svg';
import SvgBreastTenderness from '../public/breast-tenderness.svg';
import SvgCalendar from '../public/calendar.svg';
import SvgDepressed from '../public/depressed.svg';
import SvgDoctor from '../public/doctor.svg';
import SvgHeadache from '../public/headache.svg';
import SvgImplant from '../public/implant.svg';
import SvgImplantRemoval from '../public/implant-removal.svg';
import SvgPad from '../public/pad.svg';
import SvgTime from '../public/time.svg';

import ContraceptiveTemplate from '../templates/contraceptives';
import { EffectProps } from '../templates/contraceptives/tabs/Effect';
import { EfficacyProps } from '../templates/contraceptives/tabs/Efficacy';
import { OverviewProps } from '../templates/contraceptives/tabs/Overview';
import { UseProps } from '../templates/contraceptives/tabs/Use';
import { MechanismProps } from '../templates/contraceptives/tabs/Mechanism';
import { PracticalProps } from '../templates/contraceptives/tabs/PracticalQuestions';
import { AdditionalProps } from '../templates/contraceptives/tabs/AdditionalInfo';

const Implant = (): ReactElement => {
  const implantDesc =
    'The implant is a tiny, flexible rod (the size of a matchstick) that is inserted under the skin of your upper arm to prevent pregnancy. It is a long-acting hormonal methods.';
  const implantInfo = [
    ['Effective', '99%'],
    ['Use Pattern', '3-5 years'],
    ['Cost', '$ 0-1.3k'],
    ['Accessibility', 'Operation by doctor'],
  ];
  const pillTitles = ['Use of hormones', 'Scalpel included'];
  const overviewProps: OverviewProps = {
    description: implantDesc,
    info: implantInfo,
    pillTitles: pillTitles,
  };

  // Use Props
  const careFreeFor = 3;
  const howToUseDesc =
    'It is inserted by a doctor or nurse under the skin of your upper arm. Once it’s in, you can’t feel it unless you try to find it with your fingers.';
  const howToUsePills = ['Use of hormones', 'Scalpel included'];
  const ifMissedRoutineDesc =
    'Talk with your doctor first and try to avoid having sex or use another contraceptive method until you confirm remedial actions with your doctor.';
  const lastsUpTo = 5;

  const useProps: UseProps = {
    careFreeFor: careFreeFor,
    howToUseDesc: howToUseDesc,
    howToUsePills: howToUsePills,
    ifMissedRoutineDesc: ifMissedRoutineDesc,
    lastsUpTo: lastsUpTo,
  };

  // Efficacy props
  const backToFertilityDesc = 'Once the implant is removed your ability to get pregnant quickly returns.';
  const howToStopDesc = 'The implant can be removed at any time by a trained doctor or nurse.';
  const pregnancyPreventionRate = 99;
  const stopInfos: [ReactElement, string][] = [
    [<SvgDoctor/>, 'A trained doctor or nurse will make a tiny cut in your skin to gently pull the implant out.'],
    [<SvgTime/>, 'The process only takes a few minutes to remove, and a local anaesthetic will be used.']
  ];
  const whenItStartsToWorkInfos = [
    'If the implant is fitted during the first 5 days of your menstrual cycle, you’ll be immediately protected against becoming pregnant;',
    'If it’s fitted on any other day of your menstrual cycle, you’ll need to use additional contraception (such as condoms) for the first week.'
  ];

  const efficacyProps: EfficacyProps = {
    backToFertilityDesc: backToFertilityDesc,
    howToStopDesc: howToStopDesc,
    pregnancyPreventionRate: pregnancyPreventionRate,
    stopInfos: stopInfos,
    whenItStartsToWorkInfos: whenItStartsToWorkInfos,
  }

  // Effect props
  const benefitsInfos: [ReactElement, string][] = [
    [<SvgBed/>, 'It doesn’t interrupting sex.'],
    [<SvgBreastFeeding/>, 'Safe with breastfeeding'],
    [<SvgImplantRemoval/>, 'Your fertility will return to normal as soon as the implant is taken out.']
  ];
  const sideEffectsInfos: [ReactElement, string][] = [
    [<SvgHeadache/>, 'Headache'],
    [<SvgBreastTenderness/>, 'Breast tenderness'],
    [<SvgAcne/>, 'Acne'],
    [<SvgPad/>, 'Spotting\n' +
    '(in the first 6–12 months)'],
    [<SvgCalendar/>, 'Lighter to no period after a while'],
    [<SvgDepressed/>, 'Mood swing /\n' +
    'Depression']
  ];

  const effectProps: EffectProps = {
    benefitsInfos: benefitsInfos,
    sideEffectsInfos: sideEffectsInfos,
  };


  const mechanism =
    'The implant releases the hormone progestogen into your bloodstream, which prevents the release of an egg each month (ovulation) to prevent pregnancy.';
  const healthRisk = [
    'Serious problems with Nexplanon are rare, but they include ',
    'arm pain',
    ' that lasts for longer than a few days, ',
    'an infection',
    ' in the arm that needs medicine, or ',
    'a scar',
    ' on your arm where the implant goes.',
  ];
  const warning =
    '* Tell your doctor or nurse if you have any unexpected symptoms while using Nexplanon.';
  const cantUse = [
    'Most women can be fitted with the contraceptive implant. It may not be suitable if you:',
    "can't use an Estrogen-based method",
    'have arterial disease or a history of a heart disease or stroke',
    'have liver disease',
    'have breast cancer or have had it in the past',
    'have unexplained bleeding in between periods or after sex',
  ];
  const mechanismProps: MechanismProps = {
    mechanism: mechanism,
    healthRisk: healthRisk,
    whoCantUse: cantUse,
    warning: warning,
  };
  const location = [
    'You can get the contraceptive implant from:',
    'Contraception clinics',
    'Sexual health clinics',
    'GP surgeries',
  ];
  const administration = 'Put in by doctor or nurse.';
  const [loCost, hiCost] = [0, 1300];
  const costInfo =
    'Price may vary from geographic regions and health insurers. But the good news is that implants are totally free (or low cost) with most health insurance plans, Medicaid, and some other government programs.';
  const practicalProps: PracticalProps = {
    access: location,
    administration: administration,
    lowPrice: loCost,
    highPrice: hiCost,
    costInfo: costInfo,
  };
  const additionalInfo = [
    [
      'Needle phobia',
      "Needles will be included in the inserting process. If you don't feel comfortable with that, please inform your doctor in advance.",
    ],
    [
      'Is it compatible with your religious beliefs or cultural practices?',
      'Some forms of birth control are considered a violation of certain religious rights or cultural traditions. Weigh the risks and benefits of a birth control method against your personal convictions.',
    ],
  ];
  const additionalProps: AdditionalProps = {
    info: additionalInfo,
  };
  return (
    <ContraceptiveTemplate
      SvgContraceptive={<SvgImplant />}
      effectProps={effectProps}
      efficacyProps={efficacyProps}
      title={'Implant'}
      overviewProps={overviewProps}
      useProps={useProps}
      mechanismProps={mechanismProps}
      practicalProps={practicalProps}
      additionalProps={additionalProps}
    />
  );
};

export default Implant;
