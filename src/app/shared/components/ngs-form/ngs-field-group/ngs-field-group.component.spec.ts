import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsFieldGroupComponent } from './ngs-field-group.component';

describe('NgsFieldGroupComponent', () => {
  let component: NgsFieldGroupComponent;
  let fixture: ComponentFixture<NgsFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
