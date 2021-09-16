import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoriesMealsScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>CategoriesMealsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesMealsScreen;