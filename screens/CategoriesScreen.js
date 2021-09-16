import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen} >
            <Text>CategoriesScreen</Text>
            <Button title="MEALS" onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' })
            }} />
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

export default CategoriesScreen;