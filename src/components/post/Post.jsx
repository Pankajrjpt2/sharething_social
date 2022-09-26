import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { Users } from "../../dummyApi";

export default function Post({ post }) {
  return (
    <div className="postContainer">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt=""
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postTime">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postOptions" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="postHeartIcon" src="/assets/heart.gif" alt="" />

            <span className="likesCount">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <CommentIcon className="commentIcon" />
            <span className="postComment">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
