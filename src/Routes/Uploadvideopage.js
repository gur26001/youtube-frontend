import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Uploadvideoform from "../Components/Uploadvideoform";
import classes from './Uploadvideopage.module.css';
import { useNavigate } from "react-router-dom";


export default function Uploadvideo(props) {
    
    const navigate = useNavigate();
    function uploadNewVideo(data){
        fetch(
            'https://front-491c9-default-rtdb.firebaseio.com/videos.json',
            {
                method:'POST',
                body: JSON.stringify(data),  //object data to json
                headers:{
                    'Content-Type': 'application/json'
                }
                 
            }
        ).then(()=>{
            navigate('/');
        });
    } 
    return (
        <section>
            {/* user authethication before uploading */}
            <header>
                <Navbar/>    
            </header>
            
            <main className={classes.main}>
                <Sidebar/>
                <Uploadvideoform onSub={uploadNewVideo} chnl_logo= {props.channel_icon} />
            </main>
        </section>
    );
}