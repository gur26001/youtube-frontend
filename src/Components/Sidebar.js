import './Sidebar.css';
import { AccessTime, AccountCircle, Album, CompareArrowsSharp, CompassCalibrationRounded, Explore, Feedback, Flag, GroupWork, Help, Home, KeyboardArrowDown, OndemandVideo, Settings, Subscriptions, ThumbUpAltSharp, Videocam, VideoLibrary } from "@mui/icons-material";

export default function Sidebar(){
    return(
        <div className='side-bar'>
            <span>
            <Home/>Home
            </span>
            <span>
            <Explore/>Explore
            </span>
            <span>
            <GroupWork/>Shorts
            </span>
            <span>
            <Subscriptions/>
            </span>
            
            <hr/>
            
            <span>
            <VideoLibrary/>
            </span>
            
            <span>
            <AccessTime/>
            </span>
            
            <span>
            <OndemandVideo/>
            </span>
            
            <span>
            <ThumbUpAltSharp/>
            </span>
            
            <span>
            <KeyboardArrowDown/>
            </span>
            <hr/>
            
            <span>
            <Settings/>
            </span>
            <span>
            <Flag/>
            </span>
            <span>
            <Help/>
            </span>
            <span>
            <Feedback/>
            </span>
            <hr/>
            <div className="others">
                About Press Copyright Contact us <br/> Creators Advertise Developers
                <br/>
                TermsPrivacyPolicy &#38; SafetyHow YouTube worksTest new features
            </div>

        </div>       
    );
}