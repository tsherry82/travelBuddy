const express = require('express');
const router = express.Router();

const Search = require('../../models/Search');

router.get("/search",(req, res) =>  {
console.log("get search");
res.status(200);
Search.find().then(allSearches => {
    res.json(allSearches);
})
})

router.post("/search",(req, res) =>  {
    console.log("post search", req.body.search);
    Search.create({
        search: req.body.search,
    }).then(newSearch => {
        console.log('new search', newSearch);
        res.json(newSearch);
    })
    })


module.exports = router;