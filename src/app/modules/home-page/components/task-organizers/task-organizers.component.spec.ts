import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TaskOrganizersComponent } from './task-organizers.component';

describe('TaskOrganizersComponent', () => {
  let component: TaskOrganizersComponent;
  let fixture: ComponentFixture<TaskOrganizersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskOrganizersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskOrganizersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
