import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { useRecipes } from "../../data/DataAPI";

const RecipesListScreen = ({ navigation }) => {
  const item = navigation.getParam("category");
  const categoryName = item.strCategory;
  const { data, isLoading, isError} = useRecipes(
    "useRecipesByCategory",
    item.strCategory
  );

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item, categoryName });
  };

  const renderRecipes = ({ item }) => (
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
  );

  return (
    <View>
      {!isLoading && !isError && data && (
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={data}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.strMeal}`}
        />
      )}
    </View>
  );
};

RecipesListScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("title"),
  };
};

export default RecipesListScreen;
