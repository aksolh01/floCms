import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss']
})
export class CheckBoxComponent implements OnInit {
  @Input('pages') pages :[]
  selectedPages = []
  constructor(private generalService : GeneralService) { }

  ngOnInit(): void {
  }

  getPagesId(e, id) {
    if(e.target.checked) {
      this.selectedPages.push(id)
    }else{
      this.selectedPages = this.selectedPages.filter(res=>res!=id)
    }
    this.generalService.selectedPages =  this.selectedPages
  }

}
