import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../constants";

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
