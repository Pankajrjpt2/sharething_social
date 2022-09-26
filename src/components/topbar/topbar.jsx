import "./topbar.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src="/assets/logo.png" alt="" className="logoImgs" />
        {/* <span className="logo">SHARETHING</span> */}
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        {/* <div className="topbarLinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div> */}

        <div className="topbarIcons">
          <div className="topbarIconContainer">
            <div className="topbarIconItem">
              <HomeIcon className="topbarIconImg" />
              {/* <span className="topbarIconBadge">3</span> */}
            </div>
            <div className="topbarIconText">
              <span className="topbarText">Home</span>
            </div>
          </div>

          <div className="topbarIconContainer">
            <div className="topbarIconItem">
              <GroupIcon className="topbarIconImg" />
              {/* <span className="topbarIconBadge">3</span> */}
            </div>
            <div className="topbarIconText">
              <span className="topbarText">Connections</span>
            </div>
          </div>

          <div className="topbarIconContainer">
            <div className="topbarIconItem">
              <BusinessCenterIcon className="topbarIconImg" />
              {/* <span className="topbarIconBadge">3</span> */}
            </div>
            <div className="topbarIconText">
              <span className="topbarText">Jobs</span>
            </div>
          </div>

          <div className="topbarIconContainer">
            <div className="topbarIconItem">
              <MessageIcon className="topbarIconImg" />
              {/* <span className="topbarIconBadge">3</span> */}
            </div>
            <div className="topbarIconText">
              <span className="topbarText">Messages</span>
            </div>
          </div>

          <div className="topbarIconContainer">
            <div className="topbarIconItem">
              <NotificationsIcon className="topbarIconImg" />
              {/* <span className="topbarIconBadge">3</span> */}
            </div>
            <div className="topbarIconText">
              <span className="topbarText">Notifications</span>
            </div>
          </div>
        </div>
        <img
          src="/assets/person/profilepic.jpeg"
          alt=""
          className="topbarImg"
        />
      </div>
    </div>
  );
}

export default Topbar;
