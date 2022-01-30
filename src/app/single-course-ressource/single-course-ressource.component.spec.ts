import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseRessourceComponent } from './single-course-ressource.component';

describe('SingleCourseRessourceComponent', () => {
  let component: SingleCourseRessourceComponent;
  let fixture: ComponentFixture<SingleCourseRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourseRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCourseRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
