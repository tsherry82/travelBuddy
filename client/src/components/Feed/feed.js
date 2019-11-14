import React from "react";
// import { PromiseProvider } from "mongoose";

export default function Feed (props) {
    return (
        <div className="modal-body">
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <hr></hr>
          
                    <div id="postArea">{props.title}</div>
                    <div>{props.post}</div>
                    <div>{props.author}</div>
                    <div>{props.date}</div>
                
                </div>
            </div>    
    </div>
        
    );
}