import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleCourseAssignmentComponent } from './view-single-course-assignment.component';

describe('ViewSingleCourseAssignmentComponent', () => {
  let component: ViewSingleCourseAssignmentComponent;
  let fixture: ComponentFixture<ViewSingleCourseAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSingleCourseAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSingleCourseAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
