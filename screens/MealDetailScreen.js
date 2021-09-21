import React, { useEffect, useCallback } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import ListItem from '../components/ListItem';
import { toggleFavourite } from '../store/actions/meals';

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);

    const favouriteMeals = useSelector(state => state.meals.favouriteMeals);
    const isFavourite = (favouriteMeals.some(meal => meal.id === mealId));

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() =>
        dispatch(toggleFavourite(mealId)),
        [dispatch, mealId]
    );

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavouriteHandler});
    }, [toggleFavouriteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: isFavourite})
    }, [isFavourite])

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
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavourite = navigationData.navigation.getParam('toggleFav');
    const isFavourite = navigationData.navigation.getParam('isFav');

    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Favourite" 
                    iconName={isFavourite ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavourite} 
                />
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