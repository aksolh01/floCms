import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
@Component({
  selector: 'app-page-table',
  templateUrl: './page-table.component.html',
  styleUrls: ['./page-table.component.scss']
})
export class PageTableComponent implements OnInit {
  // Data Table
  ELEMENT_DATA: any = [
    { title: "Title1", author: 'ali', slug: "Slug example", category: 'News', lastMOdifiedBy: 'ali', lastMOdified: '20/06/2019', status: "published", gated: 'No', readCount: '12', id: "1" },
    { title: "Title2", author: 'simon', slug: "Slug example", category: 'Food', lastMOdifiedBy: 'simon', lastMOdified: '11/05/2030', status: "Draft", gated: 'No', readCount: '0', id: "2" },
    { title: "Title3", author: 'simon', slug: "Slug example", category: 'Food', lastMOdifiedBy: 'simon', lastMOdified: '11/05/2030', status: "Draft", gated: 'No', readCount: '0', id: "3" },
  ];


  statusOptions = [
    { name: "Published", value: "Published" },
    { name: "Draft", value: "Draft" },
    { name: "Pending", value: "Pending" }
  ]

  selected
  selectOption(targetOption) {
    console.log(targetOption);
  }

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['title', 'author', 'slug', 'category', 'lastMOdifiedBy', 'lastMOdified', 'status', 'gated', 'readCount', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  selectedValue;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }


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


  deletePage(id) {
    this.dialog.open(
      DeleteDialogComponent,
      {
        width: '600px',
        data: { title: "Delete page", description: " Would you like to delete this page" }
      }).afterClosed().subscribe((res) => {
        if (res === "true") {
          let EDIT_ELEMENT_DATA = this.ELEMENT_DATA.filter(el => { return el.id != id })
          this.ELEMENT_DATA = EDIT_ELEMENT_DATA
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
        }
      })
  }
  savePage() {
  }

  ngOnInit(): void {
  }

}
