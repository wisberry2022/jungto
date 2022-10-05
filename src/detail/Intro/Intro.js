import Denomination from './denominationIntro/Denomination';
import CiIntro from './CI/CiIntro';
import History from './history/History';

const Intro = () => {
  return (
    <div className="intro_wrapper">
      <Denomination />
      <CiIntro />
      <History />
    </div>
  )
}

export default Intro;