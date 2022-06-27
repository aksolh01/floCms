import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  fileImage
  iamageToUpload


  images = [
    {
      'id': "1",
      "src": "https://picsum.photos/200/300",
      "Size": "125 KB",
      "Filename": "image0002.jpg",
      "Dimensions": "1200x800",
      "UploadedOn": "12 August 2022 @ 13:56 ",
      "UploadedBy": "ali mahdi"
    },
    {
      'id': "2",
      "src": "https://picsum.photos/600/300",
      "Size": "125 KB",
      "Filename": "image0002.jpg",
      "Dimensions": "1200x800",
      "UploadedOn": "12 August 2022 @ 13:56 ",
      "UploadedBy": "Simon Khoury"
    },
    {
      'id': "3",
      "src": "https://picsum.photos/500/300",
      "Size": "125 KB",
      "Filename": "image0002.jpg",
      "Dimensions": "1200x800",
      "UploadedOn": "12 August 2022 @ 13:56 ",
      "UploadedBy": "Simon Khoury"
    }
  ]
  imagePreview;

  constructor(private route: Router, private generalService: GeneralService) { }
  goToPreviewImage(id) {
    this.generalService.imageDetails = this.images.filter(res => res.id === id)
    console.log(this.generalService.imageDetails);
    this.route.navigate(['/dashboard/imagepreview/' + id])
  }
  submitImage() {
    console.log(this.fileImage)
    this.iamageToUpload = undefined;
  }
  getImage(e) {
    this.fileImage = e.target.files[0];

    const reader = new FileReader();
    reader.onload = e => this.iamageToUpload = reader.result;

    reader.readAsDataURL(this.fileImage);
  }
  ngOnInit(): void {
  }

}
