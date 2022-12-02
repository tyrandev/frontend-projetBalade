import { TestBed } from '@angular/core/testing';

import { JwtInInterceptor } from './jwt-in.interceptor';

describe('JwtInInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      JwtInInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: JwtInInterceptor = TestBed.inject(JwtInInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
