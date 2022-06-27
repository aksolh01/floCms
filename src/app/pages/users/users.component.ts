import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/components/delete-dialog/delete-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Data Table
  ELEMENT_DATA: any = [
    { name: "Ali mahdi", email: 'alimahdi@gmail.com', role: "", numberOfPages: '12', id:'1'},
    { name: "Simon", email: 'simon@gmail.com', role: "", numberOfPages: '12', id:'2'}
  ];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  displayedColumns: string[] = ['name', 'email', 'role', 'numberOfPages', 'actions'];

  statusOptions = [
    { name: "Admin", value: "admin"},
    { name: "Editor", value: "editor" },
    { name: "Contributer", value: "contributer" }
  ]

  selected
  selectOption(targetOption) {
    console.log(targetOption);
  }

  selectedValue;
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private route: Router) { }

  deletePage(id) {
    this.dialog.open(
      DeleteDialogComponent,
      {
        width: '600px',
        data: { title: "Delete page", description: " Would you like to delete this user" }
      }).afterClosed().subscribe((res) => {
        if (res === "true") {
          let EDIT_ELEMENT_DATA = this.ELEMENT_DATA.filter(el => { return el.id != id })
          this.ELEMENT_DATA = EDIT_ELEMENT_DATA
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA)
        }
      })
  }
  sendMessage(userId) {
    this.route.navigate(['/dashboard/users/sendmessage/'+ userId])
  }
  

  ngOnInit(): void {
  }

}
