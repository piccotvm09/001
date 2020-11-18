import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAllUsers(){
    return [ // Array
      {id:1,name:'a',age:20,gender:'male',cell:123456789,bloodgroup:'b-negative'}, // object
      {id:2,name:'b',age:22,gender:'male',cell:123456789,bloodgroup:'a-negative'},
      {id:3,name:'c',age:24,gender:'male',cell:123456789,bloodgroup:'b-positive'},
      {id:4,name:'d',age:26,gender:'male',cell:123456789,bloodgroup:'a-positive'},
    ];

  }
getUser(id:number){
  return this.getAllUsers();

}

  }

