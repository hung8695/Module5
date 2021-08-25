import { Component, OnInit } from '@angular/core';
import {CityService} from '../service/city.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-city-edit',
  templateUrl: './city-edit.component.html',
  styleUrls: ['./city-edit.component.css']
})
export class CityEditComponent implements OnInit {
  cityForm: FormGroup;
  id: number;
  constructor(private cityService: CityService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((parammap: ParamMap) => {
      this.id = +parammap.get('id');
      this.getCity(this.id);
    });
  }
  ngOnInit() {
  }
  getCity(id: number) {
    return this.cityService.findById(id).subscribe(city => {
      this.cityForm = new FormGroup({
        name: new FormControl(city.name),
        area: new FormControl(city.area),
        gdp: new FormControl(city.gdp),
        population: new FormControl(city.population),
        description: new FormControl(city.description)
      });
    });
  }
  updateCity(id: number) {
    const city = this.cityForm.value;
    this.cityService.update(id, city).subscribe(() => {
      alert('Update successfuly!');
    }, error => {
      console.log(error);
    });

  }

}
