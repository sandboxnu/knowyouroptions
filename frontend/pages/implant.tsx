import { ReactElement } from 'react';
import Image from 'next/image';
import SvgImplant from '../public/implant.svg';
import ContraceptiveTemplate  from '../templates/contraceptives'
import { OverviewProps } from '../templates/contraceptives/tabs/Overview';


const Implant = (): ReactElement => {
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
  return (
    <ContraceptiveTemplate
      title={"Implant"}
      overviewProps={overviewProps}
    />
  );
}

export default Implant;
