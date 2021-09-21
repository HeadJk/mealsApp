import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import FilterSwitch from '../components/FilterSwitch';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = props => {
    const { navigation } = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        dispatch(setFilters(appliedFilters));
        
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan, dispatch])

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen} >
            <Text style={styles.title}>Available Filters</Text>
            <FilterSwitch 
                title="Gluten-free" 
                state={isGlutenFree}
                onChange={setIsGlutenFree}
            />
            <FilterSwitch 
                title="Lactose-free" 
                state={isLactoseFree}
                onChange={setIsLactoseFree}
            />
            <FilterSwitch 
                title="Vegan" 
                state={isVegan}
                onChange={setIsVegan}
            />
            <FilterSwitch 
                title="Vegetarian" 
                state={isVegetarian}
                onChange={setIsVegetarian}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item 
                    title="Save" 
                    iconName="ios-save" 
                    onPress={navData.navigation.getParam('save')} 
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        margin: 20,
        textAlign: 'center'
    }
});

export default FiltersScreen;