import { TestBed } from '@angular/core/testing';

import { ProductBurgerService } from './product-burger.service';

describe('ProductBurgerService', () => {
  let service: ProductBurgerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductBurgerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
