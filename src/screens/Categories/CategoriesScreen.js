import React from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { useCategories } from "../../data/DataAPI";

const CategoriesScreen = ({ navigation }) => {
  const { categories, loading, error } = useCategories();

  const onPressCategory = (item) => {
    const title = item.strCategory;
    const category = item;
    navigation.navigate("RecipesList", { category, title });
  };

  const renderCategory = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressCategory(item)}
    >
      <View style={styles.categoriesItemContainer}>
        <Image
          style={styles.categoriesPhoto}
          source={{ uri: item.strCategoryThumb }}
        />
        <Text style={styles.categoriesName}>{item.strCategory}</Text>
        {false && (
          <Text style={styles.categoriesInfo}>
            {item.strCategoryDescription}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      {!loading && !error && categories && (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => `${item.id}`}
        />
      )}
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  title: "Categories",
};

export default CategoriesScreen;
