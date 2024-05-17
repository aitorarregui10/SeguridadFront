import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { miGuardiaGuard } from './mi-guardia.guard';

describe('miGuardiaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => miGuardiaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
