import { Ingredient, Meal } from "@/mealstype";

export function extractIngredients(meal: any): Ingredient[] {
    const ingredients: Ingredient[] = [];
    
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      
      if (ingredient && measure) {
        ingredients.push({ ingredient, measure });
      }
    }
    
    return ingredients;
  }
  