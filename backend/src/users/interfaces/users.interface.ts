import { Document } from "mongoose";

export interface Users extends Document {
    username: any;
    readonly fullName: string;
    readonly age: number;
    readonly email: string;
    readonly password: string;
    readonly posts: [string];
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
}