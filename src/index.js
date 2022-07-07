import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import HomePage from './components/HomePage/HomePage';
import UpdatePost from './components/UpdatePost/UpdatePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<HomePage />
    <App />
    //<UpdatePost />
);


