import { useParams } from "react-router-dom";

const Post = ({ postingData }) => {
  const params = useParams();
  return (
    <div>
      {console.log(postingData[params.id - 1])}
      hello
    </div>
  )
}

export default Post;