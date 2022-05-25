import { Link } from "react-router-dom";
import Videocardhome from "./Videocardhome";
import "./Videolist.css";

export default function Videolist(props){
    console.log(props.videoData);
    return(
        <div className="list">
                {
                    (props.videoData).map((ele)=>{
                        return <Videocardhome title={ele.title} channel_name={ele.channel_name} channel_icon="" views_num="2.4" views_unit="M" date=""  />
                    })
                }
                
        
        </div>
    );
}