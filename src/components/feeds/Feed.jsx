import "./feed.css";
import Share from "../shareBox/Share";
import Post from "../post/Post";
import { Posts } from "../../dummyApi";

export default function Feed() {
  return (
    <div className="feedbarMainContainer">
      <Share className="share" />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
