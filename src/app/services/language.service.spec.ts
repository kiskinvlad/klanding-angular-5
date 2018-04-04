import { TestBed, inject } from '@angular/core/testing';

import { LanguageServiceService } from './language.service';

describe('LanguageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LanguageServiceService]
    });
  });

  it('should be created', inject([LanguageServiceService], (service: LanguageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
