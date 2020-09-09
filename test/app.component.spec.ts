import { HttpClientModule } from '@angular/common/http';
import { ComparatorComponent } from './../src/app/comparator/comparator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConverterComponent } from './../src/app/converter/converter.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../src/app/app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          preventDuplicates: true,
          maxOpened: 1,
          closeButton: true,
        }),
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        ConverterComponent,
        ComparatorComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'currency-converter'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('currency-converter');
  });
});
