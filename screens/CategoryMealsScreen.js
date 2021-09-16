import React, { useState } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesMealsScreen = props => {
    const categoryId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return (
        <View style={styles.screen} >
            <Text>CategoriesMealsScreen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="DETAILS" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
                }} 
            />
            <Button 
                title="BACK" onPress={() => {
                    props.navigation.goBack();
                }}
            />
        </View>
    );
};

CategoriesMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId);

    return{
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;