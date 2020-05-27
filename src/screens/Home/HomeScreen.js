import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import MenuImage from '../../components/MenuImage/MenuImage';
import { useRandom } from '../../data/DataAPI';

const HomeScreen = ({ navigation }) => {
  const { meal, loading, error } = useRandom();

  const onPressRecipe = (item, categoryName) => {
    navigation.navigate('Recipe', { item, categoryName });
  };

  return (
    <View>
      {!loading && !error && meal && (
        <TouchableOpacity
          onPress={() => onPressRecipe(meal, meal.strCategory)}
          style={{ margin: 100, width: 200, height: 200 }}
        >
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ fontSize: 20 }}>{meal.strMeal}</Text>
            <Image
              style={{
                width: 160,
                height: 160,
                borderRadius: 15,
                resizeMode: 'cover',
                alignSelf: 'center',
              }}
              source={{ uri: meal.strMealThumb }}
            />
            <Text style={styles.category}>{meal.strCategory}</Text>
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.text}>Find Food App</Text>
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  title: 'Home',
  headerLeft: () => (
    <MenuImage
      onPress={() => {
        navigation.openDrawer();
      }}
    />
  ),
});

export default HomeScreen;
