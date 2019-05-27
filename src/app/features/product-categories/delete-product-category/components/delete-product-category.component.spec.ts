import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProductCategoryComponent } from './delete-product-category.component';

describe('DeleteProductCategoryComponent', () => {
  let component: DeleteProductCategoryComponent;
  let fixture: ComponentFixture<DeleteProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
