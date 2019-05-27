import { TestBed } from '@angular/core/testing';

import { DeleteProductCategoryService } from './delete-product-category.service';

describe('DeleteProductCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteProductCategoryService = TestBed.get(DeleteProductCategoryService);
    expect(service).toBeTruthy();
  });
});
