import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EvaluationAndSubmissionComponent } from './evaluation-and-submission.component';

describe('EvaluationAndSubmissionComponent', () => {
  let component: EvaluationAndSubmissionComponent;
  let fixture: ComponentFixture<EvaluationAndSubmissionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationAndSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationAndSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
