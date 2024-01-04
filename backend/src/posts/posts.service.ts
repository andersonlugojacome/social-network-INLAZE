import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Posts } from "./interfaces/posts.interface";
import { CreatePostsDTO } from "./dto/posts.dto";

@Injectable()
export class PostsService {

    constructor(@InjectModel('Posts') private readonly PostsModel: Model<Posts>) {}

    // Get all Postss
    async getPostss(): Promise<Posts[]> {
        const posts = await this.PostsModel.find();
        return posts;
    }
    
    // Get a single Posts
    async getPosts(postsID: string): Promise<Posts> {
        const Posts = await this.PostsModel.findById(postsID); 
        return Posts;
    }

    // Post a single Posts
    async createPosts(createPostsDTO: CreatePostsDTO): Promise<Posts> {
        const newPosts = new this.PostsModel(createPostsDTO);
        return newPosts.save();
    }

    // Delete Posts
    async deletePosts(postsID: string): Promise<any> {
        const deletedPosts = await this.PostsModel.findOneAndDelete({ _id: postsID});
        return deletedPosts;
    }

    // Put a single Posts
    async updatePosts(postsID: string, createPostsDTO: CreatePostsDTO): Promise<Posts> {
        const updatedPosts = await this.PostsModel
                            .findByIdAndUpdate(postsID, createPostsDTO, {new: true});
        return updatedPosts;
    }

}
