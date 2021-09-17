import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const CusstomHeaderButton = props => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color={'white'} />
};

const styles = StyleSheet.create({
    
});

export default CusstomHeaderButton;