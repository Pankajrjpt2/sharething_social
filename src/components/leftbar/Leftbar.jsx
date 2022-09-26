import "./leftbar.css"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PagesIcon from '@mui/icons-material/Pages';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Leftbar() {
  return (
    <div className="leftbarMainContainer">
      
      <div className="profileContainer">
        <img src="/assets/person/cover1.jpeg" alt="" className="coverImg" />
        <img src="/assets/person/profilepic.jpeg" alt="" className="profileImg"/>
        <div className="profileName-Desc">
          <h3 className="userName">Ritika Shrivastava</h3>
          <p className="userDesc">“Let us take you into a deeper experience, make a moment a lasting conveyable memory. Let us help build your tribe.”</p>
        </div>
      </div>
      <hr className="horizontalLine" />
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <RssFeedIcon className="leftbarIcon"/>
            <span className="leftbarText">Feeds</span> 
          </li>
          <li className="leftbarListItem">
            <Diversity1Icon className="leftbarIcon"/>
            <span className="leftbarText">Friends</span> 
          </li>
          <li className="leftbarListItem">
            <LibraryBooksIcon className="leftbarIcon"/>
            <span className="leftbarText">Blog</span>
          </li>
          <li className="leftbarListItem">
            <PagesIcon className="leftbarIcon"/>
            <span className="leftbarText">Pages</span>
          </li>
          <li className="leftbarListItem">
            <AccountBoxIcon className="leftbarIcon"/>
            <span className="leftbarText">My Profile</span>
          </li>
          <li className="leftbarListItem">
            <LibraryBooksIcon className="leftbarIcon"/>
            <span className="leftbarText">Blog</span>
          </li>
          <li className="leftbarListItem">
            <Diversity1Icon className="leftbarIcon"/>
            <span className="leftbarText">Friends</span> 
          </li>
          <li className="leftbarListItem">
            <PagesIcon className="leftbarIcon"/>
            <span className="leftbarText">Pages</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
