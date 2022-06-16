import { Link } from 'react-router-dom';
import {Search,Apps, Notifications,VideoCall,Menu, Mic } from '@mui/icons-material';
import logo from './media/logo.png';
import avatar from './media/avatar.png';
import navbarcss from './Navbar.module.css';


function Navbar() {
    return(
        <nav className={navbarcss.Navbar}>
            <div className={navbarcss.navbarMenu}>            
                <Menu/>
                <div className={navbarcss.navbarLogo}>
                    <Link to={"/"}>
                        <img src={logo} />
                    </Link>
                   
                </div>            
                
            </div>

            <div className={navbarcss.searchbar}>
                <input/>
                <span className={navbarcss.press}>
                    <Search  className={navbarcss.searchbtn} />
                    <Mic/>
                </span>
            </div>

            <div className={navbarcss.userBar}>             
                <Link to={"/uploadvideo"}>
                    <VideoCall/>
                </Link>
                
            

                <Apps/>
                <Notifications/>
                <div className={navbarcss.Avatar}>
                    <img src={avatar}/>
                </div>            
            </div>
            
            
        </nav>
        
    );
}

export default Navbar;