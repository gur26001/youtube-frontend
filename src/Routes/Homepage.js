import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import './Homepage.js'
export default function Homepage(){
    return (
    <div>
        <header className="App-header">
            <Navbar/>
            <Sidebar/>
            {/* video:
            1.get data from api
            2.then show it here 
            3.clicking on each video*/}
        </header>
    </div>
    );
}