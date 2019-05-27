import { TestBed } from '@angular/core/testing';

import { DeleteProductService } from './delete-product.service';

describe('DeleteProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteProductService = TestBed.get(DeleteProductService);
    expect(service).toBeTruthy();
  });
});
