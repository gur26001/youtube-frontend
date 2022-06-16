import sidebarcss from './Sidebar.module.css';
import { AccessTime, AccountCircle, Album, CompareArrowsSharp, CompassCalibrationRounded, Explore, Feedback, Flag, GroupWork, Help, Home, KeyboardArrowDown, OndemandVideo, Settings, Subscriptions, ThumbUpAltSharp, Videocam, VideoLibrary } from "@mui/icons-material";

export default function Sidebar(){
    return(
        <div className={sidebarcss.sideBar} style={{backgroundColor: "white"}} >
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
            <Subscriptions/> Subscriptions
            </span>
            
            <hr/>
            
            <span>
            <VideoLibrary/> Library
            </span>

            <span>
            <AccessTime/> History
            </span>
            
            <span>
            <OndemandVideo/> Your videos
            </span>
            
            <span>
            <ThumbUpAltSharp/> Liked videos
            </span>
            
            <span>
            <KeyboardArrowDown/> Show more
            </span>
            <hr/>
            
            <span>
            <Settings/> Settings
            </span>
            <span>
            <Flag/> Report history
            </span>
            <span>
            <Help/> Help
            </span>
            <span>
            <Feedback/> Send feedback
            </span>
            <hr/>
            <div className={sidebarcss.others}>
                About Press Copyright Contact us <br/> Creators Advertise Developers
                <br/>
                TermsPrivacyPolicy &#38; SafetyHow YouTube worksTest new features
            </div>

        </div>       
    );
}