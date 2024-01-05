import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  //creo las funciones para obtener los posts, crearlos, actualizarlos y eliminarlos
  // [Nest] Mapped {/Posts, GET} route +0ms
  // [Nest] Mapped {/Posts/:PostsID, GET} route +0ms
  // [Nest] Mapped {/Posts/delete, DELETE} route +1ms
  // [Nest] Mapped {/Posts/update, PUT} route +0ms

  BASE_URL: string = 'http://localhost:3000';

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.BASE_URL + '/posts');
  }
  getPost(id: string): Observable<Posts> {
    return this.http.get<Posts>(this.BASE_URL + '/posts/' + id);
  }
  createPost(post: Posts): Observable<Posts> {
    return this.http.post<Posts>(this.BASE_URL + '/posts/create', post);
  }
  updatePost(id: string, post: Posts): Observable<Posts> {
    return this.http.put<Posts>(this.BASE_URL + '/posts/update?PostsID=' + id, post);
  }
  deletePost(id: string): Observable<Posts> {
    return this.http.delete<Posts>(this.BASE_URL + '/posts/delete?PostsID=' + id);
  }

}
