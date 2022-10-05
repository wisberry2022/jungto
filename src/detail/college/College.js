import Intro from "./collegeIntro/Intro";
import Summary from "./summary/Summary";
import Curriculum from "./curriculum/Curriculum";
import Youtube from "./youtube/Youtube";
import Degree from './degree/Degree';

const College = () => {
  return (
    <div className="college_wrap">
      <Intro />
      <Summary />
      <Curriculum />
      <Youtube />
      <Degree />
    </div>
  )
}

export default College;