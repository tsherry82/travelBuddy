import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Feed from "../components/Feed/feed";
import Post from "../components/Post/post";
import API from "../utils/API";





class FeedPage extends Component {

  constructor() {
    super();
    this.state = {
        title: "",
        post: "",
        feed: []
    };
  }

  componentDidMount(){
    this.getPosts();

  }

  getPosts = () => {
    API.getPosts()
    .then(res => {
      this.setState({feed: res.data});
      console.log(res);
    }) 
  }

  onChange =(e) => {
    e.preventDefault();
    const {name,value} = e.target
    this.setState({[name]:value})
  
  }

  onSubmit =(e) => {
    e.preventDefault();
    console.log("submit");
    API.savePost({title : this.state.title,
    post : this.state.post}).then(res =>  {
   this.getPosts();
   this.setState({
    title: "",
    post: ""
   })

    });

  }


    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron className="home">
                  <h1>Feed</h1>
                  <h3>Under Construction</h3>
                </Jumbotron>
                </Col>
              <Post onChange = {this.onChange} 
              title = {this.state.title}
              post = {this.state.post}
              onSubmit = {this.onSubmit}
              ></Post>
              {this.state.feed.length ? (this.state.feed.map(postData => <Feed
              title = {postData.title}
              post = {postData.post}
              author = {postData.author}
              date = {postData.date}></Feed>)) : "No posts"}
        </Row>
        
      </Container>
        );
    }
}

export default FeedPage;
