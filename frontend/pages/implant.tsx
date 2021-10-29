import { ReactElement } from 'react';
import Image from 'next/image';
import SvgImplant from '../public/implant.svg';
import ContraceptiveTemplate from '../templates/contraceptives';
import { OverviewProps } from '../templates/contraceptives/tabs/Overview';
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
  const mechanism =
    'The implant releases the hormone progestogen into your bloodstream, which prevents the release of an egg each month (ovulation) to prevent pregnancy.';
  const healthRisk =
    'Serious problems with Nexplanon are rare, but they include arm pain that lasts for longer than a few days, an infection in the arm that needs medicine, or a scar on your arm where the implant goes.';
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
  const additionalProps: AdditionalProps = {
    needles: true,
  };
  return (
    <ContraceptiveTemplate
      title={'Implant'}
      overviewProps={overviewProps}
      mechanismProps={mechanismProps}
      practicalProps={practicalProps}
      additionalProps={additionalProps}
    />
  );
};

export default Implant;
