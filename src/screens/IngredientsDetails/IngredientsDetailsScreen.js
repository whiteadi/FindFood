import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientImage } from "../../constants";

const IngredientsDetailsScreen = ({ navigation }) => {
  const ingredientsArray = navigation.getParam("ingredients");

  const onPressIngredient = (item) => {
    navigation.navigate("Ingredient", { item });
  };

  const renderIngredient = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressIngredient(item)}
    >
      <View style={styles.container}>
        <Image
          style={styles.photo}
          source={{ uri: getIngredientImage(item[0]) }}
        />
        <Text style={styles.title}>{item[0]}</Text>
        <Text style={{ color: "grey" }}>{item[1]}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={ingredientsArray}
        renderItem={renderIngredient}
        keyExtractor={(item) => `${item.recipeId}`}
      />
    </View>
  );
};

IngredientsDetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: navigation.getParam("title"),
    headerTitleStyle: {
      fontSize: 16,
    },
  };
};

export default IngredientsDetailsScreen;
