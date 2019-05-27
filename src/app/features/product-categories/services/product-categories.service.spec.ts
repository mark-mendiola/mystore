import { TestBed } from '@angular/core/testing';

import { ProductCategoriesService } from './product-categories.service';

describe('ProductCategoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCategoriesService = TestBed.get(ProductCategoriesService);
    expect(service).toBeTruthy();
  });
});
