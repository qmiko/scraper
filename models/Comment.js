var mongoose = require("mongoose");

// reference to schema constructor
var Schema = mongoose.Schema;

// model
var CommentSchema = new Schema({
    title: String,
    body: String
});

// creates model
var Comment = mongoose.model("Comment", CommentSchema);

// export Comment model
module.exports = Comment