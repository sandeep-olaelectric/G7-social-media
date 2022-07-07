import {Link} from 'react-router-dom';
import './NavbarHome.css'

export default function NavbarHome(props){

    const HandleLogout = async(event)=>{
        props.setIsLoggedIn(false);
    }


    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" >Insta</a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/home'><a className="nav-link home" href="#"><button class="btn"><i class="fa-solid fa-house-chimney"></i></button> <span className="sr-only">(current)</span></a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/updatepost' ><a className="nav-link" href="/updatepost"><i class="fa-solid fa-square-plus"></i></a></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle user" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa-regular fa-user"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to='/updateprofile' ><a className="dropdown-item" href="/updateprofile">Profile</a></Link>
                                <a className="dropdown-item" href="#">View Posts</a>
                                <a className="dropdown-item" href="#">Friends</a>

                                <div className="dropdown-divider" />
                                <button onClick={HandleLogout}><a className="dropdown-item" href="#">Logout</a></button>
                            </div>
                        </li>
                        <li>
                            
                        </li>
            
                    </ul>
                </div>
                
            </nav>



           
            
        </div>
    );
}