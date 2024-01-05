"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
exports.PostsSchema = new mongoose_1.Schema({
    title: String,
    content: String,
    likes: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});
//# sourceMappingURL=posts.schema.js.map