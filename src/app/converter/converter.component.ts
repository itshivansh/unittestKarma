import { CurrencyService } from './../currency.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { isNull } from 'util';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {


  converterForm = new FormGroup({
    from: new FormControl(null),
    to: new FormControl(null),
    amount: new FormControl(1),
  });

  converted = false;
  currencyList: string[];
  resultValue: string;
  description: string;
  exchangeRate: string;
  comparatorInput: string;


  constructor(
    private currencyService: CurrencyService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getCurrencyList();
  }

  // function to get all currencies code for select option
  getCurrencyList() {
    this.currencyService.getCurrencyList()
      .subscribe((data) => (this.currencyList = Object.keys(data.rates)));
  }

  // function to convert the amount from a currency to another selected in form
  convert() {
    const formValues = this.converterForm.value;
    if (isNull(formValues.from) || isNull(formValues.to)) {
      this.toastr.error('selected currency is null', 'Currency not selected');
      this.converted = false;
    } else {
      this.currencyService.getSpecificExchangeRate(formValues.from, formValues.to)
        .subscribe((data) => {
          this.resultValue = data.rates[formValues.to] * formValues.amount + ' ' + formValues.to;
          this.description = formValues.amount + ' ' + formValues.from + '=';
          this.exchangeRate = '1 ' + formValues.from + '=' + data.rates[formValues.to] + ' ' + formValues.to;
          this.comparatorInput = formValues.from;
          this.converted = true;
        });
    }
  }
}
