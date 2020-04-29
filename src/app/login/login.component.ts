import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/user-model';
import {LoginServiceService} from '../services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserModel;
  success:boolean;
  unsuccess:boolean;
  submitted:boolean;
  constructor(public service:LoginServiceService) {
    this.user=new UserModel();
   }

  ngOnInit(): void {
  }
  loginUser(){
    this.submitted=true;
    if(this.user!=null){
      this.service.loginUser(this.user).subscribe(
        (data)=>{
          this.service.user=data;
          this.service.loginSuccess=true;
          this.success=true;
        },
        (err)=>{
          this.unsuccess=true;
          setTimeout(()=>this.unsuccess=false,3000);
          this.service.loginSuccess=false;
        }
      )
    }
  }

}
