import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CurrencyService } from '../src/app/currency.service';
import { baseEurExchangeRates, usdToInr } from './return-data';


const _baseEurExchangeRates = baseEurExchangeRates;
const _usdToInr = usdToInr;
describe('CurrencyService', () => {

  let service: CurrencyService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrencyService],
    });
    service = TestBed.get(CurrencyService);
    httpMock = TestBed.get(HttpTestingController);
  });
  it('should be created', () => {
    // Testcase to check component existence
    expect(service).toBeTruthy();
  });

  it('should have getCurrencyList()', () => {
    // Testcase to check function existence
    expect(service.getCurrencyList).toBeTruthy();
  });

  it('should be have getSpecificExchangeRate()', () => {
    // Testcase to check function existence
    expect(service.getSpecificExchangeRate).toBeTruthy();
  });

  it('should be have getAllExchangeRate()', () => {
    // Testcase to check function existence
    expect(service.getAllExchangeRate).toBeTruthy();
  });

  it('getCurrencyList() should return all exchange rates for base EUR', () => {
    // Testcase to check whether function returns all exchange rates for base EUR
    // Use httpTestingController to create a mock backend to return a value(baseEurExchangeRates) from return-data.ts
    service.getCurrencyList().subscribe(data => {
      expect(data.data.length).toBe(33);
      expect(data.data).toEqual(_baseEurExchangeRates);
    });
    const _request = httpMock.expectOne('https://api.exchangeratesapi.io/latest');
    expect(_request.request.method).toEqual('GET');
  });

  it('getSpecificExchangeRate() should return exchange rate for particular base and currency', () => {
    // Testcase to check whether function send two currencies string('USD', 'INR') to backend
    // Use httpTestingController to create a mock backend to return a value(usdToInr) from return-data.ts
    
    service.getSpecificExchangeRate('USD','INR').subscribe(data => {
      expect(data.data.length).toBe(1);
      expect(data.data).toEqual(_usdToInr);
    });
    const _request = httpMock.expectOne('https://api.exchangeratesapi.io/latest' + '?base=' + 'USD' + '&symbols=' + 'INR');
    expect(_request.request.method).toEqual('GET');
  });


  it('getAllExchangeRate() should return all exchange rates for particular base', () => {
    // Testcase to check whether function send a string('INR') to backend
    // Use httpTestingController to create a mock backend to return a value(baseInrExchangeRates) from return-data.ts
    const from = 'CAD';//test base
    service.getAllExchangeRate(from).subscribe(data => {
      expect(data.data.length).toBe(33);
      expect(data.data.base).toEqual(from);
    });
    const _request = httpMock.expectOne('https://api.exchangeratesapi.io/latest' + '?base=' + from);
    expect(_request.request.method).toEqual('GET');
  });

});
