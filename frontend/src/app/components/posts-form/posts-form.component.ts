import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Posts } from '../../interfaces/posts';
import { PostsService } from '../../services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrl: './posts-form.component.css'
})
export class PostsFormComponent implements OnInit {
  
  posts: Posts = {
    title: '',
    content: '',
    likes: 0,
    userID: 0
    
  };

  edit: boolean = false;

  constructor(private postsService: PostsService, private router: Router, private activateRoute: ActivatedRoute ) { }

  ngOnInit() {
    const params = this.activateRoute.snapshot.params;
    console.log(params);
    if (params['id']) {
      this.postsService.getPost(params['id'])
        .subscribe(
          res => {
            console.log(res);
            this.posts = res;
            this.edit = true;
          },
          err => console.log(err)
        )
     }
    
  }

 
  onSubmit() {
    this.postsService.createPost(this.posts)
    .subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/posts']);
      },
      (error: any) => {
        console.log(error);
      });

   

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.posts, null, 4));
  }
  onEdit() {
    delete this.posts.createdAt;

    if (this.posts._id) {
      this.postsService.updatePost(this.posts._id.toString() , this.posts)
        .subscribe(
          (response: any) => {
            console.log(response);
            this.router.navigate(['/posts']);
          },
          (error: any) => {
            console.log(error);
          });
    }
  }
  onCanCel() {
    this.router.navigate(['/posts']);
   
  }

}

