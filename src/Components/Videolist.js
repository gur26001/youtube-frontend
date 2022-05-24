import { Link } from "react-router-dom";
import Videocardhome from "./Videocardhome";
import "./Videolist.css";

export default function Videolist(){
    return(
        <div className="list">
            <Link style={{ textDecoration: 'none' }} to={'/'}>
                <Videocardhome title="" channel_name="" channel_icon="" views_num="2.4" views_unit="M" date=""  />
            </Link>
            
        
        </div>
    );
}