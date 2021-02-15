import { TestBed } from '@angular/core/testing';

import { FirebaseAuthenicationService } from './firebase-authenication.service';

describe('FirebaseAuthenicationService', () => {
  let service: FirebaseAuthenicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseAuthenicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
