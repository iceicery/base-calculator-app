import React, { useContext } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import MenuButton from './MenuButton';
import { baseContext } from '../contexts/baseContext';
import { useNavigation } from '@react-navigation/native';

export default function Menu() {
    const baseData = useContext(baseContext);
    const navigation = useNavigation();
    const bases = ['Binary', 'Octal', 'Decimal', 'Hexadecimal'];
    const baseNumber = {
        'Binary': 1,
        'Octal': 8,
        'Decimal': 10,
        'Hexadecimal': 16,
    };
    function toCalculator() {
        navigation.navigate('Calculator');
    }
    return (
        <SafeAreaView style={styles.container}>
            {bases.map((base, i) => {
                return <MenuButton base={base} key={i} />
            })}
            <TextInput
                style={styles.textinput}
                placeholder="Type the number only base"
                keyboardType="number-pad"
                onChangeText={text => {
                    baseData.changeBase(text);
                }}
                defaultValue={baseData.base}
            />
            <TouchableOpacity onPress={toCalculator} style={styles.button}><Text style={styles.buttonText}>Go To The Calculator</Text></TouchableOpacity>
            <Text style={{ color: '#fff' }}>{baseData.base}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textinput: {
        height: 40,
        color: '#fff',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        margin: 30,
        width: 250,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.light,
        width: 250,
        height: 50,
        borderRadius: 10,
        borderColor: colors.light,
        borderWidth: 1.5,
        backgroundColor: colors.primary,
    },
    buttonText: {
        color: colors.light,
    }

})