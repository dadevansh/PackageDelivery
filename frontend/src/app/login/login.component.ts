import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";
  public loginForm !: FormGroup


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() :void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  checkLogin(){
    // if(this.email =="abc@mail.com" && this.password =="logmein"){
    //   localStorage.setItem("userAccessToken","true");
    //   console.log("Success");
    //   this.router.navigateByUrl("home"); 
    // }
    // else{
    //   console.log("Invalid email/password");
    // }
  }
  login(){
    this.http.get<any>("http://localhost:3000/getdetails").subscribe(res=>{
      const user = res.find((a: any)=>{
        return a.email == this.loginForm.value.email && a.password == this.loginForm.value.password
      });
      if(user){
        this.loginForm.reset()
        localStorage.setItem("userAccessToken","true"); 
        this.router.navigate(["home"])
      } else{
        alert("User not found")
      }
    }, err=> {
      console.log(err);
      alert("something went wrong");
    })
  }

}

