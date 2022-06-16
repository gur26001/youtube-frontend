import Sidebar from "../Components/Sidebar";
import Video from "../Components/Video";
import videopagec from './Videopage.module.css';
import { useState } from "react";
import RecommendedvideoSidebar from "../Components/RecommendedvideoSidebar";



export default function Videopage(props){

    const [isSidebarOn,setIsSidebarOn] = useState(false);

    return(
        <main className={videopagec.container}>
            { isSidebarOn && <Sidebar/>}
            
            <Video />
            
            <section className={videopagec.otherVids} >
                <RecommendedvideoSidebar/>
            </section>
        </main>
    );
};