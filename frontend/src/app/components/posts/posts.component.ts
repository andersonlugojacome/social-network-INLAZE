import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../interfaces/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.getPosts();
   
  }
  getPosts() {
    this.postsService.getPosts().subscribe(
      res => {
        this.posts = res;
        },
      err => console.log(err)
    );
  }
  // onEdit(post: Posts) {
  //   this.postsService.selectedPost = post;
  // }
  onDelete(id: string) {

    //agregamos un alert para confirmar la eliminacion del post
    if (confirm('Are you sure you want to delete it?')) {
      this.postsService.deletePost(id).subscribe(
        res => {
          console.log(res);
          this.getPosts();
        },
        err => console.log(err)
      );
    }else
    {
      this.getPosts();
    }


    // this.postsService.deletePost(id).subscribe(
    //   res => {
    //     console.log(res);
    //     this.getPosts();
    //   },
    //   err => console.log(err)
    // );
  }

  onLike(id: string) {
    // this.postsService.likePost(id).subscribe(
    //   res => {
    //     console.log(res);
    //     this.getPosts();
    //   },
    //   err => console.log(err)
    // );
  }
  onDislike(id: string) {
    // this.postsService.dislikePost(id).subscribe(
    //   res => {
    //     console.log(res);
    //     this.getPosts();
    //   },
    //   err => console.log(err)
    // );
  }




  // likePost(id: string) {
  //   this.postsService.likePost(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.getPosts();
  //     },
  //     err => console.log(err)
  //   );
  // }
  // dislikePost(id: string) {
  //   this.postsService.dislikePost(id).subscribe(
  //     res => {
  //       console.log(res);
  //       this.getPosts();
  //     },
  //     err => console.log(err)
  //   );
  // }


}
