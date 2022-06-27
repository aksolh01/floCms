import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-input-search',
  templateUrl: './main-input-search.component.html',
  styleUrls: ['./main-input-search.component.scss']
})
export class MainInputSearchComponent implements OnInit {

  constructor() { }
  searchKeyword;
  search(){
    console.log(this.searchKeyword)
  }
  ngOnInit(): void {
  }

}
