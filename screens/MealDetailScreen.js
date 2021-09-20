import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    ScrollView,
    Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import CusstomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity}</DefaultText>
                <DefaultText>{selectedMeal.affordability}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            { selectedMeal.ingrediants.map(ingrediant => 
                <ListItem key={ingrediant} >{ingrediant}</ListItem>
            )}
            <Text style={styles.title}>Steps</Text>
            { selectedMeal.steps.map(step => 
                <ListItem key={step} >{step}</ListItem>
            )}
        </ScrollView>
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
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
        borderColor: '#ccc',
        borderWidth: 1,
        backgroundColor: 'white'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20
    }
});

export default MealDetailScreen;