import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductDetailsComponent } from './porduct-details.component';

describe('PorductDetailsComponent', () => {
  let component: PorductDetailsComponent;
  let fixture: ComponentFixture<PorductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
