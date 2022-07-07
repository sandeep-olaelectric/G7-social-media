import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import './UpdatePost.css'

export default function UpdatePost(props){


    const navigate = useNavigate();
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [text,setText] = useState(null);

    const handleSubmit = async(event)=>{
        event.preventDefault();

        var today = new Date();

        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        var dateTime = date+' '+time;

        var name='shiva';
        let base64String = "";
        var file = selectedImage;
        var reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");
      
            let imageBase64Stringsep = base64String;
      
            
            console.log(base64String);
        }
        reader.readAsDataURL(file);
        
        let postedPerson='user';

        let user= {
            imagestring : base64String ,
            Caption: event.target.elements.textvalue.value,
            DateTime: dateTime,
            postedby: postedPerson,
        }
        setText(user.Caption);

        console.log(user.imagestring);
        console.log(user.imagestring===base64String);


        let url ='http://localhost:3001/updatepost';
        let options ={
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        }

        let res=await fetch(url,options);
        let data = await res.json();
        if(data.flag){
            navigate('/home');
        }
    }

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
                            
                            <form onSubmit={handleSubmit}>
                                <h1 className='updatepost'>Update Post</h1>
                                    {selectedImage && (
                                        <div>
                                        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                                        <br />
                                        <button onClick={()=>setSelectedImage(null)}>Remove</button>
                                        </div>
                                    )}
                                <br />
                                
                                <br /> 
                                <input
                                    type="file"
                                    name="myImage"
                                    onChange={(event) => {
                                        setSelectedImage(event.target.files[0]);
                                    
                                    }}
                                />
                                
                                
                                <br></br>
                                <br></br>
                                <textarea name="textvalue" placeholder='Write a caption...'></textarea>
                                <br></br>
                                <input className='uploadpostbutton' type='submit' value='uploadpost'/>
                                

                                
                                
                            </form>
                            
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