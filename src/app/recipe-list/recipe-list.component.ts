import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'I am just testing','../../assets/imgs/IMG-20240110-WA0022.jpg'),
    new Recipe('A test recipe', 'I am just testing','../../assets/imgs/IMG-20240110-WA0022.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
