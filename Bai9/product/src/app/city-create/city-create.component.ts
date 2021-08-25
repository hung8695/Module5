import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Country} from '../country';
import {City} from '../city';
import {CountryService} from '../service/country.service';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styleUrls: ['./city-create.component.css']
})
export class CityCreateComponent implements OnInit {
  countries: Country [] = [];
  cities: City [] = [];
  cityForm = new FormGroup({
    name: new FormControl(),
    area: new FormControl(),
    description: new FormControl(),
    gdp: new FormControl(),
    population: new FormControl(),
    country: new FormGroup({
      id: new FormControl()
    })
  });
  constructor(private cityService: CityService,
              private countryService: CountryService) { }

  ngOnInit() {
    this.getCountries();
  }
  getCountries() {
    this.countryService.getAllCountry().subscribe((countries) => {
      this.countries = countries;
      console.log(countries);
    });
  }
  onSubmit() {
  const city = this.cityForm.value;
  this.cityService.save(city).subscribe(() => {
    this.cityForm.reset();
    alert('Create city successfully!');
  }, e => {
    console.log(e);
  });
  }
  }
