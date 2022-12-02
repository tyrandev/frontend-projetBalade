import { TestBed } from '@angular/core/testing';

import { JwtOutInterceptor } from './jwt-out.interceptor';

describe('JWTInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtOutInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtOutInterceptor = TestBed.inject(JwtOutInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
