import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsFormComponent } from './ngs-form.component';

describe('NgsFormComponent', () => {
  let component: NgsFormComponent;
  let fixture: ComponentFixture<NgsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
