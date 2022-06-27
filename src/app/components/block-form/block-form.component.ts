import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormGroupName } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-block-form',
  templateUrl: './block-form.component.html',
  styleUrls: ['./block-form.component.scss']
})
export class BlockFormComponent implements OnInit {
  blockGroup: FormGroup

  sortedByOptions = [
    {name: 'By date', value: "byDate"},
    {name: 'Most Commented', value: "mostCommented"},
    {name: 'Most Read', value: "mostRead"}
  ]
  contentSelectionOptions = [
    {name: 'All Pages', value: "allPages"},
    {name: ' By Categories', value: "byCategory"},
  ]
  categories = [
    {
      name: 'category1',
      id: ""
    },
    {
      name: 'category2',
      id: ""
    },
  ]

  pages=[];

  loader =false

  contentSelection = false
  constructor(private formBuilder: FormBuilder, private route: Router, private generalService:GeneralService) { }

  ngOnInit(): void {
    this.prepareForm()
  }

  prepareForm() {
    this.blockGroup = this.formBuilder.group({
      child: this.formBuilder.group({
        'pagecount': this.formBuilder.control('', [Validators.required, Validators.pattern("^[0-9]*$")]),
        'sortedby': this.formBuilder.control('', [Validators.required]),
        'sorted': this.formBuilder.control('', [Validators.required])
      })
    });
  }
  getPages() {
    console.log(this.blockGroup.get('child').value)
    this.pages = []
    this.loader=true
    setTimeout(() => {
      this.loader=false
      this.pages = [
        {
          name: 'page 1',
          id:'1'
        },
        {
          name: 'page 2',
          id:'2'
        },
        {
          name: 'page 3',
          id:'3'
        },
        {
          name: 'page 4',
          id:'4'
        },
      ]
    }, 3000);
  }
  submitForm() {
    console.log(this.generalService.selectedPages)
    console.log(this.blockGroup.value)
    this.route.navigate(['/dashboard/layout'])
  }
  back() {
    this.route.navigate(['/dashboard/layout'])
  }
  selectContentSelection(e) {
    if(e == "byCategory") {
      this.contentSelection = true
    }else{
      this.contentSelection = false 
    }
  }
}
