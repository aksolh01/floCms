import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  // Data Table
  ELEMENT_DATA: any = [
    { comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. ", pagename: "page 2", author: 'ali mahdi', date: "05/06/2020", status: 'hidden', 'isreaded': false, id: "1" },
    { comment: "This is comment 2 ", pagename: "page 1", author: 'simon khoury', date: "05/06/2020", status: 'pendingapproval', 'isreaded': false, id: "2" },
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['comment', 'pagename', 'author', 'date', 'status', 'actions'];
  statusOptions = [
    { name: "Approval", value: "approval" },
    { name: "Hidden", value: "hidden" },
    { name: "Pending Approval", value: "pendingapproval" }
  ]
  selectedValue;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private router: Router) { }


  // Filtering Table
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }


  selectOption(targetOption) {
    console.log(targetOption);
  }
  deletePage(id) {
    this.dialog.open(
      DeleteDialogComponent,
      {
        width: '600px',
        data: { title: "Delete page", description: " Would you like to delete this message" }
      }).afterClosed().subscribe((res) => {
        if (res === "true") {
          let EDIT_ELEMENT_DATA = this.ELEMENT_DATA.filter(el => { return el.id != id })
          this.ELEMENT_DATA = EDIT_ELEMENT_DATA
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
          this.router.navigate(['dashboard/comments'])
        }
      })
  }
  goToPreviewComment(id) {
    this.router.navigate(['/dashboard/comments/commentPreview/' + id])
  }


  ngOnInit(): void {
  }

}
