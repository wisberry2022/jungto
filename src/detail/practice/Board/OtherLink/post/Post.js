import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Post = () => {
  const postingData = useSelector(state => state.review);
  const params = useParams();
  return (
    <div>
      {console.log(`POST 내부 데이터:`, postingData[params.id - 1])}
      hello
    </div>
  )
}

export default Post;