import { TestBed } from '@angular/core/testing';

import { ImportProductsService } from './import-products.service';

describe('ImportProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportProductsService = TestBed.get(ImportProductsService);
    expect(service).toBeTruthy();
  });
});
