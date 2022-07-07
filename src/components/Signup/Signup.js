import {useNavigate} from 'react-router-dom';
import './Signup.css';

export default function Signup(props){

  const navigate=useNavigate();
  
  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log("hello")
    let user = {
        name: event.target.elements.Name.value,
        username: event.target.elements.username.value,
        email: event.target.elements.Emailaddress.value,
        password: event.target.elements.Password.value
    }
    console.log(user.name);
    console.log(user.username);
    console.log(user.email);
    console.log(user.password);
    let url="http://localhost:3001/signup";
    let options ={
      method: 'POST',
      headers:{
          'content-type':'application/json'
      },
      body: JSON.stringify(user)
    }

    let res= await fetch(url,options);
    let data = await res.json();
    if(data.flag)
    {
      navigate('/sign-in');
    }
    else
    {
      alert('signupfailed');
    }
  }




    return(
      <div className='App'>
        <div className='auth-wrapper'>
        <div className='auth-inner'>




        <div className='Signup'>
            <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Name</label>
          <input type="text" name='Name' className="form-control" placeholder="Name" />
        </div>

        <div className="mb-3">
          <label>user name</label>
          <input type="text" name='username' className="form-control" placeholder="username" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input type="email" name='Emailaddress' className="form-control" placeholder="Enter email" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" name='Password' className="form-control" placeholder="Enter password" />
        </div>

        <div className="d-grid">
          {/* <button  onClick={signuphandler} type="submit" className="btn btn-primary"> Sign Up </button> */}
          <input className="btn btn-primary" type='submit' value='Sign Up'/>
        </div>

        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
        </div>




          </div>
          </div>
        </div>
    );
}