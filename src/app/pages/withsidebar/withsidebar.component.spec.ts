import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithsidebarComponent } from './withsidebar.component';

describe('WithsidebarComponent', () => {
  let component: WithsidebarComponent;
  let fixture: ComponentFixture<WithsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
