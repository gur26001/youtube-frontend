import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Videolist from "../Components/Videolist";
import './Homepage.css';

const Data = [
    {
        id:1,
        title:"Guri singh first video",
        channel_name:"Gur23",
    },
    {
        id:2,
        title:"SECOND video",
        channel_name:"Gur24"
    }
];

export default function Homepage(){

    const [isLoading,setIsLoading] = useState(true);
    const [fetchedData,setFetchedData] = useState(null);

    useEffect(()=>{
        setIsLoading(true);
        fetch(
            'https://front-491c9-default-rtdb.firebaseio.com/videos.json'
        ).then((response)=>{
            return (response.json());
        }
        ).then( (data)=>{
            const videos = [];
            for(const key in data){
                const video={
                    id:key,
                    ...data[key]
                };
                videos.push(video);
            }
            setIsLoading(false);
            setFetchedData(videos);    
        }
        );

    }
    ,[]);

    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
      }
    
    return (
    <section>

        <main>
            <Sidebar/>

            <Videolist videoData={fetchedData}/>
    
        </main>
    </section>
    );
}