import { ingredients } from "./ingredients";

export const API_URL = "https://www.themealdb.com/api/json/v1";

export const API_KEY = 1;

export const getIngredientImage = (name) => {
  const foundIngredient = ingredients.find(
    (ingredient) =>
      name.toLowerCase().indexOf(ingredient.name.toLowerCase()) !== -1 ||
      ingredient.name.toLowerCase().indexOf(name.toLowerCase()) !== -1
  );

  return foundIngredient && Object.keys(foundIngredient).length > 0
    ? foundIngredient.image
    : "https://static8.depositphotos.com/1480295/977/i/450/depositphotos_9771526-stock-photo-thai-food-ingredients.jpg";
};
