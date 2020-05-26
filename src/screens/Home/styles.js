import { StyleSheet } from "react-native";
import { RecipeCard } from "../../AppStyles";

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  text: {
    alignSelf: 'center',
    fontSize: 37,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
});

export default styles;
