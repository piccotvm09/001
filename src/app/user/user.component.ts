import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Router } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

detailId: any;
users: Array<any>= [];
user: Object;
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router) {
  this.route.params.subscribe(val => {
         this.detailId=val;
       }

       );
      console.log(this.detailId);

  }

  ngOnInit():void {
  //  let id =this.route.snapshot.params['id'];
  this.users= this.userService.getAllUsers();
  this.users.forEach(val =>  {
    if(this.detailId.id == val.id) {
      this.user = val;
      console.log(this.user);

      console.log(val, 'user data');
    }
  });
  }
  clicked1(abdul: string){
    this.router.navigate(['user1/',+ abdul]);
  }

}
