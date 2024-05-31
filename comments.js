// Create web server
// Get and post comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/zcomments');

// Create schema
var commentSchema = new mongoose.Schema({
    email: String,
    comment: String
});

// Create model
var Comment = mongoose.model('Comment', commentSchema);

// Create a new comment
var comment = Comment({email: '