import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CusstomHeaderButton from '../components/CustomHeaderButton';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <View style={styles.screen} >
            <View>
                <Text>{selectedMeal.title}</Text>
            </View>
            <Button title="BACK" onPress={() => {
                    props.navigation.popToTop()
                }} 
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CusstomHeaderButton}>
                <Item 
                    title="Favourite" 
                    iconName="ios-star" 
                    onPress={() => console.log('Mark as favourite')
                } />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default MealDetailScreen;