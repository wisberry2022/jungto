import Intro from "./Intro/Intro";
import Center from './Center/Center';
import { Routes, Route, useLocation } from "react-router-dom";
import Location from "./Center/centerLocate/Location";

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
        </Routes>
      }
    </div>
  )
}

export default TrainCenter;