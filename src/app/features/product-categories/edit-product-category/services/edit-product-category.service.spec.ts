import { TestBed } from '@angular/core/testing';

import { EditProductCategoryService } from './edit-product-category.service';

describe('EditProductCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditProductCategoryService = TestBed.get(EditProductCategoryService);
    expect(service).toBeTruthy();
  });
});
