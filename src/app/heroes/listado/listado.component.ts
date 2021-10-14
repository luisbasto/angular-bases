import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroes: string[] = ['Hulk', 'Spiderman', 'Superman', 'Batman'];  
  heroeDeleted: string = "";

  constructor() { 
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
  deleteHeroe(i: number){
    this.heroeDeleted = this.heroes[i];
    this.heroes.splice(i,1);
    console.log("heroes", this.heroes);
  }

}
