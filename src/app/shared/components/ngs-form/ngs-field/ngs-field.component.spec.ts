import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsFieldComponent } from './ngs-field.component';

describe('NgsFieldComponent', () => {
  let component: NgsFieldComponent;
  let fixture: ComponentFixture<NgsFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
