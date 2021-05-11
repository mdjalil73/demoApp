import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Country } from 'src/app/Model/Country';
import { Currency } from 'src/app/Model/Currency';
import { ContryInformationService } from 'src/app/Service/ContryInformationService';
import { Select } from '../Share/Models/select';

@Component({
  selector: 'app-CountryInformation',
  templateUrl: './CountryInformation.component.html',
})
export class CountryInformationComponent implements OnInit, OnDestroy {
  pageTitle = 'Product Information';
  errorMessage = '';
  loadDetails: boolean = false;
  form: FormGroup;
  regions: Select[] = [
    { id: 'Europe', name: 'Europe' },
    { id: 'Asia', name: 'Asia' },
  ];
  countries: Country[] = [];
  countriesByRegion: Select[] = [];
  ngOnDestroy(): void {}
  constructor(
    private _fb: FormBuilder,
    private contryInformationService: ContryInformationService
  ) {}
  ngOnInit(): void {
    this.form = this.FormInitialize();
    const europeCountriesList = this.contryInformationService.EuropeCountriesList();
    const asiaCountriesList = this.contryInformationService.AsiaCountriesList();

    forkJoin([europeCountriesList, asiaCountriesList]).subscribe(
      (results) => {
        this.countries = results[0].concat(results[1]);
      },
      (error) => {}
    );
  }
  FormInitialize(): FormGroup {
    return this._fb.group({
      region: '-1',
      country: '-1',
      countryDetail: this.FormDetailsInitialize(),
    });
  }
  FormDetailsInitialize(): FormGroup {
    return this._fb.group({
      name: '',
      capital: '',
      population: '',
      flag: '',
      currencies: this._fb.array([]),
    });
  }
  onChangeRegionEmmit(event: number | string) {
    this.loadDetails = false;
    this.form.patchValue({ countryDetail: this.FormDetailsInitialize() });
    this.countriesByRegion = [];
    this.form.patchValue({ country: '-1' });
    if (event !== '-1') {
      this.countriesByRegion = this.countries
        .filter((t) => t.region === event)
        .map((t) => {
          return { id: t.numericCode, name: t.name };
        });
    }
  }
  onChangeCountriesEmmit(event: string) {
    let getDetailForm = this.form.get('countryDetail');
    if (event !== '-1') {
      const countryDetail = this.countries.find((t) => t.numericCode === event);
      getDetailForm.patchValue({ name: countryDetail.name });
      getDetailForm.patchValue({ capital: countryDetail.capital });
      getDetailForm.patchValue({ population: countryDetail.population });
      getDetailForm.patchValue({ flag: countryDetail.flag });

      const arr = getDetailForm.get('currencies') as FormArray;

      countryDetail.currencies.forEach((t) => {
        arr.push(this.AddCurrency(t));
      });
      getDetailForm.patchValue({ currencies: countryDetail.currencies });
    } else {
      getDetailForm.patchValue({ name: '' });
      getDetailForm.patchValue({ capital: '' });
      getDetailForm.patchValue({ population: '' });
      getDetailForm.patchValue({ flag: '' });
      getDetailForm.patchValue({ currencies: [] });
    }
  }
  public AddCurrency(data: Currency): FormGroup {
    const returnValue = this._fb.group({
      code: [data.code],
      name: [data.name],
      symbol: [data.symbol],
    });
    return returnValue;
  }
  onLoad() {
    this.loadDetails = true;
  }
}
