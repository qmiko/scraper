var mongoose = require("mongoose");

// reference to schema constructor
var Schema = mongoose.Schema;

//model
var ArticleSchema = new Schema({
    title:{
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }
});

// creates model
var Article = mongoose.model("Article", ArticleSchema);

// export Article model
module.exports = Article