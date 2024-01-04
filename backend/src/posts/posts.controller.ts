import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { PostsService } from "./posts.service";
import { CreatePostsDTO } from "./dto/posts.dto";

@Controller('Posts')
export class PostsController {

    constructor(private PostsService: PostsService) { }

    // Add Posts: /Posts/create
    @Post('/create')
    async createPosts(@Res() res, @Body() createPostsDTO: CreatePostsDTO) {
        const Posts = await this.PostsService.createPosts(createPostsDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Posts Successfully Created',
            Posts
        });
    }

    // Get Postss /Posts
    // @Get('/list')
    @Get('/')
    async getPostss(@Res() res) {
        const Postss = await this.PostsService.getPostss();
        return res.status(HttpStatus.OK).json(Postss);
    }

    // GET single Posts: /Posts/5c9d46100e2e5c44c444b2d1
    @Get('/:PostsID')
    async getPosts(@Res() res, @Param('PostsID') PostsID) {
        const Posts = await this.PostsService.getPosts(PostsID);
        if (!Posts) throw new NotFoundException('Posts does not exist!');
        return res.status(HttpStatus.OK).json(Posts);
    }

    // Delete Posts: /delete?PostsID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deletePosts(@Res() res, @Query('PostsID') PostsID) {
        const PostsDeleted = await this.PostsService.deletePosts(PostsID);
        if (!PostsDeleted) throw new NotFoundException('Posts does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Posts Deleted Successfully',
            PostsDeleted
        });
    }

    // Update Posts: /update?PostsID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updatePosts(@Res() res, @Body() createPostsDTO: CreatePostsDTO, @Query('PostsID') PostsID) {
        const updatedPosts = await this.PostsService.updatePosts(PostsID, createPostsDTO);
        if (!updatedPosts) throw new NotFoundException('Posts does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Posts Updated Successfully',
            updatedPosts 
        });
    }

}
