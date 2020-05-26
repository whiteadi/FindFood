import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";
import { useCategory, useRecipe } from "../../data/DataAPI";

const RecipeScreen = ({ navigation }) => {
  const item = navigation.getParam("item");
  const categoryName = navigation.getParam("categoryName");
  const { category, loading, error } = useCategory(categoryName);
  const { recipe, loadingRecipe, errorRecipe } = useRecipe(item.idMeal);
  const title = item.strMeal;

  const getIngredients = (meal) => {
    const ingredientsNames = [];
    const ingredientsMeasures = [];
    const ingredients = [];
    for (let [key, value] of Object.entries(meal)) {
      if (key.match(/ingredient/i) && value.length !== 0) {
        ingredientsNames.push(value);
      }
      if (key.match(/measure/i) && value.length !== 0) {
        ingredientsMeasures.push(value);
      }
      for (let i = 0; i < ingredientsNames.length; i++) {
        ingredients[i] = [];
        ingredients[i].push(ingredientsNames[i]);
        ingredients[i].push(ingredientsMeasures[i]);
      }
    }

    return ingredients;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.carouselContainer}>
        <TouchableHighlight>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
          </View>
        </TouchableHighlight>
      </View>
      {!loading &&
        !error &&
        category &&
        Object.keys(category).length !== 0 &&
        !loadingRecipe &&
        !errorRecipe &&
        recipe &&
        Object.keys(recipe).length !== 0 && (
          <View style={styles.infoRecipeContainer}>
            <Text style={styles.infoRecipeName}>{item.strMeal}</Text>
            <View style={styles.infoContainer}>
              <TouchableHighlight
                onPress={() =>
                  navigation.navigate("RecipesList", { category, title })
                }
              >
                <Text style={styles.category}>
                  {category.strCategory.toUpperCase()}
                </Text>
              </TouchableHighlight>
            </View>

            <View style={styles.infoContainer}>
              <ViewIngredientsButton
                onPress={() => {
                  let ingredients = getIngredients(recipe);
                  let title = "Ingredients for " + recipe.strMeal;
                  navigation.navigate("IngredientsDetails", {
                    ingredients,
                    title,
                  });
                }}
              />
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.infoDescriptionRecipe}>
                {recipe.strInstructions}
              </Text>
            </View>
          </View>
        )}
    </ScrollView>
  );
};

RecipeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTransparent: "true",
    headerLeft: () => (
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
    ),
  };
};

export default RecipeScreen;
