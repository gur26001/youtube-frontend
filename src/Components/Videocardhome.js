import videocard from './Videocardhome.module.css';
import vide from './media/sample-mp4-file.mp4';
import {PlayArrow} from '@mui/icons-material';
import chanelicon from './media/guri.jpg';

export default function Videocardhome(props){
    // function playvideo(){
// add feature to turn or or off video on hovering or clicking play button
    // }
    return (
        <div className={videocard.card} >
            <div className={videocard.banner}>
                <video>
                    <source src={vide} type="video/mp4"/>
                </video>
                <PlayArrow className={videocard.btn}/>   
            </div>
            <div className={videocard.textfield}>
                <div className={videocard.upper_row}>
                    <img className={videocard.channel_icon} src={chanelicon} />            {/* channel icon */}
                    <p className={videocard.title}> {props.title} </p>
                    <span>
                        <div>•</div><div>•</div><div>•</div>
                    </span>
                </div>
                <div className={videocard.lower_row}>
                    <p className={videocard.channel_name}> {props.channel_name} </p>
                    <p> {props.views_num}{props.views_unit} views • {props.date}</p>
                </div>
                
                

            </div>

        </div>
    );
}