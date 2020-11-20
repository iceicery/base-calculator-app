import React, { useContext } from 'react';
import { SafeAreaView, View, StyleSheet, Text, TextInput } from 'react-native';
import colors from '../config/colors';
import MenuButton from './MenuButton';
import { baseContext } from '../contexts/baseContext';

export default function Menu() {
    const baseData = useContext(baseContext);
    const bases = ['Binary', 'Octal', 'Decimal', 'Hexadecimal'];
    const baseNumber = {
        'Binary': 1,
        'Octal': 8,
        'Decimal': 10,
        'Hexadecimal': 16,
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
                    baseData.changeBase(text.replace(/[^A-Za-z]/g, ''));
                }}
                defaultValue={baseData.base}
            />
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
        height: '40',
        color: '#fff',
        borderBottomWidth: 3,
        borderBottomColor: '#fff',
        margin: 30,
        width: 200,
    }
})