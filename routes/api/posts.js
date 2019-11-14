const express = require('express');
const router = express.Router();

const Post = require('../../models/Post');

router.get("/posts",(req, res) =>  {
console.log("get posts");
res.status(200);
Post.find().then(allPosts => {
    res.json(allPosts);
})
})

router.post("/posts",(req, res) =>  {
    console.log("post posts", req.body);
    res.status(200);
    Post.create({
        title: req.body.title,
        post : req.body.post,
        author : "Blake"
    }).then(newPost => {
        res.json(newPost);
    })
    })


module.exports = router;