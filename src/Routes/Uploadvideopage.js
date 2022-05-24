import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Uploadvideoform from "../Components/Uploadvideoform";
import './Uploadvideopage.css';
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";

export default function Uploadvideo() {
    
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
            
            <main>
                <Sidebar/>
                <Uploadvideoform onSub={uploadNewVideo}/>
            </main>
        </section>
    );
}