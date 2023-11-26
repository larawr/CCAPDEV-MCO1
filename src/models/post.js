const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    postID: {
        type: Number,
        required: true,
    },
    accountID: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    postedon: {
        type: Date,
        required: true,
    },
    lastupdate: {
        type: Date,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
    },
    replies: [
        {
            accountID: {
                type: Number,
                required: true,
            },
            body: {
                type: String,
                required: true,
            },
            datetime: {
                type: Date,
                required: true,
            },
        }
    ],
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;