import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BlockFormComponent } from 'src/app/components/block-form/block-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  dataSource = [
    { blockPageCount: "10", author: 'ali', content: 'content1', sorted: "by date" },
    { blockPageCount: "5", author: 'simon', content: 'content2', sorted: "by date" },
  ]
  displayedColumns: string[] = ['title', 'author', 'content', 'sorted'];
  constructor(public dialog: MatDialog, private route: Router) { }

  ngOnInit(): void {
  }
  addNewBlock() {
     this.route.navigate(['/dashboard/addNewBlock'])
  }
}
