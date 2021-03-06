import React from 'react';
import { Platform, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from 'react-navigation-drawer';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold'
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans'
        },
        headerTintColor: 'white'
    }
}

const MealsNavigator = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeals: CategoryMealsScreen,
        MealDetail: MealDetailScreen
    },  defaultStackNavOptions
);

const MealsFavouritesNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetail: MealDetailScreen
    }, defaultStackNavOptions
)

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-restaurant"
                    size={25} 
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' 
            ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> 
            : 'Meals'
        }

    },
    Favourites: {
        screen: MealsFavouritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-star"
                    size={25} 
                    color={tabInfo.tintColor}
                />
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' 
                ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favourites</Text> 
                : 'Favourites'
        }
    }
}

const MealsBottomTabNavigator = (Platform.OS === 'android')
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true
    }) 
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans-bold'
            },
            activeTintColor: Colors.accentColor
        }
    })

// Just so we can render a header
const FiltersNavigator = createStackNavigator(
    {
        Filters: FiltersScreen
    }, defaultStackNavOptions
)

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
        screen: MealsBottomTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
},
{
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
}
);

export default createAppContainer(MainNavigator);