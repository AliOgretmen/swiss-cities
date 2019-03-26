import { Component, OnInit } from '@angular/core';


/* export interface Deneme {
  name: string;
  id: number;
}

const deneme: Deneme[] = [
  {id: 1, name: 'Hydrogen'},
  {id: 2, name: 'Helium'},
  {id: 3, name: 'Lithium'},
  {id: 4, name: 'Beryllium'},
  {id: 5, name: 'Boron'}
];
 */
@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})

export class CitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   cities: string[] = ['Zürich', 'Geneva', 'Basel', 'Bern', 'Luzern'];

}
