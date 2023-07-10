import mongoose from 'mongoose';
const { Schema } = mongoose;

// Check if the model already exists
const postSchema = mongoose.models.Post || mongoose.model('Post', new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
}, { timestamps: true }));

export default postSchema;