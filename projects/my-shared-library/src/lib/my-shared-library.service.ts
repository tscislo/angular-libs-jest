import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySharedLibraryService {

  public countries = [
    {
      name: 'Poland',
      population: 38
    },
    {
      name: 'Ireland',
      population: 5
    },
    {
      name: 'USA',
      population: 326
    }
  ];

  public getCountriesWithPopulationGrater = (population: number) =>
    this.countries.filter((country) => country.population > population)

  constructor() {
  }
}
