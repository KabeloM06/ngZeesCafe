import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe!: Recipe; //the non-null assertion operator ! tells TypeScript that the property will be initialized at runtime

  constructor() { }

  ngOnInit(): void {
  }

}
