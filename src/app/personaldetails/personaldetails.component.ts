import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  userss=[
    {name:'a',address:'tvm',bloodgroup:'a+ve',number:12345}
  ]
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
