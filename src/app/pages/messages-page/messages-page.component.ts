import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.scss']
})
export class MessagesPageComponent implements OnInit {

    // Data Table
    ELEMENT_DATA: any = [
      { message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ", from: 'ali mahdi', date: "05/06/2020", status: 'unread', 'isreaded': false, id: "1" },
      { message: "This is message 2 ", from: 'simon khoury', date: "05/06/2020", status: 'unread', 'isreaded': false, id: "2" },
    ];  
    dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    displayedColumns: string[] = ['message', 'from', 'date', 'status', 'actions'];
  
    @ViewChild(MatSort) sort: MatSort;
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
            this.router.navigate(['dashboard/messages'])
          }
        })
    }

    markAsRead(id, status) {
      this.ELEMENT_DATA.map((res)=>{
        if(res.id === id) {
          res.status = "read"
          res.isreaded = true
        }
      })
    }
    goToPreviewMessage(id) {
      this.router.navigate(['/dashboard/messages/messagePreview/' + id])
    }

  ngOnInit(): void {
  }

}
