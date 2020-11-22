import React, { useContext } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
export default function Number({ number }) {
    const baseData = useContext(baseContext);
    function onPress() {
        baseData.changeNumber(number);
        baseData.changeNumberStr(baseData.numberStr + number);
        baseData.changeEquStr(baseData.equStr + number);
    }
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.text}>{number}</Text></TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        padding: 5,
        margin: 5,
        alignItems: 'center',
        width: 50,
        height: 50,
    },
    text: {
        fontSize: 20,
        color: colors.light,
    }
})