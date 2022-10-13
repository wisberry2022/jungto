import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Location = () => {
  const data = useSelector(state => state.train);
  const params = useParams();
  return (
    <div>
      {console.log('location', data[params.id - 1])}
      location
    </div>
  )
}

export default Location;