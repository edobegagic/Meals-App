/* here setup navigation configuration */
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import Colors from '../constants/Colors';

//stack navigator (onPress navigating to another page)
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    //initialRouteName:'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
    }
  }
);

// bottom tab navigator
const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealsNavigator,
  Favourites: FavouritesScreen
});

// root navigator
export default createAppContainer(MealsFavTabNavigator);
