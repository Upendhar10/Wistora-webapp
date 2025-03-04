import { FaUserCircle } from "react-icons/fa";
import { CommentsMock } from "../utils/mock";
const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="my-3 flex w-full items-center gap-2 p-2 py-1">
      <FaUserCircle className="cursor-pointer text-3xl" />
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm">{comment}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ CommentsData }) => {
  return CommentsData.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="ml-5 border-l-2 pl-5">
        {/* 
        <Comment data={comment} key={index} /> */}

        <CommentsList CommentsData={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsCont = () => {
  return (
    <div className="mb-2 h-full w-1/3 gap-2 rounded-sm border p-2">
      <CommentsList CommentsData={CommentsMock} />
    </div>
  );
};

export default CommentsCont;
