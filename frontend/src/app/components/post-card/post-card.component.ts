import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostsService } from '../../services/posts.service';


@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
//llamo la funcion getPosts() del servicio posts.service.ts


export class PostCardComponent implements OnInit {

  constructor(private postsService: PostsService) { }
  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postsService.getPosts().subscribe(
      res => console.log(res),
      err => console.log(err),
      );
  }
 

}
