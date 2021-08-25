import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {City} from '../city';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  cities: City[] = [];
  name; string;
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll() {
    this.cityService.getAll().subscribe(cities => {
      this.cities = cities;
    });
  }
  findByContainName(name: string) {
    if (name === '') {
      this.getAll();
    }
    this.cityService.findByContainName(name).subscribe((cities) => {
      this.cities = cities;
    });
  }

}
