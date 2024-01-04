import { Schema } from "mongoose";
import * as mongoose from 'mongoose';


export const UsersSchema = new Schema({
    fullName: String,
    age: Number,
    email: String,
    password: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date
});

