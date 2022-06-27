import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-comments',
  templateUrl: './display-comments.component.html',
  styleUrls: ['./display-comments.component.scss']
})
export class DisplayCommentsComponent implements OnInit {
  comment;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCommentsPreview()
  }
  getCommentsPreview() {
    this.activateRoute.params.subscribe((res)=>{
      this.comment = res.id
      console.log(res.id);
    })
  }

}
