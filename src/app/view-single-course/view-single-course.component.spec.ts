import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleCourseComponent } from './view-single-course.component';

describe('ViewSingleCourseComponent', () => {
  let component: ViewSingleCourseComponent;
  let fixture: ComponentFixture<ViewSingleCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
