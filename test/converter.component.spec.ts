import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ComparatorComponent } from 'src/app/comparator/comparator.component';
import { CurrencyService } from 'src/app/currency.service';
import { ConverterComponent } from '../src/app/converter/converter.component';
import { baseEurExchangeRates, usdToInr } from './return-data';
const _baseEurExchangeRates = baseEurExchangeRates;
const _usdToInr = usdToInr;
describe('ConverterComponent', () => {
  let component: ConverterComponent;
  let fixture: ComponentFixture<ConverterComponent>;
  let currencyService: CurrencyService;
  let toastrService: ToastrService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConverterComponent, ComparatorComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          maxOpened: 1,
          closeButton: true,
        }),
        HttpClientModule,
      ],
    }).compileComponents();
    currencyService = TestBed.get(CurrencyService);
    toastrService=TestBed.get(ToastrService);
    spyOn(currencyService, 'getCurrencyList').and.returnValue(of(baseEurExchangeRates));
    spyOn(currencyService, 'getSpecificExchangeRate').and.returnValue(of(usdToInr));
    spyOn(toastrService,'error').and.callThrough();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(ConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have getCurrencyList()', () => {
    // Testcase to check function existence
    expect(component.getCurrencyList).toBeTruthy();
  });
  it('should have convert()', () => {
    // Testcase to check function existence
    expect(component.convert).toBeTruthy();
  });

  it('getCurrencyList() should return the list of currencies', () => {
    // Testcase to check whether the function returns exchange rates for a base currency 'EUR'
    // Use spyOn to give a value('baseEurExchangeRates') from return-data.ts when a function of service is called
    component.getCurrencyList();
    expect(currencyService.getCurrencyList).toHaveBeenCalled();
    currencyService.getCurrencyList().subscribe((data) => {
      expect(data.data.length).toBe(33);
      expect(data.data).toEqual(_baseEurExchangeRates);
    });
  });
  it('convert() given values should return the exchange rate for the required currency', () => {
    // Testcase to check whether the function returns exchange rate for from currency 'USD' and to currency 'INR'
    // Use spyOn to give a value('usdToInr') from return-data.ts when a function of service is called
    component.converterForm.value.from = 'USD';
    component.converterForm.value.to = 'INR';
    component.converterForm.value.amount = '1';
    component.converterForm
    component.convert();
    expect(currencyService.getSpecificExchangeRate).toHaveBeenCalled();
    currencyService.getSpecificExchangeRate('USD', 'INR').subscribe(data => {
      expect(data.data.length).toBe(1);
      expect(data.data).toEqual(_usdToInr);
    });
  });
  it('convert() given input null should return error message and hide the exchange rate', () => {
    // Testcase to check whether the function is hidden when from currency or to currency is 'null'
    component.converterForm.value.from = null;
    component.converterForm.value.to = null;
    component.convert();
    expect(currencyService.getSpecificExchangeRate).not.toHaveBeenCalled();
    expect(component.converted).toBe(false);
    expect(toastrService.error).toHaveBeenCalled();
  });
});