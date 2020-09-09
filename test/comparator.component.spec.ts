import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparatorComponent } from '../src/app/comparator/comparator.component';

describe('ComparatorComponent', () => {
  let component: ComparatorComponent;
  let fixture: ComponentFixture<ComparatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparatorComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Testcase to check component existence
  });

  it('should have ngOnChnages()', () => {
    // Testcase to check function existence
  });

  it('ngOnChnages() should return exchangeRates', () => {
    // Testcase to check whether the function returns exchange rates for a base currency
    // Use spyOn to give a value('baseUsdExchangeRates') from return-data.ts when a function of service is called
  });

});
