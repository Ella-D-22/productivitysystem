import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { AuthService } from '../services/auth.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

hide= true;

// user: User = new User();


  constructor(private loginservice : LoginService,
    private loginAuth : AuthService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
  }


userLogin = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
password : new FormControl('', 
         [Validators.required,
          Validators.minLength(6),
           Validators.maxLength(10),
         ]),
});


loginSubmitted(){
  console.log(this.userLogin)
  this.router.navigate(['admin']);



}

get email(): FormControl{
  return this.userLogin.get('email') as FormControl
}
get password(): FormControl{
  return this.userLogin.get('password') as FormControl
}
  // userLogin() {
  //   console.log(this.user)
  //   this.loginservice.userLogin(this.user)
  //   .subscribe(data=>{
  //     alert("Login successfully!")
  //   },
  //   // error=>alert("Login Unsuccessfull!")
  //   );
  // }

  
}
