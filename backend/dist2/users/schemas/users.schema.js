"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
exports.UsersSchema = new mongoose_1.Schema({
    fullName: String,
    age: Number,
    email: String,
    password: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date
});
//# sourceMappingURL=users.schema.js.map