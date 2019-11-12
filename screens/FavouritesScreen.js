import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const FavouritesScreen = props => {
  const favMeals = useSelector(state => state.meals.favouriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Favourite Meals Added</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavouritesScreen;
