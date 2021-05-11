import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './Components/Share/Components/Select/Select.component';
import { CountryInformationComponent } from './Components/CountryInformation/CountryInformation.component';
import { CountryDetailsComponent } from './Components/CountryDetails/CountryDetails.component';
import { CurrenciesComponent } from './Components/CountryDetails/Currencies/Currencies.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    CountryInformationComponent,
    CountryDetailsComponent,
    CurrenciesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
