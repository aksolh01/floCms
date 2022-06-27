import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-page',
  templateUrl: './add-new-page.component.html',
  styleUrls: ['./add-new-page.component.scss']
})
export class AddNewPageComponent implements OnInit {
  pageGroup: FormGroup
  uploadedImage;
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
  status = [
    {
      name: 'pending',
      id: ""
    },
    {
      name: 'draft',
      id: ""
    },
    {
      name: 'published',
      id: ""
    }
  ]
  constructor(private formBuilder:FormBuilder) { }
  
  ngOnInit(): void {
    this.prepareForm()
  }

  prepareForm() {
    this.pageGroup = this.formBuilder.group({
      'pageitle': this.formBuilder.control('', [Validators.required]),
      'permalink': this.formBuilder.control('', [Validators.required]),
      'slug': this.formBuilder.control('', [Validators.required]),
      'category' : this.formBuilder.control('', [Validators.required]),
      'status' : this.formBuilder.control('', [Validators.required]),
      'gated' : this.formBuilder.control('', [Validators.required]),
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
      this.pageGroup.patchValue({
        fileSource: file
      });
    }
  }
  addpage() {
    console.log(this.pageGroup.value);
  }


}
