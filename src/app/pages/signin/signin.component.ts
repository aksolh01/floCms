import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  isSignedIn = false
  constructor(private service: GeneralService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    }
    else {
      this.isSignedIn = false
    }
  }
  async onSignIn(email: string, password:string){
    await this.service.signin(email, password)
    if(this.service.isLooggedIn) {
      this.isSignedIn = true
      this.router.navigate(['dashboard/home'])
    }
  }
}
