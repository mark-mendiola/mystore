import { TestBed } from '@angular/core/testing';

import { AddProductCategoryService } from './add-product-category.service';

describe('AddProductCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddProductCategoryService = TestBed.get(AddProductCategoryService);
    expect(service).toBeTruthy();
  });
});
