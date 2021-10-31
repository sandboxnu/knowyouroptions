import { ReactElement } from 'react';
import Image from 'next/image';
import SvgImplant from '../public/implant.svg';
import ContraceptiveTemplate  from '../templates/contraceptives'
import { OverviewProps } from '../templates/contraceptives/tabs/Overview';
import { UseProps } from '../templates/contraceptives/tabs/Use';

const Implant = (): ReactElement => {
  // Overview Props
  const implantDesc = "The implant is a tiny, flexible rod (the size of a matchstick) that is inserted under the skin of your upper arm to prevent pregnancy. It is a long-acting hormonal methods.";
  const implantInfo = [
    ["Effective", "99%"],
    ["Use Pattern", "3-5 years"],
    ["Cost", "$ 0-1.3k"],
    ["Accessibility", "Operation by doctor"]
  ];
  const pillTitles = ["Use of hormones", "Scalpel included"];
  const overviewProps: OverviewProps = {
    description: implantDesc,
    info: implantInfo,
    pillTitles: pillTitles,
  }

  // Use Props
  const careFreeFor = 3;
  const howToUseDesc = "It is inserted by a doctor or nurse under the skin of your upper arm. Once it’s in, you can’t feel it unless you try to find it with your fingers.";
  const howToUsePills = ["Use of hormones", "Scalpel included"];
  const ifMissedRoutineDesc = "Talk with your doctor first and try to avoid having sex or use another contraceptive method until you confirm remedial actions with your doctor.";
  const lastsUpTo = 5;

  const useProps: UseProps = {
    careFreeFor: careFreeFor,
    howToUseDesc: howToUseDesc,
    howToUsePills: howToUsePills,
    ifMissedRoutineDesc: ifMissedRoutineDesc,
    lastsUpTo: lastsUpTo,
  };

  return (
    <ContraceptiveTemplate
      title={"Implant"}
      overviewProps={overviewProps}
      useProps={useProps}
    />
  );
}

export default Implant;
