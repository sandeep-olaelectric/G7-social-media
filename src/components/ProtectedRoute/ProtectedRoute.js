import {Navigate} from 'react-router-dom';

export default function ProtectedRoute(props){
    if(props.isLoggedIn == true){
        return props.children;
    }else{
        return <Navigate to='/' replace/>
    }
}