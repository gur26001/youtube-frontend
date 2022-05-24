import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Videolist from "../Components/Videolist";
import './Homepage.css';

export default function Homepage(){
    return (
    <section>
        <header className="App-header">
            <Navbar/>
        </header>
        <main>
            <Sidebar/>
          {/* video:
            1.get data from api
            2.then show it here 
            3.clicking on each video*/}
            
            <Videolist/>
        
        </main>
    </section>
    );
}