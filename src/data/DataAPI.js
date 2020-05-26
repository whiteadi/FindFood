import { Text } from "react-native";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { API_URL, API_KEY } from "../constants";
import { ingredients } from "../constants";

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/categories.php`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { categories, isLoading, isError };
};

export const useRecipes = (strCategory) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/filter.php?c=${strCategory}&test=1`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [strCategory]);

  return { recipes, isLoading, isError };
};

export const useCategory = (strCategory) => {
  const [category, setCategory] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/categories.php`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        const category = data.categories.find(
          (cat) => cat.strCategory === strCategory
        );
        setCategory(category);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [strCategory]);

  return { category, isLoading, isError };
};

export const useRecipe = (mealId) => {
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/lookup.php?i=${mealId}&test=1`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        const meal = data.meals[0];
        setRecipe(meal);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [mealId]);

  return { recipe, isLoading, isError };
};

export const useRandom = () => {
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/random.php`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        const ameal = data.meals[0];
        setMeal(ameal);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { meal, isLoading, isError };
};

export const useRecipesByIngredient = (ingredientName) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/filter.php?i=${ingredientName}&test=1`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [ingredientName]);

  return { recipes, isLoading, isError };
};

export const useRecipesByName = (name) => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const urlString = `${API_URL}/${API_KEY}/search.php?s=${name}&test=1`;
        const url = new URL(urlString);
        let response = await fetch(url, {
          method: "GET",
        });
        let data = await response.json();
        setRecipes(data.meals);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [name]);

  return { recipes, isLoading, isError };
};

export function getCategoryById(categoryId) {
  let category;
  categories.map((data) => {
    if (data.id == categoryId) {
      category = data;
    }
  });
  return category;
}

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map((data) => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getCategoryName(categoryId) {
  let name;
  categories.map((data) => {
    if (data.id == categoryId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(categoryId) {
  const recipesArray = [];
  recipes.map((data) => {
    if (data.categoryId == categoryId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  recipes.map((data) => {
    data.ingredients.map((index) => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(categoryId) {
  let count = 0;
  recipes.map((data) => {
    if (data.categoryId == categoryId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map((index) => {
    ingredients.map((data) => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByCategoryName(categoryName) {
  const nameUpper = categoryName.toUpperCase();
  const recipesArray = [];
  categories.map((data) => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map((item) => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map((data) => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
