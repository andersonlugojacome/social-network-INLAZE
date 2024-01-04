import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  getPosts(): Observable<Post[]> {
  return this.http.get<Post[]>(`${this.BASE_URL}/posts`)
  }
  getPost(id: string): Observable<Post> {
  return this.http.get<Post>(`${this.BASE_URL}/posts/${id}`)
  }
  createPost(post: Post): Observable<Post> {
  return this.http.post<Post>(`${this.BASE_URL}/posts/create`, post)
  }
  updatePost(id: string, post: Post): Observable<Post> {
  return this.http.put<Post>(`${this.BASE_URL}/posts/update?postsID=${id}`, post)
  }
  deletePost(id: string): Observable<Post> {
  return this.http.delete<Post>(`${this.BASE_URL}/posts/delete?postsID=${id}`)
  }
}
