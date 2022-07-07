
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {useEffect,useState} from 'react';

import './HomePage.css';

export default function HomePage(props){
    
    const [postdata,setpostdata] = useState({flag:false,postdata:null});

    useEffect(()=>{
            async function getData(){
                let url = 'http://localhost:3001/postdata';
                let res = await fetch(url);
                let data = await res.json();
                console.log(data);
                setpostdata({flag:true,postdata:data});
            }
        
            getData();
        },[]);
    


    return(
        <div>
            <div class="container rounded bg-white mt-5 mb-5"> 
                <div class="row"> 
                    <div class="col-md-3 border-right"> 
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            
                        </div>
                                
                    </div> 
                    <div class="col-md-5 border-right"> 
                        <div class="p-3 py-5"> 
                            
                        {postdata.postdata.map((post)=>{
                                return(
                                    <div>
                                        <h6>{post.postedby}</h6>
                                        <img style={{width: 400, height: 400}} src={"data:image/jpg;base64,"+post.imagestring} alt="Red" />
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} 
                                                    checkedIcon={<Favorite />}
                                            name="checkedH" />}
                                        />
                                        {/* <i class="fa-solid fa-message-middle"></i>
                                        <i class="fa-light fa-paper-plane"></i> */}
                                        
                                        <p><b>{post.likecount} likes</b></p>
                                        <p><b>{post.postedby} </b>{post.caption}</p>
                                        
                                        
                                    </div>
                                );
                            })}
                            
                        </div>
                    </div> 
                    <div class="col-md-3 "> 
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            
                        </div>
                                
                    </div> 
                </div>
            </div>
        </div>
    );
}