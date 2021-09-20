import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/CustomHeaderButton';

const FavouritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favouriteMeals);
    
    return (
        <MealList 
            listData={favMeals} 
            navigation={props.navigation}
        />
    );
};

FavouritesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Favourites',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Menu" 
                    iconName="ios-menu" 
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }} 
                />
            </HeaderButtons>
        )
    }
}

export default FavouritesScreen;