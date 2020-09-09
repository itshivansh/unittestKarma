import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurrencyService } from '../src/app/currency.service';

describe('CurrencyService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
  });

  it('should be created', () => {
    // Testcase to check component existence
  });

  it('should have getCurrencyList()', () => {
    // Testcase to check function existence
  });

  it('should be have getSpecificExchangeRate()', () => {
    // Testcase to check function existence
  });

  it('should be have getAllExchangeRate()', () => {
    // Testcase to check function existence
  });

  it('getCurrencyList() should return all exchange rates for base EUR', () => {
    // Testcase to check whether function returns all exchange rates for base EUR
    // Use httpTestingController to create a mock backend to return a value(baseEurExchangeRates) from return-data.ts
  });

  it('getSpecificExchangeRate() should return exchange rate for particular base and currency', () => {
    // Testcase to check whether function send two currencies string('USD', 'INR') to backend
    // Use httpTestingController to create a mock backend to return a value(usdToInr) from return-data.ts
  });


  it('getAllExchangeRate() should return all exchange rates for particular base', () => {
    // Testcase to check whether function send a string('INR') to backend
    // Use httpTestingController to create a mock backend to return a value(baseInrExchangeRates) from return-data.ts
  });

});
