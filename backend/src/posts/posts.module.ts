import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
//Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { PostsSchema } from './schemas/posts.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Posts', schema: PostsSchema}])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
