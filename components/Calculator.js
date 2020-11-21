import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
export default function Calculator() {
    const baseData = useContext(baseContext);
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Base: {baseData.base}</Text>
                <View style={styles.result}>
                    <Text style={styles.title}>Equation</Text>
                    <Text style={styles.title}>Result</Text>
                </View>
                <View style={styles.numberContainer}>

                </View>
                <View style={styles.operatorContainer}>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>x</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.eqlClrContainer}>
                    <TouchableOpacity style={styles.eqlClr}><Text style={styles.title}>Eql</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.eqlClr}><Text style={styles.title}>Clr</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: colors.dark,
        color: colors.light,
        flex: 1,
    },
    container: {
        flex: 1,
        margin: 20,
        padding: 10,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
    },
    title: {
        fontSize: 20,
        color: colors.light,
    },
    result: {
        marginTop: 20,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        width: '100%',
        height: 100,
    },
    numberContainer: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    operatorContainer: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    operator: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        padding: 5,
        margin: 5,
        alignItems: 'center',
        height: 40,
    },
    eqlClrContainer: {
        width: '100%',
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    eqlClr: {
        flex: 1,
        borderWidth: 3,
        borderRadius: 10,
        borderColor: colors.light,
        alignItems: 'center',
        height: 40,
    },
})