import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL="http://localhost:3000";
  httpClient=inject(HttpClient);
  constructor() { }

  getUsers(){
    return this.httpClient.get<User[]>(this.apiURL+'/users');
  }
  getUser(id:string){
    return this.httpClient.get<User>(this.apiURL+'/users/'+id);
  }
  addUser(model:User){
    return this.httpClient.post(this.apiURL+'/users', model)
  }
  updateUser(id:string, model:User){
    return this.httpClient.put(this.apiURL + '/users/' + id, model);
  }
  deleteUser(id:string){
    return this.httpClient.delete(this.apiURL + '/users/' + id);
  }

}
