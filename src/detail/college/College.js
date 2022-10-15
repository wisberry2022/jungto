import Intro from "./collegeIntro/Intro";
import Summary from "./summary/Summary";
import Curriculum from "./curriculum/Curriculum";
import Youtube from "./youtube/Youtube";
import Degree from './degree/Degree';
import Entry from "./Otherlink/Entry";
import { Routes, Route, useLocation } from "react-router-dom";

const College = () => {
  const location = useLocation();
  return (
    <div className="college_wrap">
      {location.pathname === '/mm_college'
        ?
        <>
          <Intro />
          <Summary />
          <Curriculum />
          <Youtube />
          <Degree />
        </>
        :
        <Routes>
          <Route path="entry" element={<Entry />} />
        </Routes>
      }
    </div>
  )
}

export default College;