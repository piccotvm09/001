import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

interface user{
  id:number;
  name:string;
  age:number;
  gender:string;
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  users:user[];


  constructor(private  userService:UserService,private router:Router) { }

  ngOnInit() {
   this.users= this.userService.getAllUsers();
  }
  clicked(abdul: number){
    this.router.navigate(['user/',+ abdul]);
  }

}
