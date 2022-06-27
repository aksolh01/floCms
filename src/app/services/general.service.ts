import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
    isLooggedIn= false
    tokken;
    selectedPages = [];

    imageDetails = [] 
    constructor(private fireBaseAuth: AngularFireAuth) {}


    async signin(email: string, password: string) {
      await this.fireBaseAuth.auth.signInWithEmailAndPassword(email, password).then(res=>{
        this.isLooggedIn = true
        res.user.getIdToken().then(tokkenId=>{
          this.tokken=tokkenId
        })
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', this.tokken)
      })
    }
    async signup(email: string, password: string) {
      await this.fireBaseAuth.auth.createUserWithEmailAndPassword(email, password).then(res=>{
        this.isLooggedIn = true
        res.user.getIdToken().then(tokkenId=>{
          this.tokken=tokkenId
        })
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', this.tokken)
      })
    }
    logout() {
      this.fireBaseAuth.auth.signOut()
      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }



   
}

