import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isSignedIn = false
  constructor(private router: Router, private service: GeneralService) { }

  ngOnInit(): void {
    if (localStorage.getItem('user') !== null) {
      this.isSignedIn = true
    }
    else {
      this.isSignedIn = false
    }
  }

  async onSignUp(email: string, password: string) {
    await this.service.signup(email, password)
    if (this.service.isLooggedIn) {
      this.isSignedIn = true
      this.router.navigate(['dashboard/home'])
    }
  }

}
