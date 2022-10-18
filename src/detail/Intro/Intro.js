import Denomination from './denominationIntro/Denomination';
import CiIntro from './CI/CiIntro';
import History from './history/History';
import { useLocation, Routes, Route } from 'react-router-dom';
import Magazine from './Otherlink/subMenu/Magazine/Magazine';

const Intro = () => {
  const location = useLocation();
  return (
    <div className="intro_wrapper">
      {location.pathname === '/mm_intro'
        ?
        <>
          <Denomination />
          <CiIntro />
          <History />
        </>
        :
        <Routes>
          <Route path="magazine" element={<Magazine />} />
        </Routes>
      }
    </div>
  )
}

export default Intro;