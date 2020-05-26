import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import MenuImage from "../../components/MenuImage/MenuImage";
import { useRandom } from "../../data/DataAPI";

const HomeScreen = ({ navigation }) => {
  const { meal, loading, error } = useRandom();

  const onPressRecipe = (item, categoryName) => {
    navigation.navigate("Recipe", { item, categoryName });
  };

  return (
    <View>
      {!loading && !error && meal && (
        <TouchableHighlight
          underlayColor="rgba(73,182,77,0.9)"
          onPress={() => onPressRecipe(meal, meal.strCategory)}
          style={{margin: 100}}
        >
          <View style={styles.container}>
            <Text style={{alignSelf: 'flex-start'}}>{meal.strMeal}</Text>
            <Image style={styles.photo} source={{ uri: meal.strMealThumb }} />            
            <Text style={styles.category}>{meal.strCategory}</Text>
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: "Home",
  headerLeft: () => (
    <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
});

export default HomeScreen;
