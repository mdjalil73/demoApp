import { Currency } from './Currency';
import { Language } from './Language';

export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: string;
  borders: number[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  gini: string;
  languages: Language[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: any[];
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: string[];
}
