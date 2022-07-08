// import Svg from 'react-native-svg'
import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
// import CommentIcon from '@mui/icons-material/Comment';

import 'reactjs-popup/dist/index.css';
import Popup from './components/Popup/Popup';



import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import {useEffect,useState} from 'react';

import './HomePage.css';
import { display } from '@mui/system';
// import { IconButton } from '@material-ui/core';




export default function HomePage(props){
    const [button,setButton]=useState(false);

    const [postdata,setpostdata] = useState({flag:false,postdata:null});

    const [likecount,setlikecount] = useState(98);
    const [temp,settemp]= useState(0);
    
    const increaselikecount = async (event)=>{
        if(temp==0)
        {
        setlikecount(likecount+1);
        settemp(temp+1);
        }

       
    }

    useEffect(()=>{
            async function getData(){
                let url = 'http://localhost:3001/postdata';
                let res = await fetch(url);
                let data = await res.json();
                
                setpostdata({flag:true,postdata:data});
            }
        
            getData();
        },[]);
    
    const [count,setcount]= useState(0);
    const commentfunction =async (event)=>{
        if(count%2==0){
            
            document.getElementById('changecomment').style.display='block';
            setcount(count+1);
        }else{
            document.getElementById('changecomment').style.display='none';
            setcount(count+1);
        }
    }


    const [x,setx]=useState(0);
    const removecommentfunction= async(event)=>{
        console.log("hey add comment");
        if(x%2==0)
        {
            console.log("x is 0");
        document.getElementById('changecomment').style.display='none';
        document.getElementById('changecomment').innerHTML=document.getElementById('newclass').innerHTML;
        setx(x+1);
        setcount(count+1);
        }
        else if(x%2==1)
        {
            console.log("x is 1");
        document.getElementById('changecomment').style.display='block';
        setx(x+1);
        }
    }


    
    const toggleText = async(event)=>{
        var points = 
            document.getElementById("points");

        var showMoreText =
            document.getElementById("moreText");

        var buttonText =
            document.getElementById("textButton");
        if (points.style.display === "none") {
            showMoreText.style.display = "none";
            points.style.display = "inline";
            buttonText.innerHTML = "Show More";
        }
        else {
            showMoreText.style.display = "inline";
            points.style.display = "none";
            buttonText.innerHTML = "Show Less";
        }
    }

    return(
        <div>
            <div className="container rounded bg-white mt-5 mb-5"> 
                <div className="row"> 
                    <div className="col-md-3 border-right"> 
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            
                        </div>
                                
                    </div> 
                    <div className="col-md-5 border-right"> 
                        <div className="p-3 py-5"> 
                            
                        {/* {postdata.postdata.map((post)=>{
                                return(
                                    <div>
                                        <h6>{post.postedby}</h6>
                                        <img style={{width: 400, height: 400}} src={"data:image/jpg;base64,"+post.imagestring} alt="Red" />
                                        <FormControlLabel
                                            control={<Checkbox icon={<FavoriteBorder />} 
                                                    checkedIcon={<Favorite />}
                                            name="checkedH" />}
                                        />
                                         <i class="fa-solid fa-message-middle"></i>
                                        <i class="fa-light fa-paper-plane"></i>
                                        
                                        <p><b>{post.likecount} likes</b></p>
                                        <p><b>{post.postedby} </b>{post.caption}</p>
                                        
                                        
                                    </div>
                                );
                            })} 
                        */}


                            <div>
                                <h6>Shiva</h6>
                                <button onDoubleClick={increaselikecount} style={{border:0}}><img src="https://i.ibb.co/Sf2KMrz/lorem-FC5-QJp2qo-Pk-unsplash.jpg" alt="lorem-FC5-QJp2qo-Pk-unsplash" border="0" width={400} /></button> 
                                    <FormControlLabel
                                                control={<Checkbox icon={<FavoriteBorder />} 
                                                        checkedIcon={<Favorite />}
                                                name="checkedH" />}
                                    />
                                    {/* <button className='likeButton'><p><span class="glyphicon glyphicon-heart"></span></p></button>  */}
                                    
                                    
                                    {/* <IconButton aria-label='show-comments'>
                                        <CommentIcon style={{ color : "dodgerblue"}} />
                                    </IconButton>
                                    <FontAwesomeIcon icon="fa-regular fa-message-middle" />
                                    <FaBeer /> */}
                                    <button onClick={commentfunction} style={{border: 0}}><span class="glyphicon glyphicon-comment commentButton"></span></button>
                                    <div id='changecomment' style={{display:'none'}}>
                                        <label class="labels">Comment</label>
                                        <input type="text" className="form-control" placeholder="add comment" ></input>
                                        <button onClick={removecommentfunction}>Add comment</button>
                                    </div>
                                    <div id='newclass' style={{display:'none'}}>
                                        <label className="labels">Comment</label>
                                        <input type="text" className="form-control" placeholder="add comment" ></input>
                                        <button onClick={removecommentfunction}>Add comment</button>
                                    </div>
                                    <p id='comment'>

                                    </p>
                                    <p><b>{likecount} likes</b></p>

                                    <p><b>Shiva </b>Instagram was born out of necessity- a need to provide a convenient and one-stop social media portal to all the people. <span id="points">...</span><span id="moreText"> This necessity was as personal to me as it was universal.This need combined with my passion forteaching resulted in GeeksforGeeks as we know today. My message to you, in our inaugural edition of Geeks Digest, would be that if you are looking for a problem to work on, you don’t need to look very far for it. All you should do is to look around yourself.</span></p>
                                    <button  onClick={toggleText} id="textButton"> Show More </button>
                                    <br/>
                                    {/* <Popup trigger={<button id="textButton">View all comments</button>} 
                                    position="right center">
                                    <div>Comments</div>
                                    <button>Click here</button>
                                    </Popup> */}
                                    
                                    <br/>


                                    <Popup trigger={button} setTrigger={setButton}>

                                    </Popup>

                                    
                            </div>

                        
                            
                        </div>
                    </div> 
                    <div classname="col-md-3 "> 
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                            
                        </div>
                                
                    </div> 
                </div>
            </div>
        </div>
    );
}