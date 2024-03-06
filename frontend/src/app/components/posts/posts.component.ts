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
    // var myArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3];
    // //Creo un objeto para almacenar las frecuencias de cada número
    // const histograma: { [key: number]: string } = {};

    // // Inicializo el histograma con todas las frecuencias en cero
    // for (let i = 1; i <= 5; i++) {
    //   histograma[i] = '';
    // }
    // // Recorro el arreglo y cuento cual se repite de cada número
    // myArray.forEach(numero => {
    //   histograma[numero] += '*';
    // });

    // // Muestro el histograma
    // for (let i = 1; i <= 5; i++) {
    //   console.log(`${i}: ${histograma[i]}`);
    // }
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
      } else {
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
