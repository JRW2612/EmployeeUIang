import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DropdownService } from '../../Services/DropdownService';
import { countrymodel } from '../../Models/dropdown/countrymodel';
import { statemodel } from '../../Models/dropdown/statemodel';
import { citymodel } from '../../Models/dropdown/citymodel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule,CommonModule], 
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  countries: countrymodel[] = [];
  states: statemodel[] = [];
  cities: citymodel[] = [];

  selectedCountry: any;
  selectedState: any;
  selectedCity: any;

  constructor(private CascadeService: DropdownService) { }

  ngOnInit(): void {
    this.CascadeService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  onCountryChange(countryId: number): void {
    this.CascadeService.getStates(countryId).subscribe((data: any) => {
      this.states = data;
    });
  }

  onStateChange(stateId: number): void {
    this.CascadeService.getCities(stateId).subscribe((data: any) => {
      this.cities = data;
    });
  }
}