import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postGroup: FormGroup
  uploadedImage;
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    
    this.postGroup = this.formBuilder.group({
      'postitle': this.formBuilder.control('', [Validators.required]),
      'permalink': this.formBuilder.control('', [Validators.required]),
      'description': this.formBuilder.control('', [Validators.required]),
      'imagefile': this.formBuilder.control('', [Validators.required]),
      "fileSource": [null],
    });
  }
  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
          const reader = new FileReader();
        reader.onload = e => this.uploadedImage = reader.result;

        reader.readAsDataURL(file);
      this.postGroup.patchValue({
        fileSource: file
      });
    }
  }
  addPost() {
    console.log(this.postGroup.value);
  }

}
