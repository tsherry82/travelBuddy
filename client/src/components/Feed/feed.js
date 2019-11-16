import React from "react";
// import { PromiseProvider } from "mongoose";

export default function Feed (props) {
    return (
        <div className="modal-body">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <hr></hr>
          
                    <div className="postData">{props.title}</div>
                    <div className="postData">{props.post}</div>
                    <div className="postData">{props.author}</div>
                    <div className="postData">{props.date}</div>
                
                </div>
            </div>    
    </div>
        
    );
}