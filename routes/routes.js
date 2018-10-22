const express = require("express"),
    router = express.Router();
    

router.get('/', function(req, res){
    res.render('index');
});

router.get('/shows', function(req, res){
    res.render('shows');
});

router.get('/schedule', function(req, res){
    res.render('schedule');
});

router.get('/chat', function(req, res){
    res.render('chat');
});

router.get('/about', function(req, res){
    res.render('about');
});

router.get('/archive', function(req, res){
    res.render('archive');
});

    
module.exports = router;