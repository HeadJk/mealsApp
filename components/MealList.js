import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from './MealItem';

import { useSelector } from 'react-redux';

const MealList = props => {
    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);

    const renderMealItem = (itemData) => {
        const isFavourite = favouriteMeals.some(meal => meal.id === itemData.item.id);
        
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity.toUpperCase()}
                affordability={itemData.item.affordability.toUpperCase()}
                image={itemData.item.imageUrl}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: { 
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavourite
                        }
                    })
                }}
            />
        )
    }
    return (
        <View style={styles.list} >
            <FlatList 
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={styles.mealcontainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mealcontainer: {
        width: '100%',
        padding: 10
    }
});

export default MealList;