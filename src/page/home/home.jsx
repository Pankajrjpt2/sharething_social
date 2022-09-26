import "./home.css"
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/Sidebar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from "../../components/feeds/Feed"
export default function Home() {
    return (  
        <>
        <Topbar/>
        <div className="mainContainer">
            <Leftbar/>
            <Feed/>
            <Sidebar/>
        </div>
        
        </>
        
        
        
    );
}

