import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmprocessingComponent } from './confirmprocessing.component';

describe('ConfirmprocessingComponent', () => {
  let component: ConfirmprocessingComponent;
  let fixture: ComponentFixture<ConfirmprocessingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmprocessingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmprocessingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
