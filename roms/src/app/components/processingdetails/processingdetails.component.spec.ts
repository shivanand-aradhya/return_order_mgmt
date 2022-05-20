import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessingdetailsComponent } from './processingdetails.component';

describe('ProcessingdetailsComponent', () => {
  let component: ProcessingdetailsComponent;
  let fixture: ComponentFixture<ProcessingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessingdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
