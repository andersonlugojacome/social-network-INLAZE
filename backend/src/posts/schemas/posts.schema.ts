import { Schema } from "mongoose";
import * as mongoose from 'mongoose';


export const PostsSchema = new Schema({
    title: String,
    content: String,
    likes: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },

});

