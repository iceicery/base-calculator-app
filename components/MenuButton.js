import React, { useContext } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
export default function MenuButton({ base }) {
    const baseData = useContext(baseContext);
    const baseNumber = {
        2: 'Binary',
        8: 'Octal',
        10: 'Decimal',
        16: 'Hexadecimal',
    };
    function onPress() {
        baseData.changeBase(base);
    }
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{baseNumber[`${base}`]}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        width: 250,
        borderColor: colors.light,
        borderRadius: 10,
        borderWidth: 3,
        padding: 10,
        margin: 10,
    },
    text: {
        fontSize: 30,
        color: colors.light,
        textAlign: 'center',
    }

})

