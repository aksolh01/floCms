import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent implements OnInit {
  message
  constructor(private activateRoute:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.getMessagePreview()
  }
  getMessagePreview() {
    this.activateRoute.params.subscribe((res)=>{
      this.message = res.id
      console.log(res.id);
    })
  }

}
