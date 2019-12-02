import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInjuryComponent } from './report-injury.component';

describe('ReportInjuryComponent', () => {
  let component: ReportInjuryComponent;
  let fixture: ComponentFixture<ReportInjuryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportInjuryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportInjuryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
