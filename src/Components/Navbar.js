import { Link } from 'react-router-dom';
import {Search,Apps, Notifications,VideoCall,Menu, Mic } from '@mui/icons-material';
import logo from './media/logo.png';
import avatar from './media/avatar.png';
import './Navbar.css';


function Navbar() {
    return(
        <nav className='Navbar'>
            <div className='navbar-menu'>            
                <Menu/>
                <div className='navbar-logo'>
                    <Link to={"/"}>
                        <img src={logo} />
                    </Link>
                   
                </div>            
                
            </div>

            <div className='searchbar'>
                <input/>
                <span className='press'>
                    <Search  className='searchbtn' />
                    <Mic/>
                </span>
            </div>

            <div className='user-bar'>             
                <Link to={"/uploadvideo"}>
                    <VideoCall/>
                </Link>
                
            

                <Apps/>
                <Notifications/>
                <div className='Avatar'>
                    <img src={avatar}/>
                </div>            
            </div>
            
            
        </nav>
        
    );
}

export default Navbar;