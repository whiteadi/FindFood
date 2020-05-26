import React from "react";
import {
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import { useRecipesByIngredient } from "../../data/DataAPI";
import { getIngredientImage } from "../../constants";

const IngredientScreen = ({ navigation }) => {
  const ingredient = navigation.getParam("item");
  const ingredientUrl = getIngredientImage(ingredient[0]);
  const ingredientName = ingredient[0];
  const { recipes, loading, error } = useRecipesByIngredient(ingredientName);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <TouchableHighlight
        underlayColor="rgba(73,182,77,0.9)"
        onPress={() => onPressRecipe(item)}
      >
        <View style={styles.container}>
          <Image style={styles.photo} source={{ uri: item.strMealThumb }} />
          <Text style={styles.title}>{item.strMeal}</Text>
          <Text style={styles.category}>{item.strCategory}</Text>
        </View>
      </TouchableHighlight>
    </TouchableHighlight>
  );

  return (
    <ScrollView style={styles.mainContainer}>
      <View
        style={{
          borderBottomWidth: 0.4,
          marginBottom: 10,
          borderBottomColor: "grey",
        }}
      >
        <Image
          style={styles.photoIngredient}
          source={{ uri: "" + ingredientUrl }}
        />
      </View>
      <Text style={styles.ingredientInfo}>Recipes with {ingredientName}:</Text>
      {!loading && !error && recipes && (
        <View>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={(item) => `${item.recipeId}`}
          />
        </View>
      )}
    </ScrollView>
  );
};

IngredientScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("item")[0],
  };
};

export default IngredientScreen;
