import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a detial for the test', 'https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg'),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
