import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-image-previews',
  templateUrl: './image-previews.component.html',
  styleUrls: ['./image-previews.component.scss']
})
export class ImagePreviewsComponent implements OnInit {
  image =  this.generalService.imageDetails
  constructor(private route: Router, private generalService: GeneralService) { }

  ngOnInit(): void {
  }
  backToGallery() {
    this.route.navigate(['/dashboard/gallery'])
  }
}
