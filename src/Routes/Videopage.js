import Sidebar from "../Components/Sidebar";
import videopagec from './Videopage.module.css';
import svideo from '../Components/media/Sample-Videos-Mp425.mp4';
import { useState } from "react";


export default function Videopage(props){

    const [isSidebarOn,setIsSidebarOn] = useState(false);

    return(
        <main className={videopagec.container}>
            { isSidebarOn && <Sidebar/>}
            <section className={videopagec.currentVid} >
                <video controls autoPlay>
                    <source src={svideo} />
                </video>
                <div style={{padding:"10px"}} className={videopagec.videoDesc}>
                    <h2 style={{width:"100%",fontWeight:"lighter"}} className={videopagec.videoDescUPPER} >
                        {"videodescription"}
                    </h2>
                    
                    <p style={{width:"100%",margin:"5px"} } className={videopagec.videoDescLOWER}>
                        <p style={{color:"gray"}} >{114898898}views • {"FEB 24,2005"}   </p>
                    </p>


                </div>

                <div className={videopagec.channel} >
                    efeefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefeffefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefef
                </div>
                <div className={videopagec.comments} >
                    jnefnfenfinfenfiededededefeefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefeffefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefefef
                </div>

            </section>
            <section className={videopagec.otherVids} >
                
            </section>
        </main>
    );
};