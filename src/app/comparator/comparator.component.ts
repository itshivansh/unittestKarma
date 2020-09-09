import { CurrencyService } from './../currency.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-comparator',
  templateUrl: './comparator.component.html',
  styleUrls: ['./comparator.component.css'],
})
export class ComparatorComponent implements OnInit, OnChanges {
  // base currency selected in
  @Input() public from: string;
  exchangeRates;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {}

  // function is used to get exchange rates of particular base currency
  ngOnChanges() {
    if (this.from !== undefined) {
      this.exchangeRates = [];
      this.currencyService.getAllExchangeRate(this.from).subscribe((data) =>
          Object.keys(data.rates).forEach((key) =>
            this.exchangeRates.push({ key: [key], value: data.rates[key] }))
        );
    }
  }
}
