import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  name;
  messageForm: FormGroup
  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private route: Router) { }
  getUserDate() {
    this.activeRoute.params.subscribe((res)=>{
      console.log(res.id)
      this.name = res.id
    })
  }
  ngOnInit(): void {
    this.getUserDate()
    this.prepareForm()
  }
  prepareForm() {
    this.messageForm = this.formBuilder.group({
      message: this.formBuilder.control('',[Validators.required])
    })
  }
  back() {
    this.route.navigate(['/dashboard/users'])
  }
  sendMessage() {
    console.log(this.messageForm.value)
    this.route.navigate(['/dashboard/users'])
  }
}
