import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-city-delete',
  templateUrl: './city-delete.component.html',
  styleUrls: ['./city-delete.component.css']
})
export class CityDeleteComponent implements OnInit {
  cityForm: FormGroup;
  id: number;
  constructor(private cityService: CityService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
      this.id = +parammap.get('id');
      this.getCity(this.id);
    });
  }

  ngOnInit() {
  }
  getCity(id: number) {
    return this.cityService.findById(id).subscribe((city) => {
      this.cityForm = new FormGroup({
        name: new FormControl(city.name),
        area: new FormControl(city.area),
        gdp: new FormControl(city.gdp),
        population: new FormControl(city.population),
        description: new FormControl(city.description)
      });
    });
  }
  deleteCity(id: number) {
    return this.cityService.delete(id).subscribe(() => {
      this.router.navigate(['/city/list']);
    }, error => {
      console.log(error);
    });
  }
}
