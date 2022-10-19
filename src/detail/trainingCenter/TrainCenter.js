import Intro from "./Intro/Intro";
import Center from './Center/Center';
import { Routes, Route, useLocation } from "react-router-dom";
import Location from "./Center/centerLocate/Location";
import AwakePlace from "./subMenu/awakePlace/AwakePlace";
import Divide from "./subMenu/divide/Divide";
import TempleStay from "./subMenu/templeStay/TempleStay";
import Weekend from "./subMenu/templeStay/Weekend";
import DaysAwake from "./subMenu/daysAwake/DaysAwake";

const TrainCenter = () => {
  const location = useLocation();
  return (
    <div className="train_wrapper">
      {location.pathname === '/mm_train' ?
        <>
          <Intro />
          <Center />
        </>
        :
        <Routes>
          <Route path="locate/:id" element={<Location />}></Route>
          <Route path="awakePlace" element={<AwakePlace />}></Route>
          <Route path="divide" element={<Divide />}></Route>
          <Route path="templeStay" element={<TempleStay />}></Route>
          <Route path="weekend" element={<Weekend />}></Route>
          <Route path="daysAwake" element={<DaysAwake />}></Route>
        </Routes>
      }
    </div>
  )
}

export default TrainCenter;