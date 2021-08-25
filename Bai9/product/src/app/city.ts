import {Country} from './country';

export class City {
  id?: number;
  area: number;
  description: string;
  gdp: number;
  name: string;
  population: number;
  country: Country;
}
