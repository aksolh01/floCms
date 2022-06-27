import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePreviewsComponent } from './image-previews.component';

describe('ImagePreviewsComponent', () => {
  let component: ImagePreviewsComponent;
  let fixture: ComponentFixture<ImagePreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagePreviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
