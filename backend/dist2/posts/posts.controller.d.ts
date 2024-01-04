import { PostsService } from "./posts.service";
import { CreatePostsDTO } from "./dto/posts.dto";
export declare class PostsController {
    private PostsService;
    constructor(PostsService: PostsService);
    createPosts(res: any, createPostsDTO: CreatePostsDTO): Promise<any>;
    getPostss(res: any): Promise<any>;
    getPosts(res: any, PostsID: any): Promise<any>;
    deletePosts(res: any, PostsID: any): Promise<any>;
    updatePosts(res: any, createPostsDTO: CreatePostsDTO, PostsID: any): Promise<any>;
}
