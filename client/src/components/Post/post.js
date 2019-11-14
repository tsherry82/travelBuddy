import React from "react";


export default function Post (props) {
    return (
        <div className="modal-body">
            <div className="container">
                <h5>New Post</h5>
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <p className="cool-font">Title</p>
                            <input value={props.title} onChange={props.onChange} className="form-control" name="title" type="text" id="title" placeholder="Enter title"></input>
                            
                            <p className="cool-font" >Post</p>
                            <textarea className="form-control" name="post" value={props.post} onChange={props.onChange} rows="3" id="postBox" placeholder="Enter Post Here!"></textarea>
                            
                            </div>
                                
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" id="postSubmit" onClick={props.onSubmit}>Submit</button>
                        </div>   
    </div>       
    );
}