import './Login.css';
import {useNavigate} from 'react-router-dom';



export default function Login(props){


    const navigate=useNavigate();

    const handleSubmit = async(event)=>{
      event.preventDefault();
      let user = {
        email: event.target.elements.email.value,
        password: event.target.elements.password.value
      }
      console.log(user.email);
      console.log(user.password);

      let url='http://localhost:3001/login';
      let options ={
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(user)
      }

      let res=await fetch(url,options);
      let data = await res.json();
      
      props.setIsLoggedIn(true);
      navigate('/home');
      
      

    }

    return(
      <div>
      <div className='Appp'>
        <div className='auth-wrapper'>
        <div className='auth-inner'>



        <form onSubmit={handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name='email'
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name='password'
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          {/* <button type="submit" className="btn btn-primary" onClick={handleLogin}>
            Submit
          </button> */}
          <input className="btn btn-primary" type='submit' value='login'/>
        </div>
        
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>




      </div>
          </div>
        </div>
       
        </div>
    );
}