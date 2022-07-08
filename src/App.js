import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import HomePage from './components/HomePage/HomePage';
import UpdatePost from './components/UpdatePost/UpdatePost';
import NavbarLogin from './components/NavbarLogin/NavbarLogin';
import NavbarHome from './components/NavbarHome/NavbarHome';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import ViewFriends from './components/ViewFriends/ViewFriends';
import ViewPosts from './components/ViewPosts/ViewPosts';
import Popup from './components/Popup/Popup';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userdata,setuserdata]= useState({flag:true,userdata:null});

  return (
    <Router>
      <div>
        {!isLoggedIn && <NavbarLogin/>}
        {isLoggedIn && < NavbarHome setIsLoggedIn={setIsLoggedIn} />}
          <div >
            <div >
              <Routes>
                <Route exact path="/" element={<Login setuserdata={setuserdata} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/sign-in" element={<Login setuserdata={setuserdata} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/sign-up" element={<Signup />} />  
                <Route path="/home" element={<ProtectedRoute isLoggedIn={isLoggedIn}><HomePage userdata={userdata}/></ProtectedRoute>} />
                <Route path="/updatepost" element={<ProtectedRoute isLoggedIn={isLoggedIn}><UpdatePost userdata={userdata}/></ProtectedRoute>} />
                <Route path="/updateprofile" element={<ProtectedRoute isLoggedIn={isLoggedIn}><UpdateProfile userdata={userdata}  /></ProtectedRoute>} />
                <Route path="/viewposts" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ViewPosts userdata={userdata}/></ProtectedRoute>} />
                <Route path="/viewfriends" element={<ProtectedRoute isLoggedIn={isLoggedIn}><ViewFriends userdata={userdata}  /></ProtectedRoute>} />
              </Routes>
            </div>
          </div>
      </div>
      
     
    </Router>  
  );
}

export default App;
