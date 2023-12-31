import { Component, Input } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
 @Input() recipe:Recipes;

 constructor(private recipeService:RecipeService){}

 onAddToShoppingList(){
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
 }
}
