import React, { useState, useEffect, useRef } from "react";
import { FlatList, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { SearchBar } from "react-native-elements";
import MenuImage from "../../components/MenuImage/MenuImage";
import { useRecipes } from "../../data/DataAPI";

const SearchScreen = ({ navigation }) => {
  const [value, _setValue] = useState("");
  const [data, _setData] = useState([]);
  const recipesByName = useRecipes("useRecipesByName", value);
  const { recipesByCategory } = useRecipes("useRecipesByCategory", value);
  const { recipesByIngredient } = useRecipes("useRecipesByIngredient", value);

  const valueRef = useRef(value);
  const setValue = (data) => {
    valueRef.current = data;
    _setValue(data);
  };

  const dataRef = useRef(data);
  const setData = (data) => {
    dataRef.current = data;
    _setData(data);
  };

  useEffect(() => {
    navigation.setParams({
      handleSearch: handleSearch,
      data: valueRef.current,
    });
  }, [handleSearch, valueRef.current]);

  const handleSearch = (text) => {
    if (
      text &&
      text.length > 2 &&
      ((!recipesByName.isLoading &&
        !recipesByName.isError &&
        recipesByName &&
        recipesByName.data) ||
        (!recipesByCategory.isLoading &&
          !recipesByCategory.isError &&
          recipesByCategory &&
          recipesByCategory.data) ||
        (!recipesByIngredient.isLoading &&
          !recipesByIngredient.isError &&
          recipesByIngredient &&
          recipesByIngredient.data))
    ) {
      const r1 = (recipesByName && recipesByName.data) || [];
      const r2 = (recipesByCategory && recipesByCategory.data) || [];
      const r3 = (recipesByIngredient && recipesByIngredient.data) || [];
      const aux = r1.concat(r2).concat(r3);
      const recipeArray = [...new Set(aux)];
      const dataToSet = text === "" ? [] : recipeArray;
      setData(dataToSet);
    }
    setValue(text);
  };

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item, categoryName: item.strCategory });
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
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={dataRef.current}
        renderItem={renderRecipes}
        keyExtractor={(item) => `${item.idMeal}`}
      />
    </View>
  );
};

SearchScreen.navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation.state;
  return {
    headerRight: () => (
      <MenuImage
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    ),
    headerTitle: () => (
      <SearchBar
        containerStyle={{
          backgroundColor: "transparent",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
          flex: 1,
        }}
        inputContainerStyle={{
          backgroundColor: "#EDEDED",
        }}
        inputStyle={{
          backgroundColor: "#EDEDED",
          borderRadius: 10,
          color: "black",
        }}
        searchIcond
        clearIcon
        round
        onChangeText={(text) => params.handleSearch(text)}
        placeholder="Search"
        value={params.data}
      />
    ),
  };
};

export default SearchScreen;
