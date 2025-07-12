import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepByStepWorkflowComponent } from './step-by-step-workflow.component';

describe('StepByStepWorkflowComponent', () => {
  let component: StepByStepWorkflowComponent;
  let fixture: ComponentFixture<StepByStepWorkflowComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepByStepWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepByStepWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
