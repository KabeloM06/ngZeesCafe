import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService{

  recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'I am just testing','../../assets/imgs/IMG-20240110-WA0022.jpg'),
        new Recipe('A new test recipe', 'I am just testing','../../assets/imgs/IMG-20240110-WA0022.jpg'),
      ];

      getRecipes(){
        return this.recipes.slice(); // This way we only get a copy of the array
      }

}