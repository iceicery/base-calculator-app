import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors.js';
export default function Welcome() {
    const navigation = useNavigation();
    function toMenu() {
        navigation.navigate('Menu');
    }
    return (
        <ImageBackground source={require('../images/welcom_background.jpg')} style={styles.container}>
            <View style={styles.logoBox}>
                <Image source={require('../images/welcome.png')} style={styles.logo} />
                <Text style={styles.text}>Choose the base to calculate</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toMenu}>
                <Text style={styles.text}>Let's go!</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    container: {
        resizeMode: "contain",
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },

    logoBox: {
        alignItems: 'center',
        width: 200,
        marginBottom: 50,
        backgroundColor: '#666666',
        borderWidth: 1,
        padding: 20,
        borderRadius: 10,
        borderColor: colors.light,
    },
    logo: {
        alignItems: 'center',
        marginBottom: 20,
        width: 200,
        height: 200,
        borderRadius: 10,
        resizeMode: 'center',
    },
    text: {
        alignItems: 'center',
        fontSize: 20,
        color: colors.light,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.light,
        width: 200,
        height: 50,
        borderRadius: 10,
        borderColor: colors.light,
        borderWidth: 1.5,
        backgroundColor: colors.primary,
    }

})