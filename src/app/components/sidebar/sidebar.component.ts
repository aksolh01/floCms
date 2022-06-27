import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild('sidebarContainer') sidebarContainer: ElementRef;
  constructor(private route: Router) { }

  sidebarLinks = [
    {
      txt:"Pages",
      icon:"../../../assets/icons/pages.svg",
      router:"/dashboard/home"
    },
    {
      txt:"Layout",
      icon:"../../../assets/icons/layout.svg",
      router:"/dashboard/layout"
    },
    {
      txt:"Users",
      icon:"../../../assets/icons/users.svg",
      router:"/dashboard/users"
    },
    {
      txt:"Messages",
      icon: "../../../assets/icons/messages.svg",
      router: "/dashboard/messages"
    },
    {
      txt:"Comments",
      icon: "../../../assets/icons/comments.svg",
      router: "/dashboard/comments"
    },
    { 
      txt:"Gallery",
      icon: "../../../assets/icons/gallery.svg",
      router: "/dashboard/gallery"
    }
  ]

  ngOnInit(): void {
  }
  
  hideShowSideBar() {
    this.sidebarContainer.nativeElement.classList.toggle('hide-show')
  }
}
