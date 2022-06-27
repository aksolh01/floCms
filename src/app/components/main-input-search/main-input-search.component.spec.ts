import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainInputSearchComponent } from './main-input-search.component';

describe('MainInputSearchComponent', () => {
  let component: MainInputSearchComponent;
  let fixture: ComponentFixture<MainInputSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainInputSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInputSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
