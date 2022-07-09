import React from "react";
import './Popup.css';




export default function Popup(props){


    return(props.trigger)?(
       <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={()=> props.setTrigger(false)}>close</button>
            <div className="header"> 
                Comments
            </div> 
            <div className="content">
                {' '}<b>somerandomuser</b> This is Random user comment<br /> <b>Otheruser</b> This is Other user comment
            </div> 
            <div className="actions"> 
            </div>
            { props.childern }
        </div>
       </div>
    ):"";
}