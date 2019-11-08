import React from 'react';
import { Platform } from 'react-native';
import MealList from '../components/MealList';

import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
const FavouritesScreen = props => {
  //filter trough meal, but only show if meal.id is m1 or m2
  const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  headerTitle: 'Your Favourites'
};

const hamburgerIcon = Platform.OS === 'android' ? 'md-menu' : 'ios-menu';

FavouritesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Favourites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName={hamburgerIcon}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
