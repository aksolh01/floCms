import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GeneralService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isSignedIn = false
  errorMessage
  constructor(private router: Router, private route: ActivatedRoute, private service: GeneralService){
    if(localStorage.getItem('user') !== null) {
        this.isSignedIn = true
    }
    else {
      this.isSignedIn = false
    }
  }
  links = [
    {
      text: "home",
      icon: "",
      action: ""
    },
    {
      text: "add new post",
      icon: "",
      action: "/addPost"
    },
  ]
  async onSignUp(email: string, password:string) {
     await this.service.signup(email, password)
     if(this.service.isLooggedIn) {
       this.isSignedIn = true
     }
    //  console.log(this.service.signup(email, password))
  }
  async onSignIn(email: string, password:string){
    await this.service.signin(email, password).then((res)=>{console.log(res)})
    .catch(error=>{
      this.errorMessage = error
    })
    if(this.service.isLooggedIn) {
      this.isSignedIn = true
      this.errorMessage = ""
    }
  }
}
