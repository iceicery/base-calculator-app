import React, { useContext } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, RecyclerViewBackedScrollView } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
import Number from './Number';
let numberString = "";
let result = 0;
let eqlString = "";
let number = 0;
export default function Calculator() {
    const baseData = useContext(baseContext);
    let numberAry = [];
    for (let i = 0; i < baseData.base; i++) {
        numberAry.push(i);
    }
    numberString = numberString + baseData.number;
    eqlString = eqlString + baseData.number;

    function add() {
        number += parseInt(numberString, baseData.base);
        console.log(unm)
        result = result + number;
        numberString = '';
        eqlString = eqlString + '+';
        console.log(eqlString);
    }
    function getResult() {
        result = result + number;
        numberString = '';
        eqlString = eqlString + '=';
        console.log(eqlString);
    }
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Base: {baseData.base}</Text>
                <View style={styles.result}>
                    <Text style={styles.title}>{eqlString}</Text>
                    <Text style={styles.title}>{result}</Text>
                </View>
                <View style={styles.numberContainer}>
                    {numberAry.map((item, i) => {
                        return <Number number={item} key={i} />
                    })}
                </View>
                <View style={styles.operatorContainer}>
                    <TouchableOpacity style={styles.operator} onPress={add}><Text style={styles.title}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>x</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator}><Text style={styles.title}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.eqlClrContainer}>
                    <TouchableOpacity style={styles.eqlClr} onPress={getResult}><Text style={styles.title}>Eql</Text></TouchableOpacity>
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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
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