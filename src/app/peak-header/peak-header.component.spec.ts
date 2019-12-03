import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeakHeaderComponent } from './peak-header.component';

describe('PeakHeaderComponent', () => {
  let component: PeakHeaderComponent;
  let fixture: ComponentFixture<PeakHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeakHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeakHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
