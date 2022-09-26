import "./share.css";

// import PermMediaIcon from '@material-ui/icons/PermMedia';
export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="/assets/person/profilepic.jpeg"
            alt=""
            className="shareimg"
          />
          <input placeholder="What is in you mind?" className="shareInput" />
        </div>

        <hr className="shareHr" />
        <div className="sharebottom">
          <div className="shareItems">
            <div className="shareItem">
              <img
                className="shareIcon"
                src="https://img.icons8.com/color/32/000000/gallery.png"
              />
              <span className="shareItemText">Photos</span>
            </div>

            <div className="shareItem">
              <img
                className="shareIcon"
                src="https://img.icons8.com/color/32/000000/video.png"
              />
              <span className="shareItemText">Videos</span>
            </div>

            <div className="shareItem">
              <img
                className="shareIcon"
                src="https://img.icons8.com/color/32/000000/planner.png"
              />
              <span className="shareItemText">Events</span>
            </div>

            <div className="shareItem">
              <img
                className="shareIcon"
                src="https://img.icons8.com/color/32/000000/news.png"
              />
              <span className="shareItemText">Article</span>
            </div>
            <div className="shareItem">
              <button className="shareBtn">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
