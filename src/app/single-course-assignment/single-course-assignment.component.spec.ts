import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseAssignmentComponent } from './single-course-assignment.component';

describe('SingleCourseAssignmentComponent', () => {
  let component: SingleCourseAssignmentComponent;
  let fixture: ComponentFixture<SingleCourseAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourseAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
