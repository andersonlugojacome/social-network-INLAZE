import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../interfaces/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  //creo las funciones para obtener los users, crearlos, actualizarlos y eliminarlos
  // [Nest] Mapped {/users, GET} route +0ms
  // [Nest] Mapped {/users/:usersID, GET} route +0ms
  // [Nest] Mapped {/users/delete, DELETE} route +1ms
  // [Nest] Mapped {/users/update, PUT} route +0ms

  BASE_URL: string = 'http://localhost:3000';

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.BASE_URL + '/users');
  }
  getUser(id: string): Observable<Users> {
    return this.http.get<Users>(this.BASE_URL + '/users/' + id);
  }
  //without JWT
  createUser(post: Users): Observable<Users> {
    return this.http.post<Users>(this.BASE_URL + '/users/create', post);
  }
  updateUser(id: string, post: Users): Observable<Users> {
    return this.http.put<Users>(this.BASE_URL + '/users/update?usersID=' + id, post);
  }
  deleteUser(id: string): Observable<Users> {
    return this.http.delete<Users>(this.BASE_URL + '/users/delete?usersID=' + id);
  }
  loginUser(email: string, password: string): Observable<Users> {
    return this.http.get<Users>(this.BASE_URL + '/users/login?email=' + email + '&password=' + password);
  }
  //register with JWT /auth/register
  registerUser(user: Users): Observable<Users> {
    return this.http.post<Users>(this.BASE_URL + '/auth/register', user);
  }

}
