import { Document } from "mongoose";

export interface Posts extends Document {
    readonly title: string;
    readonly content: string;
    readonly likes: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
    readonly userId: string;
    
}