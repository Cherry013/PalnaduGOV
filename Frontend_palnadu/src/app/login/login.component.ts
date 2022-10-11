import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertService } from '../insert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Router:Router,private Insert:InsertService) { }
  User:string = '';
  Password:string = '';
  Sec_Name:string = '';
  error:string = '';
  errorMsg = false;
  LoginObject:any;
  Result:any;
  ShowPassword = false;
  ngOnInit(): void {
  }
  login(){
    this.LoginObject={
      Username: this.User,
      Password: this.Password,
    }
    this.Insert.Getuserandpwd(this.LoginObject).subscribe((data)=>{
      if(data){
        this.Result = data;
          if(this.Result.PASSWORD == this.LoginObject.Password){     
            this.Insert.SaveData(data);     
            this.Router.navigate(['form']);
          }
          else{
            this.errorMsg = true;
            this.error = "Passwords don't match";
          } 
      }
      else{
        if(data == null){
            this.errorMsg = true;
            this.error = "User not found";
        }    
        else{
          return ;
        }
      }
    },(err)=>{
      this.Result=err;
    });
    
  }

}
