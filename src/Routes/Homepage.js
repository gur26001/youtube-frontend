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
    return (
    <section>
        <header className="App-header">
            <Navbar/>
        </header>
        <main>
            <Sidebar/>

            <Videolist videoData={Data}/>
        
        </main>
    </section>
    );
}