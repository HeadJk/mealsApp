import React from 'react';
import { Platform } from 'react-native' 

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavouritesScreen from '../screens/FavouritesScreen'
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultStackNavOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
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

const FavouritesNavigator = createStackNavigator(
    {
        Favourites: FavouritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.primaryColor
            },
            headerTintColor: 'white'
        }
    }
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
            tabBarColor: Colors.primaryColor
        }

    },
    Favourites: {
        screen: FavouritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons 
                    name="ios-star"
                    size={25} 
                    color={tabInfo.tintColor}
            />
            },
            tabBarColor: Colors.accentColor
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
            activeTintColor: Colors.accentColor
        }
    })

export default createAppContainer(MealsBottomTabNavigator);