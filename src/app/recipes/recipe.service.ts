import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService{

    private recipes: Recipe[] = [
        new Recipe(
          'A test recipe', 
          'I am just testing',
          '../../assets/imgs/IMG-20240110-WA0022.jpg',
          [
            new Ingredient('Test 1', 3),
            new Ingredient('Test 2', 30)
          ]),
        new Recipe(
          'A new test recipe', 
          'I am just testing',
          '../../assets/imgs/IMG-20240110-WA0022.jpg',
          [
            new Ingredient('Test 3', 1),
            new Ingredient('Test 4', 5)
          ]),
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice(); // This way we only get a copy of the array
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }

}