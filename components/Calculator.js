import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, RecyclerViewBackedScrollView } from 'react-native';
import colors from '../config/colors';
import { baseContext } from '../contexts/baseContext';
import Number from './Number';

export default function Calculator() {
    const baseData = useContext(baseContext);

    let numberAry = [];
    for (let i = 0; i < baseData.base; i++) {
        numberAry.push(i);
    }

    let ns = baseData.numberStr;

    function operate(a, b) {
        if (baseData.operator === '+') {
            return a + b;
        }
        if (baseData.operator === '-') {
            return a - b;
        }
        if (baseData.operate === '*') {
            return a * b;
        }
        if (baseData.operate === '/') {
            return a / b;
        }
    }

    function add() {
        let n = parseInt(ns, baseData.base);
        if (baseData.operator === '') {
            baseData.changeResult(n);
        } else {
            console.log(baseData.result);
            console.log(n);
            console.log(baseData.operator);
            let res = operate(baseData.result, n)
            baseData.changeResult(res);
        }
        baseData.changeNumberStr('');
        baseData.changeOperator('+');
        baseData.changeEquStr(baseData.equStr + '+');
        baseData.disableButton(true);
    }
    /* have problems of operator. first sould get the number and then operate with the following number
    function subtract() {
        let n = parseInt(ns, baseData.base);
        baseData.changeResult(baseData.result - n);
        baseData.changeNumberStr('');
        baseData.changeEquStr(baseData.equStr + '-');
        baseData.disableButton(true);
    }
    function multiply() {
        let n = parseInt(ns, baseData.base);
        baseData.changeResult(baseData.result * n);
        console.log(baseData.result);
        baseData.changeNumberStr('');
        baseData.changeEquStr(baseData.equStr + '*');
        baseData.disableButton(true);
    }
    function divid() {
        let n = parseInt(ns, baseData.base);
        baseData.changeResult(baseData.result / n);
        baseData.changeNumberStr('');
        baseData.changeEquStr(baseData.equStr + '/');
        baseData.disableButton(true);
    }
    */
    function getResult() {
        let n = parseInt(ns, baseData.base);
        baseData.changeResult(baseData.result + n);
        baseData.changeNumberStr('');
        baseData.changeEquStr(baseData.equStr + '=');
        baseData.disableButton(true);
        baseData.disableNumberButton(true);
    }
    function clear() {
        baseData.changeEquStr('');
        baseData.changeNumberStr('');
        baseData.changeResult(0);
        baseData.disableButton(true);
        baseData.disableNumberButton(false);
    }
    return (
        <SafeAreaView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.title}>Base: {baseData.base}</Text>
                <View style={styles.result}>
                    <Text style={styles.title}>{baseData.equStr}</Text>
                    <Text style={styles.title}>{baseData.result}</Text>
                </View>
                <View style={styles.numberContainer}>
                    {numberAry.map((item, i) => {
                        return <Number number={item} key={i} />
                    })}
                </View>
                <View style={styles.operatorContainer}>
                    <TouchableOpacity style={styles.operator} onPress={add} disabled={baseData.disable}><Text style={styles.title}>+</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={add} disabled={baseData.disable}><Text style={styles.title}>-</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={add} disabled={baseData.disable}><Text style={styles.title}>x</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.operator} onPress={add} disabled={baseData.disable}><Text style={styles.title}>/</Text></TouchableOpacity>
                </View>
                <View style={styles.eqlClrContainer}>
                    <TouchableOpacity style={styles.eqlClr} onPress={getResult} disabled={baseData.disable}><Text style={styles.title}>=</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.eqlClr} onPress={clear}><Text style={styles.title}>Clr</Text></TouchableOpacity>
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