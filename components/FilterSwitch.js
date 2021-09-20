import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.title}</Text>
            <Switch
                thumbColor={Colors.primaryColor}
                trackColor={{true: Colors.primaryColor, false: '#aaa'}}
                value={props.state} 
                onValueChange={newValue => props.onChange(newValue)} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterSwitch;