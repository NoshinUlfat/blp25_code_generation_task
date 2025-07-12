import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TaskSectionComponent } from './task-section.component';

describe('TaskSectionComponent', () => {
  let component: TaskSectionComponent;
  let fixture: ComponentFixture<TaskSectionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
