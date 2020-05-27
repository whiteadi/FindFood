import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  text: {
    fontSize: 33,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
    alignSelf: 'stretch',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    resizeMode: 'contain',
  },
});

export default styles;
